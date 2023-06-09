# Changelog

## [unreleased]

## [0.2.1]

- #15:

  - removes the `goog.object` to make the library compatible with SCI
    evaluation, needed by Portal.

  - adds various build upgrades, (Clerk, Kondo etc)

## [0.2.0]

The interactive docs page is now published to https://mathlive.mentat.org.

- #12:

  - Adds a `deps-new` template that sets up a basic Clerk project with
    `MathLive.cljs` installed as a dependency. [The template lives
    here](https://github.com/mentat-collective/MathLive.cljs/tree/main/resources/mathlive/clerk).

  - Adds a `provided` dependency on SCI to `pom.xml`, so that cljdoc builds
    succeed.

  - Adds `mathlive.sci` with SCI namespace objects for all namespaces, plus a
    `namespaces` map and a `config` for easy installation into SCI. The
    namespaces follows the patterns set by the
    https://github.com/babashka/sci.configs repo.

    - `mathlive.sci/install!` allows the user to install `MathLive.cljs` into
      SCI's shared context with one mutating call.

  - Migrates the project over to `clerk-utils` and all of its new custom build
    stuff. This let me simplify development, update the README and DEVELOPING
    pages and kill my shadow-cljs.edn file. `user.clj` gets quite a bit simpler
    too.

  - Adds notes to the interactive docs guide about using the library with SCI
    and with Clerk

  - Upgrades to Clerk version `fad499407d979916d21b33cc7e46e73f7a485e37` for the
    template and project docs notebook

## 0.1.0

- Added final `Mathfield` component

- Published fleshed-out documentation notebook at https://mentat-collective.github.io/mathlive.cljs

- Upgraded `mathlive` to `0.86.0` and `compute-engine` to `0.12.2`

## 0.0.1

- First release!
