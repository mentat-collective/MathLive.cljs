(ns user
  (:require [hiccup.page :as hiccup]
            [nextjournal.clerk :as clerk]
            [nextjournal.clerk.config :as config]
            [nextjournal.clerk.view]))

(defn rebind [^clojure.lang.Var v f]
  (let [old (.getRawRoot v)]
    (.bindRoot v (f old))))

;; my attempt at injecting the CSS for my viewers...
(defonce _ignore
  (rebind
   #'nextjournal.clerk.view/include-viewer-css
   (fn [old]
     (fn []
       (concat
        (list
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.85.1/dist/mathlive-static.css")
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.85.1/dist/mathlive-fonts.css"))
        (old))))))


(defn start! []
  (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/main.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]})
  (Thread/sleep 500)
  (clerk/show! "dev/mathlive/notebook.clj"))

(defn github-pages! [_]
  (swap! config/!resource->url merge {"/js/viewer.js" "/js/main.js"})
  (clerk/build!
   {:index "dev/mathlive/notebook.clj"
    :bundle? false
    :browse? false
    :out-path "public"}))
