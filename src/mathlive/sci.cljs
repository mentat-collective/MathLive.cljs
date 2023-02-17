(ns mathlive.sci
  "Functions and vars for installation of all namespaces into an SCI context."
  (:require [mathlive.core]
            [sci.core :as sci]
            [sci.ctx-store]))

(def mathlive-core-namespace
  (sci/copy-ns mathlive.core (sci/create-ns 'mathlive.core)))

(def ^{:doc "Map of symbol to SCI namespace object. This var is usable as the
`:namespaces` entry in an SCI context config."}
  namespaces
  {'mathlive.core mathlive-core-namespace})

(def ^{:doc "SCI config that will install all of MathLive.cljs into an SCI context,
  with no aliases registered."}
  config
  {:classes {'Math js/Math}
   :namespaces namespaces})

(defn install!
  "Installs [[config]] into the shared SCI context store."
  []
  (sci.ctx-store/swap-ctx!
   sci/merge-opts
   config))
