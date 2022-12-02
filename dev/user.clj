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
     (fn [& xs]
       (concat
        (list
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.85.1/dist/mathlive-static.css")
         (hiccup/include-css
          "https://unpkg.com/mathlive@0.85.1/dist/mathlive-fonts.css"))
        (apply old xs))))))

(defn start! []
  (swap! config/!resource->url merge {"/js/viewer.js" "http://localhost:8765/js/viewer.js"})
  (clerk/serve!
   {:browse? true
    :watch-paths ["dev"]
    :port 7777})
  (Thread/sleep 500)
  (clerk/show! "dev/mathlive/notebook.clj"))

(defn github-pages! [_]
  (swap! config/!resource->url merge
         {"/js/viewer.js" "/mathlive.cljs/js/viewer.js"})
  (clerk/build!
   {:index "dev/mathlive/notebook.clj"
    :bundle? false
    :browse? false
    :out-path "public"}))

(defn publish-local!
  ([] (publish-local! nil))
  ([_]
   (swap! config/!resource->url merge {"/js/viewer.js" "/js/viewer.js"})
   (clerk/build!
    {:index "dev/mathlive/notebook.clj"
     :bundle? false
     :browse? false
     :out-path "public"})))

(comment
  (start!)
  (clerk/serve! {:browse? true})
  (publish-local!))
