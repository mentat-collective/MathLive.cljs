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
math-field {
  font-size: 24px;
  border-radius: 4px;
  border: .5px solid;
  padding: 8px;
}
math-field:focus-within {
  outline: Highlight auto 1px;
  outline: -webkit-focus-ring-color auto 1px
}"])

;; ## Demo
;;
;; Let's get some shared state:

(cljs
 (defonce state
   (reagent/atom {:text "1+x"})))

;; Then a mathfield, and [note this
;; page](https://cortexjs.io/mathlive/reference/commands/) for tex
;; and [keybindings](https://cortexjs.io/mathlive/reference/keybindings/).

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
  {:value (:text @state)
   ;; todo document string
   "virtual-keyboard-mode" "manual"
   :on-change
   (fn [x]
     (swap! state assoc
            :text     (.getValue (.-target x))
            :simple   (.-latex (.simplify (.-expression (.-target x))))
            :mathjson (ml/->math-json (.-target x))))}])

;; And round-tripped as TeX:
(cljs
 (v/tex (:text @state)))

;; We can see the MathJSON version here:

(cljs
 (v/code
  (:mathjson @state)))

;; using simplification from Cortex.js... not very good.

(cljs
 (v/tex (:simple @state "")))

;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/

;; ## Changing the Content
;;
;; This is the demo from ["changing the
;; content"](https://cortexjs.io/mathlive/guides/interacting/#changing-the-content-of-a-mathfield).

;; TODO note that you can't REALLY make it a controlled component, since it will
;; just change the state internally if you don't change `:value`.

(cljs
 (reagent/with-let
   [text (reagent/atom
          "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}")
    on-change #(reset! text (.. % -target -value))]
   [:<>
    [:h4 "Math Field"]
    [ml/Mathfield
     {:value @text
      :on-change on-change}]
    [:h4 "Text Area"]
    [:textarea
     {:style {:width "100%" :border "0.5px solid"}
      :value @text
      :on-change on-change}]]))

;; ## Fill In the Blank
;;
;; This has to feel a bit different.

;; ## Setting MathJSON
;;
;; ## Docs

;; https://cortexjs.io/mathlive/guides/interacting/
;;
;; ## Macros, Set Options

;; https://cortexjs.io/mathlive/guides/macros/
;;
;; shortcuts https://cortexjs.io/mathlive/guides/shortcuts/
;;
;; alt-control-up https://cortexjs.io/mathlive/guides/speech/
;;
;; keyboard https://cortexjs.io/mathlive/guides/virtual-keyboards/

(comment
  ;; or just ignore and do something like this
  (v/code
   (ml/math-json->tex (:mathjson @state)))

  ;; https://cortexjs.io/mathlive/guides/interacting/#fill-in-the-blank

  {:ref (fn [mf]
          (when mf
            (js/setTimeout
             #(ml/set-math-json! mf ["Add" "z" "q"])
             2000)))})
