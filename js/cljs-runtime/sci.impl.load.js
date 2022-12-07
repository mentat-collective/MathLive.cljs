import "./cljs_env.js";
goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__71459){
var vec__71462 = p__71459;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71462,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (k instanceof cljs.core.Symbol);
if(and__4251__auto__){
var and__4251__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__71465){
var map__71466 = p__71465;
var map__71466__$1 = cljs.core.__destructure_map(map__71466);
var _parsed_libspec = map__71466__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71466__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__71468 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71468,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5753__auto___72187 = (function (){var G__71472 = the_loaded_ns;
var G__71472__$1 = (((G__71472 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__71472));
var G__71472__$2 = (((G__71472__$1 == null))?null:cljs.core.meta(G__71472__$1));
if((G__71472__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__71472__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___72187)){
var on_loaded_72191 = temp__5753__auto___72187;
var G__71474_72192 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_72191.cljs$core$IFn$_invoke$arity$1 ? on_loaded_72191.cljs$core$IFn$_invoke$arity$1(G__71474_72192) : on_loaded_72191.call(null,G__71474_72192));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var temp__5751__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5751__auto__)){
var as_alias = temp__5751__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__71478 = opts;
var map__71478__$1 = cljs.core.__destructure_map(map__71478);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71478__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71478__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = reload_all;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5751__auto___72202__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5751__auto___72202__$1)){
var the_loaded_ns_72203 = temp__5751__auto___72202__$1;
var loading_72204 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4251__auto__ = loading_72204;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_72204.indexOf(lib__$1))));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_72204,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_72203,lib__$1,opts));
}
} else {
var temp__5751__auto___72209__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___72209__$2)){
var load_fn_72211 = temp__5751__auto___72209__$2;
var curr_ns_72212 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5751__auto___72213__$3 = (function (){var G__71483 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_72212),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__4253__auto__ = reload;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_72211.cljs$core$IFn$_invoke$arity$1 ? load_fn_72211.cljs$core$IFn$_invoke$arity$1(G__71483) : load_fn_72211.call(null,G__71483));
})();
if(cljs.core.truth_(temp__5751__auto___72213__$3)){
var map__71485_72217 = temp__5751__auto___72213__$3;
var map__71485_72218__$1 = cljs.core.__destructure_map(map__71485_72217);
var file_72219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71485_72218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_72220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71485_72218__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_72221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71485_72218__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_72222__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_72220)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_72212,sci.impl.utils.current_file,file_72219]));

try{var fexpr__71494_72225 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__71494_72225.cljs$core$IFn$_invoke$arity$2 ? fexpr__71494_72225.cljs$core$IFn$_invoke$arity$2(ctx_72222__$1,source_72220) : fexpr__71494_72225.call(null,ctx_72222__$1,source_72220));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e71490){if((e71490 instanceof Error)){
var e_72226 = e71490;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_72226;
} else {
throw e71490;

}
}} else {
}

if(cljs.core.truth_(handled_72221)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__4253__auto___72230 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4253__auto___72230)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);

