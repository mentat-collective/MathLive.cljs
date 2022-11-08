;; # MathLive.cljs
;;
;; _Generated from [this notebook](https://github.com/mentat-collective/mathlive.cljs/blob/$GIT_SHA/dev/mathlive/notebook.clj)!_
;;
;; Reagent component wrapping the `math-field` web component from
;; the [MathLive](https://github.com/arnog/mathlive) JS library. See the [Github
;; project](https://github.com/mentat-collective/mathlive.cljs) for more
;; details.
;;
;; ## Usage
;;
;; ```clj
;; ;; deps
;; {org.mentat/mathlive.cljs {:git/sha "$GIT_SHA"}}
;;
;; ;; namespace
;; (ns my-app
;;   (:require [mathlive.core :as ml]
;;             [reagent.core :as reagent]))
;;```

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
  {:options {:virtualKeyboardMode "manual"}
   :value   (:text @state)
   :on-change
   (fn [x]
     (swap! state assoc
            :text     (.getValue (.-target x))
            :mathjson (ml/->math-json (.-target x))))}])

;; On every change the `Mathfield` mirrors its value into `state`. We can render
;; the value stored under `:text` as TeX using Clerk:

(cljs
 (v/tex (:text @state)))

;; We can also pull the expression out as MathJSON:

(cljs
 (v/code (:mathjson @state)))

;; ## Controlled Mathfield
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
     {:value @text
      :on-change on-change}]
    [:h4 "Text Area"]
    [:textarea
     {:style {:width "100%" :border "0.5px solid"}
      :value @text
      :on-change on-change}]]))

;; ## Fill In the Blank

(cljs
 (reagent/with-let
   [m         (reagent/atom {})
    on-change #(reset! m (ml/->placeholders
                          (.-target %)
                          {:type "math-json"}))]
   [:<>
    [ml/Mathfield
     {:read-only true
      :value
      "f(x) := [\\placeholder[x-body]{x},
                \\placeholder[y-body]{y}]"
      :on-change on-change}]
    [v/inspect
     (v/code @m)]]))

;; ## Docs
;;
;; Some nice guides:

;; https://cortexjs.io/mathlive/guides/interacting/
;;
;; ## Macros
;;
;; https://cortexjs.io/mathlive/guides/macros/
;;
;; Woah, no `smallfrac` support:

(cljs
 [ml/Mathfield
  {:default-value "\\scriptCapitalE=\\smallfrac{5}{7}+\\frac{5}{7}"}])

;; But now it works:

(cljs
 [ml/Mathfield
  {:default-value "\\scriptCapitalE=\\smallfrac{5}{7}+\\frac{5}{7}"
   :options
   (fn [opts]
     (update opts :macros
             merge
             {"smallfrac"
              "{}^{#1}\\!\\!/\\!{}_{#2}"}))}])

;; ## Shortcuts

;; https://cortexjs.io/mathlive/guides/shortcuts/
;;
;; Try typing "cake" in the field:

(cljs
 [ml/Mathfield
  {:options
   (fn [opts]
     (update opts :inlineShortcuts
             merge
             {"cake" "\\Gamma"}))}])

;; ## Utilities

;; ### Set MathJSON

(cljs
 [ml/Mathfield
  {:ref (fn [mf]
          (when mf
            (ml/set-math-json!
             mf ["Add" "x" ["Subtract" "y" "z"]])))}])

;; ### mathjson->tex

(cljs
 (v/tex
  (ml/math-json->tex
   ["Add" "x" ["Subtract" "y" "z"]])))


;; ### How to get MathJSON out:

(cljs
 (reagent/with-let
   [mathjson  (reagent/atom [])
    on-change #(let [mf (.-target %)]
                 (reset! mathjson (ml/->math-json mf)))]
   [:<>
    [ml/Mathfield
     {:on-change on-change}]
    [v/inspect
     (v/code @mathjson)]]))
