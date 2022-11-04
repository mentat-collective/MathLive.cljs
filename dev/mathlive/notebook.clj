;; # Mathlive.cljs
;;
;; _alpha - [feedback welcome](https://github.com/mentat-collective/mathlive.cljs)_
;;
;; Mathlive!
;;
;; ## Features
;;
;; 1. First feature!
;;
;; 2. Second feature.
;;
;; ## Usage
;;
;; ```clj
;; ;; deps
;; {org.mentat/mathlive.cljs {:git/sha "$GIT_SHA"}}
;;
;; ;; namespace
;; (ns my-app
;;   (:require [mathlive-cljs.core :as ml]
;;             [reagent.core :as reagent]))
;;```
;;
;; Hi!

^#:nextjournal.clerk
{:toc true
 :no-cache true
 :visibility :hide-ns}
(ns mathlive.notebook
  (:require [mathlive.clerk-ui :refer [cljs]]))

;; ## Demo
;;
;; Let's get some shared state:

(cljs
 (defonce state
   (reagent/atom "hello")))

;; Then a mathfield:

^{:nextjournal.clerk/width :wide}
(cljs
 [ml/Mathfield {} state])
