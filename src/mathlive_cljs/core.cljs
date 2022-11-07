(ns mathlive-cljs.core
  (:require [reagent.core :as r]
            ["mathlive" :as mathl]
            ["react" :as react]))

;; TODO:
;;
;; - Change to :default-value and :value, log a warning under "error" if children are set.
;; - test fn or map for opts
;; - ticket to convert jsxgraph to function components
;; - functions to get value out as clj
;; - docs for all of the field things from html, https://cortexjs.io/docs/mathlive/?q=fints-dire, options
;; - test the fonts directory thing

(defn- update-options! [mf opts-or-f]
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

;; ## Utilities

(def mathlive-version
  (.-mathlive mathl/version))

(def cdn-sounds
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/sounds/"))

(def cdn-fonts
  (str "https://unpkg.com/mathlive@" mathlive-version "/dist/fonts/"))


(defn ->math-json [mf]
  (js->clj
   (.-json ^js (.-expression mf))))

(defn set-math-json! [mf expr]
  (set! ^js (.-expression mf)
        (clj->js expr)))

(defn math-json->tex [expr]
  (mathl/serializeMathJsonToLatex
   (clj->js expr)))

;; ## Component

(def ^{:doc "Docstring."}
  Mathfield
  (r/adapt-react-class
   (react/forwardRef
    (fn [props ref]
      (let [[mf set-mf] (react/useState nil)
            {:strs [children value options defaultValue onChange
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
          (assoc (dissoc props "onChange" "defaultValue" "value")
                 "children" (or value defaultValue "")
                 "ref" set-mf
                 "onInput" onChange
                 "sounds-directory" (or soundsDirectory cdn-sounds)
                 "fonts-directory" (or fontsDirectory cdn-fonts))]))))))
