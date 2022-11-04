(ns mathlive.clerk-ui
  (:require #?(:cljs [mathlive-cljs.core])
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
           :aliases    {'ml 'mathlive-cljs.core}
           :namespaces {'mathlive-cljs.core
                        (sci/copy-ns mathlive-cljs.core
                                     (sci/create-ns 'mathlive-cljs.core))}}))

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
        {}
        {})))
