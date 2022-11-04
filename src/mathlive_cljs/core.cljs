(ns mathlive-cljs.core
  (:require ["mathlive" :as ml]))

(def default-style
  "   .output {
        padding: 16px;
      }
      .output textarea {
        color: var(--ui-color);
        background: var(--ui-background);
      }
      .output:focus-within {
        outline: none;
      }
      .output math-field, #latex {
        border-radius: 4px;
        border: .5px solid;
        padding: 8px;
      }
      .output math-field { font-size: 24px; }
      .output math-field:focus-within {
        outline: Highlight auto 1px;
        outline: -webkit-focus-ring-color auto 1px
      }
      #latex {
        margin-top: 1em;
        font-family: var(--monospace-font-family), 'IBM Plex Mono', 'Fira Code', 'Source Code Pro',   monospace;
      }")

(defn Mathfield [props !state]
  (let [mfe (ml/MathfieldElement.
             (clj->js
              (merge {:fontsDirectory "https://unpkg.com/mathlive@0.83.0/dist/fonts/"}
                     props)))]

    ;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

    ;; This is a slightly older react component, similar to what we should
    ;; probably be building here.
    ;; https://github.com/concludio/react-mathlive/blob/b3ffefb30f8b63448d925c47228b8d0befcaf898/src/MathfieldComponent.tsx
    (.addEventListener
     mfe "input"
     (fn [x]
       (js/console.log (.getValue (.-target x) "math-json"))
       (js/console.log (.-isValid ^js (.-expression (.-target x))))
       (js/console.log (.-errors ^js (.-expression (.-target x))))
       (let [expr ^js (.-expression (.-target x))]
         (reset! !state
                 ;; weird, seems like a bug with isValid.
                 (if (or (.-isValid expr)
                         (empty? (.-errors expr)))
                   {:valid? true
                    :expr (.-json expr)}
                   {:valid? false})))))
    (reset! !state (.getValue mfe "math-json"))
    ;; TODO note that we do this to prevent a remount...
    (let [ref (fn [el]
                (when el
                  (.replaceWith ^js el mfe)))]
      (fn []
        [:<>
         [:style default-style]
         [:div {:class "output visible"}
          [:div {:ref ref}]]]))))
