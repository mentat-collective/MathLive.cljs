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
;; for more details, and the [cljdoc
;; page](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT/doc/readme) for
;; detailed API documentation.
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
;; {io.github.mentat-collective/mathlive.cljs
;;   {:git/sha "$GIT_SHA"}}
;; ```

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
  border: 1px solid;
  padding: 8px;
}
math-field:focus-within {
  outline: none;
  border: 1px solid blue;
}"])

;; ## Basic Mathfield
;;
;; The simplest way to create a Mathfield is to create a component with no
;; properties:

(cljs
 [ml/Mathfield])

;; This will render an "uncontrolled" equation editor. Play around with
;; the [keyboard shortcuts](https://cortexjs.io/mathlive/reference/keybindings/)
;; from the [MathLive site](https://cortexjs.io/mathlive). A backslash will
;; trigger command entry; [this
;; page](https://cortexjs.io/mathlive/reference/commands/) lists all allowed
;; commands, and the sections below discuss how to extend the set.

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
     {:style
      {:width "100%"
       :border "1px solid"
       :border-radius "4px"
       :font-size "20px"
       :padding "8px"}
      :value @!tex
      :on-change on-change}]]))

;; ## Fill In the Blank
;;
;; MathLive's "placeholder" functionality allows you to write complicated
;; mathematical expressions with holes in them that can accept user input.
;; The [full
;; guide](https://cortexjs.io/mathlive/guides/interacting/#fill-in-the-blank)
;; has more detail, but the following exmaple is illustrative.
;;

;;
;; The following `Mathfield` declares two placeholders `x-body` and `y-body`
;; with `\placeholder[<name>][<default-value>]{}` syntax.

;; Interacting with either placeholder fires a `change` event on the
;; `Mathfield`. We use
;; the [`ml/->placeholders`](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT/api/mathlive.core#-%3Eplaceholders)
;; helper to extract all placeholders and convert them to Clojure.

(cljs
 (reagent/with-let
   [m         (reagent/atom {:x-body []
                             :y-body []})
    on-change #(reset! m (ml/->placeholders
                          (.-target %)
                          {:type "math-json"}))]
   [:<>
    [ml/Mathfield
     {:read-only true
      :on-change on-change
      :value
      "f(x) := [\\placeholder[x-body][x]{},
                \\placeholder[y-body][y]{}]"}]
    [:pre (str @m)]]))

;; Note the `{:type "math-json"}` option we supplied to `->placeholders`.
;; Supplying `{:type "latex"}` would pull latex values from the placeholders.
;; See the [MathJSON](#MathJSON) section below for more detail.

;; > Note that you must supply `:read-only true` for this feature to work
;; > correctly.

;; ## More Guides
;;
;; The MathLive site has [many guides](https://cortexjs.io/mathlive/guides) that
;; you should read and explore. This section contains a sample of a few MathLive
;; features documented in those guides.

;; ### Options
;;
;; There are 3 ways to configure a `Mathfield`:
;;
;; - Set attributes on the `Mathfield` by
;;   providing [attributes](https://cortexjs.io/docs/mathlive/#(MathfieldElementAttributes%3Ainterface))
;;   as key-value pairs to the component
;; - Use the `:options` key to provide a map of key-value pairs to be passed to
;;   `mf.setOptions()` (see [the
;;   docs](https://cortexjs.io/docs/mathlive/#(MathfieldOptions%3Atype)) for
;;   allowed pairs)
;; - Pass a function of `<current options> => <new options>` via the `:options` key.
;;
;; Each [allowed
;; attribute](https://cortexjs.io/docs/mathlive/#(MathfieldElementAttributes%3Ainterface))
;; has a corresponding [allowed
;; option](https://cortexjs.io/docs/mathlive/#(MathfieldOptions%3Atype)) with a
;; slightly different name.
;;
;; > NOTE that if you want to provide a property with a DASH in it, you'll need
;; > to pass it as a string, not a keyword. Reagent will automatically camelCase
;; > any keywords with dashes, but string keys preserve dashes.
;;
;; For example, all three of the following `Mathfield`s are configured with
;; their `virtualKeyboardMode` set to true:

(cljs
 [:<>
  ;; Via options map:
  [ml/Mathfield
   {:options {:virtualKeyboardMode "manual"}}]

  ;; Via function:
  [ml/Mathfield
   {:options
    (fn [m]
      (assoc m :virtualKeyboardMode "manual"))}]

  ;; Via property:
  [ml/Mathfield
   ;; Note that this key has to be a string to preserve the spaces.
   {"virtual-keyboard-mode" "manual"}]])

;; ### Mathfield via :ref
;;
;; To do something more advanced than this API supports, you can always get
;; access to the
;; underlying [`MathfieldElement`](https://cortexjs.io/docs/mathlive/#(MathfieldElement%3Aclass))
;; by using the `:ref` key on the `Mathfield` component. The function you supply
;; will receive `MathfieldElement` before any modifications from your supplied
;; options.

(cljs
 [ml/Mathfield
  {:ref (fn [mf]
          (when mf
            (.setValue mf "1+x")))}])

;; ### Macros

;; You can extend the set of LaTeX commands supported by your `Mathfield` by
;; registering [custom macros](https://cortexjs.io/mathlive/guides/macros/).

;; This `Mathfield` shows a red error box over the `\smallfrac` command:

(cljs
 [ml/Mathfield
  {:default-value
   "\\scriptCapitalE=\\smallfrac{5}{7}+\\frac{5}{7}"}])

;; Below we provide a function to `:options` that `assoc`s the new `<macro
;; command>` / `<replacement template>` into the map stored under `:macros`, and
;; now the `\smallfrac` renders properly!

(cljs
 [ml/Mathfield
  {:default-value
   "\\scriptCapitalE=\\smallfrac{5}{7}+\\frac{5}{7}"
   :options
   (fn [opts]
     (update opts :macros
             assoc
             "smallfrac"
             "{}^{#1}\\!\\!/\\!{}_{#2}"))}])

;; `\smallfrac` will also autocomplete. Try typing `\smallfr` and you should see
;; the autocomplete suggestion appear.

;; > Note that we used a function here to update options. Supplying `{:macros
;; > {"smallfrac" <value>}}` would have worked, but would have removed all other
;; > default registered macros.

;; ### Shortcuts

;; A MathLive shortcut (see the [official
;; guide](https://cortexjs.io/mathlive/guides/shortcuts/#inline-shortcuts)) is a
;; string that the `Mathfield` recognizes and automatically replaces with some
;; other string.
;;
;; Try typing `cake` into the `Mathfield` below:

(cljs
 [ml/Mathfield
  {:options
   (fn [opts]
     (update opts :inlineShortcuts
             assoc
             "cake" "\\Gamma"))}])

;; ### Styling
;;
;; From MathLive's [guide on customization](https://cortexjs.io/mathlive/guides/customizing/):
;;
;; > The appearance and behavior of the mathfield is highly customizable.
;;
;; The `Mathfield` instances in this notebook have all been customized with the following styles:
;;
;;```css
;; math-field {
;;   font-size: 24px;
;;   border-radius: 4px;
;;   border: 1px solid;
;;   padding: 8px;
;; }
;; math-field:focus-within {
;;   outline: none;
;;   border: 1px solid blue;
;; }
;;```
;;
;; ### Fonts and Sounds
;;
;; By default, `Mathfield` instances attempt to load fonts and sounds from
;; `/dist/fonts` and `/dist-sounds`, respectively, of the route serving the
;; `Mathfield`.
;;
;; You can customize fonts with a `"fonts-directory"` attribute or
;; `fontsDirectory` option. See the [fonts
;; guide](https://cortexjs.io/mathlive/guides/customizing/#fonts) for more
;; details.
;;
;; To customize the sounds location, use the `"sounds-directory"` attribute or
;; `soundsDirectory` option.
;;
;; For more details on both of these options, see
;; the [`CoreOptions`](https://cortexjs.io/docs/mathlive/#(CoreOptions%3Atype))
;; documentation.
;;
;; If you want to set these without serving them yourself, `mathlive.cljs`
;; provides and `mathlive.core/cdn-fonts` and `mathlive.core/cdn-sounds` vars
;; that point to the CDN distribution of the currently loaded version of
;; `mathlive`.

;; ## MathJSON
;;
;; The default value format for a `Mathfield` is `"latex"`, but the component
;; supports many other output formats, such as `"ascii-math"` or
;; `"spoken-text"`. See the docs for the [full list of output
;; formats](https://cortexjs.io/docs/mathlive/#(OutputFormat%3Atype)).
;;
;; The MathLive team has created a more easily parseable output format
;; called [MathJSON](https://cortexjs.io/math-json/), and this library provides
;; tooling to extract MathJSON from a `Mathfield` parsed into Clojure data
;; structures.
;;
;; To use any of the MathJSON features you'll need to require the
;; `@cortex-js/compute-engine` dependency somewhere in your codebase:
;;
;; ```clj
;; (ns my-app
;;   (:require [mathlive.core :as ml]
;;             [reagent.core :as reagent]
;;             ;; included for side effects
;;             ["@cortex-js/compute-engine"]))
;; ```
;;
;; ### Extracting MathJSON
;;
;; The following example example pulls both LaTeX and MathJSON from a
;; `Mathfield`.
;;
;; First, create a `reagent/atom` to store the values:

(cljs
 (defonce !state
   (reagent/atom {:text "1+x"})))

;; The controlled `Mathfield` instance below will update `!state` with LaTeX
;; under the `:text` key and MathJSON under the `:mathjson` key on every
;; keypress.

;; > You can call `(.getValue mf <output-format>)` with any of the output
;; > formats [listed
;; > here](https://cortexjs.io/docs/mathlive/#(OutputFormat%3Atype)). `(ml/->math-json
;; > mf)` returns the MathJSON as Clojure data vs JS.

(cljs
 [ml/Mathfield
  {:value (:text @!state)
   :on-change
   (fn [event]
     (let [mf (.-target event)]
       (swap! !state assoc
              :text     (.getValue mf)
              :mathjson (ml/->math-json mf))))}])

;; The following block renders any value entered above (please edit it!) in 3 different forms:
;;
;; - A text representation of LaTeX
;; - Rendered TeX, via [Clerk's](https://github.com/nextjournal/clerk) [KaTeX](https://katex.org/) plugin
;; - MathJSON parsed into Clojure

(cljs
 [:<>
  [:pre (:text @!state)]
  [v/inspect (v/tex
              (:text @!state))]
  [v/inspect (v/code
              (:mathjson @!state))]])

;; These values will live-update as you change the value of the `Mathfield`
;; above.

;; ### Setting MathJSON
;;
;; If you have a Clojure representation of a MathJSON expression, you can set
;; the value of a `Mathfield` directly using
;; the [`:ref`](#Mathfield%20via%20:ref) key:

(cljs
 [ml/Mathfield
  {:ref (fn [mf]
          (when mf
            (ml/set-math-json!
             mf ["Add" "x" ["Subtract" "y" "z"]])))}])

;; `ml/set-math-json!` will parse the argument into JS and then set the
;; `.-expression` field on `mf`.

;; ### mathjson->tex

;; You can also generate LaTeX directly from MathJSON without setting a
;; `Mathfield`'s value:

(cljs
 (v/tex
  (ml/math-json->tex
   ["Add" "x" ["Subtract" "y" "z"]])))

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
