;; # MathLive.cljs
;;
;; A [ClojureScript](https://clojurescript.org/) + [Reagent](https://reagent-project.github.io/) wrapper over
;; the [MathLive](https://github.com/arnog/mathlive) equation editor.

;; [![Build Status](https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml)
;; [![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/mathlive.cljs/blob/main/LICENSE)
;; [![cljdoc badge](https://cljdoc.org/badge/org.mentat/mathlive.cljs)](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT)
;; [![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mathlive.cljs.svg)](https://clojars.org/org.mentat/mathlive.cljs)
;;
;; > The interactive documentation on this page was generated from [this source
;; > file](https://github.com/mentat-collective/mathlive.cljs/blob/$GIT_SHA/dev/mathlive/notebook.clj)
;; > using [Clerk](https://github.com/nextjournal/clerk). Follow
;; > the [instructions in the
;; > README](https://github.com/mentat-collective/mathlive.cljs/tree/main#interactive-documentation-via-clerk)
;; > to run and modify this notebook on your machine!
;;
;; See the [Github project](https://github.com/mentat-collective/mathlive.cljs)
;; for more details.
;;
;; ## Quickstart
;;
;; Install `mathlive.cljs` into your Clojurescript project using the
;; instructions at its Clojars page:

;; [![Clojars
;;    Project](https://img.shields.io/clojars/v/org.mentat/mathlive.cljs.svg)](https://clojars.org/org.mentat/mathlive.cljs)
;;
;; Or grab the most recent code using a Git dependency:
;;
;; ```clj
;; ;; deps
;; {org.mentat/mathlive.cljs {:git/sha "$GIT_SHA"}}
;;```

;; Require `mathlive.core` in your namespace:

;; ```clj
;; (ns my-app
;;   (:require [mathlive.core :as ml]
;;             [reagent.core :as reagent]))
;; ```

;; The main entrypoint to the library is the `mathlive.core/Mathfield` component.
;; This component acts like a Reagent `[:textarea ,,,]` and takes similar props,
;; but allows for interactive mathematical input and conversion to LaTeX.

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

;; ## Basic Mathfield
;;
;; The simplest way to create a Mathfield is to create a component with no
;; properties:

(cljs
 [ml/Mathfield])

;; This will render an "uncontrolled" equation editor. Play around with
;; the [keyboard shortcuts](https://cortexjs.io/mathlive/reference/keybindings/)
;; from the [MathLive site](https://cortexjs.io/mathlive).

;; ### Uncontrolled Component

;; Just like a `:textarea`, you can pre-populate a `Mathfield` instance by
;; supplying it with a LaTeX string through the `:default-value` property:

(cljs
 [ml/Mathfield
  {:default-value "1+\\cos(x)^2"}])

;; ### Controlled Component
;;
;; A "controlled" `Mathfield` has its value set by `:value`, and feeds each new
;; value out via the `:on-change` callback.
;;
;; Here is an example of a `Mathfield` that persists its state into a reagent
;; atom. The contents of the atom feed into the `Mathfield` and also into an
;; adjacent block of code.

(cljs
 (reagent/with-let
   [!tex      (reagent/atom "1+\\cos(x)^2")
    on-change #(reset! !tex (.getValue (.-target %)))]
   [:<>
    [ml/Mathfield
     {:value     @!tex
      :on-change on-change}]
    [:pre @!tex]]))

;; ### Mathfield <-> TextArea
;;
;; Here is a slightly more complicated example from the ["changing the
;; content"](https://cortexjs.io/mathlive/guides/interacting/#changing-the-content-of-a-mathfield)
;; MathLive demo.
;;
;; Try changing the `:textarea` or the `Mathfield`. Reagent will keep the two in
;; sync.

(cljs
 (reagent/with-let
   [!tex (reagent/atom
          "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}")
    on-change #(reset! !tex (.. % -target -value))]
   [:<>
    [:h4 "Math Field"]
    [ml/Mathfield
     {:value @!tex
      :on-change on-change}]
    [:h4 "Text Area"]
    [:textarea
     {:style {:width "100%" :border "0.5px solid"}
      :value @!tex
      :on-change on-change}]]))

;; ## MathJSON
;;
;; TODO get the mathjson out, split out virtual keyboard mode.

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
   (fn [event]
     (let [mf (.-target event)]
       (swap! state assoc
              :text     (.getValue mf)
              :mathjson (ml/->math-json mf))))}])

;; On every change the `Mathfield` mirrors its value into `state`. We can render
;; the value stored under `:text` as TeX using Clerk:

(cljs
 (v/tex
  (:text @state)))

;; We can also pull the expression out as MathJSON:

(cljs
 (v/code
  (:mathjson @state)))

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
      :on-placeholder-change on-change
      :value
      "f(x) := [\\placeholder[x-body][x]{},
                \\placeholder[y-body][y]{}]"}]
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
     (update opts :macros assoc
             "smallfrac"
             "{}^{#1}\\!\\!/\\!{}_{#2}"))}])

;; ## Shortcuts

;; https://cortexjs.io/mathlive/guides/shortcuts/
;;
;; Try typing "cake" in the field:

(cljs
 [ml/Mathfield
  {:options
   (fn [opts]
     (update opts :inlineShortcuts
             assoc
             "cake" "\\Gamma"))}])

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

;; ## MathLive Guides
;;
;; This just scratches the surface! TODO add more detail here.

;; ## Thanks and Support

;; To support this work and my other open source projects, consider sponsoring
;; me via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank
;; you to my current sponsors!

;; I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/)
;; for financial support during this library's creation. Please
;; consider [becoming a member](https://www.clojuriststogether.org/developers/)
;; to support this work and projects like it.

;; ## License

;; Copyright © 2022 Sam Ritchie.

;; Distributed under the [MIT
;; License](https://github.com/mentat-collective/mathlive.cljs/blob/main/LICENSE).
;; See [LICENSE](https://github.com/mentat-collective/mathlive.cljs/blob/main/LICENSE).
