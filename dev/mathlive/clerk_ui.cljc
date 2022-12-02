(ns mathlive.clerk-ui
  (:require
   #?@(:clj  [[nextjournal.clerk :as clerk]]
       :cljs [[mathlive.core]
              ["@cortex-js/compute-engine"]
              [nextjournal.clerk.sci-env]
              [nextjournal.clerk.static-app]
              [nextjournal.clerk.trim-image]
              [sci.core :as sci]
              [sci.ctx-store]]))
  #?(:cljs
     (:require-macros [mathlive.clerk-ui])))

;; ## SCI Customization
;;
;; The mathlive.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

#?(:cljs
   (sci.ctx-store/swap-ctx!
    sci/merge-opts
    {:classes    {'Math js/Math}
     :aliases    {'ml 'mathlive.core}
     :namespaces
     {'mathlive.core
      (sci/copy-ns mathlive.core (sci/create-ns 'mathlive.core))}}))

;; ## Example Macro

#?(:clj
   (defmacro cljs [& exprs]
     `(nextjournal.clerk/with-viewer
        {:transform-fn nextjournal.clerk/mark-presented
         :render-fn '(fn [_#]
                       (let [result# (do ~@exprs)]
                         (v/html
                          (if (vector? result#)
                            result#
                            [v/inspect result#]))))}
        {})))
