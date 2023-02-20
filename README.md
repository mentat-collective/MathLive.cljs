# MathLive.cljs

A [ClojureScript][cljs-url] + [Reagent][reagent-url] wrapper over the [MathLive][mathlive-url] equation editor.

[![Build Status][build-status]][build-status-url]
[![License][license]][license-url]
[![cljdoc badge][cljdoc]][cljdoc-url]
[![Clojars Project][clojars]][clojars-url]
[![Discord Shield][discord]][discord-url]

## Quickstart

Install `MathLive.cljs` into your Clojurescript project using the instructions
at its Clojars page:

[![Clojars Project][clojars]][clojars-url]

Or grab the most recent code using a Git dependency:

```clj
;; deps
{io.github.mentat-collective/mathlive.cljs
  {:git/sha "$GIT_SHA"}}
```

Require `mathlive.core` in your namespace:

```clj
(ns my-app
   (:require [mathlive.core :as ml]
             [reagent.core :as r]))
```

The main entrypoint to the library is the
[`mathlive.core/Mathfield`](https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT/api/mathlive.core#Mathfield)
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

## Clerk Support

If you want to use `MathLive.cljs` with [Clerk][clerk-url], check out the
[`mathlive/clerk` template][mathlive-clerk-template-url]. This
[`deps-new`][deps-new-url] template will generate a Clerk project for you, fully
configured to use `MathLive.cljs` in your Clerk notebooks.

## Interactive Documentation via Clerk

The project's [interactive documentation](https://mathlive.mentat.org) was
generated using Nextjournal's [Clerk](https://github.com/nextjournal/clerk). If
you'd like to edit or play with the documentation, you'll need to install

- [node.js](https://nodejs.org/en/)
- The [clojure command line tool](https://clojure.org/guides/install_clojure)
- [Babashka](https://github.com/babashka/babashka#installation)

Once this is done, run this command:

```sh
bb clerk-watch
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

[build-status-url]: https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml
[build-status]: https://github.com/mentat-collective/mathlive.cljs/actions/workflows/kondo.yml/badge.svg?branch=main
[cljdoc-url]: https://cljdoc.org/d/org.mentat/mathlive.cljs/CURRENT
[cljdoc]: https://cljdoc.org/badge/org.mentat/mathlive.cljs
[clojars-url]: https://clojars.org/org.mentat/mathlive.cljs
[clojars]: https://img.shields.io/clojars/v/org.mentat/mathlive.cljs.svg
[discord-url]: https://discord.gg/hsRBqGEeQ4
[discord]: https://img.shields.io/discord/731131562002743336?style=flat&colorA=000000&colorB=000000&label=&logo=discord
[license-url]: LICENSE
[license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[github-url]: https://github.com/mentat-collective/mathlive.cljs
[reagent-url]: https://reagent-project.github.io/
[mathlive-url]: https://mathlive.dev
[deps-new-url]: https://github.com/seancorfield/deps-new
[mathlive-clerk-template-url]: https://github.com/mentat-collective/MathLive.cljs/tree/main/resources/mathlive/clerk
[clerk-url]: https://clerk.vision
[cljs-url]: https://clojurescript.org/
