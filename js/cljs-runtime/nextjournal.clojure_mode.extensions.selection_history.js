import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.selection_history');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.selection_history.event_annotation = nextjournal.clojure_mode.util.user_event_annotation("selectionhistory");
nextjournal.clojure_mode.extensions.selection_history.second_last = (function nextjournal$clojure_mode$extensions$selection_history$second_last(arr){
if((arr.length > (1))){
return (arr[(arr.length - (1))]);
} else {
return null;
}
});
nextjournal.clojure_mode.extensions.selection_history.ser = (function nextjournal$clojure_mode$extensions$selection_history$ser(selection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"head","head",-771383919)),new cljs.core.Keyword(null,"ranges","ranges",1887686682).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(selection.toJSON(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_ = (function nextjournal$clojure_mode$extensions$selection_history$something_selected_QMARK_(selection){
return cljs.core.some((function (p1__67726_SHARP_){
return cljs.core.not(p1__67726_SHARP_.empty);
}),selection.ranges);
});
/**
 * Stores selection history
 */
nextjournal.clojure_mode.extensions.selection_history.selection_history_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create": (function (state){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),state.selection], null),null,(1),null));
}), "update": (function (stack,p__67730){
var map__67732 = p__67730;
var map__67732__$1 = (((((!((map__67732 == null))))?(((((map__67732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67732):map__67732);
var tr = map__67732__$1;
var map__67733 = (function (){var obj67735 = map__67732__$1;
if((!((obj67735 == null)))){
return (obj67735["state"]);
} else {
return undefined;
}
})();
var map__67733__$1 = (((((!((map__67733 == null))))?(((((map__67733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67733):map__67733);
var selection = (function (){var obj67739 = map__67733__$1;
if((!((obj67739 == null)))){
return (obj67739["selection"]);
} else {
return undefined;
}
})();
var docChanged = (function (){var obj67741 = map__67732__$1;
if((!((obj67741 == null)))){
return (obj67741["docChanged"]);
} else {
return undefined;
}
})();
var previous_position = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_(nextjournal.clojure_mode.selections.eq_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(x),selection))){
return i;
} else {
return null;
}
}),stack));
if(cljs.core.truth_(docChanged)){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.not(nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_(selection))){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.truth_(previous_position)){
var vec__67751 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(previous_position,stack);
var seq__67752 = cljs.core.seq(vec__67751);
var first__67753 = cljs.core.first(seq__67752);
var seq__67752__$1 = cljs.core.next(seq__67752);
var f = first__67753;
var more = seq__67752__$1;
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.first(stack))),more);
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),stack);

}
}
}
})}));
nextjournal.clojure_mode.extensions.selection_history.extension = (function nextjournal$clojure_mode$extensions$selection_history$extension(){
return nextjournal.clojure_mode.extensions.selection_history.selection_history_field;
});
nextjournal.clojure_mode.extensions.selection_history.stack = (function nextjournal$clojure_mode$extensions$selection_history$stack(state){
return state.field(nextjournal.clojure_mode.extensions.selection_history.selection_history_field);
});
nextjournal.clojure_mode.extensions.selection_history.grow_1 = (function nextjournal$clojure_mode$extensions$selection_history$grow_1(state,start,end){
var node = nextjournal.clojure_mode.node.nearest_touching(state,end,(-1));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67772){
var map__67777 = p__67772;
var map__67777__$1 = (((((!((map__67777 == null))))?(((((map__67777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67777):map__67777);
var a_start = (function (){var obj67783 = map__67777__$1;
if((!((obj67783 == null)))){
return (obj67783["from"]);
} else {
return undefined;
}
})();
var a_end = (function (){var obj67786 = map__67777__$1;
if((!((obj67786 == null)))){
return (obj67786["to"]);
} else {
return undefined;
}
})();
return (((a_start <= start)) && ((((a_end >= end)) && ((!((((a_start === start)) && ((a_end === end)))))))));
}),cljs.core.cons(node,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.inner_span,cljs.core.identity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.ancestors(node)], 0)))));
});
nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_grow_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (p__67792){
var map__67793 = p__67792;
var map__67793__$1 = (((((!((map__67793 == null))))?(((((map__67793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67793):map__67793);
var range = map__67793__$1;
var from = (function (){var obj67798 = map__67793__$1;
if((!((obj67798 == null)))){
return (obj67798["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67800 = map__67793__$1;
if((!((obj67800 == null)))){
return (obj67800["to"]);
} else {
return undefined;
}
})();
var empty = (function (){var obj67801 = map__67793__$1;
if((!((obj67801 == null)))){
return (obj67801["empty"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4253__auto__ = (function (){var G__67803 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
if((G__67803 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__67803);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return range;
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4253__auto__ = (function (){var G__67807 = nextjournal.clojure_mode.extensions.selection_history.grow_1(state,from,to);
if((G__67807 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.range(G__67807);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return range;
}
})()], null);
}
}));
});
nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_return_STAR_(state){
var temp__5751__auto__ = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.second(nextjournal.clojure_mode.extensions.selection_history.stack(state)));
if(cljs.core.truth_(temp__5751__auto__)){
var selection = temp__5751__auto__;
return state.update(({"selection": selection, "annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}));
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (range){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),range.from], null);
}));
}
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.selection_history.js.map
