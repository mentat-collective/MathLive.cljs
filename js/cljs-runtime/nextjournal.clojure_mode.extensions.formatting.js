import "./cljs_env.js";
goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__67740){
var map__67743 = p__67740;
var map__67743__$1 = (((((!((map__67743 == null))))?(((((map__67743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67743):map__67743);
var type = map__67743__$1;
var type_name = (function (){var obj67749 = map__67743__$1;
if((!((obj67749 == null)))){
return (obj67749["name"]);
} else {
return undefined;
}
})();
return (function (p__67754){
var map__67758 = p__67754;
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var context = map__67758__$1;
var pos = (function (){var obj67760 = map__67758__$1;
if((!((obj67760 == null)))){
return (obj67760["pos"]);
} else {
return undefined;
}
})();
var unit = (function (){var obj67762 = map__67758__$1;
if((!((obj67762 == null)))){
return (obj67762["unit"]);
} else {
return undefined;
}
})();
var node = (function (){var obj67764 = map__67758__$1;
if((!((obj67764 == null)))){
return (obj67764["node"]);
} else {
return undefined;
}
})();
var state = (function (){var obj67766 = map__67758__$1;
if((!((obj67766 == null)))){
return (obj67766["state"]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__67771 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__67776 = (function (){var G__67779 = node;
var G__67779__$1 = (((G__67779 == null))?null:nextjournal.clojure_mode.node.down(G__67779));
var G__67779__$2 = (((G__67779__$1 == null))?null:nextjournal.clojure_mode.node.right(G__67779__$1));
if((G__67779__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__67779__$2);
}
})();
var fexpr__67775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["DefLike",null,"NS",null,"Operator",null], null), null);
return (fexpr__67775.cljs$core$IFn$_invoke$arity$1 ? fexpr__67775.cljs$core$IFn$_invoke$arity$1(G__67776) : fexpr__67775.call(null,G__67776));
} else {
return and__4251__auto__;
}
})())){
return (G__67771 + (1));
} else {
return G__67771;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__67797 = cljs.core.compare(indent,current_indent);
switch (G__67797) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67797)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67810_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__67810_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__67810_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__67810_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__67810_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__67819 = cljs.core.first(nodes);
var G__67819__$1 = (((G__67819 == null))?null:nextjournal.clojure_mode.node.end(G__67819));
if((G__67819__$1 == null)){
return null;
} else {
return (G__67819__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__67821){
var vec__67822 = p__67821;
var map__67827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67822,(0),null);
var map__67827__$1 = (((((!((map__67827 == null))))?(((((map__67827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67827):map__67827);
var n2 = (function (){var obj67832 = map__67827__$1;
if((!((obj67832 == null)))){
return (obj67832["type"]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj67833 = map__67827__$1;
if((!((obj67833 == null)))){
return (obj67833["from"]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj67834 = map__67827__$1;
if((!((obj67834 == null)))){
return (obj67834["to"]);
} else {
return undefined;
}
})();
var map__67829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67822,(1),null);
var map__67829__$1 = (((((!((map__67829 == null))))?(((((map__67829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67829):map__67829);
var n1 = (function (){var obj67841 = map__67829__$1;
if((!((obj67841 == null)))){
return (obj67841["type"]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj67844 = map__67829__$1;
if((!((obj67844 == null)))){
return (obj67844["from"]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj67845 = map__67829__$1;
if((!((obj67845 == null)))){
return (obj67845["to"]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__67846 = cljs.core.compare(actual,expected);
switch (G__67846) {
case (0):
return out;

break;
case (1):
var Array67847 = out;
Array67847.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return Array67847;

break;
case (-1):
var Array67849 = out;
Array67849.push(({"from": end1, "insert": " "}));

return Array67849;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__67851_67959 = cljs.core.seq(items);
var chunk__67852_67960 = null;
var count__67853_67962 = (0);
var i__67854_67963 = (0);
while(true){
if((i__67854_67963 < count__67853_67962)){
var i_67964 = chunk__67852_67960.cljs$core$IIndexed$_nth$arity$2(null,i__67854_67963);
arr.push(i_67964);


var G__67970 = seq__67851_67959;
var G__67971 = chunk__67852_67960;
var G__67972 = count__67853_67962;
var G__67973 = (i__67854_67963 + (1));
seq__67851_67959 = G__67970;
chunk__67852_67960 = G__67971;
count__67853_67962 = G__67972;
i__67854_67963 = G__67973;
continue;
} else {
var temp__5753__auto___67974 = cljs.core.seq(seq__67851_67959);
if(temp__5753__auto___67974){
var seq__67851_67975__$1 = temp__5753__auto___67974;
if(cljs.core.chunked_seq_QMARK_(seq__67851_67975__$1)){
var c__4679__auto___67976 = cljs.core.chunk_first(seq__67851_67975__$1);
var G__67977 = cljs.core.chunk_rest(seq__67851_67975__$1);
var G__67978 = c__4679__auto___67976;
var G__67979 = cljs.core.count(c__4679__auto___67976);
var G__67980 = (0);
seq__67851_67959 = G__67977;
chunk__67852_67960 = G__67978;
count__67853_67962 = G__67979;
i__67854_67963 = G__67980;
continue;
} else {
var i_67981 = cljs.core.first(seq__67851_67975__$1);
arr.push(i_67981);


var G__67982 = cljs.core.next(seq__67851_67975__$1);
var G__67983 = null;
var G__67984 = (0);
var G__67985 = (0);
seq__67851_67959 = G__67982;
chunk__67852_67960 = G__67983;
count__67853_67962 = G__67984;
i__67854_67963 = G__67985;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__67865 = cljs.core.compare(indent,current_indent);
switch (G__67865) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67865)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__67867 = changes;
var G__67867__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__67867,space_changes):G__67867);
if(cljs.core.truth_(indentation_change)){
var Array67868 = G__67867__$1;
Array67868.push(indentation_change);

return Array67868;
} else {
return G__67867__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__67872,changes,range){
var map__67874 = p__67872;
var map__67874__$1 = (((((!((map__67874 == null))))?(((((map__67874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67874):map__67874);
var line = map__67874__$1;
var from = (function (){var obj67878 = map__67874__$1;
if((!((obj67878 == null)))){
return (obj67878["from"]);
} else {
return undefined;
}
})();
var text = (function (){var obj67880 = map__67874__$1;
if((!((obj67880 == null)))){
return (obj67880["text"]);
} else {
return undefined;
}
})();
var number = (function (){var obj67881 = map__67874__$1;
if((!((obj67881 == null)))){
return (obj67881["number"]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5751__auto__ = (function (){var G__67887 = origin;
switch (G__67887) {
case "input":
case "input.type":
case "delete":
case "keyboardselection":
case "pointerselection":
case "select.pointer":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var changes = temp__5751__auto__;
return tr.startState.update((function (){var obj67889 = changes;
var obj67890 = (((!((obj67889 == null))))?obj67889:({}));
(obj67890["filter"] = false);

return obj67890;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
