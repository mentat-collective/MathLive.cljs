;; # Mathlive.cljs
;;
;; _alpha - [feedback welcome](https://github.com/mentat-collective/mathlive.cljs)_
;;
;; Mathlive!
;;
;; ## Features
;;
;; 1. First feature!
;;
;; 2. Second feature.
;;
;; ## Usage
;;
;; ```clj
;; ;; deps
;; {org.mentat/mathlive.cljs {:git/sha "$GIT_SHA"}}
;;
;; ;; namespace
;; (ns my-app
;;   (:require [mathlive-cljs.core :as ml]
;;             [reagent.core :as reagent]))
;;```
;;
;; Hi!

^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathlive.notebook
  (:require [mathlive.clerk-ui :refer [cljs]]))

^{:nextjournal.clerk/visibility
  {:code :hide}}
(cljs
 ;; These are some styles.
 [:style "
math-field, #latex {
  border-radius: 4px;
  border: .5px solid;
  padding: 8px;
}
math-field { font-size: 24px; }
math-field:focus-within {
  outline: Highlight auto 1px;
  outline: -webkit-focus-ring-color auto 1px
}
#latex {
  margin-top: 1em;
  font-family: var(--monospace-font-family), 'IBM Plex Mono', 'Fira Code', 'Source Code Pro',   monospace;
}"])

;; ## Demo
;;
;; Let's get some shared state:

(cljs
 (defonce state
   (reagent/atom {:text "1+x"})))

;; Then a mathfield:

(cljs
 [ml/Mathfield
  ;; TODO test soundsDirectory etc for real or actually setting a different
  ;; fonts directory. I think my string keys problem prevented me from actually
  ;; testing it.

  ;; TODO fix send bug report! prob all virtual opts?
  ;; https://github.com/arnog/mathlive/blob/49746cc3ce22e6fc470704da9b6650b029c329fa/src/public/options.ts
  ;; can hooks save my jsxgraph remount??

  ;; check opt
  ;; note that dashes to camel happens everywhere
  {:options {}
   ;; todo document string
   "virtual-keyboard-mode" "manual"
   :on-change (fn [x]
                ;; TODO helper methods for getting out MathJSON, examining
                ;; expression.
                (swap! state assoc
                       :text   (.getValue (.-target x))
                       :simple (.-latex (.simplify (.-expression (.-target x))))
                       :mathjson
                       (ml/->math-json (.-target x))))}
  (:text @state)])

;; And round-tripped as TeX:

(cljs
 (v/tex (:text @state)))

;; using simplification... not very good.

(cljs
 (v/tex (:simple @state)))

;; We can see the MathJSON version here:

(cljs
 (v/code
  (:mathjson @state)))

;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

;; ## Changing the Content
;;
;; This is the demo from ["changing the
;; content"](https://cortexjs.io/mathlive/guides/interacting/#changing-the-content-of-a-mathfield).

(cljs
 (reagent/with-let
   [text (reagent/atom
          "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}")
    on-change #(reset! text (.. % -target -value))]
   [:<>
    [:h4 "Math Field"]
    [ml/Mathfield
     {:on-change on-change}
     @text]
    [:h4 "Text Area"]
    [:textarea
     {:style {:width "100%" :border "0.5px solid"}
      :value @text
      :on-change on-change}]]))

;; TODO go look at how textarea is implemented and give the same exceptions etc!@ https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/client/ReactDOMTextarea.js
;;
;; and the component https://github.com/facebook/react/blob/8e2bde6f2751aa6335f3cef488c05c3ea08e074a/packages/react-dom-bindings/src/client/ReactDOMComponent.js


;; ## Fill In the Blank
;;
;; This has to feel a bit different.
