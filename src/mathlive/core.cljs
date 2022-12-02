(ns mathlive.core
  "Reagent component wrapping the `math-field` web component from
  the [Mathlive](https://cortexjs.io/docs/mathlive) project, along with
  associated utilities."
  (:require [goog.object :as obj]
            [reagent.core :as r]
            ["@cortex-js/compute-engine" :refer [ComputeEngine]]
            ["@mentatcollective/mathlive/dist/mathlive.js" #_#_ :as ml]
            ["react" :as react]))

;; ## Utilities

(defn- update-options!
  "Given a `MathfieldElement` `mf` and either a

  - map of keyword-or-string => option
  - function from current options => new options

  Calls [`mf.setOptions`](https://cortexjs.io/docs/mathlive/#(Mathfield%3Ainterface).setOptions)
  with

  - `opts-or-f` (if a map) or
  - the result of `(opts-or-f (.getOptions mf))` if a function."
  [mf opts-or-f]
  (let [updated (cond
                  (fn? opts-or-f)
                  (-> (.getOptions mf)
                      (js->clj :keywordize-keys true)
                      ;; TODO once this is resolved:
                      ;; https://github.com/arnog/mathlive/issues/1738, we can
                      ;; erase this.
                      (dissoc :computeEngine)
                      (opts-or-f))
                  (map? opts-or-f) opts-or-f
                  :else (throw
                         (js/Error.
                          (str "Invalid option for :options."
                               " must be fn or map."))))]
    (.setOptions mf (clj->js updated))
    nil))

(def ^{:doc "Currently loaded version of
the [mathlive](https://www.npmjs.com/package/mathlive) npm package. "}
  mathlive-version
  "0.85.1"
  ;; TODO enable this again once we get back to mainline mathlive vs our fork.
  #_(.-mathlive ml/version))



(def ^{:doc "Location of the `sounds` directory in the CDN-served package
            of [mathlive](https://www.npmjs.com/package/mathlive)."}
  cdn-sounds
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/sounds/"))

(def ^{:doc "Location of the `fonts` directory in the CDN-served package
            of [mathlive](https://www.npmjs.com/package/mathlive)."}
  cdn-fonts
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/fonts/"))

(defn ->math-json
  "Given
  a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
  `mf`, returns a [MathJSON](https://cortexjs.io/math-json/)
  representation (parsed into Clojure) of the currently displayed expression."
  [mf]
  (js->clj
   (.-json ^js (.-expression mf))))

(defn ->placeholders
  "Given
  a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
  `mf`, returns a map of (string) placeholder name => current value of the
  placeholder."
  ([mf] (->placeholders mf {}))
  ([mf {:keys [type]
        :or {type "latex"}}]
   (let [m ^js (.-placeholders mf)]
     (reduce (fn [acc k]
               (let [field (obj/get m k)
                     v (if (= type "math-json")
                         (->math-json field)
                         (.getValue field type))]
                 (assoc acc (keyword k) v)))
             {}
             (js-keys m)))))

(def ^:no-doc engine
  (ComputeEngine.))

(defn math-json->tex
  "Given a Clojure data structure `expr` representing
  a [MathJSON](https://cortexjs.io/math-json/) expression, returns a string of
  LaTeX representing `expr`."
  [expr]
  (.-latex
   (.box engine (clj->js expr))))

(defn set-math-json!
  "Given

  - a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass)) `mf` and
  - a Clojure data structure `expr` representing a [MathJSON](https://cortexjs.io/math-json/) expression,

  sets the value of `mf` to the TeX version of `expr`.

  Equivalent to `(.setValue mf (math-json->tex expr))`."
  [mf expr]
  (set! ^js (.-expression mf)
        (clj->js expr)))

;; ## Reagent Component
;;
;; This section contains a Reagent component that wraps the `math-field` web
;; component. You can of course use a `math-field` directly:
;;
;; ```
;; [:math-field {:on-input (fn [x] <do-something>)}
;;  "1+x"]
;; ```
;;
;; This version makes a few changes that I will document soon!
;;
;; TODO document changes.

;; - Change to :default-value and :value, log a warning under "error" if children are set.
;; - docs for all of the field things from html, https://cortexjs.io/docs/mathlive/?q=fints-dire, options


(def ^{:doc "Docstring for the Mathfield."}
  Mathfield
  (r/adapt-react-class
   (react/forwardRef
    (fn [props ref]
      (let [[mf set-mf] (react/useState nil)
            {:strs [children value options defaultValue onChange
                    onPlaceholderChange
                    soundsDirectory fontsDirectory] :as props}
            (js->clj props)]

        ;; These effects run once on initial load (note the empty dependency array).
        (react/useEffect
         (fn mount []
           (when children
             (js/console.error "don't set children!"))

           (when (and defaultValue value)
             (js/console.error "don't both value and defaultValue!")))
         #js [])

        ;; NOTE this tricky thing, don't use "options" since that changes every
        ;; time! This effect notes if any properties change; this matters if you
        ;; allow the user to provide a map.
        (let [opt-ref (react/useRef options)]
          (when (not= (.-current opt-ref) options)
            (set! (.-current opt-ref) options))

          (react/useEffect
           (fn mount []
             (when (and mf options)
               (update-options! mf options)))
           #js [(.-current opt-ref) mf]))

        (react/useEffect
         (fn []
           (when (and mf value (not= (.getValue mf) value))
             (.setValue mf value)))
         #js [mf value])

        (react/useEffect
         (fn mount []
           (when (and mf onPlaceholderChange)
             (.addEventListener mf "placeholder-change" onPlaceholderChange))
           (fn unmount []
             (when (and mf onPlaceholderChange)
               (.removeEventListener mf "placeholder-change" onPlaceholderChange))))
         #js [mf onPlaceholderChange])

        ;; For whatever reason, when the component is controlled, the component
        ;; can't move its own cursor position well. So this handles the odd case
        ;; at the very beginning...
        (react/useEffect
         (fn []
           (when (and mf
                      (.endsWith (.getValue mf) "?")
                      (= 2 (.-position mf)))
             (.executeCommand ^js mf "moveToPreviousWord"))))

        ;; this passes `mf`back out as reference when it changes.
        (react/useImperativeHandle ref (fn [] mf))

        (r/as-element
         [:math-field
          (assoc (dissoc props "onPlaceholderChange" "onChange"
                         "defaultValue" "value" "options")
                 "children" (or value defaultValue "")
                 "ref" (fn [field]
                         (when field
                           (.setOptions field #js {:computeEngine (ComputeEngine.)}))
                         (set-mf field))
                 "onInput" onChange
                 "sounds-directory" (or soundsDirectory cdn-sounds)
                 "fonts-directory" (or fontsDirectory cdn-fonts))]))))))
