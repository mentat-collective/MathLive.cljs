(ns mathlive.core
  (:require ["mathlive" :as ml]))

(defn Mathfield [!state]
  (let [mfe (ml/MathfieldElement.
             #js {:fontsDirectory "https://unpkg.com/mathlive@0.83.0/dist/fonts/"})]

    ;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

    ;; This is a slightly older react component, similar to what we should
    ;; probably be building here.
    ;; https://github.com/concludio/react-mathlive/blob/b3ffefb30f8b63448d925c47228b8d0befcaf898/src/MathfieldComponent.tsx
    (.addEventListener
     mfe "input" (fn [x]
                   (js/console.log (.getValue (.-target x) "math-json"))
                   (js/console.log (.-isValid ^js (.-expression (.-target x))))
                   (js/console.log (.-errors ^js (.-expression (.-target x))))
                   (reset! !state
                           ;; weird, seems like a bug with isValid.
                           (if (or (.-isValid ^js (.-expression (.-target x)))
                                   (empty?
                                    (.-errors ^js (.-expression (.-target x)))))
                             {:valid? true
                              :expr (.-json (.-expression (.-target x)))}
                             {:valid? false}))))
    (reset! !state (.getValue mfe "math-json"))
    ;; TODO note that we do this to prevent a remount...
    (let [ref (fn [el]
                (when el
                  (.replaceWith ^js el mfe)))]
      (fn []
        [:div
         [:div {:ref ref}]
         #_(let [s @!state]
             (if-not (:valid? s)
               [:p "Invalid!"]
               ;; TODO right now we are ASSUMING that what comes through is either
               ;; a structure or a literal number, and we wrap it all up at the
               ;; end.
               (let [clj    (mathjson->expression (:expr s))
                     simple (e/simplify clj)]
                 [:<>
                  [sv/inspect (v/code clj)]
                  [sv/inspect (v/tex (try (e/->TeX clj)
                                          (catch
                                              js/Error
                                              _ "\\mathit{processing...}")))]
                  [sv/inspect (v/code simple)]
                  [sv/inspect (v/tex (try (e/->TeX simple)
                                          (catch
                                              js/Error
                                              _ "\\mathit{processing...}")))]])))]))))