return null;
}
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72234 = arguments.length;
var i__4865__auto___72236 = (0);
while(true){
if((i__4865__auto___72236 < len__4864__auto___72234)){
args__4870__auto__.push((arguments[i__4865__auto___72236]));

var G__72237 = (i__4865__auto___72236 + (1));
i__4865__auto___72236 = G__72237;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4251__auto__ = prefix;
if(cljs.core.truth_(and__4251__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4251__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq71524){
var G__71525 = cljs.core.first(seq71524);
var seq71524__$1 = cljs.core.next(seq71524);
var G__71526 = cljs.core.first(seq71524__$1);
var seq71524__$2 = cljs.core.next(seq71524__$1);
var G__71527 = cljs.core.first(seq71524__$2);
var seq71524__$3 = cljs.core.next(seq71524__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71525,G__71526,G__71527,seq71524__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_72242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_72243 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_72242,flags));
if(unsupported_72243){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_72243)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__71744 = cljs.core.seq(args_STAR___$1);
var chunk__71745 = null;
var count__71746 = (0);
var i__71747 = (0);
while(true){
if((i__71747 < count__71746)){
var arg = chunk__71745.cljs$core$IIndexed$_nth$arity$2(null,i__71747);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__71900_72250 = arg;
var seq__71901_72251 = cljs.core.seq(vec__71900_72250);
var first__71902_72252 = cljs.core.first(seq__71901_72251);
var seq__71901_72253__$1 = cljs.core.next(seq__71901_72251);
var prefix_72254 = first__71902_72252;
var args_STAR__72255__$2 = seq__71901_72253__$1;
if((prefix_72254 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__71916_72256 = cljs.core.seq(args_STAR__72255__$2);
var chunk__71919_72257 = null;
var count__71925_72258 = (0);
var i__71927_72259 = (0);
while(true){
if((i__71927_72259 < count__71925_72258)){
var arg_72261__$1 = chunk__71919_72257.cljs$core$IIndexed$_nth$arity$2(null,i__71927_72259);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_72254,sci.impl.load.prependss(arg_72261__$1,opts));


var G__72262 = seq__71916_72256;
var G__72263 = chunk__71919_72257;
var G__72264 = count__71925_72258;
var G__72265 = (i__71927_72259 + (1));
seq__71916_72256 = G__72262;
chunk__71919_72257 = G__72263;
count__71925_72258 = G__72264;
i__71927_72259 = G__72265;
continue;
} else {
var temp__5753__auto___72266 = cljs.core.seq(seq__71916_72256);
if(temp__5753__auto___72266){
var seq__71916_72267__$1 = temp__5753__auto___72266;
if(cljs.core.chunked_seq_QMARK_(seq__71916_72267__$1)){
var c__4679__auto___72268 = cljs.core.chunk_first(seq__71916_72267__$1);
var G__72269 = cljs.core.chunk_rest(seq__71916_72267__$1);
var G__72270 = c__4679__auto___72268;
var G__72271 = cljs.core.count(c__4679__auto___72268);
var G__72272 = (0);
seq__71916_72256 = G__72269;
chunk__71919_72257 = G__72270;
count__71925_72258 = G__72271;
i__71927_72259 = G__72272;
continue;
} else {
var arg_72273__$1 = cljs.core.first(seq__71916_72267__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_72254,sci.impl.load.prependss(arg_72273__$1,opts));


var G__72274 = cljs.core.next(seq__71916_72267__$1);
var G__72275 = null;
var G__72276 = (0);
var G__72277 = (0);
seq__71916_72256 = G__72274;
chunk__71919_72257 = G__72275;
count__71925_72258 = G__72276;
i__71927_72259 = G__72277;
continue;
}
} else {
}
}
break;
}
}


var G__72278 = seq__71744;
var G__72279 = chunk__71745;
var G__72280 = count__71746;
var G__72281 = (i__71747 + (1));
seq__71744 = G__72278;
chunk__71745 = G__72279;
count__71746 = G__72280;
i__71747 = G__72281;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71744);
if(temp__5753__auto__){
var seq__71744__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71744__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__71744__$1);
var G__72283 = cljs.core.chunk_rest(seq__71744__$1);
var G__72284 = c__4679__auto__;
var G__72285 = cljs.core.count(c__4679__auto__);
var G__72286 = (0);
seq__71744 = G__72283;
chunk__71745 = G__72284;
count__71746 = G__72285;
i__71747 = G__72286;
continue;
} else {
var arg = cljs.core.first(seq__71744__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__71981_72288 = arg;
var seq__71982_72289 = cljs.core.seq(vec__71981_72288);
var first__71983_72290 = cljs.core.first(seq__71982_72289);
var seq__71982_72291__$1 = cljs.core.next(seq__71982_72289);
var prefix_72292 = first__71983_72290;
var args_STAR__72293__$2 = seq__71982_72291__$1;
if((prefix_72292 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__71985_72295 = cljs.core.seq(args_STAR__72293__$2);
var chunk__71986_72296 = null;
var count__71987_72297 = (0);
var i__71988_72298 = (0);
while(true){
if((i__71988_72298 < count__71987_72297)){
var arg_72299__$1 = chunk__71986_72296.cljs$core$IIndexed$_nth$arity$2(null,i__71988_72298);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_72292,sci.impl.load.prependss(arg_72299__$1,opts));


var G__72300 = seq__71985_72295;
var G__72301 = chunk__71986_72296;
var G__72302 = count__71987_72297;
var G__72303 = (i__71988_72298 + (1));
seq__71985_72295 = G__72300;
chunk__71986_72296 = G__72301;
count__71987_72297 = G__72302;
i__71988_72298 = G__72303;
continue;
} else {
var temp__5753__auto___72304__$1 = cljs.core.seq(seq__71985_72295);
if(temp__5753__auto___72304__$1){
var seq__71985_72305__$1 = temp__5753__auto___72304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71985_72305__$1)){
var c__4679__auto___72306 = cljs.core.chunk_first(seq__71985_72305__$1);
var G__72307 = cljs.core.chunk_rest(seq__71985_72305__$1);
var G__72308 = c__4679__auto___72306;
var G__72309 = cljs.core.count(c__4679__auto___72306);
var G__72310 = (0);
seq__71985_72295 = G__72307;
chunk__71986_72296 = G__72308;
count__71987_72297 = G__72309;
i__71988_72298 = G__72310;
continue;
} else {
var arg_72311__$1 = cljs.core.first(seq__71985_72305__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_72292,sci.impl.load.prependss(arg_72311__$1,opts));


var G__72312 = cljs.core.next(seq__71985_72305__$1);
var G__72313 = null;
var G__72314 = (0);
var G__72315 = (0);
seq__71985_72295 = G__72312;
chunk__71986_72296 = G__72313;
count__71987_72297 = G__72314;
i__71988_72298 = G__72315;
continue;
}
} else {
}
}
break;
}
}


var G__72316 = cljs.core.next(seq__71744__$1);
var G__72317 = null;
var G__72318 = (0);
var G__72319 = (0);
seq__71744 = G__72316;
chunk__71745 = G__72317;
count__71746 = G__72318;
i__71747 = G__72319;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72320 = arguments.length;
var i__4865__auto___72321 = (0);
while(true){
if((i__4865__auto___72321 < len__4864__auto___72320)){
args__4870__auto__.push((arguments[i__4865__auto___72321]));

var G__72322 = (i__4865__auto___72321 + (1));
i__4865__auto___72321 = G__72322;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq72018){
var G__72019 = cljs.core.first(seq72018);
var seq72018__$1 = cljs.core.next(seq72018);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72019,seq72018__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72325 = arguments.length;
var i__4865__auto___72326 = (0);
while(true){
if((i__4865__auto___72326 < len__4864__auto___72325)){
args__4870__auto__.push((arguments[i__4865__auto___72326]));

var G__72327 = (i__4865__auto___72326 + (1));
i__4865__auto___72326 = G__72327;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq72038){
var G__72039 = cljs.core.first(seq72038);
var seq72038__$1 = cljs.core.next(seq72038);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72039,seq72038__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__72056 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72056,(1),null);
var G__72059_72331 = k;
var G__72059_72332__$1 = (((G__72059_72331 instanceof cljs.core.Keyword))?G__72059_72331.fqn:null);
switch (G__72059_72332__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym){
return (function (acc,p__72060){
var vec__72061 = p__72060;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72061,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72061,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__72059_72331,G__72059_72332__$1,vec__72056,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72059_72332__$1)].join('')));

}

var G__72362 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__72362;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4251__auto__ = to_do;
if(cljs.core.truth_(and__4251__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4251__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4253__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72370 = arguments.length;
var i__4865__auto___72371 = (0);
while(true){
if((i__4865__auto___72371 < len__4864__auto___72370)){
args__4870__auto__.push((arguments[i__4865__auto___72371]));

var G__72372 = (i__4865__auto___72371 + (1));
i__4865__auto___72371 = G__72372;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq72088){
var G__72089 = cljs.core.first(seq72088);
var seq72088__$1 = cljs.core.next(seq72088);
var G__72090 = cljs.core.first(seq72088__$1);
var seq72088__$2 = cljs.core.next(seq72088__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72089,G__72090,seq72088__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
