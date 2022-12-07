import "./cljs_env.js";
goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__73538 = arguments.length;
switch (G__73538) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__73539 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73540 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73540);

try{var G__73541 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__73541);

return G__73541;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73539);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__73542 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73543 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73543);

try{var G__73544 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__73544);

return G__73544;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73542);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__73545 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73546 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73546);

try{var G__73547 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__73547);

return G__73547;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73545);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__73548 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73549 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73549);

try{var G__73550 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__73550);

return G__73550;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73548);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__73551 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__73552 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__73552);

try{var G__73553 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__73553);

return G__73553;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__73551);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__73559 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__73560 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73560);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73559);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73738 = arguments.length;
var i__4865__auto___73739 = (0);
while(true){
if((i__4865__auto___73739 < len__4864__auto___73738)){
args__4870__auto__.push((arguments[i__4865__auto___73739]));

var G__73740 = (i__4865__auto___73739 + (1));
i__4865__auto___73739 = G__73740;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__73562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__73563 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73564 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73565 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73566 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73567 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73569 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__73570 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__73571 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73572 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73573 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73574 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73575 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73576 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73577 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73570);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73571);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73572);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73573);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73574);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73576);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73577);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73568);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73567);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73566);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73565);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73564);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73563);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73562);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq73561){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73561));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__73580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__73581 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73581);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73580);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73745 = arguments.length;
var i__4865__auto___73746 = (0);
while(true){
if((i__4865__auto___73746 < len__4864__auto___73745)){
args__4870__auto__.push((arguments[i__4865__auto___73746]));

var G__73747 = (i__4865__auto___73746 + (1));
i__4865__auto___73746 = G__73747;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73586 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73587 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73588 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73589 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73590 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73591 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73592 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__73593 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73594 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73595 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73596 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73597 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73598 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73599 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73593);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73594);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73595);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73596);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73597);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73598);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73599);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73592);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73591);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73590);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73589);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73588);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73587);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73586);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq73582){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73582));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73749 = arguments.length;
var i__4865__auto___73750 = (0);
while(true){
if((i__4865__auto___73750 < len__4864__auto___73749)){
args__4870__auto__.push((arguments[i__4865__auto___73750]));

var G__73751 = (i__4865__auto___73750 + (1));
i__4865__auto___73750 = G__73751;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__73604 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__73605 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73606 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73607 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73608 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73609 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73610 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73611 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__73612 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__73613 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73614 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73615 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73616 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73617 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73618 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73619 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73612);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73613);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73614);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73615);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73616);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73618);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73619);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73610);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73609);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73608);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73607);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73606);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73605);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73604);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq73603){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73603));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73755 = arguments.length;
var i__4865__auto___73756 = (0);
while(true){
if((i__4865__auto___73756 < len__4864__auto___73755)){
args__4870__auto__.push((arguments[i__4865__auto___73756]));

var G__73757 = (i__4865__auto___73756 + (1));
i__4865__auto___73756 = G__73757;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73623 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73624 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73625 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73626 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73627 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73628 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73629 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__73630 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73631 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73632 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73633 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73634 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73635 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73636 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73630);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73631);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73632);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73633);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73634);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73635);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73636);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73629);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73628);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73627);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73626);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73625);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73624);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73623);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq73622){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73622));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73767 = arguments.length;
var i__4865__auto___73768 = (0);
while(true){
if((i__4865__auto___73768 < len__4864__auto___73767)){
args__4870__auto__.push((arguments[i__4865__auto___73768]));

var G__73769 = (i__4865__auto___73768 + (1));
i__4865__auto___73768 = G__73769;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__73638 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__73639 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73640 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73641 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73642 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73643 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73644 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__73645 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__73646 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73647 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__73648 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73649 = null;
var _STAR_print_newline_STAR__temp_val__73650 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73651 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73645);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73646);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73647);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73648);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73649);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73650);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73651);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73644);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73643);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73642);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73641);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73640);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73639);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73638);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq73637){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73637));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73771 = arguments.length;
var i__4865__auto___73772 = (0);
while(true){
if((i__4865__auto___73772 < len__4864__auto___73771)){
args__4870__auto__.push((arguments[i__4865__auto___73772]));

var G__73773 = (i__4865__auto___73772 + (1));
i__4865__auto___73772 = G__73773;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__73653 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73654 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73655 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73656 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73657 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73659 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__73660 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73661 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73662 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73663 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73664 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73665 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73666 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73660);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73661);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73662);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73663);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73665);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73666);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73659);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73658);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73657);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73656);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73655);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73654);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73653);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq73652){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73652));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73781 = arguments.length;
var i__4865__auto___73782 = (0);
while(true){
if((i__4865__auto___73782 < len__4864__auto___73781)){
args__4870__auto__.push((arguments[i__4865__auto___73782]));

var G__73783 = (i__4865__auto___73782 + (1));
i__4865__auto___73782 = G__73783;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__73674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__73675 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__73676 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__73677 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__73678 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__73679 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__73680 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__73681 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__73682 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__73683 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__73684 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__73685 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__73686 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__73687 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__73688 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__73689 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__73682);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__73683);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__73684);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__73685);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__73686);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__73687);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__73688);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__73689);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__73681);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__73680);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__73679);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__73678);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__73677);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__73676);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__73675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__73674);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq73669){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73669));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73790 = arguments.length;
var i__4865__auto___73791 = (0);
while(true){
if((i__4865__auto___73791 < len__4864__auto___73790)){
args__4870__auto__.push((arguments[i__4865__auto___73791]));

var G__73793 = (i__4865__auto___73791 + (1));
i__4865__auto___73791 = G__73793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__73696__auto__","s__73696__auto__",-495275852,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__73697__auto__","x__73697__auto__",-1385878723,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__73696__auto__","s__73696__auto__",-495275852,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__73697__auto__","x__73697__auto__",-1385878723,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__73696__auto__","s__73696__auto__",-495275852,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq73701){
var G__73702 = cljs.core.first(seq73701);
var seq73701__$1 = cljs.core.next(seq73701);
var G__73703 = cljs.core.first(seq73701__$1);
var seq73701__$2 = cljs.core.next(seq73701__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73702,G__73703,seq73701__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
