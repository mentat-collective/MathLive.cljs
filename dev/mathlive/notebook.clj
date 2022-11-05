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
                       :text (.getValue (.-target x))
                       :mathjson
                       (js->clj
                        (.-json (.-expression (.-target x))))))}
  (:text @state)])

;; And round-tripped as TeX:

(cljs
 (v/tex (:text @state)))

;; We can see the MathJSON version here:

(cljs
 (v/code
  (:mathjson @state)))

;; Demo shows how to go back and forth... https://cortexjs.io/mathlive/demo/
