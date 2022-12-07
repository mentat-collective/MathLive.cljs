import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
/**
 * @define {boolean}
 */
nextjournal.clojure_mode.util.node_js_QMARK_ = goog.define("nextjournal.clojure_mode.util.node_js_QMARK_",false);
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__67342 = arguments.length;
switch (G__67342) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__67344 = arguments.length;
switch (G__67344) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__65597__auto__ = (function (){var parent__65608__auto__ = (state["doc"]);
var f__65609__auto__ = (parent__65608__auto__["lineAt"]);
return f__65609__auto__.call(parent__65608__auto__,from);
})();
var f__65598__auto__ = (obj__65597__auto__["slice"]);
return f__65598__auto__.call(obj__65597__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__67345 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__67345__$1 = cljs.core.__destructure_map(map__67345);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67345__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__67346 = ({"range": (function (){var or__4253__auto__ = range;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj67348 = G__67346;
(obj67348["changes"] = change_desc);

return obj67348;
} else {
return G__67346;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__67355 = arguments.length;
switch (G__67355) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__67353_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__67353_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4253__auto__ = (function (){var temp__5757__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5757__auto__ == null)){
return null;
} else {
var result = temp__5757__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__67367 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__67367) : dispatch.call(null,G__67367));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67543 = arguments.length;
var i__4865__auto___67544 = (0);
while(true){
if((i__4865__auto___67544 < len__4864__auto___67543)){
args__4870__auto__.push((arguments[i__4865__auto___67544]));

var G__67545 = (i__4865__auto___67544 + (1));
i__4865__auto___67544 = G__67545;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__67377){
var vec__67378 = p__67377;
var map__67381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67378,(0),null);
var map__67381__$1 = cljs.core.__destructure_map(map__67381);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67381__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__67397 = result;
var map__67397__$1 = (((((!((map__67397 == null))))?(((((map__67397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67397):map__67397);
var done = (function (){var obj67405 = map__67397__$1;
if((!((obj67405 == null)))){
return (obj67405["done"]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj67406 = map__67397__$1;
if((!((obj67406 == null)))){
return (obj67406["lineBreak"]);
} else {
return undefined;
}
})();
var value = (function (){var obj67407 = map__67397__$1;
if((!((obj67407 == null)))){
return (obj67407["value"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = done;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__67546 = iterator.next();
var G__67547 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var Array67408 = changes;
Array67408.push(change);

return Array67408;
} else {
return changes;
}
})();
var G__67548 = (from_pos + ((value).length));
var G__67549 = (function (){var G__67410 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__67410 + (1));
} else {
return G__67410;
}
})();
result = G__67546;
changes = G__67547;
from_pos = G__67548;
line_num = G__67549;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq67368){
var G__67369 = cljs.core.first(seq67368);
var seq67368__$1 = cljs.core.next(seq67368);
var G__67370 = cljs.core.first(seq67368__$1);
var seq67368__$2 = cljs.core.next(seq67368__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67369,G__67370,seq67368__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__67418){
var map__67425 = p__67418;
var map__67425__$1 = (((((!((map__67425 == null))))?(((((map__67425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67425):map__67425);
var range = map__67425__$1;
var from = (function (){var obj67430 = map__67425__$1;
if((!((obj67430 == null)))){
return (obj67430["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67431 = map__67425__$1;
if((!((obj67431 == null)))){
return (obj67431["to"]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj67432 = map__67425__$1;
if((!((obj67432 == null)))){
return (obj67432["anchor"]);
} else {
return undefined;
}
})();
var head = (function (){var obj67433 = map__67425__$1;
if((!((obj67433 == null)))){
return (obj67433["head"]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__67448 = line;
var map__67448__$1 = (((((!((map__67448 == null))))?(((((map__67448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67448):map__67448);
var line_number = (function (){var obj67450 = map__67448__$1;
if((!((obj67450 == null)))){
return (obj67450["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj67451 = map__67448__$1;
if((!((obj67451 == null)))){
return (obj67451["to"]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5751__auto__ = (function (){var and__4251__auto__ = (to > line_to);
if(and__4251__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__67448,map__67448__$1,line_number,line_to,changes,map__67425,map__67425__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__67412_SHARP_){
return (p1__67412_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__67448,map__67448__$1,line_number,line_to,changes,map__67425,map__67425__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__67552 = next_line;
line = G__67552;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__67456,f){
var map__67458 = p__67456;
var map__67458__$1 = (((((!((map__67458 == null))))?(((((map__67458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67458):map__67458);
var tr = map__67458__$1;
var map__67459 = (function (){var obj67462 = map__67458__$1;
if((!((obj67462 == null)))){
return (obj67462["state"]);
} else {
return undefined;
}
})();
var map__67459__$1 = (((((!((map__67459 == null))))?(((((map__67459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67459):map__67459);
var state = map__67459__$1;
var doc = (function (){var obj67464 = map__67459__$1;
if((!((obj67464 == null)))){
return (obj67464["doc"]);
} else {
return undefined;
}
})();
var changes = (function (){var obj67465 = map__67458__$1;
if((!((obj67465 == null)))){
return (obj67465["changes"]);
} else {
return undefined;
}
})();
var effects = (function (){var obj67466 = map__67458__$1;
if((!((obj67466 == null)))){
return (obj67466["effects"]);
} else {
return undefined;
}
})();
var selection = (function (){var obj67467 = map__67458__$1;
if((!((obj67467 == null)))){
return (obj67467["selection"]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__67469 = doc.lineAt(from_b);
var map__67469__$1 = (((((!((map__67469 == null))))?(((((map__67469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67469):map__67469);
var line = map__67469__$1;
var line_number = (function (){var obj67471 = map__67469__$1;
if((!((obj67471 == null)))){
return (obj67471["number"]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj67472 = map__67469__$1;
if((!((obj67472 == null)))){
return (obj67472["to"]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4251__auto__ = next_line;
if(cljs.core.truth_(and__4251__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4251__auto__;
}
})())){
var G__67557 = next_line;
line__$1 = G__67557;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__67475 = (function (){var obj67476 = (function (){var obj67480 = tr;
if((!((obj67480 == null)))){
var out67481 = ({});
var k__65475__auto___67558 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__65475__auto___67558,obj67480)){
var obj67489_67559 = out67481;
(obj67489_67559[k__65475__auto___67558] = (obj67480[k__65475__auto___67558]));

} else {
}

var k__65475__auto___67561 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__65475__auto___67561,obj67480)){
var obj67490_67562 = out67481;
(obj67490_67562[k__65475__auto___67561] = (obj67480[k__65475__auto___67561]));

} else {
}

var k__65475__auto___67563 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__65475__auto___67563,obj67480)){
var obj67492_67564 = out67481;
(obj67492_67564[k__65475__auto___67563] = (obj67480[k__65475__auto___67563]));

} else {
}

return out67481;
} else {
return ({});
}
})();
var obj67495 = (((!((obj67476 == null))))?obj67476:({}));
(obj67495["changes"] = changes.compose(next_changeset));

return obj67495;
})();
var G__67475__$1 = (cljs.core.truth_(selection)?(function (){var obj67499 = G__67475;
var obj67500 = (((!((obj67499 == null))))?obj67499:({}));
(obj67500["selection"] = state.selection.map(next_changeset));

return obj67500;
})():G__67475);
if(cljs.core.truth_(effects)){
var obj67503 = G__67475__$1;
var obj67504 = (((!((obj67503 == null))))?obj67503:({}));
(obj67504["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj67504;
} else {
return G__67475__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__67508){
var map__67509 = p__67508;
var map__67509__$1 = (((((!((map__67509 == null))))?(((((map__67509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67509):map__67509);
var map__67510 = (function (){var obj67512 = map__67509__$1;
if((!((obj67512 == null)))){
return (obj67512["selection"]);
} else {
return undefined;
}
})();
var map__67510__$1 = (((((!((map__67510 == null))))?(((((map__67510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67510):map__67510);
var ranges = (function (){var obj67514 = map__67510__$1;
if((!((obj67514 == null)))){
return (obj67514["ranges"]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__67507_SHARP_){
return p1__67507_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__67517){
var map__67522 = p__67517;
var map__67522__$1 = (((((!((map__67522 == null))))?(((((map__67522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67522):map__67522);
var selection = map__67522__$1;
var from = (function (){var obj67525 = map__67522__$1;
if((!((obj67525 == null)))){
return (obj67525["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67526 = map__67522__$1;
if((!((obj67526 == null)))){
return (obj67526["to"]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__65608__auto__ = (state["doc"]);
var f__65609__auto__ = (parent__65608__auto__["slice"]);
return f__65609__auto__.call(parent__65608__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
