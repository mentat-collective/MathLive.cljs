(ns mathlive-cljs.core
  (:require [reagent.core :as r]
            ["mathlive"]
            ["react" :as react]))

;; TODO:
;;
;; - Change to :default-value and :value, log a warning under "error" if children are set.
;; - test fn or map for opts
;; - ticket to convert jsxgraph to function components
;; - functions to get value out as clj
;; - docs for all of the field things from html, https://cortexjs.io/docs/mathlive/?q=fints-dire, options
;; - test the fonts directory thing, can we really set it to nil?
;;
;; - add the ability for the value to be MathJSON also.


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

(defn ->math-json [mf]
  (js->clj
   (.-json ^js (.-expression mf))))

;; ## Component

(defn- mf-forward-ref
  [props ref]
  (let [[mf set-mf] (react/useState nil)
        {:strs [children options onChange] :as props}
        (js->clj props)]

    (react/useEffect
     (fn mount []
       ;; TODO make sure this doesn't trigger much. Why does this thing fire?
       ;; what is changing??
       ;;
       ;; TODO ask Chris if there is a way to prevent re-mount every time the
       ;; children change... check if his does it
       (js/console.log "why am I firing??")
       (when-let [opts (and mf options)]
         (update-options! mf opts)))
     #js [options mf])

    (react/useEffect
     (fn mount []
       (when mf
         (let [v (.getValue mf)
               text (if (vector? children)
                      (reduce str "" children)
                      children)]
           (when (not= v text)
             (.setValue mf text))
           ;; TODO ask Chris about this. It doesn't do anything if you are
           ;; directly typing... so why have it here? i was getting the error
           ;; even when typing?
           (when (.endsWith text "?")
             (.executeCommand ^js mf "moveToPreviousWord")))
         nil)))

    (react/useImperativeHandle ref (fn [] mf))

    (r/as-element
     [:math-field
      (assoc props
             "ref" set-mf
             "onInput" onChange)])))

(def Mathfield
  (r/adapt-react-class
   (react/forwardRef mf-forward-ref)))
