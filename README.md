# mathlive.cljs

A [ClojureScript][CLJS] + [Reagent][REAGENT] wrapper over the [MathLive][MATHLIVE] equation editor.

[![Build Status](https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml/badge.svg?branch=main)](https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mentat-collective/mathlive.cljs/blob/main/LICENSE)
[![cljdoc badge](https://cljdoc.org/badge/org.mentat/mathlive.cljs)](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT)
[![Clojars Project](https://img.shields.io/clojars/v/org.mentat/mathlive.cljs.svg)](https://clojars.org/org.mentat/mathlive.cljs)

## Quickstart

Install `mathlive.cljs` into your Clojurescript project using the instructions
at its Clojars page:

[![Clojars
Project](https://img.shields.io/clojars/v/org.mentat/mathlive.cljs.svg)](https://clojars.org/org.mentat/mathlive.cljs)

Require `mathlive.core` in your namespace:

```clj
(ns my-app
   (:require [mathlive.core :as ml]
             [reagent.core :as r]))
```

The main entrypoint to the library is the
[`mathlive.core/Mathfield`](https://cljdoc.org/d/org.mentat/mathlive.cljs/0.1.0/api/mathlive.core#Mathfield)
component. This component acts like a Reagent `[:textarea ,,,]` and takes
similar props, but allows for interactive mathematical input and conversion to
LaTeX.

Here's an example component:

```clj
(r/with-let
  [!tex      (r/atom "")
   on-change #(reset! !tex (.getValue (.-target %)))]
  [:<>
   [ml/Mathfield
    {:value     @!tex
     :on-change on-change}]
   [:pre @!tex]])
```

![2022-12-01 16 56 20](https://user-images.githubusercontent.com/69635/205183928-e0fb6227-c45c-4db7-982d-c8e8a3cb3ee8.gif)

See the project's [interactive documentation
notebook](https://mathlive.mentat.org) for more examples. The [MathLive
guides](https://cortexjs.io/mathlive/guides/interacting/) are great resources as
well.

## Why React?

TODO fill this in.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://mathlive.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command in one terminal window to build and serve
the custom JS required by the notebook:

```
bb dev-notebook
```

In another terminal window, run

```
bb start-clerk
```

This should open a browser window to `http://localhost:7777` with the contents
of the documentation notebook. Any edits you make to `dev/mathlive/notebook.clj`
will be picked up and displayed in the browser on save.

## Thanks and Support

To support this work and my other open source projects, consider sponsoring me
via my [GitHub Sponsors page](https://github.com/sponsors/sritchie). Thank you
to my current sponsors!

I'm grateful to [Clojurists Together](https://www.clojuriststogether.org/) for
financial support during this library's creation. Please consider [becoming a
member](https://www.clojuriststogether.org/developers/) to support this work and
projects like it.

## License

Copyright © 2022 Sam Ritchie.

Distributed under the [MIT License](LICENSE). See [LICENSE](LICENSE).

[CLJS]: https://clojurescript.org/
[MATHLIVE]: https://github.com/arnog/mathlive
[REAGENT]: https://reagent-project.github.io/
