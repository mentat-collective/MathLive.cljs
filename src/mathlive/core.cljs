(ns mathlive.core
  "Reagent component wrapping the `math-field` web component from
  the [Mathlive](https://cortexjs.io/docs/mathlive) project, along with
  associated utilities."
  (:require [goog.object :as obj]
            [reagent.core :as r]
            ["mathlive" :as ml]
            ["react" :as react]))

;; ## Utilities

(defn- update-options!
  "Given a `MathfieldElement` `mf` and either a

  - map of keyword-or-string => option
  - function from Clojurized current options => new options

  Calls [`mf.setOptions`](https://cortexjs.io/docs/mathlive/#(Mathfield%3Ainterface).setOptions)
  with

  - `opts-or-f` (if a map) or
  - the result of `(opts-or-f (.getOptions mf))` if a function."
  [mf opts-or-f]
  (let [updated (cond
                  (fn? opts-or-f)
                  (-> (.getOptions mf)
                      (js->clj :keywordize-keys true)
                      (opts-or-f))
                  (map? opts-or-f) opts-or-f
                  :else (throw
                         (js/Error.
                          (str "Invalid option for :options."
                               " must be fn or map."))))]
    (.setOptions mf (clj->js updated))
    nil))

(def ^{:doc "Currently loaded version of
the [mathlive](https://www.npmjs.com/package/mathlive) npm package."}
  mathlive-version
  (.-mathlive ml/version))

(def ^{:doc "Location of the `sounds` directory in the CDN-served package
  of [mathlive](https://www.npmjs.com/package/mathlive)."} cdn-sounds
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/sounds/"))

(def ^{:doc "Location of the `fonts` directory in the CDN-served package
  of [mathlive](https://www.npmjs.com/package/mathlive)."} cdn-fonts
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/fonts/"))

(defn ->math-json
  "Given
  a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
  `mf`, returns a [MathJSON](https://cortexjs.io/math-json/)
  representation (parsed into Clojure) of the currently displayed expression.

  NOTE that for this or anything MathJSON related to work you'll need
  to `(require '[@cortex-js/compute-engine])`. If this package isn't loaded,
  returns `nil`."
  [mf]
  (when-let [e (.-expression ^js mf)]
    (js->clj
     (.-json e))))

(defn ->placeholders
  "Given
  a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
  `mf`, returns a map of (string) placeholder name => current value of the
  placeholder.

  NOTE that for `{:type \"math-json\"}` to work you'll need to `(require
  '[@cortex-js/compute-engine])`. If this option is specified and the package
  isn't loaded, returns `nil` for each placeholder value."
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

(defn math-json->tex
  "Given a Clojure data structure `expr` representing
  a [MathJSON](https://cortexjs.io/math-json/) expression, returns a string of
  LaTeX representing `expr`.

  NOTE that for this or anything MathJSON related to work you'll need
  to `(require '[@cortex-js/compute-engine])`. If this package isn't loaded,
  returns `nil`."
  [expr]
  (ml/serializeMathJsonToLatex
   (clj->js expr)))

(defn set-math-json!
  "Given

  - a [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass)) `mf` and
  - a Clojure data structure `expr` representing a [MathJSON](https://cortexjs.io/math-json/) expression,

  sets the value of `mf` to the TeX version of `expr`.

  Equivalent to `(.setValue mf (math-json->tex expr))`.

  NOTE that for this or anything MathJSON related to work you'll need
  to `(require '[@cortex-js/compute-engine])`. If this package isn't loaded,
  this command has no effect."
  [mf expr]
  (when (.-expression ^js mf)
    (set! (.-expression ^js mf)
          (clj->js expr))))

;; ## Reagent Component
;;
;; This section contains a Reagent component that wraps the `math-field` web
;; component. You can of course use a `math-field` directly:
;;
;; ```
;; [:math-field {:on-input (fn [x] <do-something>)}
;;  "1+x"]
;; ```

(def ^{:doc "Reagent component around
  the [MathLive](https://github.com/arnog/mathlive) equation editor.

  NOTE: Following React's convention, `:on-change` binds a listener to to the
 `input` event. See https://reactjs.org/docs/dom-elements.html#onchange"}
  Mathfield
  (r/adapt-react-class
   (react/forwardRef
    (fn [props ref]
      (let [[mf set-mf] (react/useState nil)
            {:strs [children value options defaultValue onChange
                    onPlaceholderChange] :as props}
            (js->clj props)]

        ;; These effects run once on initial load (note the empty dependency
        ;; array). They provide warnings similar to the warnings you see from a
        ;; `:textarea`.
        (react/useEffect
         (fn mount []
           (when children
             (js/console.error
              (str "Warning: use the `:default-value` or `:value` "
                   "props instead of setting children on `Mathfield`.")))

           (when (and defaultValue value)
             (js/console.error
              (str "Warning: don't set both `:value` and `:default-value` props."
                   " `Mathfield`s must be either controlled or uncontrolled"
                   " (specify either the `:value` prop, or the `:default-value` prop, but not both)."
                   " Decide between using a controlled or uncontrolled `Mathfield` and remove one of these props."))))
         #js [])

        ;; NOTE We have to use this trick to prevent effects that depend on
        ;; `options` from re-running on every re-render. This is because JS
        ;; objects use reference equality, not value equality. This trick lets
        ;; us only reset when the previous and next are `not=`, which uses
        ;; Clojure's value equality comparison.
        (let [opt-ref (react/useRef options)]
          (when (not= (.-current opt-ref) options)
            (set! (.-current opt-ref) options))

          (react/useEffect
           ;; Only run when the VALUE of `options` changes, not the reference.
           (fn mount []
             (when (and mf options)
               (update-options! mf options)))
           #js [(.-current opt-ref) mf]))

        ;; This effect updates the value of the `Mathfield` if it's changed from
        ;; somewhere else.
        (react/useEffect
         (fn []
           (when (and mf value (not= (.getValue mf) value))
             (.setValue mf value)))
         #js [mf value])

        ;; React doesn't pick up `:on-placeholder-change` so we intercept it and
        ;; do the right thing here.
        (react/useEffect
         (fn mount []
           (when (and mf onPlaceholderChange)
             (.addEventListener mf "placeholder-change" onPlaceholderChange))
           (fn unmount []
             (when (and mf onPlaceholderChange)
               (.removeEventListener mf "placeholder-change" onPlaceholderChange))))
         #js [mf onPlaceholderChange])

        ;; NOTE: For whatever reason, when the component is controlled, the
        ;; component can't move its own cursor position well. So this handles
        ;; the odd case at the very beginning... Thanks to [Chris
        ;; Chudzicki](https://github.com/ChristopherChudzicki/math3d-next/blob/838369956a0bd1f126f8c04ef900eaf53741011c/client/src/util/components/MathLive/MathField.tsx#L52-L69)
        ;; for figuring this one out.
        (react/useEffect
         (fn []
           (when (and mf
                      (.endsWith (.getValue mf) "?")
                      (= 2 (.-position mf)))
             (.executeCommand ^js mf "moveToPreviousWord"))))

        ;; This passes `mf`back out to `ref` when it changes.
        (react/useImperativeHandle ref (fn [] mf) #js [mf])

        (r/as-element
         [:math-field
          (assoc (dissoc props "onPlaceholderChange" "onChange"
                         "defaultValue" "value" "options")
                 "children" (or value defaultValue "")
                 "ref" set-mf
                 "onInput" onChange)]))))))
