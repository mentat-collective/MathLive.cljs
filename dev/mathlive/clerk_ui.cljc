(ns mathlive.clerk-ui
  (:require #?(:cljs [mathlive.core])
            #?(:clj  [nextjournal.clerk :as clerk])
            #?(:cljs [nextjournal.clerk.sci-viewer :as sv])
            #?(:cljs [sci.core :as sci]))
  #?(:cljs
     (:require-macros [mathlive.clerk-ui])))

;; ## SCI Customization
;;
;; The mathlive.core require and the following form make it possible to use this
;; library's CLJS code in the Clerk notebooks that document the library.

#?(:cljs
   (swap! sv/!sci-ctx
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
