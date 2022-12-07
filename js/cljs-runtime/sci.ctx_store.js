import "./cljs_env.js";
goog.provide('sci.ctx_store');
/**
 * Dynamic var in which context is stored. Don't use directly, but only
 *   via public API.
 */
sci.ctx_store._STAR_ctx_STAR_ = null;
/**
 * Store `ctx`
 */
sci.ctx_store.reset_ctx_BANG_ = (function sci$ctx_store$reset_ctx_BANG_(ctx){
return (sci.ctx_store._STAR_ctx_STAR_ = ctx);
});
/**
 * Update `ctx` using `f` and `args`
 */
sci.ctx_store.swap_ctx_BANG_ = (function sci$ctx_store$swap_ctx_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75024 = arguments.length;
var i__4865__auto___75025 = (0);
while(true){
if((i__4865__auto___75025 < len__4864__auto___75024)){
args__4870__auto__.push((arguments[i__4865__auto___75025]));

var G__75026 = (i__4865__auto___75025 + (1));
i__4865__auto___75025 = G__75026;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.ctx_store.swap_ctx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (sci.ctx_store._STAR_ctx_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,sci.ctx_store._STAR_ctx_STAR_,args));
}));

(sci.ctx_store.swap_ctx_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.ctx_store.swap_ctx_BANG_.cljs$lang$applyTo = (function (seq75022){
var G__75023 = cljs.core.first(seq75022);
var seq75022__$1 = cljs.core.next(seq75022);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75023,seq75022__$1);
}));

/**
 * Retrieve stored ctx or throw an exception.
 */
sci.ctx_store.get_ctx = (function sci$ctx_store$get_ctx(){
var or__4253__auto__ = sci.ctx_store._STAR_ctx_STAR_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var msg = "No context found in: sci.ctx-store/*ctx*. Please set it using sci.ctx-store/reset-ctx!";
throw (new Error(msg));
}
});

//# sourceMappingURL=sci.ctx_store.js.map
