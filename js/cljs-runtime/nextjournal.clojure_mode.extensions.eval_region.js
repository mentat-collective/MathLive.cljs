import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4253__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__67723_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__67723_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__67723_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj67748 = (function (){var obj67747 = (function (){var parent__65608__auto__ = (state["selection"]);
var f__65609__auto__ = (parent__65608__auto__["asSingle"]);
return f__65609__auto__.call(parent__65608__auto__);
})();
if((!((obj67747 == null)))){
return (obj67747["ranges"]);
} else {
return undefined;
}
})();
if((!((obj67748 == null)))){
return (obj67748[(0)]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__67782 = arguments.length;
switch (G__67782) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj67789 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj67789 == null)))){
return (obj67789["from"]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__67795 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__67795__$1 = (((G__67795 == null))?null:(function (p1__67767_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__67767_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__67767_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__67767_SHARP_) <= from)))))){
var G__67809 = p1__67767_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__67767_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__67767_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__67767_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__67767_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__67809,from,(-1)));
} else {
return G__67809;
}
} else {
return null;
}
})(G__67795));
var G__67795__$2 = (((G__67795__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__67795__$1));
if((G__67795__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__67795__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj67859 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
if((!((obj67859 == null)))){
return (obj67859["from"]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4253__auto__ = (function (){var G__67863 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67861_SHARP_){
return p1__67861_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__67863 == null)){
return null;
} else {
var obj67864 = G__67863;
if((!((obj67864 == null)))){
return (obj67864["value"]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__67869,value){
var map__67871 = p__67869;
var map__67871__$1 = (((((!((map__67871 == null))))?(((((map__67871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67871):map__67871);
var view = map__67871__$1;
var dispatch = (function (){var obj67876 = map__67871__$1;
if((!((obj67876 == null)))){
return (obj67876["dispatch"]);
} else {
return undefined;
}
})();
var state = (function (){var obj67877 = map__67871__$1;
if((!((obj67877 == null)))){
return (obj67877["state"]);
} else {
return undefined;
}
})();
var G__67879 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__67879) : dispatch.call(null,G__67879));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__67882){
var map__67883 = p__67882;
var map__67883__$1 = (((((!((map__67883 == null))))?(((((map__67883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67883):map__67883);
var from = (function (){var obj67885 = map__67883__$1;
if((!((obj67885 == null)))){
return (obj67885["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67886 = map__67883__$1;
if((!((obj67886 == null)))){
return (obj67886["to"]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__67896){
var map__67898 = p__67896;
var map__67898__$1 = (((((!((map__67898 == null))))?(((((map__67898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67898):map__67898);
var state = (function (){var obj67900 = map__67898__$1;
if((!((obj67900 == null)))){
return (obj67900["state"]);
} else {
return undefined;
}
})();
var map__67901 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__67901__$1 = cljs.core.__destructure_map(map__67901);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67901__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67901__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67901__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = Alt;
if(cljs.core.truth_(and__4251__auto__)){
return Shift;
} else {
return and__4251__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4253__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__67895_SHARP_){
return cljs.core.not((function (){var obj67902 = p1__67895_SHARP_;
if((!((obj67902 == null)))){
return (obj67902["empty"]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5751__auto__)){
var range = temp__5751__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4253__auto__ = (function (){var G__67916 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__67916__$1 = (((G__67916 == null))?null:(function (){var obj__65597__auto__ = G__67916;
var f__65598__auto__ = (obj__65597__auto__["iter"]);
return f__65598__auto__.call(obj__65597__auto__);
})());
if((G__67916__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__67916__$1,(function (p1__67915_SHARP_){
var obj67917 = p1__67915_SHARP_;
if((!((obj67917 == null)))){
return (obj67917["value"]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__67919){
var map__67921 = p__67919;
var map__67921__$1 = (((((!((map__67921 == null))))?(((((map__67921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67921):map__67921);
var view = map__67921__$1;
var state = (function (){var obj67923 = map__67921__$1;
if((!((obj67923 == null)))){
return (obj67923["state"]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__67924,p__67925){
var map__67926 = p__67924;
var map__67926__$1 = (((((!((map__67926 == null))))?(((((map__67926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67926):map__67926);
var event = map__67926__$1;
var altKey = (function (){var obj67930 = map__67926__$1;
if((!((obj67930 == null)))){
return (obj67930["altKey"]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj67931 = map__67926__$1;
if((!((obj67931 == null)))){
return (obj67931["shiftKey"]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj67932 = map__67926__$1;
if((!((obj67932 == null)))){
return (obj67932["metaKey"]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj67933 = map__67926__$1;
if((!((obj67933 == null)))){
return (obj67933["controlKey"]);
} else {
return undefined;
}
})();
var type = (function (){var obj67934 = map__67926__$1;
if((!((obj67934 == null)))){
return (obj67934["type"]);
} else {
return undefined;
}
})();
var map__67927 = p__67925;
var map__67927__$1 = (((((!((map__67927 == null))))?(((((map__67927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67927):map__67927);
var view = map__67927__$1;
var state = (function (){var obj67936 = map__67927__$1;
if((!((obj67936 == null)))){
return (obj67936["state"]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__67937 = cljs.core.PersistentArrayMap.EMPTY;
var G__67937__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67937,"Alt",true):G__67937);
var G__67937__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67937__$1,"Shift",true):G__67937__$1);
var G__67937__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67937__$2,"Meta",true):G__67937__$2);
var G__67937__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67937__$3,"Control",true):G__67937__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67937__$4,"Enter",true);
} else {
return G__67937__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__67938){
var map__67939 = p__67938;
var map__67939__$1 = (((((!((map__67939 == null))))?(((((map__67939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67939):map__67939);
var view = map__67939__$1;
var state = (function (){var obj67942 = map__67939__$1;
if((!((obj67942 == null)))){
return (obj67942["state"]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj67943 = map__67939__$1;
if((!((obj67943 == null)))){
return (obj67943["dispatch"]);
} else {
return undefined;
}
})();
var map__67944 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__67944__$1 = (((((!((map__67944 == null))))?(((((map__67944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67944):map__67944);
var from = (function (){var obj67947 = map__67944__$1;
if((!((obj67947 == null)))){
return (obj67947["from"]);
} else {
return undefined;
}
})();
var to = (function (){var obj67948 = map__67944__$1;
if((!((obj67948 == null)))){
return (obj67948["to"]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__67949_68002 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__67949_68002) : dispatch.call(null,G__67949_68002));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__67952){
var map__67953 = p__67952;
var map__67953__$1 = cljs.core.__destructure_map(map__67953);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67953__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__67954 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__67954 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__67954);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__67955 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__67955 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__67955);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
