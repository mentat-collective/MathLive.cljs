import "./cljs_env.js";
goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__59124 = arguments.length;
switch (G__59124) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59125 = (function (f,blockable,meta59126){
this.f = f;
this.blockable = blockable;
this.meta59126 = meta59126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59127,meta59126__$1){
var self__ = this;
var _59127__$1 = this;
return (new cljs.core.async.t_cljs$core$async59125(self__.f,self__.blockable,meta59126__$1));
}));

(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59127){
var self__ = this;
var _59127__$1 = this;
return self__.meta59126;
}));

(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async59125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async59125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59126","meta59126",-2094322461,null)], null);
}));

(cljs.core.async.t_cljs$core$async59125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59125");

(cljs.core.async.t_cljs$core$async59125.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59125.
 */
cljs.core.async.__GT_t_cljs$core$async59125 = (function cljs$core$async$__GT_t_cljs$core$async59125(f__$1,blockable__$1,meta59126){
return (new cljs.core.async.t_cljs$core$async59125(f__$1,blockable__$1,meta59126));
});

}

return (new cljs.core.async.t_cljs$core$async59125(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__59138 = arguments.length;
switch (G__59138) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__59148 = arguments.length;
switch (G__59148) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__59160 = arguments.length;
switch (G__59160) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_61324 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61324) : fn1.call(null,val_61324));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61324) : fn1.call(null,val_61324));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__59162 = arguments.length;
switch (G__59162) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___61331 = n;
var x_61332 = (0);
while(true){
if((x_61332 < n__4741__auto___61331)){
(a[x_61332] = x_61332);

var G__61333 = (x_61332 + (1));
x_61332 = G__61333;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59165 = (function (flag,meta59166){
this.flag = flag;
this.meta59166 = meta59166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59167,meta59166__$1){
var self__ = this;
var _59167__$1 = this;
return (new cljs.core.async.t_cljs$core$async59165(self__.flag,meta59166__$1));
}));

(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59167){
var self__ = this;
var _59167__$1 = this;
return self__.meta59166;
}));

(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async59165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59166","meta59166",-180825835,null)], null);
}));

(cljs.core.async.t_cljs$core$async59165.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59165");

(cljs.core.async.t_cljs$core$async59165.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59165");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59165.
 */
cljs.core.async.__GT_t_cljs$core$async59165 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59165(flag__$1,meta59166){
return (new cljs.core.async.t_cljs$core$async59165(flag__$1,meta59166));
});

}

return (new cljs.core.async.t_cljs$core$async59165(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59172 = (function (flag,cb,meta59173){
this.flag = flag;
this.cb = cb;
this.meta59173 = meta59173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59174,meta59173__$1){
var self__ = this;
var _59174__$1 = this;
return (new cljs.core.async.t_cljs$core$async59172(self__.flag,self__.cb,meta59173__$1));
}));

(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59174){
var self__ = this;
var _59174__$1 = this;
return self__.meta59173;
}));

(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async59172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59173","meta59173",-1812430736,null)], null);
}));

(cljs.core.async.t_cljs$core$async59172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59172");

(cljs.core.async.t_cljs$core$async59172.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59172.
 */
cljs.core.async.__GT_t_cljs$core$async59172 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59172(flag__$1,cb__$1,meta59173){
return (new cljs.core.async.t_cljs$core$async59172(flag__$1,cb__$1,meta59173));
});

}

return (new cljs.core.async.t_cljs$core$async59172(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59187_SHARP_){
var G__59189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59187_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59189) : fret.call(null,G__59189));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59188_SHARP_){
var G__59190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59188_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59190) : fret.call(null,G__59190));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61336 = (i + (1));
i = G__61336;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61339 = arguments.length;
var i__4865__auto___61340 = (0);
while(true){
if((i__4865__auto___61340 < len__4864__auto___61339)){
args__4870__auto__.push((arguments[i__4865__auto___61340]));

var G__61341 = (i__4865__auto___61340 + (1));
i__4865__auto___61340 = G__61341;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59197){
var map__59198 = p__59197;
var map__59198__$1 = cljs.core.__destructure_map(map__59198);
var opts = map__59198__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59191){
var G__59192 = cljs.core.first(seq59191);
var seq59191__$1 = cljs.core.next(seq59191);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59192,seq59191__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__59200 = arguments.length;
switch (G__59200) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__59061__auto___61344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59249){
var state_val_59250 = (state_59249[(1)]);
if((state_val_59250 === (7))){
var inst_59240 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59251_61345 = state_59249__$1;
(statearr_59251_61345[(2)] = inst_59240);

(statearr_59251_61345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (1))){
var state_59249__$1 = state_59249;
var statearr_59252_61346 = state_59249__$1;
(statearr_59252_61346[(2)] = null);

(statearr_59252_61346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (4))){
var inst_59214 = (state_59249[(7)]);
var inst_59214__$1 = (state_59249[(2)]);
var inst_59221 = (inst_59214__$1 == null);
var state_59249__$1 = (function (){var statearr_59253 = state_59249;
(statearr_59253[(7)] = inst_59214__$1);

return statearr_59253;
})();
if(cljs.core.truth_(inst_59221)){
var statearr_59254_61347 = state_59249__$1;
(statearr_59254_61347[(1)] = (5));

} else {
var statearr_59255_61348 = state_59249__$1;
(statearr_59255_61348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (13))){
var state_59249__$1 = state_59249;
var statearr_59256_61349 = state_59249__$1;
(statearr_59256_61349[(2)] = null);

(statearr_59256_61349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (6))){
var inst_59214 = (state_59249[(7)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59249__$1,(11),to,inst_59214);
} else {
if((state_val_59250 === (3))){
var inst_59244 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59249__$1,inst_59244);
} else {
if((state_val_59250 === (12))){
var state_59249__$1 = state_59249;
var statearr_59257_61351 = state_59249__$1;
(statearr_59257_61351[(2)] = null);

(statearr_59257_61351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (2))){
var state_59249__$1 = state_59249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59249__$1,(4),from);
} else {
if((state_val_59250 === (11))){
var inst_59233 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
if(cljs.core.truth_(inst_59233)){
var statearr_59258_61353 = state_59249__$1;
(statearr_59258_61353[(1)] = (12));

} else {
var statearr_59259_61354 = state_59249__$1;
(statearr_59259_61354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (9))){
var state_59249__$1 = state_59249;
var statearr_59260_61356 = state_59249__$1;
(statearr_59260_61356[(2)] = null);

(statearr_59260_61356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (5))){
var state_59249__$1 = state_59249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59261_61357 = state_59249__$1;
(statearr_59261_61357[(1)] = (8));

} else {
var statearr_59262_61358 = state_59249__$1;
(statearr_59262_61358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (14))){
var inst_59238 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59263_61359 = state_59249__$1;
(statearr_59263_61359[(2)] = inst_59238);

(statearr_59263_61359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (10))){
var inst_59230 = (state_59249[(2)]);
var state_59249__$1 = state_59249;
var statearr_59264_61360 = state_59249__$1;
(statearr_59264_61360[(2)] = inst_59230);

(statearr_59264_61360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59250 === (8))){
var inst_59227 = cljs.core.async.close_BANG_(to);
var state_59249__$1 = state_59249;
var statearr_59265_61362 = state_59249__$1;
(statearr_59265_61362[(2)] = inst_59227);

(statearr_59265_61362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_59266 = [null,null,null,null,null,null,null,null];
(statearr_59266[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_59266[(1)] = (1));

return statearr_59266;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_59249){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59249);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59267){var ex__58871__auto__ = e59267;
var statearr_59268_61364 = state_59249;
(statearr_59268_61364[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59249[(4)]))){
var statearr_59269_61367 = state_59249;
(statearr_59269_61367[(1)] = cljs.core.first((state_59249[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61371 = state_59249;
state_59249 = G__61371;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_59249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_59249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59270 = f__59063__auto__();
(statearr_59270[(6)] = c__59061__auto___61344);

return statearr_59270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__59272){
var vec__59273 = p__59272;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(1),null);
var job = vec__59273;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__59061__auto___61381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59280){
var state_val_59281 = (state_59280[(1)]);
if((state_val_59281 === (1))){
var state_59280__$1 = state_59280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59280__$1,(2),res,v);
} else {
if((state_val_59281 === (2))){
var inst_59277 = (state_59280[(2)]);
var inst_59278 = cljs.core.async.close_BANG_(res);
var state_59280__$1 = (function (){var statearr_59282 = state_59280;
(statearr_59282[(7)] = inst_59277);

return statearr_59282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59280__$1,inst_59278);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_59283 = [null,null,null,null,null,null,null,null];
(statearr_59283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__);

(statearr_59283[(1)] = (1));

return statearr_59283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1 = (function (state_59280){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59280);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59284){var ex__58871__auto__ = e59284;
var statearr_59285_61383 = state_59280;
(statearr_59285_61383[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59280[(4)]))){
var statearr_59286_61384 = state_59280;
(statearr_59286_61384[(1)] = cljs.core.first((state_59280[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61385 = state_59280;
state_59280 = G__61385;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = function(state_59280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1.call(this,state_59280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59287 = f__59063__auto__();
(statearr_59287[(6)] = c__59061__auto___61381);

return statearr_59287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59288){
var vec__59289 = p__59288;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59289,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59289,(1),null);
var job = vec__59289;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___61386 = n;
var __61387 = (0);
while(true){
if((__61387 < n__4741__auto___61386)){
var G__59293_61388 = type;
var G__59293_61389__$1 = (((G__59293_61388 instanceof cljs.core.Keyword))?G__59293_61388.fqn:null);
switch (G__59293_61389__$1) {
case "compute":
var c__59061__auto___61391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61387,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = ((function (__61387,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function (state_59307){
var state_val_59308 = (state_59307[(1)]);
if((state_val_59308 === (1))){
var state_59307__$1 = state_59307;
var statearr_59309_61392 = state_59307__$1;
(statearr_59309_61392[(2)] = null);

(statearr_59309_61392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (2))){
var state_59307__$1 = state_59307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59307__$1,(4),jobs);
} else {
if((state_val_59308 === (3))){
var inst_59305 = (state_59307[(2)]);
var state_59307__$1 = state_59307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59307__$1,inst_59305);
} else {
if((state_val_59308 === (4))){
var inst_59297 = (state_59307[(2)]);
var inst_59298 = process(inst_59297);
var state_59307__$1 = state_59307;
if(cljs.core.truth_(inst_59298)){
var statearr_59310_61393 = state_59307__$1;
(statearr_59310_61393[(1)] = (5));

} else {
var statearr_59311_61394 = state_59307__$1;
(statearr_59311_61394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (5))){
var state_59307__$1 = state_59307;
var statearr_59312_61395 = state_59307__$1;
(statearr_59312_61395[(2)] = null);

(statearr_59312_61395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (6))){
var state_59307__$1 = state_59307;
var statearr_59313_61396 = state_59307__$1;
(statearr_59313_61396[(2)] = null);

(statearr_59313_61396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59308 === (7))){
var inst_59303 = (state_59307[(2)]);
var state_59307__$1 = state_59307;
var statearr_59314_61397 = state_59307__$1;
(statearr_59314_61397[(2)] = inst_59303);

(statearr_59314_61397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61387,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
;
return ((function (__61387,switch__58867__auto__,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_59315 = [null,null,null,null,null,null,null];
(statearr_59315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__);

(statearr_59315[(1)] = (1));

return statearr_59315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1 = (function (state_59307){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59307);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59316){var ex__58871__auto__ = e59316;
var statearr_59317_61398 = state_59307;
(statearr_59317_61398[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59307[(4)]))){
var statearr_59318_61399 = state_59307;
(statearr_59318_61399[(1)] = cljs.core.first((state_59307[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61400 = state_59307;
state_59307 = G__61400;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = function(state_59307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1.call(this,state_59307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__;
})()
;})(__61387,switch__58867__auto__,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
})();
var state__59064__auto__ = (function (){var statearr_59323 = f__59063__auto__();
(statearr_59323[(6)] = c__59061__auto___61391);

return statearr_59323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
});})(__61387,c__59061__auto___61391,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
);


break;
case "async":
var c__59061__auto___61401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61387,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = ((function (__61387,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function (state_59355){
var state_val_59356 = (state_59355[(1)]);
if((state_val_59356 === (1))){
var state_59355__$1 = state_59355;
var statearr_59357_61402 = state_59355__$1;
(statearr_59357_61402[(2)] = null);

(statearr_59357_61402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59356 === (2))){
var state_59355__$1 = state_59355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59355__$1,(4),jobs);
} else {
if((state_val_59356 === (3))){
var inst_59353 = (state_59355[(2)]);
var state_59355__$1 = state_59355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59355__$1,inst_59353);
} else {
if((state_val_59356 === (4))){
var inst_59339 = (state_59355[(2)]);
var inst_59342 = async(inst_59339);
var state_59355__$1 = state_59355;
if(cljs.core.truth_(inst_59342)){
var statearr_59358_61403 = state_59355__$1;
(statearr_59358_61403[(1)] = (5));

} else {
var statearr_59359_61404 = state_59355__$1;
(statearr_59359_61404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59356 === (5))){
var state_59355__$1 = state_59355;
var statearr_59361_61405 = state_59355__$1;
(statearr_59361_61405[(2)] = null);

(statearr_59361_61405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59356 === (6))){
var state_59355__$1 = state_59355;
var statearr_59385_61406 = state_59355__$1;
(statearr_59385_61406[(2)] = null);

(statearr_59385_61406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59356 === (7))){
var inst_59351 = (state_59355[(2)]);
var state_59355__$1 = state_59355;
var statearr_59386_61407 = state_59355__$1;
(statearr_59386_61407[(2)] = inst_59351);

(statearr_59386_61407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61387,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
;
return ((function (__61387,switch__58867__auto__,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_59408 = [null,null,null,null,null,null,null];
(statearr_59408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__);

(statearr_59408[(1)] = (1));

return statearr_59408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1 = (function (state_59355){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59355);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59430){var ex__58871__auto__ = e59430;
var statearr_59431_61408 = state_59355;
(statearr_59431_61408[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59355[(4)]))){
var statearr_59432_61409 = state_59355;
(statearr_59432_61409[(1)] = cljs.core.first((state_59355[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61410 = state_59355;
state_59355 = G__61410;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = function(state_59355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1.call(this,state_59355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__;
})()
;})(__61387,switch__58867__auto__,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
})();
var state__59064__auto__ = (function (){var statearr_59435 = f__59063__auto__();
(statearr_59435[(6)] = c__59061__auto___61401);

return statearr_59435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
});})(__61387,c__59061__auto___61401,G__59293_61388,G__59293_61389__$1,n__4741__auto___61386,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59293_61389__$1)].join('')));

}

var G__61411 = (__61387 + (1));
__61387 = G__61411;
continue;
} else {
}
break;
}

var c__59061__auto___61412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59470){
var state_val_59471 = (state_59470[(1)]);
if((state_val_59471 === (7))){
var inst_59466 = (state_59470[(2)]);
var state_59470__$1 = state_59470;
var statearr_59472_61415 = state_59470__$1;
(statearr_59472_61415[(2)] = inst_59466);

(statearr_59472_61415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59471 === (1))){
var state_59470__$1 = state_59470;
var statearr_59473_61416 = state_59470__$1;
(statearr_59473_61416[(2)] = null);

(statearr_59473_61416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59471 === (4))){
var inst_59438 = (state_59470[(7)]);
var inst_59438__$1 = (state_59470[(2)]);
var inst_59443 = (inst_59438__$1 == null);
var state_59470__$1 = (function (){var statearr_59474 = state_59470;
(statearr_59474[(7)] = inst_59438__$1);

return statearr_59474;
})();
if(cljs.core.truth_(inst_59443)){
var statearr_59475_61417 = state_59470__$1;
(statearr_59475_61417[(1)] = (5));

} else {
var statearr_59476_61418 = state_59470__$1;
(statearr_59476_61418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59471 === (6))){
var inst_59438 = (state_59470[(7)]);
var inst_59451 = (state_59470[(8)]);
var inst_59451__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59457 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59458 = [inst_59438,inst_59451__$1];
var inst_59459 = (new cljs.core.PersistentVector(null,2,(5),inst_59457,inst_59458,null));
var state_59470__$1 = (function (){var statearr_59477 = state_59470;
(statearr_59477[(8)] = inst_59451__$1);

return statearr_59477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59470__$1,(8),jobs,inst_59459);
} else {
if((state_val_59471 === (3))){
var inst_59468 = (state_59470[(2)]);
var state_59470__$1 = state_59470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59470__$1,inst_59468);
} else {
if((state_val_59471 === (2))){
var state_59470__$1 = state_59470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59470__$1,(4),from);
} else {
if((state_val_59471 === (9))){
var inst_59463 = (state_59470[(2)]);
var state_59470__$1 = (function (){var statearr_59478 = state_59470;
(statearr_59478[(9)] = inst_59463);

return statearr_59478;
})();
var statearr_59479_61419 = state_59470__$1;
(statearr_59479_61419[(2)] = null);

(statearr_59479_61419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59471 === (5))){
var inst_59445 = cljs.core.async.close_BANG_(jobs);
var state_59470__$1 = state_59470;
var statearr_59480_61420 = state_59470__$1;
(statearr_59480_61420[(2)] = inst_59445);

(statearr_59480_61420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59471 === (8))){
var inst_59451 = (state_59470[(8)]);
var inst_59461 = (state_59470[(2)]);
var state_59470__$1 = (function (){var statearr_59481 = state_59470;
(statearr_59481[(10)] = inst_59461);

return statearr_59481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59470__$1,(9),results,inst_59451);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_59483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__);

(statearr_59483[(1)] = (1));

return statearr_59483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1 = (function (state_59470){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59470);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59484){var ex__58871__auto__ = e59484;
var statearr_59485_61422 = state_59470;
(statearr_59485_61422[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59470[(4)]))){
var statearr_59486_61423 = state_59470;
(statearr_59486_61423[(1)] = cljs.core.first((state_59470[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61424 = state_59470;
state_59470 = G__61424;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = function(state_59470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1.call(this,state_59470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59487 = f__59063__auto__();
(statearr_59487[(6)] = c__59061__auto___61412);

return statearr_59487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


var c__59061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59525){
var state_val_59526 = (state_59525[(1)]);
if((state_val_59526 === (7))){
var inst_59521 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59527_61426 = state_59525__$1;
(statearr_59527_61426[(2)] = inst_59521);

(statearr_59527_61426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (20))){
var state_59525__$1 = state_59525;
var statearr_59528_61427 = state_59525__$1;
(statearr_59528_61427[(2)] = null);

(statearr_59528_61427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (1))){
var state_59525__$1 = state_59525;
var statearr_59529_61428 = state_59525__$1;
(statearr_59529_61428[(2)] = null);

(statearr_59529_61428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (4))){
var inst_59490 = (state_59525[(7)]);
var inst_59490__$1 = (state_59525[(2)]);
var inst_59491 = (inst_59490__$1 == null);
var state_59525__$1 = (function (){var statearr_59530 = state_59525;
(statearr_59530[(7)] = inst_59490__$1);

return statearr_59530;
})();
if(cljs.core.truth_(inst_59491)){
var statearr_59531_61429 = state_59525__$1;
(statearr_59531_61429[(1)] = (5));

} else {
var statearr_59532_61430 = state_59525__$1;
(statearr_59532_61430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (15))){
var inst_59503 = (state_59525[(8)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59525__$1,(18),to,inst_59503);
} else {
if((state_val_59526 === (21))){
var inst_59516 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59533_61431 = state_59525__$1;
(statearr_59533_61431[(2)] = inst_59516);

(statearr_59533_61431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (13))){
var inst_59518 = (state_59525[(2)]);
var state_59525__$1 = (function (){var statearr_59534 = state_59525;
(statearr_59534[(9)] = inst_59518);

return statearr_59534;
})();
var statearr_59535_61433 = state_59525__$1;
(statearr_59535_61433[(2)] = null);

(statearr_59535_61433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (6))){
var inst_59490 = (state_59525[(7)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59525__$1,(11),inst_59490);
} else {
if((state_val_59526 === (17))){
var inst_59511 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
if(cljs.core.truth_(inst_59511)){
var statearr_59536_61435 = state_59525__$1;
(statearr_59536_61435[(1)] = (19));

} else {
var statearr_59537_61437 = state_59525__$1;
(statearr_59537_61437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (3))){
var inst_59523 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59525__$1,inst_59523);
} else {
if((state_val_59526 === (12))){
var inst_59500 = (state_59525[(10)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59525__$1,(14),inst_59500);
} else {
if((state_val_59526 === (2))){
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59525__$1,(4),results);
} else {
if((state_val_59526 === (19))){
var state_59525__$1 = state_59525;
var statearr_59538_61438 = state_59525__$1;
(statearr_59538_61438[(2)] = null);

(statearr_59538_61438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (11))){
var inst_59500 = (state_59525[(2)]);
var state_59525__$1 = (function (){var statearr_59539 = state_59525;
(statearr_59539[(10)] = inst_59500);

return statearr_59539;
})();
var statearr_59540_61440 = state_59525__$1;
(statearr_59540_61440[(2)] = null);

(statearr_59540_61440[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (9))){
var state_59525__$1 = state_59525;
var statearr_59541_61442 = state_59525__$1;
(statearr_59541_61442[(2)] = null);

(statearr_59541_61442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (5))){
var state_59525__$1 = state_59525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59542_61443 = state_59525__$1;
(statearr_59542_61443[(1)] = (8));

} else {
var statearr_59543_61444 = state_59525__$1;
(statearr_59543_61444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (14))){
var inst_59505 = (state_59525[(11)]);
var inst_59503 = (state_59525[(8)]);
var inst_59503__$1 = (state_59525[(2)]);
var inst_59504 = (inst_59503__$1 == null);
var inst_59505__$1 = cljs.core.not(inst_59504);
var state_59525__$1 = (function (){var statearr_59544 = state_59525;
(statearr_59544[(11)] = inst_59505__$1);

(statearr_59544[(8)] = inst_59503__$1);

return statearr_59544;
})();
if(inst_59505__$1){
var statearr_59545_61445 = state_59525__$1;
(statearr_59545_61445[(1)] = (15));

} else {
var statearr_59546_61446 = state_59525__$1;
(statearr_59546_61446[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (16))){
var inst_59505 = (state_59525[(11)]);
var state_59525__$1 = state_59525;
var statearr_59547_61447 = state_59525__$1;
(statearr_59547_61447[(2)] = inst_59505);

(statearr_59547_61447[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (10))){
var inst_59497 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59548_61448 = state_59525__$1;
(statearr_59548_61448[(2)] = inst_59497);

(statearr_59548_61448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (18))){
var inst_59508 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59549_61450 = state_59525__$1;
(statearr_59549_61450[(2)] = inst_59508);

(statearr_59549_61450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (8))){
var inst_59494 = cljs.core.async.close_BANG_(to);
var state_59525__$1 = state_59525;
var statearr_59550_61453 = state_59525__$1;
(statearr_59550_61453[(2)] = inst_59494);

(statearr_59550_61453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_59551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__);

(statearr_59551[(1)] = (1));

return statearr_59551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1 = (function (state_59525){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59525);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59552){var ex__58871__auto__ = e59552;
var statearr_59553_61454 = state_59525;
(statearr_59553_61454[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59525[(4)]))){
var statearr_59554_61455 = state_59525;
(statearr_59554_61455[(1)] = cljs.core.first((state_59525[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61456 = state_59525;
state_59525 = G__61456;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__ = function(state_59525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1.call(this,state_59525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59555 = f__59063__auto__();
(statearr_59555[(6)] = c__59061__auto__);

return statearr_59555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

return c__59061__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59557 = arguments.length;
switch (G__59557) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59559 = arguments.length;
switch (G__59559) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__59061__auto___61465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59607){
var state_val_59608 = (state_59607[(1)]);
if((state_val_59608 === (7))){
var inst_59603 = (state_59607[(2)]);
var state_59607__$1 = state_59607;
var statearr_59610_61466 = state_59607__$1;
(statearr_59610_61466[(2)] = inst_59603);

(statearr_59610_61466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (1))){
var state_59607__$1 = state_59607;
var statearr_59611_61467 = state_59607__$1;
(statearr_59611_61467[(2)] = null);

(statearr_59611_61467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (4))){
var inst_59584 = (state_59607[(7)]);
var inst_59584__$1 = (state_59607[(2)]);
var inst_59585 = (inst_59584__$1 == null);
var state_59607__$1 = (function (){var statearr_59616 = state_59607;
(statearr_59616[(7)] = inst_59584__$1);

return statearr_59616;
})();
if(cljs.core.truth_(inst_59585)){
var statearr_59618_61470 = state_59607__$1;
(statearr_59618_61470[(1)] = (5));

} else {
var statearr_59619_61472 = state_59607__$1;
(statearr_59619_61472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (13))){
var state_59607__$1 = state_59607;
var statearr_59620_61474 = state_59607__$1;
(statearr_59620_61474[(2)] = null);

(statearr_59620_61474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (6))){
var inst_59584 = (state_59607[(7)]);
var inst_59590 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59584) : p.call(null,inst_59584));
var state_59607__$1 = state_59607;
if(cljs.core.truth_(inst_59590)){
var statearr_59624_61475 = state_59607__$1;
(statearr_59624_61475[(1)] = (9));

} else {
var statearr_59626_61476 = state_59607__$1;
(statearr_59626_61476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (3))){
var inst_59605 = (state_59607[(2)]);
var state_59607__$1 = state_59607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59607__$1,inst_59605);
} else {
if((state_val_59608 === (12))){
var state_59607__$1 = state_59607;
var statearr_59627_61477 = state_59607__$1;
(statearr_59627_61477[(2)] = null);

(statearr_59627_61477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (2))){
var state_59607__$1 = state_59607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59607__$1,(4),ch);
} else {
if((state_val_59608 === (11))){
var inst_59584 = (state_59607[(7)]);
var inst_59594 = (state_59607[(2)]);
var state_59607__$1 = state_59607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59607__$1,(8),inst_59594,inst_59584);
} else {
if((state_val_59608 === (9))){
var state_59607__$1 = state_59607;
var statearr_59632_61480 = state_59607__$1;
(statearr_59632_61480[(2)] = tc);

(statearr_59632_61480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (5))){
var inst_59587 = cljs.core.async.close_BANG_(tc);
var inst_59588 = cljs.core.async.close_BANG_(fc);
var state_59607__$1 = (function (){var statearr_59639 = state_59607;
(statearr_59639[(8)] = inst_59587);

return statearr_59639;
})();
var statearr_59641_61485 = state_59607__$1;
(statearr_59641_61485[(2)] = inst_59588);

(statearr_59641_61485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (14))){
var inst_59601 = (state_59607[(2)]);
var state_59607__$1 = state_59607;
var statearr_59642_61486 = state_59607__$1;
(statearr_59642_61486[(2)] = inst_59601);

(statearr_59642_61486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (10))){
var state_59607__$1 = state_59607;
var statearr_59643_61487 = state_59607__$1;
(statearr_59643_61487[(2)] = fc);

(statearr_59643_61487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59608 === (8))){
var inst_59596 = (state_59607[(2)]);
var state_59607__$1 = state_59607;
if(cljs.core.truth_(inst_59596)){
var statearr_59644_61488 = state_59607__$1;
(statearr_59644_61488[(1)] = (12));

} else {
var statearr_59645_61489 = state_59607__$1;
(statearr_59645_61489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_59646 = [null,null,null,null,null,null,null,null,null];
(statearr_59646[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_59646[(1)] = (1));

return statearr_59646;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_59607){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59607);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59647){var ex__58871__auto__ = e59647;
var statearr_59648_61494 = state_59607;
(statearr_59648_61494[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59607[(4)]))){
var statearr_59649_61495 = state_59607;
(statearr_59649_61495[(1)] = cljs.core.first((state_59607[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61496 = state_59607;
state_59607 = G__61496;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_59607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_59607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59650 = f__59063__auto__();
(statearr_59650[(6)] = c__59061__auto___61465);

return statearr_59650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__59061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59676){
var state_val_59677 = (state_59676[(1)]);
if((state_val_59677 === (7))){
var inst_59672 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
var statearr_59689_61497 = state_59676__$1;
(statearr_59689_61497[(2)] = inst_59672);

(statearr_59689_61497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (1))){
var inst_59653 = init;
var inst_59654 = inst_59653;
var state_59676__$1 = (function (){var statearr_59691 = state_59676;
(statearr_59691[(7)] = inst_59654);

return statearr_59691;
})();
var statearr_59692_61498 = state_59676__$1;
(statearr_59692_61498[(2)] = null);

(statearr_59692_61498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (4))){
var inst_59658 = (state_59676[(8)]);
var inst_59658__$1 = (state_59676[(2)]);
var inst_59660 = (inst_59658__$1 == null);
var state_59676__$1 = (function (){var statearr_59694 = state_59676;
(statearr_59694[(8)] = inst_59658__$1);

return statearr_59694;
})();
if(cljs.core.truth_(inst_59660)){
var statearr_59696_61499 = state_59676__$1;
(statearr_59696_61499[(1)] = (5));

} else {
var statearr_59697_61500 = state_59676__$1;
(statearr_59697_61500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (6))){
var inst_59654 = (state_59676[(7)]);
var inst_59658 = (state_59676[(8)]);
var inst_59663 = (state_59676[(9)]);
var inst_59663__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59654,inst_59658) : f.call(null,inst_59654,inst_59658));
var inst_59664 = cljs.core.reduced_QMARK_(inst_59663__$1);
var state_59676__$1 = (function (){var statearr_59698 = state_59676;
(statearr_59698[(9)] = inst_59663__$1);

return statearr_59698;
})();
if(inst_59664){
var statearr_59699_61501 = state_59676__$1;
(statearr_59699_61501[(1)] = (8));

} else {
var statearr_59700_61502 = state_59676__$1;
(statearr_59700_61502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (3))){
var inst_59674 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59676__$1,inst_59674);
} else {
if((state_val_59677 === (2))){
var state_59676__$1 = state_59676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59676__$1,(4),ch);
} else {
if((state_val_59677 === (9))){
var inst_59663 = (state_59676[(9)]);
var inst_59654 = inst_59663;
var state_59676__$1 = (function (){var statearr_59701 = state_59676;
(statearr_59701[(7)] = inst_59654);

return statearr_59701;
})();
var statearr_59702_61503 = state_59676__$1;
(statearr_59702_61503[(2)] = null);

(statearr_59702_61503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (5))){
var inst_59654 = (state_59676[(7)]);
var state_59676__$1 = state_59676;
var statearr_59704_61504 = state_59676__$1;
(statearr_59704_61504[(2)] = inst_59654);

(statearr_59704_61504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (10))){
var inst_59670 = (state_59676[(2)]);
var state_59676__$1 = state_59676;
var statearr_59705_61505 = state_59676__$1;
(statearr_59705_61505[(2)] = inst_59670);

(statearr_59705_61505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59677 === (8))){
var inst_59663 = (state_59676[(9)]);
var inst_59666 = cljs.core.deref(inst_59663);
var state_59676__$1 = state_59676;
var statearr_59709_61509 = state_59676__$1;
(statearr_59709_61509[(2)] = inst_59666);

(statearr_59709_61509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58868__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58868__auto____0 = (function (){
var statearr_59722 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59722[(0)] = cljs$core$async$reduce_$_state_machine__58868__auto__);

(statearr_59722[(1)] = (1));

return statearr_59722;
});
var cljs$core$async$reduce_$_state_machine__58868__auto____1 = (function (state_59676){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59676);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59731){var ex__58871__auto__ = e59731;
var statearr_59732_61510 = state_59676;
(statearr_59732_61510[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59676[(4)]))){
var statearr_59733_61511 = state_59676;
(statearr_59733_61511[(1)] = cljs.core.first((state_59676[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61516 = state_59676;
state_59676 = G__61516;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58868__auto__ = function(state_59676){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58868__auto____1.call(this,state_59676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58868__auto____0;
cljs$core$async$reduce_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58868__auto____1;
return cljs$core$async$reduce_$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59734 = f__59063__auto__();
(statearr_59734[(6)] = c__59061__auto__);

return statearr_59734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

return c__59061__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__59061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59740){
var state_val_59741 = (state_59740[(1)]);
if((state_val_59741 === (1))){
var inst_59735 = cljs.core.async.reduce(f__$1,init,ch);
var state_59740__$1 = state_59740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59740__$1,(2),inst_59735);
} else {
if((state_val_59741 === (2))){
var inst_59737 = (state_59740[(2)]);
var inst_59738 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59737) : f__$1.call(null,inst_59737));
var state_59740__$1 = state_59740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59740__$1,inst_59738);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58868__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58868__auto____0 = (function (){
var statearr_59763 = [null,null,null,null,null,null,null];
(statearr_59763[(0)] = cljs$core$async$transduce_$_state_machine__58868__auto__);

(statearr_59763[(1)] = (1));

return statearr_59763;
});
var cljs$core$async$transduce_$_state_machine__58868__auto____1 = (function (state_59740){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59740);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59764){var ex__58871__auto__ = e59764;
var statearr_59765_61524 = state_59740;
(statearr_59765_61524[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59740[(4)]))){
var statearr_59766_61525 = state_59740;
(statearr_59766_61525[(1)] = cljs.core.first((state_59740[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61527 = state_59740;
state_59740 = G__61527;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58868__auto__ = function(state_59740){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58868__auto____1.call(this,state_59740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58868__auto____0;
cljs$core$async$transduce_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58868__auto____1;
return cljs$core$async$transduce_$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59767 = f__59063__auto__();
(statearr_59767[(6)] = c__59061__auto__);

return statearr_59767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

return c__59061__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59770 = arguments.length;
switch (G__59770) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__59061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59795){
var state_val_59796 = (state_59795[(1)]);
if((state_val_59796 === (7))){
var inst_59777 = (state_59795[(2)]);
var state_59795__$1 = state_59795;
var statearr_59798_61529 = state_59795__$1;
(statearr_59798_61529[(2)] = inst_59777);

(statearr_59798_61529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (1))){
var inst_59771 = cljs.core.seq(coll);
var inst_59772 = inst_59771;
var state_59795__$1 = (function (){var statearr_59800 = state_59795;
(statearr_59800[(7)] = inst_59772);

return statearr_59800;
})();
var statearr_59801_61530 = state_59795__$1;
(statearr_59801_61530[(2)] = null);

(statearr_59801_61530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (4))){
var inst_59772 = (state_59795[(7)]);
var inst_59775 = cljs.core.first(inst_59772);
var state_59795__$1 = state_59795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59795__$1,(7),ch,inst_59775);
} else {
if((state_val_59796 === (13))){
var inst_59789 = (state_59795[(2)]);
var state_59795__$1 = state_59795;
var statearr_59803_61538 = state_59795__$1;
(statearr_59803_61538[(2)] = inst_59789);

(statearr_59803_61538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (6))){
var inst_59780 = (state_59795[(2)]);
var state_59795__$1 = state_59795;
if(cljs.core.truth_(inst_59780)){
var statearr_59805_61542 = state_59795__$1;
(statearr_59805_61542[(1)] = (8));

} else {
var statearr_59806_61543 = state_59795__$1;
(statearr_59806_61543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (3))){
var inst_59793 = (state_59795[(2)]);
var state_59795__$1 = state_59795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59795__$1,inst_59793);
} else {
if((state_val_59796 === (12))){
var state_59795__$1 = state_59795;
var statearr_59807_61544 = state_59795__$1;
(statearr_59807_61544[(2)] = null);

(statearr_59807_61544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (2))){
var inst_59772 = (state_59795[(7)]);
var state_59795__$1 = state_59795;
if(cljs.core.truth_(inst_59772)){
var statearr_59808_61545 = state_59795__$1;
(statearr_59808_61545[(1)] = (4));

} else {
var statearr_59809_61550 = state_59795__$1;
(statearr_59809_61550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (11))){
var inst_59786 = cljs.core.async.close_BANG_(ch);
var state_59795__$1 = state_59795;
var statearr_59810_61551 = state_59795__$1;
(statearr_59810_61551[(2)] = inst_59786);

(statearr_59810_61551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (9))){
var state_59795__$1 = state_59795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59811_61562 = state_59795__$1;
(statearr_59811_61562[(1)] = (11));

} else {
var statearr_59812_61566 = state_59795__$1;
(statearr_59812_61566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (5))){
var inst_59772 = (state_59795[(7)]);
var state_59795__$1 = state_59795;
var statearr_59814_61573 = state_59795__$1;
(statearr_59814_61573[(2)] = inst_59772);

(statearr_59814_61573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (10))){
var inst_59791 = (state_59795[(2)]);
var state_59795__$1 = state_59795;
var statearr_59815_61581 = state_59795__$1;
(statearr_59815_61581[(2)] = inst_59791);

(statearr_59815_61581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59796 === (8))){
var inst_59772 = (state_59795[(7)]);
var inst_59782 = cljs.core.next(inst_59772);
var inst_59772__$1 = inst_59782;
var state_59795__$1 = (function (){var statearr_59816 = state_59795;
(statearr_59816[(7)] = inst_59772__$1);

return statearr_59816;
})();
var statearr_59817_61584 = state_59795__$1;
(statearr_59817_61584[(2)] = null);

(statearr_59817_61584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_59818 = [null,null,null,null,null,null,null,null];
(statearr_59818[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_59818[(1)] = (1));

return statearr_59818;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_59795){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59795);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e59819){var ex__58871__auto__ = e59819;
var statearr_59820_61592 = state_59795;
(statearr_59820_61592[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59795[(4)]))){
var statearr_59821_61593 = state_59795;
(statearr_59821_61593[(1)] = cljs.core.first((state_59795[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61597 = state_59795;
state_59795 = G__61597;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_59795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_59795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_59823 = f__59063__auto__();
(statearr_59823[(6)] = c__59061__auto__);

return statearr_59823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

return c__59061__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59825 = arguments.length;
switch (G__59825) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_61605 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_61605(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61606 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_61606(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61610 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_61610(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61611 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_61611(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59831 = (function (ch,cs,meta59832){
this.ch = ch;
this.cs = cs;
this.meta59832 = meta59832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59833,meta59832__$1){
var self__ = this;
var _59833__$1 = this;
return (new cljs.core.async.t_cljs$core$async59831(self__.ch,self__.cs,meta59832__$1));
}));

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59833){
var self__ = this;
var _59833__$1 = this;
return self__.meta59832;
}));

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59831.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59832","meta59832",12670923,null)], null);
}));

(cljs.core.async.t_cljs$core$async59831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59831");

(cljs.core.async.t_cljs$core$async59831.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async59831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59831.
 */
cljs.core.async.__GT_t_cljs$core$async59831 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59831(ch__$1,cs__$1,meta59832){
return (new cljs.core.async.t_cljs$core$async59831(ch__$1,cs__$1,meta59832));
});

}

return (new cljs.core.async.t_cljs$core$async59831(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__59061__auto___61613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_59972){
var state_val_59973 = (state_59972[(1)]);
if((state_val_59973 === (7))){
var inst_59968 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_59975_61614 = state_59972__$1;
(statearr_59975_61614[(2)] = inst_59968);

(statearr_59975_61614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (20))){
var inst_59869 = (state_59972[(7)]);
var inst_59882 = cljs.core.first(inst_59869);
var inst_59883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59882,(0),null);
var inst_59884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59882,(1),null);
var state_59972__$1 = (function (){var statearr_59977 = state_59972;
(statearr_59977[(8)] = inst_59883);

return statearr_59977;
})();
if(cljs.core.truth_(inst_59884)){
var statearr_59978_61615 = state_59972__$1;
(statearr_59978_61615[(1)] = (22));

} else {
var statearr_59979_61616 = state_59972__$1;
(statearr_59979_61616[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (27))){
var inst_59837 = (state_59972[(9)]);
var inst_59915 = (state_59972[(10)]);
var inst_59913 = (state_59972[(11)]);
var inst_59920 = (state_59972[(12)]);
var inst_59920__$1 = cljs.core._nth(inst_59913,inst_59915);
var inst_59921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59920__$1,inst_59837,done);
var state_59972__$1 = (function (){var statearr_59981 = state_59972;
(statearr_59981[(12)] = inst_59920__$1);

return statearr_59981;
})();
if(cljs.core.truth_(inst_59921)){
var statearr_59982_61617 = state_59972__$1;
(statearr_59982_61617[(1)] = (30));

} else {
var statearr_59983_61618 = state_59972__$1;
(statearr_59983_61618[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (1))){
var state_59972__$1 = state_59972;
var statearr_59984_61619 = state_59972__$1;
(statearr_59984_61619[(2)] = null);

(statearr_59984_61619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (24))){
var inst_59869 = (state_59972[(7)]);
var inst_59889 = (state_59972[(2)]);
var inst_59890 = cljs.core.next(inst_59869);
var inst_59846 = inst_59890;
var inst_59847 = null;
var inst_59848 = (0);
var inst_59849 = (0);
var state_59972__$1 = (function (){var statearr_59985 = state_59972;
(statearr_59985[(13)] = inst_59849);

(statearr_59985[(14)] = inst_59847);

(statearr_59985[(15)] = inst_59848);

(statearr_59985[(16)] = inst_59846);

(statearr_59985[(17)] = inst_59889);

return statearr_59985;
})();
var statearr_59986_61620 = state_59972__$1;
(statearr_59986_61620[(2)] = null);

(statearr_59986_61620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (39))){
var state_59972__$1 = state_59972;
var statearr_59991_61621 = state_59972__$1;
(statearr_59991_61621[(2)] = null);

(statearr_59991_61621[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (4))){
var inst_59837 = (state_59972[(9)]);
var inst_59837__$1 = (state_59972[(2)]);
var inst_59838 = (inst_59837__$1 == null);
var state_59972__$1 = (function (){var statearr_59992 = state_59972;
(statearr_59992[(9)] = inst_59837__$1);

return statearr_59992;
})();
if(cljs.core.truth_(inst_59838)){
var statearr_59993_61622 = state_59972__$1;
(statearr_59993_61622[(1)] = (5));

} else {
var statearr_59994_61623 = state_59972__$1;
(statearr_59994_61623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (15))){
var inst_59849 = (state_59972[(13)]);
var inst_59847 = (state_59972[(14)]);
var inst_59848 = (state_59972[(15)]);
var inst_59846 = (state_59972[(16)]);
var inst_59864 = (state_59972[(2)]);
var inst_59866 = (inst_59849 + (1));
var tmp59988 = inst_59847;
var tmp59989 = inst_59848;
var tmp59990 = inst_59846;
var inst_59846__$1 = tmp59990;
var inst_59847__$1 = tmp59988;
var inst_59848__$1 = tmp59989;
var inst_59849__$1 = inst_59866;
var state_59972__$1 = (function (){var statearr_59996 = state_59972;
(statearr_59996[(13)] = inst_59849__$1);

(statearr_59996[(14)] = inst_59847__$1);

(statearr_59996[(15)] = inst_59848__$1);

(statearr_59996[(16)] = inst_59846__$1);

(statearr_59996[(18)] = inst_59864);

return statearr_59996;
})();
var statearr_59997_61624 = state_59972__$1;
(statearr_59997_61624[(2)] = null);

(statearr_59997_61624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (21))){
var inst_59893 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60001_61625 = state_59972__$1;
(statearr_60001_61625[(2)] = inst_59893);

(statearr_60001_61625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (31))){
var inst_59920 = (state_59972[(12)]);
var inst_59924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59920);
var state_59972__$1 = state_59972;
var statearr_60002_61626 = state_59972__$1;
(statearr_60002_61626[(2)] = inst_59924);

(statearr_60002_61626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (32))){
var inst_59912 = (state_59972[(19)]);
var inst_59915 = (state_59972[(10)]);
var inst_59913 = (state_59972[(11)]);
var inst_59914 = (state_59972[(20)]);
var inst_59926 = (state_59972[(2)]);
var inst_59927 = (inst_59915 + (1));
var tmp59998 = inst_59912;
var tmp59999 = inst_59913;
var tmp60000 = inst_59914;
var inst_59912__$1 = tmp59998;
var inst_59913__$1 = tmp59999;
var inst_59914__$1 = tmp60000;
var inst_59915__$1 = inst_59927;
var state_59972__$1 = (function (){var statearr_60003 = state_59972;
(statearr_60003[(19)] = inst_59912__$1);

(statearr_60003[(10)] = inst_59915__$1);

(statearr_60003[(11)] = inst_59913__$1);

(statearr_60003[(20)] = inst_59914__$1);

(statearr_60003[(21)] = inst_59926);

return statearr_60003;
})();
var statearr_60005_61628 = state_59972__$1;
(statearr_60005_61628[(2)] = null);

(statearr_60005_61628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (40))){
var inst_59940 = (state_59972[(22)]);
var inst_59944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59940);
var state_59972__$1 = state_59972;
var statearr_60006_61630 = state_59972__$1;
(statearr_60006_61630[(2)] = inst_59944);

(statearr_60006_61630[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (33))){
var inst_59930 = (state_59972[(23)]);
var inst_59933 = cljs.core.chunked_seq_QMARK_(inst_59930);
var state_59972__$1 = state_59972;
if(inst_59933){
var statearr_60007_61634 = state_59972__$1;
(statearr_60007_61634[(1)] = (36));

} else {
var statearr_60008_61635 = state_59972__$1;
(statearr_60008_61635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (13))){
var inst_59858 = (state_59972[(24)]);
var inst_59861 = cljs.core.async.close_BANG_(inst_59858);
var state_59972__$1 = state_59972;
var statearr_60009_61637 = state_59972__$1;
(statearr_60009_61637[(2)] = inst_59861);

(statearr_60009_61637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (22))){
var inst_59883 = (state_59972[(8)]);
var inst_59886 = cljs.core.async.close_BANG_(inst_59883);
var state_59972__$1 = state_59972;
var statearr_60010_61639 = state_59972__$1;
(statearr_60010_61639[(2)] = inst_59886);

(statearr_60010_61639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (36))){
var inst_59930 = (state_59972[(23)]);
var inst_59935 = cljs.core.chunk_first(inst_59930);
var inst_59936 = cljs.core.chunk_rest(inst_59930);
var inst_59937 = cljs.core.count(inst_59935);
var inst_59912 = inst_59936;
var inst_59913 = inst_59935;
var inst_59914 = inst_59937;
var inst_59915 = (0);
var state_59972__$1 = (function (){var statearr_60012 = state_59972;
(statearr_60012[(19)] = inst_59912);

(statearr_60012[(10)] = inst_59915);

(statearr_60012[(11)] = inst_59913);

(statearr_60012[(20)] = inst_59914);

return statearr_60012;
})();
var statearr_60013_61643 = state_59972__$1;
(statearr_60013_61643[(2)] = null);

(statearr_60013_61643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (41))){
var inst_59930 = (state_59972[(23)]);
var inst_59946 = (state_59972[(2)]);
var inst_59947 = cljs.core.next(inst_59930);
var inst_59912 = inst_59947;
var inst_59913 = null;
var inst_59914 = (0);
var inst_59915 = (0);
var state_59972__$1 = (function (){var statearr_60014 = state_59972;
(statearr_60014[(19)] = inst_59912);

(statearr_60014[(10)] = inst_59915);

(statearr_60014[(11)] = inst_59913);

(statearr_60014[(25)] = inst_59946);

(statearr_60014[(20)] = inst_59914);

return statearr_60014;
})();
var statearr_60015_61644 = state_59972__$1;
(statearr_60015_61644[(2)] = null);

(statearr_60015_61644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (43))){
var state_59972__$1 = state_59972;
var statearr_60016_61646 = state_59972__$1;
(statearr_60016_61646[(2)] = null);

(statearr_60016_61646[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (29))){
var inst_59955 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60017_61657 = state_59972__$1;
(statearr_60017_61657[(2)] = inst_59955);

(statearr_60017_61657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (44))){
var inst_59965 = (state_59972[(2)]);
var state_59972__$1 = (function (){var statearr_60018 = state_59972;
(statearr_60018[(26)] = inst_59965);

return statearr_60018;
})();
var statearr_60019_61658 = state_59972__$1;
(statearr_60019_61658[(2)] = null);

(statearr_60019_61658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (6))){
var inst_59903 = (state_59972[(27)]);
var inst_59902 = cljs.core.deref(cs);
var inst_59903__$1 = cljs.core.keys(inst_59902);
var inst_59904 = cljs.core.count(inst_59903__$1);
var inst_59905 = cljs.core.reset_BANG_(dctr,inst_59904);
var inst_59910 = cljs.core.seq(inst_59903__$1);
var inst_59912 = inst_59910;
var inst_59913 = null;
var inst_59914 = (0);
var inst_59915 = (0);
var state_59972__$1 = (function (){var statearr_60020 = state_59972;
(statearr_60020[(19)] = inst_59912);

(statearr_60020[(28)] = inst_59905);

(statearr_60020[(10)] = inst_59915);

(statearr_60020[(27)] = inst_59903__$1);

(statearr_60020[(11)] = inst_59913);

(statearr_60020[(20)] = inst_59914);

return statearr_60020;
})();
var statearr_60022_61663 = state_59972__$1;
(statearr_60022_61663[(2)] = null);

(statearr_60022_61663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (28))){
var inst_59912 = (state_59972[(19)]);
var inst_59930 = (state_59972[(23)]);
var inst_59930__$1 = cljs.core.seq(inst_59912);
var state_59972__$1 = (function (){var statearr_60023 = state_59972;
(statearr_60023[(23)] = inst_59930__$1);

return statearr_60023;
})();
if(inst_59930__$1){
var statearr_60024_61665 = state_59972__$1;
(statearr_60024_61665[(1)] = (33));

} else {
var statearr_60025_61666 = state_59972__$1;
(statearr_60025_61666[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (25))){
var inst_59915 = (state_59972[(10)]);
var inst_59914 = (state_59972[(20)]);
var inst_59917 = (inst_59915 < inst_59914);
var inst_59918 = inst_59917;
var state_59972__$1 = state_59972;
if(cljs.core.truth_(inst_59918)){
var statearr_60026_61669 = state_59972__$1;
(statearr_60026_61669[(1)] = (27));

} else {
var statearr_60027_61670 = state_59972__$1;
(statearr_60027_61670[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (34))){
var state_59972__$1 = state_59972;
var statearr_60028_61674 = state_59972__$1;
(statearr_60028_61674[(2)] = null);

(statearr_60028_61674[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (17))){
var state_59972__$1 = state_59972;
var statearr_60029_61675 = state_59972__$1;
(statearr_60029_61675[(2)] = null);

(statearr_60029_61675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (3))){
var inst_59970 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59972__$1,inst_59970);
} else {
if((state_val_59973 === (12))){
var inst_59898 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60031_61676 = state_59972__$1;
(statearr_60031_61676[(2)] = inst_59898);

(statearr_60031_61676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (2))){
var state_59972__$1 = state_59972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59972__$1,(4),ch);
} else {
if((state_val_59973 === (23))){
var state_59972__$1 = state_59972;
var statearr_60032_61680 = state_59972__$1;
(statearr_60032_61680[(2)] = null);

(statearr_60032_61680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (35))){
var inst_59953 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60033_61685 = state_59972__$1;
(statearr_60033_61685[(2)] = inst_59953);

(statearr_60033_61685[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (19))){
var inst_59869 = (state_59972[(7)]);
var inst_59873 = cljs.core.chunk_first(inst_59869);
var inst_59874 = cljs.core.chunk_rest(inst_59869);
var inst_59875 = cljs.core.count(inst_59873);
var inst_59846 = inst_59874;
var inst_59847 = inst_59873;
var inst_59848 = inst_59875;
var inst_59849 = (0);
var state_59972__$1 = (function (){var statearr_60034 = state_59972;
(statearr_60034[(13)] = inst_59849);

(statearr_60034[(14)] = inst_59847);

(statearr_60034[(15)] = inst_59848);

(statearr_60034[(16)] = inst_59846);

return statearr_60034;
})();
var statearr_60035_61692 = state_59972__$1;
(statearr_60035_61692[(2)] = null);

(statearr_60035_61692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (11))){
var inst_59869 = (state_59972[(7)]);
var inst_59846 = (state_59972[(16)]);
var inst_59869__$1 = cljs.core.seq(inst_59846);
var state_59972__$1 = (function (){var statearr_60037 = state_59972;
(statearr_60037[(7)] = inst_59869__$1);

return statearr_60037;
})();
if(inst_59869__$1){
var statearr_60038_61693 = state_59972__$1;
(statearr_60038_61693[(1)] = (16));

} else {
var statearr_60039_61694 = state_59972__$1;
(statearr_60039_61694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (9))){
var inst_59900 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60040_61695 = state_59972__$1;
(statearr_60040_61695[(2)] = inst_59900);

(statearr_60040_61695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (5))){
var inst_59844 = cljs.core.deref(cs);
var inst_59845 = cljs.core.seq(inst_59844);
var inst_59846 = inst_59845;
var inst_59847 = null;
var inst_59848 = (0);
var inst_59849 = (0);
var state_59972__$1 = (function (){var statearr_60042 = state_59972;
(statearr_60042[(13)] = inst_59849);

(statearr_60042[(14)] = inst_59847);

(statearr_60042[(15)] = inst_59848);

(statearr_60042[(16)] = inst_59846);

return statearr_60042;
})();
var statearr_60043_61696 = state_59972__$1;
(statearr_60043_61696[(2)] = null);

(statearr_60043_61696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (14))){
var state_59972__$1 = state_59972;
var statearr_60044_61697 = state_59972__$1;
(statearr_60044_61697[(2)] = null);

(statearr_60044_61697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (45))){
var inst_59962 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60045_61698 = state_59972__$1;
(statearr_60045_61698[(2)] = inst_59962);

(statearr_60045_61698[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (26))){
var inst_59903 = (state_59972[(27)]);
var inst_59957 = (state_59972[(2)]);
var inst_59958 = cljs.core.seq(inst_59903);
var state_59972__$1 = (function (){var statearr_60046 = state_59972;
(statearr_60046[(29)] = inst_59957);

return statearr_60046;
})();
if(inst_59958){
var statearr_60047_61699 = state_59972__$1;
(statearr_60047_61699[(1)] = (42));

} else {
var statearr_60048_61700 = state_59972__$1;
(statearr_60048_61700[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (16))){
var inst_59869 = (state_59972[(7)]);
var inst_59871 = cljs.core.chunked_seq_QMARK_(inst_59869);
var state_59972__$1 = state_59972;
if(inst_59871){
var statearr_60049_61701 = state_59972__$1;
(statearr_60049_61701[(1)] = (19));

} else {
var statearr_60051_61702 = state_59972__$1;
(statearr_60051_61702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (38))){
var inst_59950 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60052_61703 = state_59972__$1;
(statearr_60052_61703[(2)] = inst_59950);

(statearr_60052_61703[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (30))){
var state_59972__$1 = state_59972;
var statearr_60053_61704 = state_59972__$1;
(statearr_60053_61704[(2)] = null);

(statearr_60053_61704[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (10))){
var inst_59849 = (state_59972[(13)]);
var inst_59847 = (state_59972[(14)]);
var inst_59857 = cljs.core._nth(inst_59847,inst_59849);
var inst_59858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59857,(0),null);
var inst_59859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59857,(1),null);
var state_59972__$1 = (function (){var statearr_60054 = state_59972;
(statearr_60054[(24)] = inst_59858);

return statearr_60054;
})();
if(cljs.core.truth_(inst_59859)){
var statearr_60055_61705 = state_59972__$1;
(statearr_60055_61705[(1)] = (13));

} else {
var statearr_60056_61706 = state_59972__$1;
(statearr_60056_61706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (18))){
var inst_59896 = (state_59972[(2)]);
var state_59972__$1 = state_59972;
var statearr_60057_61707 = state_59972__$1;
(statearr_60057_61707[(2)] = inst_59896);

(statearr_60057_61707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (42))){
var state_59972__$1 = state_59972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59972__$1,(45),dchan);
} else {
if((state_val_59973 === (37))){
var inst_59837 = (state_59972[(9)]);
var inst_59940 = (state_59972[(22)]);
var inst_59930 = (state_59972[(23)]);
var inst_59940__$1 = cljs.core.first(inst_59930);
var inst_59941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59940__$1,inst_59837,done);
var state_59972__$1 = (function (){var statearr_60059 = state_59972;
(statearr_60059[(22)] = inst_59940__$1);

return statearr_60059;
})();
if(cljs.core.truth_(inst_59941)){
var statearr_60060_61708 = state_59972__$1;
(statearr_60060_61708[(1)] = (39));

} else {
var statearr_60061_61709 = state_59972__$1;
(statearr_60061_61709[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59973 === (8))){
var inst_59849 = (state_59972[(13)]);
var inst_59848 = (state_59972[(15)]);
var inst_59851 = (inst_59849 < inst_59848);
var inst_59852 = inst_59851;
var state_59972__$1 = state_59972;
if(cljs.core.truth_(inst_59852)){
var statearr_60062_61711 = state_59972__$1;
(statearr_60062_61711[(1)] = (10));

} else {
var statearr_60063_61713 = state_59972__$1;
(statearr_60063_61713[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58868__auto__ = null;
var cljs$core$async$mult_$_state_machine__58868__auto____0 = (function (){
var statearr_60064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60064[(0)] = cljs$core$async$mult_$_state_machine__58868__auto__);

(statearr_60064[(1)] = (1));

return statearr_60064;
});
var cljs$core$async$mult_$_state_machine__58868__auto____1 = (function (state_59972){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_59972);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60066){var ex__58871__auto__ = e60066;
var statearr_60067_61720 = state_59972;
(statearr_60067_61720[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_59972[(4)]))){
var statearr_60068_61721 = state_59972;
(statearr_60068_61721[(1)] = cljs.core.first((state_59972[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61723 = state_59972;
state_59972 = G__61723;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58868__auto__ = function(state_59972){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58868__auto____1.call(this,state_59972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58868__auto____0;
cljs$core$async$mult_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58868__auto____1;
return cljs$core$async$mult_$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60069 = f__59063__auto__();
(statearr_60069[(6)] = c__59061__auto___61613);

return statearr_60069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__60072 = arguments.length;
switch (G__60072) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_61725 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_61725(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61726 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_61726(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61736 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61736(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61737 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_61737(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61739 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61739(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61740 = arguments.length;
var i__4865__auto___61741 = (0);
while(true){
if((i__4865__auto___61741 < len__4864__auto___61740)){
args__4870__auto__.push((arguments[i__4865__auto___61741]));

var G__61742 = (i__4865__auto___61741 + (1));
i__4865__auto___61741 = G__61742;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60082){
var map__60083 = p__60082;
var map__60083__$1 = cljs.core.__destructure_map(map__60083);
var opts = map__60083__$1;
var statearr_60084_61743 = state;
(statearr_60084_61743[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_60085_61744 = state;
(statearr_60085_61744[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_60086_61745 = state;
(statearr_60086_61745[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60077){
var G__60079 = cljs.core.first(seq60077);
var seq60077__$1 = cljs.core.next(seq60077);
var G__60080 = cljs.core.first(seq60077__$1);
var seq60077__$2 = cljs.core.next(seq60077__$1);
var G__60081 = cljs.core.first(seq60077__$2);
var seq60077__$3 = cljs.core.next(seq60077__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60079,G__60080,G__60081,seq60077__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60090 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60091){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60091 = meta60091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60092,meta60091__$1){
var self__ = this;
var _60092__$1 = this;
return (new cljs.core.async.t_cljs$core$async60090(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60091__$1));
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60092){
var self__ = this;
var _60092__$1 = this;
return self__.meta60091;
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60090.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60091","meta60091",-1011135214,null)], null);
}));

(cljs.core.async.t_cljs$core$async60090.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60090");

(cljs.core.async.t_cljs$core$async60090.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60090");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60090.
 */
cljs.core.async.__GT_t_cljs$core$async60090 = (function cljs$core$async$mix_$___GT_t_cljs$core$async60090(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60091){
return (new cljs.core.async.t_cljs$core$async60090(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60091));
});

}

return (new cljs.core.async.t_cljs$core$async60090(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59061__auto___61756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60164){
var state_val_60165 = (state_60164[(1)]);
if((state_val_60165 === (7))){
var inst_60123 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
if(cljs.core.truth_(inst_60123)){
var statearr_60166_61757 = state_60164__$1;
(statearr_60166_61757[(1)] = (8));

} else {
var statearr_60167_61758 = state_60164__$1;
(statearr_60167_61758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (20))){
var inst_60116 = (state_60164[(7)]);
var state_60164__$1 = state_60164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60164__$1,(23),out,inst_60116);
} else {
if((state_val_60165 === (1))){
var inst_60098 = calc_state();
var inst_60099 = cljs.core.__destructure_map(inst_60098);
var inst_60100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60099,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60099,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60099,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60103 = inst_60098;
var state_60164__$1 = (function (){var statearr_60169 = state_60164;
(statearr_60169[(8)] = inst_60103);

(statearr_60169[(9)] = inst_60101);

(statearr_60169[(10)] = inst_60100);

(statearr_60169[(11)] = inst_60102);

return statearr_60169;
})();
var statearr_60170_61766 = state_60164__$1;
(statearr_60170_61766[(2)] = null);

(statearr_60170_61766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (24))){
var inst_60106 = (state_60164[(12)]);
var inst_60103 = inst_60106;
var state_60164__$1 = (function (){var statearr_60171 = state_60164;
(statearr_60171[(8)] = inst_60103);

return statearr_60171;
})();
var statearr_60172_61773 = state_60164__$1;
(statearr_60172_61773[(2)] = null);

(statearr_60172_61773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (4))){
var inst_60116 = (state_60164[(7)]);
var inst_60118 = (state_60164[(13)]);
var inst_60115 = (state_60164[(2)]);
var inst_60116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60115,(0),null);
var inst_60117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60115,(1),null);
var inst_60118__$1 = (inst_60116__$1 == null);
var state_60164__$1 = (function (){var statearr_60173 = state_60164;
(statearr_60173[(7)] = inst_60116__$1);

(statearr_60173[(13)] = inst_60118__$1);

(statearr_60173[(14)] = inst_60117);

return statearr_60173;
})();
if(cljs.core.truth_(inst_60118__$1)){
var statearr_60175_61775 = state_60164__$1;
(statearr_60175_61775[(1)] = (5));

} else {
var statearr_60177_61776 = state_60164__$1;
(statearr_60177_61776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (15))){
var inst_60137 = (state_60164[(15)]);
var inst_60107 = (state_60164[(16)]);
var inst_60137__$1 = cljs.core.empty_QMARK_(inst_60107);
var state_60164__$1 = (function (){var statearr_60178 = state_60164;
(statearr_60178[(15)] = inst_60137__$1);

return statearr_60178;
})();
if(inst_60137__$1){
var statearr_60179_61777 = state_60164__$1;
(statearr_60179_61777[(1)] = (17));

} else {
var statearr_60180_61778 = state_60164__$1;
(statearr_60180_61778[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (21))){
var inst_60106 = (state_60164[(12)]);
var inst_60103 = inst_60106;
var state_60164__$1 = (function (){var statearr_60181 = state_60164;
(statearr_60181[(8)] = inst_60103);

return statearr_60181;
})();
var statearr_60182_61788 = state_60164__$1;
(statearr_60182_61788[(2)] = null);

(statearr_60182_61788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (13))){
var inst_60130 = (state_60164[(2)]);
var inst_60131 = calc_state();
var inst_60103 = inst_60131;
var state_60164__$1 = (function (){var statearr_60183 = state_60164;
(statearr_60183[(8)] = inst_60103);

(statearr_60183[(17)] = inst_60130);

return statearr_60183;
})();
var statearr_60184_61793 = state_60164__$1;
(statearr_60184_61793[(2)] = null);

(statearr_60184_61793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (22))){
var inst_60157 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
var statearr_60185_61794 = state_60164__$1;
(statearr_60185_61794[(2)] = inst_60157);

(statearr_60185_61794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (6))){
var inst_60117 = (state_60164[(14)]);
var inst_60121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60117,change);
var state_60164__$1 = state_60164;
var statearr_60186_61802 = state_60164__$1;
(statearr_60186_61802[(2)] = inst_60121);

(statearr_60186_61802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (25))){
var state_60164__$1 = state_60164;
var statearr_60189_61803 = state_60164__$1;
(statearr_60189_61803[(2)] = null);

(statearr_60189_61803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (17))){
var inst_60109 = (state_60164[(18)]);
var inst_60117 = (state_60164[(14)]);
var inst_60139 = (inst_60109.cljs$core$IFn$_invoke$arity$1 ? inst_60109.cljs$core$IFn$_invoke$arity$1(inst_60117) : inst_60109.call(null,inst_60117));
var inst_60140 = cljs.core.not(inst_60139);
var state_60164__$1 = state_60164;
var statearr_60190_61804 = state_60164__$1;
(statearr_60190_61804[(2)] = inst_60140);

(statearr_60190_61804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (3))){
var inst_60161 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60164__$1,inst_60161);
} else {
if((state_val_60165 === (12))){
var state_60164__$1 = state_60164;
var statearr_60191_61805 = state_60164__$1;
(statearr_60191_61805[(2)] = null);

(statearr_60191_61805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (2))){
var inst_60103 = (state_60164[(8)]);
var inst_60106 = (state_60164[(12)]);
var inst_60106__$1 = cljs.core.__destructure_map(inst_60103);
var inst_60107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60106__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60106__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60106__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60164__$1 = (function (){var statearr_60192 = state_60164;
(statearr_60192[(18)] = inst_60109);

(statearr_60192[(16)] = inst_60107);

(statearr_60192[(12)] = inst_60106__$1);

return statearr_60192;
})();
return cljs.core.async.ioc_alts_BANG_(state_60164__$1,(4),inst_60110);
} else {
if((state_val_60165 === (23))){
var inst_60148 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
if(cljs.core.truth_(inst_60148)){
var statearr_60193_61807 = state_60164__$1;
(statearr_60193_61807[(1)] = (24));

} else {
var statearr_60194_61808 = state_60164__$1;
(statearr_60194_61808[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (19))){
var inst_60143 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
var statearr_60195_61809 = state_60164__$1;
(statearr_60195_61809[(2)] = inst_60143);

(statearr_60195_61809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (11))){
var inst_60117 = (state_60164[(14)]);
var inst_60127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_60117);
var state_60164__$1 = state_60164;
var statearr_60196_61810 = state_60164__$1;
(statearr_60196_61810[(2)] = inst_60127);

(statearr_60196_61810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (9))){
var inst_60134 = (state_60164[(19)]);
var inst_60117 = (state_60164[(14)]);
var inst_60107 = (state_60164[(16)]);
var inst_60134__$1 = (inst_60107.cljs$core$IFn$_invoke$arity$1 ? inst_60107.cljs$core$IFn$_invoke$arity$1(inst_60117) : inst_60107.call(null,inst_60117));
var state_60164__$1 = (function (){var statearr_60197 = state_60164;
(statearr_60197[(19)] = inst_60134__$1);

return statearr_60197;
})();
if(cljs.core.truth_(inst_60134__$1)){
var statearr_60198_61811 = state_60164__$1;
(statearr_60198_61811[(1)] = (14));

} else {
var statearr_60199_61812 = state_60164__$1;
(statearr_60199_61812[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (5))){
var inst_60118 = (state_60164[(13)]);
var state_60164__$1 = state_60164;
var statearr_60200_61816 = state_60164__$1;
(statearr_60200_61816[(2)] = inst_60118);

(statearr_60200_61816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (14))){
var inst_60134 = (state_60164[(19)]);
var state_60164__$1 = state_60164;
var statearr_60201_61817 = state_60164__$1;
(statearr_60201_61817[(2)] = inst_60134);

(statearr_60201_61817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (26))){
var inst_60153 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
var statearr_60202_61818 = state_60164__$1;
(statearr_60202_61818[(2)] = inst_60153);

(statearr_60202_61818[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (16))){
var inst_60145 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
if(cljs.core.truth_(inst_60145)){
var statearr_60205_61828 = state_60164__$1;
(statearr_60205_61828[(1)] = (20));

} else {
var statearr_60206_61829 = state_60164__$1;
(statearr_60206_61829[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (10))){
var inst_60159 = (state_60164[(2)]);
var state_60164__$1 = state_60164;
var statearr_60207_61830 = state_60164__$1;
(statearr_60207_61830[(2)] = inst_60159);

(statearr_60207_61830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (18))){
var inst_60137 = (state_60164[(15)]);
var state_60164__$1 = state_60164;
var statearr_60208_61831 = state_60164__$1;
(statearr_60208_61831[(2)] = inst_60137);

(statearr_60208_61831[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60165 === (8))){
var inst_60116 = (state_60164[(7)]);
var inst_60125 = (inst_60116 == null);
var state_60164__$1 = state_60164;
if(cljs.core.truth_(inst_60125)){
var statearr_60209_61832 = state_60164__$1;
(statearr_60209_61832[(1)] = (11));

} else {
var statearr_60210_61833 = state_60164__$1;
(statearr_60210_61833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__58868__auto__ = null;
var cljs$core$async$mix_$_state_machine__58868__auto____0 = (function (){
var statearr_60211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60211[(0)] = cljs$core$async$mix_$_state_machine__58868__auto__);

(statearr_60211[(1)] = (1));

return statearr_60211;
});
var cljs$core$async$mix_$_state_machine__58868__auto____1 = (function (state_60164){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60164);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60212){var ex__58871__auto__ = e60212;
var statearr_60213_61834 = state_60164;
(statearr_60213_61834[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60164[(4)]))){
var statearr_60214_61835 = state_60164;
(statearr_60214_61835[(1)] = cljs.core.first((state_60164[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61836 = state_60164;
state_60164 = G__61836;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58868__auto__ = function(state_60164){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58868__auto____1.call(this,state_60164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58868__auto____0;
cljs$core$async$mix_$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58868__auto____1;
return cljs$core$async$mix_$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60215 = f__59063__auto__();
(statearr_60215[(6)] = c__59061__auto___61756);

return statearr_60215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_61838 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_61838(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61844 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_61844(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61846 = (function() {
var G__61847 = null;
var G__61847__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__61847__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__61847 = function(p,v){
switch(arguments.length){
case 1:
return G__61847__1.call(this,p);
case 2:
return G__61847__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61847.cljs$core$IFn$_invoke$arity$1 = G__61847__1;
G__61847.cljs$core$IFn$_invoke$arity$2 = G__61847__2;
return G__61847;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__60234 = arguments.length;
switch (G__60234) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61846(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61846(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__60249 = arguments.length;
switch (G__60249) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__60243_SHARP_){
if(cljs.core.truth_((p1__60243_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60243_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__60243_SHARP_.call(null,topic)))){
return p1__60243_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60243_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60258 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60259){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60259 = meta60259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60260,meta60259__$1){
var self__ = this;
var _60260__$1 = this;
return (new cljs.core.async.t_cljs$core$async60258(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60259__$1));
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60260){
var self__ = this;
var _60260__$1 = this;
return self__.meta60259;
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60259","meta60259",172734999,null)], null);
}));

(cljs.core.async.t_cljs$core$async60258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60258");

(cljs.core.async.t_cljs$core$async60258.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60258.
 */
cljs.core.async.__GT_t_cljs$core$async60258 = (function cljs$core$async$__GT_t_cljs$core$async60258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60259){
return (new cljs.core.async.t_cljs$core$async60258(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60259));
});

}

return (new cljs.core.async.t_cljs$core$async60258(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59061__auto___61860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60364){
var state_val_60365 = (state_60364[(1)]);
if((state_val_60365 === (7))){
var inst_60357 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60367_61861 = state_60364__$1;
(statearr_60367_61861[(2)] = inst_60357);

(statearr_60367_61861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (20))){
var state_60364__$1 = state_60364;
var statearr_60371_61862 = state_60364__$1;
(statearr_60371_61862[(2)] = null);

(statearr_60371_61862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (1))){
var state_60364__$1 = state_60364;
var statearr_60372_61863 = state_60364__$1;
(statearr_60372_61863[(2)] = null);

(statearr_60372_61863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (24))){
var inst_60339 = (state_60364[(7)]);
var inst_60349 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_60339);
var state_60364__$1 = state_60364;
var statearr_60374_61864 = state_60364__$1;
(statearr_60374_61864[(2)] = inst_60349);

(statearr_60374_61864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (4))){
var inst_60283 = (state_60364[(8)]);
var inst_60283__$1 = (state_60364[(2)]);
var inst_60284 = (inst_60283__$1 == null);
var state_60364__$1 = (function (){var statearr_60378 = state_60364;
(statearr_60378[(8)] = inst_60283__$1);

return statearr_60378;
})();
if(cljs.core.truth_(inst_60284)){
var statearr_60379_61865 = state_60364__$1;
(statearr_60379_61865[(1)] = (5));

} else {
var statearr_60380_61866 = state_60364__$1;
(statearr_60380_61866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (15))){
var inst_60333 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60382_61868 = state_60364__$1;
(statearr_60382_61868[(2)] = inst_60333);

(statearr_60382_61868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (21))){
var inst_60354 = (state_60364[(2)]);
var state_60364__$1 = (function (){var statearr_60386 = state_60364;
(statearr_60386[(9)] = inst_60354);

return statearr_60386;
})();
var statearr_60387_61869 = state_60364__$1;
(statearr_60387_61869[(2)] = null);

(statearr_60387_61869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (13))){
var inst_60311 = (state_60364[(10)]);
var inst_60314 = cljs.core.chunked_seq_QMARK_(inst_60311);
var state_60364__$1 = state_60364;
if(inst_60314){
var statearr_60389_61872 = state_60364__$1;
(statearr_60389_61872[(1)] = (16));

} else {
var statearr_60390_61873 = state_60364__$1;
(statearr_60390_61873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (22))){
var inst_60346 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
if(cljs.core.truth_(inst_60346)){
var statearr_60394_61874 = state_60364__$1;
(statearr_60394_61874[(1)] = (23));

} else {
var statearr_60395_61877 = state_60364__$1;
(statearr_60395_61877[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (6))){
var inst_60339 = (state_60364[(7)]);
var inst_60283 = (state_60364[(8)]);
var inst_60341 = (state_60364[(11)]);
var inst_60339__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_60283) : topic_fn.call(null,inst_60283));
var inst_60340 = cljs.core.deref(mults);
var inst_60341__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60340,inst_60339__$1);
var state_60364__$1 = (function (){var statearr_60397 = state_60364;
(statearr_60397[(7)] = inst_60339__$1);

(statearr_60397[(11)] = inst_60341__$1);

return statearr_60397;
})();
if(cljs.core.truth_(inst_60341__$1)){
var statearr_60401_61880 = state_60364__$1;
(statearr_60401_61880[(1)] = (19));

} else {
var statearr_60402_61881 = state_60364__$1;
(statearr_60402_61881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (25))){
var inst_60351 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60403_61882 = state_60364__$1;
(statearr_60403_61882[(2)] = inst_60351);

(statearr_60403_61882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (17))){
var inst_60311 = (state_60364[(10)]);
var inst_60323 = cljs.core.first(inst_60311);
var inst_60325 = cljs.core.async.muxch_STAR_(inst_60323);
var inst_60326 = cljs.core.async.close_BANG_(inst_60325);
var inst_60327 = cljs.core.next(inst_60311);
var inst_60294 = inst_60327;
var inst_60295 = null;
var inst_60296 = (0);
var inst_60297 = (0);
var state_60364__$1 = (function (){var statearr_60408 = state_60364;
(statearr_60408[(12)] = inst_60296);

(statearr_60408[(13)] = inst_60297);

(statearr_60408[(14)] = inst_60294);

(statearr_60408[(15)] = inst_60295);

(statearr_60408[(16)] = inst_60326);

return statearr_60408;
})();
var statearr_60409_61885 = state_60364__$1;
(statearr_60409_61885[(2)] = null);

(statearr_60409_61885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (3))){
var inst_60359 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60364__$1,inst_60359);
} else {
if((state_val_60365 === (12))){
var inst_60335 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60413_61887 = state_60364__$1;
(statearr_60413_61887[(2)] = inst_60335);

(statearr_60413_61887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (2))){
var state_60364__$1 = state_60364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60364__$1,(4),ch);
} else {
if((state_val_60365 === (23))){
var state_60364__$1 = state_60364;
var statearr_60416_61888 = state_60364__$1;
(statearr_60416_61888[(2)] = null);

(statearr_60416_61888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (19))){
var inst_60283 = (state_60364[(8)]);
var inst_60341 = (state_60364[(11)]);
var inst_60344 = cljs.core.async.muxch_STAR_(inst_60341);
var state_60364__$1 = state_60364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60364__$1,(22),inst_60344,inst_60283);
} else {
if((state_val_60365 === (11))){
var inst_60294 = (state_60364[(14)]);
var inst_60311 = (state_60364[(10)]);
var inst_60311__$1 = cljs.core.seq(inst_60294);
var state_60364__$1 = (function (){var statearr_60420 = state_60364;
(statearr_60420[(10)] = inst_60311__$1);

return statearr_60420;
})();
if(inst_60311__$1){
var statearr_60421_61893 = state_60364__$1;
(statearr_60421_61893[(1)] = (13));

} else {
var statearr_60422_61894 = state_60364__$1;
(statearr_60422_61894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (9))){
var inst_60337 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60424_61895 = state_60364__$1;
(statearr_60424_61895[(2)] = inst_60337);

(statearr_60424_61895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (5))){
var inst_60291 = cljs.core.deref(mults);
var inst_60292 = cljs.core.vals(inst_60291);
var inst_60293 = cljs.core.seq(inst_60292);
var inst_60294 = inst_60293;
var inst_60295 = null;
var inst_60296 = (0);
var inst_60297 = (0);
var state_60364__$1 = (function (){var statearr_60428 = state_60364;
(statearr_60428[(12)] = inst_60296);

(statearr_60428[(13)] = inst_60297);

(statearr_60428[(14)] = inst_60294);

(statearr_60428[(15)] = inst_60295);

return statearr_60428;
})();
var statearr_60430_61896 = state_60364__$1;
(statearr_60430_61896[(2)] = null);

(statearr_60430_61896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (14))){
var state_60364__$1 = state_60364;
var statearr_60436_61897 = state_60364__$1;
(statearr_60436_61897[(2)] = null);

(statearr_60436_61897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (16))){
var inst_60311 = (state_60364[(10)]);
var inst_60316 = cljs.core.chunk_first(inst_60311);
var inst_60317 = cljs.core.chunk_rest(inst_60311);
var inst_60318 = cljs.core.count(inst_60316);
var inst_60294 = inst_60317;
var inst_60295 = inst_60316;
var inst_60296 = inst_60318;
var inst_60297 = (0);
var state_60364__$1 = (function (){var statearr_60438 = state_60364;
(statearr_60438[(12)] = inst_60296);

(statearr_60438[(13)] = inst_60297);

(statearr_60438[(14)] = inst_60294);

(statearr_60438[(15)] = inst_60295);

return statearr_60438;
})();
var statearr_60440_61898 = state_60364__$1;
(statearr_60440_61898[(2)] = null);

(statearr_60440_61898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (10))){
var inst_60296 = (state_60364[(12)]);
var inst_60297 = (state_60364[(13)]);
var inst_60294 = (state_60364[(14)]);
var inst_60295 = (state_60364[(15)]);
var inst_60305 = cljs.core._nth(inst_60295,inst_60297);
var inst_60306 = cljs.core.async.muxch_STAR_(inst_60305);
var inst_60307 = cljs.core.async.close_BANG_(inst_60306);
var inst_60308 = (inst_60297 + (1));
var tmp60431 = inst_60296;
var tmp60432 = inst_60294;
var tmp60433 = inst_60295;
var inst_60294__$1 = tmp60432;
var inst_60295__$1 = tmp60433;
var inst_60296__$1 = tmp60431;
var inst_60297__$1 = inst_60308;
var state_60364__$1 = (function (){var statearr_60444 = state_60364;
(statearr_60444[(12)] = inst_60296__$1);

(statearr_60444[(13)] = inst_60297__$1);

(statearr_60444[(17)] = inst_60307);

(statearr_60444[(14)] = inst_60294__$1);

(statearr_60444[(15)] = inst_60295__$1);

return statearr_60444;
})();
var statearr_60446_61899 = state_60364__$1;
(statearr_60446_61899[(2)] = null);

(statearr_60446_61899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (18))){
var inst_60330 = (state_60364[(2)]);
var state_60364__$1 = state_60364;
var statearr_60450_61900 = state_60364__$1;
(statearr_60450_61900[(2)] = inst_60330);

(statearr_60450_61900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60365 === (8))){
var inst_60296 = (state_60364[(12)]);
var inst_60297 = (state_60364[(13)]);
var inst_60300 = (inst_60297 < inst_60296);
var inst_60301 = inst_60300;
var state_60364__$1 = state_60364;
if(cljs.core.truth_(inst_60301)){
var statearr_60452_61905 = state_60364__$1;
(statearr_60452_61905[(1)] = (10));

} else {
var statearr_60453_61906 = state_60364__$1;
(statearr_60453_61906[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_60457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60457[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_60457[(1)] = (1));

return statearr_60457;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_60364){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60364);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60459){var ex__58871__auto__ = e60459;
var statearr_60460_61907 = state_60364;
(statearr_60460_61907[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60364[(4)]))){
var statearr_60461_61913 = state_60364;
(statearr_60461_61913[(1)] = cljs.core.first((state_60364[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61914 = state_60364;
state_60364 = G__61914;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_60364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_60364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60465 = f__59063__auto__();
(statearr_60465[(6)] = c__59061__auto___61860);

return statearr_60465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60472 = arguments.length;
switch (G__60472) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60485 = arguments.length;
switch (G__60485) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60497 = arguments.length;
switch (G__60497) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__59061__auto___61949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60574){
var state_val_60575 = (state_60574[(1)]);
if((state_val_60575 === (7))){
var state_60574__$1 = state_60574;
var statearr_60576_61954 = state_60574__$1;
(statearr_60576_61954[(2)] = null);

(statearr_60576_61954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (1))){
var state_60574__$1 = state_60574;
var statearr_60577_61955 = state_60574__$1;
(statearr_60577_61955[(2)] = null);

(statearr_60577_61955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (4))){
var inst_60525 = (state_60574[(7)]);
var inst_60526 = (state_60574[(8)]);
var inst_60528 = (inst_60526 < inst_60525);
var state_60574__$1 = state_60574;
if(cljs.core.truth_(inst_60528)){
var statearr_60578_61956 = state_60574__$1;
(statearr_60578_61956[(1)] = (6));

} else {
var statearr_60579_61957 = state_60574__$1;
(statearr_60579_61957[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (15))){
var inst_60560 = (state_60574[(9)]);
var inst_60565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60560);
var state_60574__$1 = state_60574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60574__$1,(17),out,inst_60565);
} else {
if((state_val_60575 === (13))){
var inst_60560 = (state_60574[(9)]);
var inst_60560__$1 = (state_60574[(2)]);
var inst_60561 = cljs.core.some(cljs.core.nil_QMARK_,inst_60560__$1);
var state_60574__$1 = (function (){var statearr_60580 = state_60574;
(statearr_60580[(9)] = inst_60560__$1);

return statearr_60580;
})();
if(cljs.core.truth_(inst_60561)){
var statearr_60581_61964 = state_60574__$1;
(statearr_60581_61964[(1)] = (14));

} else {
var statearr_60582_61965 = state_60574__$1;
(statearr_60582_61965[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (6))){
var state_60574__$1 = state_60574;
var statearr_60583_61966 = state_60574__$1;
(statearr_60583_61966[(2)] = null);

(statearr_60583_61966[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (17))){
var inst_60567 = (state_60574[(2)]);
var state_60574__$1 = (function (){var statearr_60585 = state_60574;
(statearr_60585[(10)] = inst_60567);

return statearr_60585;
})();
var statearr_60586_61969 = state_60574__$1;
(statearr_60586_61969[(2)] = null);

(statearr_60586_61969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (3))){
var inst_60572 = (state_60574[(2)]);
var state_60574__$1 = state_60574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60574__$1,inst_60572);
} else {
if((state_val_60575 === (12))){
var _ = (function (){var statearr_60589 = state_60574;
(statearr_60589[(4)] = cljs.core.rest((state_60574[(4)])));

return statearr_60589;
})();
var state_60574__$1 = state_60574;
var ex60584 = (state_60574__$1[(2)]);
var statearr_60590_61970 = state_60574__$1;
(statearr_60590_61970[(5)] = ex60584);


if((ex60584 instanceof Object)){
var statearr_60591_61971 = state_60574__$1;
(statearr_60591_61971[(1)] = (11));

(statearr_60591_61971[(5)] = null);

} else {
throw ex60584;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (2))){
var inst_60518 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60525 = cnt;
var inst_60526 = (0);
var state_60574__$1 = (function (){var statearr_60592 = state_60574;
(statearr_60592[(7)] = inst_60525);

(statearr_60592[(8)] = inst_60526);

(statearr_60592[(11)] = inst_60518);

return statearr_60592;
})();
var statearr_60593_61972 = state_60574__$1;
(statearr_60593_61972[(2)] = null);

(statearr_60593_61972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (11))){
var inst_60539 = (state_60574[(2)]);
var inst_60540 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60574__$1 = (function (){var statearr_60594 = state_60574;
(statearr_60594[(12)] = inst_60539);

return statearr_60594;
})();
var statearr_60595_61973 = state_60574__$1;
(statearr_60595_61973[(2)] = inst_60540);

(statearr_60595_61973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (9))){
var inst_60526 = (state_60574[(8)]);
var _ = (function (){var statearr_60596 = state_60574;
(statearr_60596[(4)] = cljs.core.cons((12),(state_60574[(4)])));

return statearr_60596;
})();
var inst_60546 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60526) : chs__$1.call(null,inst_60526));
var inst_60547 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60526) : done.call(null,inst_60526));
var inst_60548 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60546,inst_60547);
var ___$1 = (function (){var statearr_60597 = state_60574;
(statearr_60597[(4)] = cljs.core.rest((state_60574[(4)])));

return statearr_60597;
})();
var state_60574__$1 = state_60574;
var statearr_60598_61974 = state_60574__$1;
(statearr_60598_61974[(2)] = inst_60548);

(statearr_60598_61974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (5))){
var inst_60558 = (state_60574[(2)]);
var state_60574__$1 = (function (){var statearr_60599 = state_60574;
(statearr_60599[(13)] = inst_60558);

return statearr_60599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60574__$1,(13),dchan);
} else {
if((state_val_60575 === (14))){
var inst_60563 = cljs.core.async.close_BANG_(out);
var state_60574__$1 = state_60574;
var statearr_60600_61976 = state_60574__$1;
(statearr_60600_61976[(2)] = inst_60563);

(statearr_60600_61976[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (16))){
var inst_60570 = (state_60574[(2)]);
var state_60574__$1 = state_60574;
var statearr_60601_61977 = state_60574__$1;
(statearr_60601_61977[(2)] = inst_60570);

(statearr_60601_61977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (10))){
var inst_60526 = (state_60574[(8)]);
var inst_60551 = (state_60574[(2)]);
var inst_60552 = (inst_60526 + (1));
var inst_60526__$1 = inst_60552;
var state_60574__$1 = (function (){var statearr_60602 = state_60574;
(statearr_60602[(14)] = inst_60551);

(statearr_60602[(8)] = inst_60526__$1);

return statearr_60602;
})();
var statearr_60603_61978 = state_60574__$1;
(statearr_60603_61978[(2)] = null);

(statearr_60603_61978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60575 === (8))){
var inst_60556 = (state_60574[(2)]);
var state_60574__$1 = state_60574;
var statearr_60604_61979 = state_60574__$1;
(statearr_60604_61979[(2)] = inst_60556);

(statearr_60604_61979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_60605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60605[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_60605[(1)] = (1));

return statearr_60605;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_60574){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60574);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60606){var ex__58871__auto__ = e60606;
var statearr_60607_61980 = state_60574;
(statearr_60607_61980[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60574[(4)]))){
var statearr_60608_61982 = state_60574;
(statearr_60608_61982[(1)] = cljs.core.first((state_60574[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61983 = state_60574;
state_60574 = G__61983;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_60574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_60574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60609 = f__59063__auto__();
(statearr_60609[(6)] = c__59061__auto___61949);

return statearr_60609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60612 = arguments.length;
switch (G__60612) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___61989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60655){
var state_val_60656 = (state_60655[(1)]);
if((state_val_60656 === (7))){
var inst_60625 = (state_60655[(7)]);
var inst_60626 = (state_60655[(8)]);
var inst_60625__$1 = (state_60655[(2)]);
var inst_60626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60625__$1,(0),null);
var inst_60631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60625__$1,(1),null);
var inst_60632 = (inst_60626__$1 == null);
var state_60655__$1 = (function (){var statearr_60668 = state_60655;
(statearr_60668[(7)] = inst_60625__$1);

(statearr_60668[(9)] = inst_60631);

(statearr_60668[(8)] = inst_60626__$1);

return statearr_60668;
})();
if(cljs.core.truth_(inst_60632)){
var statearr_60670_61990 = state_60655__$1;
(statearr_60670_61990[(1)] = (8));

} else {
var statearr_60671_61991 = state_60655__$1;
(statearr_60671_61991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (1))){
var inst_60615 = cljs.core.vec(chs);
var inst_60616 = inst_60615;
var state_60655__$1 = (function (){var statearr_60672 = state_60655;
(statearr_60672[(10)] = inst_60616);

return statearr_60672;
})();
var statearr_60676_61992 = state_60655__$1;
(statearr_60676_61992[(2)] = null);

(statearr_60676_61992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (4))){
var inst_60616 = (state_60655[(10)]);
var state_60655__$1 = state_60655;
return cljs.core.async.ioc_alts_BANG_(state_60655__$1,(7),inst_60616);
} else {
if((state_val_60656 === (6))){
var inst_60651 = (state_60655[(2)]);
var state_60655__$1 = state_60655;
var statearr_60678_61993 = state_60655__$1;
(statearr_60678_61993[(2)] = inst_60651);

(statearr_60678_61993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (3))){
var inst_60653 = (state_60655[(2)]);
var state_60655__$1 = state_60655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60655__$1,inst_60653);
} else {
if((state_val_60656 === (2))){
var inst_60616 = (state_60655[(10)]);
var inst_60618 = cljs.core.count(inst_60616);
var inst_60619 = (inst_60618 > (0));
var state_60655__$1 = state_60655;
if(cljs.core.truth_(inst_60619)){
var statearr_60684_61998 = state_60655__$1;
(statearr_60684_61998[(1)] = (4));

} else {
var statearr_60685_61999 = state_60655__$1;
(statearr_60685_61999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (11))){
var inst_60616 = (state_60655[(10)]);
var inst_60643 = (state_60655[(2)]);
var tmp60679 = inst_60616;
var inst_60616__$1 = tmp60679;
var state_60655__$1 = (function (){var statearr_60686 = state_60655;
(statearr_60686[(10)] = inst_60616__$1);

(statearr_60686[(11)] = inst_60643);

return statearr_60686;
})();
var statearr_60687_62000 = state_60655__$1;
(statearr_60687_62000[(2)] = null);

(statearr_60687_62000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (9))){
var inst_60626 = (state_60655[(8)]);
var state_60655__$1 = state_60655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60655__$1,(11),out,inst_60626);
} else {
if((state_val_60656 === (5))){
var inst_60649 = cljs.core.async.close_BANG_(out);
var state_60655__$1 = state_60655;
var statearr_60689_62002 = state_60655__$1;
(statearr_60689_62002[(2)] = inst_60649);

(statearr_60689_62002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (10))){
var inst_60646 = (state_60655[(2)]);
var state_60655__$1 = state_60655;
var statearr_60691_62003 = state_60655__$1;
(statearr_60691_62003[(2)] = inst_60646);

(statearr_60691_62003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60656 === (8))){
var inst_60616 = (state_60655[(10)]);
var inst_60625 = (state_60655[(7)]);
var inst_60631 = (state_60655[(9)]);
var inst_60626 = (state_60655[(8)]);
var inst_60638 = (function (){var cs = inst_60616;
var vec__60621 = inst_60625;
var v = inst_60626;
var c = inst_60631;
return (function (p1__60610_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60610_SHARP_);
});
})();
var inst_60639 = cljs.core.filterv(inst_60638,inst_60616);
var inst_60616__$1 = inst_60639;
var state_60655__$1 = (function (){var statearr_60699 = state_60655;
(statearr_60699[(10)] = inst_60616__$1);

return statearr_60699;
})();
var statearr_60700_62009 = state_60655__$1;
(statearr_60700_62009[(2)] = null);

(statearr_60700_62009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_60701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60701[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_60701[(1)] = (1));

return statearr_60701;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_60655){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60655);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60702){var ex__58871__auto__ = e60702;
var statearr_60703_62011 = state_60655;
(statearr_60703_62011[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60655[(4)]))){
var statearr_60704_62017 = state_60655;
(statearr_60704_62017[(1)] = cljs.core.first((state_60655[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62018 = state_60655;
state_60655 = G__62018;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_60655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_60655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60705 = f__59063__auto__();
(statearr_60705[(6)] = c__59061__auto___61989);

return statearr_60705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__60711 = arguments.length;
switch (G__60711) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___62024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60739){
var state_val_60740 = (state_60739[(1)]);
if((state_val_60740 === (7))){
var inst_60721 = (state_60739[(7)]);
var inst_60721__$1 = (state_60739[(2)]);
var inst_60722 = (inst_60721__$1 == null);
var inst_60723 = cljs.core.not(inst_60722);
var state_60739__$1 = (function (){var statearr_60744 = state_60739;
(statearr_60744[(7)] = inst_60721__$1);

return statearr_60744;
})();
if(inst_60723){
var statearr_60746_62025 = state_60739__$1;
(statearr_60746_62025[(1)] = (8));

} else {
var statearr_60747_62026 = state_60739__$1;
(statearr_60747_62026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (1))){
var inst_60716 = (0);
var state_60739__$1 = (function (){var statearr_60748 = state_60739;
(statearr_60748[(8)] = inst_60716);

return statearr_60748;
})();
var statearr_60749_62027 = state_60739__$1;
(statearr_60749_62027[(2)] = null);

(statearr_60749_62027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (4))){
var state_60739__$1 = state_60739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60739__$1,(7),ch);
} else {
if((state_val_60740 === (6))){
var inst_60734 = (state_60739[(2)]);
var state_60739__$1 = state_60739;
var statearr_60750_62028 = state_60739__$1;
(statearr_60750_62028[(2)] = inst_60734);

(statearr_60750_62028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (3))){
var inst_60736 = (state_60739[(2)]);
var inst_60737 = cljs.core.async.close_BANG_(out);
var state_60739__$1 = (function (){var statearr_60751 = state_60739;
(statearr_60751[(9)] = inst_60736);

return statearr_60751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60739__$1,inst_60737);
} else {
if((state_val_60740 === (2))){
var inst_60716 = (state_60739[(8)]);
var inst_60718 = (inst_60716 < n);
var state_60739__$1 = state_60739;
if(cljs.core.truth_(inst_60718)){
var statearr_60753_62029 = state_60739__$1;
(statearr_60753_62029[(1)] = (4));

} else {
var statearr_60754_62030 = state_60739__$1;
(statearr_60754_62030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (11))){
var inst_60716 = (state_60739[(8)]);
var inst_60726 = (state_60739[(2)]);
var inst_60727 = (inst_60716 + (1));
var inst_60716__$1 = inst_60727;
var state_60739__$1 = (function (){var statearr_60755 = state_60739;
(statearr_60755[(8)] = inst_60716__$1);

(statearr_60755[(10)] = inst_60726);

return statearr_60755;
})();
var statearr_60756_62031 = state_60739__$1;
(statearr_60756_62031[(2)] = null);

(statearr_60756_62031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (9))){
var state_60739__$1 = state_60739;
var statearr_60757_62032 = state_60739__$1;
(statearr_60757_62032[(2)] = null);

(statearr_60757_62032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (5))){
var state_60739__$1 = state_60739;
var statearr_60758_62034 = state_60739__$1;
(statearr_60758_62034[(2)] = null);

(statearr_60758_62034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (10))){
var inst_60731 = (state_60739[(2)]);
var state_60739__$1 = state_60739;
var statearr_60759_62035 = state_60739__$1;
(statearr_60759_62035[(2)] = inst_60731);

(statearr_60759_62035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60740 === (8))){
var inst_60721 = (state_60739[(7)]);
var state_60739__$1 = state_60739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60739__$1,(11),out,inst_60721);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_60760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60760[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_60760[(1)] = (1));

return statearr_60760;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_60739){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60739);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60761){var ex__58871__auto__ = e60761;
var statearr_60762_62036 = state_60739;
(statearr_60762_62036[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60739[(4)]))){
var statearr_60763_62037 = state_60739;
(statearr_60763_62037[(1)] = cljs.core.first((state_60739[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62038 = state_60739;
state_60739 = G__62038;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_60739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_60739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60768 = f__59063__auto__();
(statearr_60768[(6)] = c__59061__auto___62024);

return statearr_60768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60774 = (function (f,ch,meta60775){
this.f = f;
this.ch = ch;
this.meta60775 = meta60775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60776,meta60775__$1){
var self__ = this;
var _60776__$1 = this;
return (new cljs.core.async.t_cljs$core$async60774(self__.f,self__.ch,meta60775__$1));
}));

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60776){
var self__ = this;
var _60776__$1 = this;
return self__.meta60775;
}));

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60781 = (function (f,ch,meta60775,_,fn1,meta60782){
this.f = f;
this.ch = ch;
this.meta60775 = meta60775;
this._ = _;
this.fn1 = fn1;
this.meta60782 = meta60782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60783,meta60782__$1){
var self__ = this;
var _60783__$1 = this;
return (new cljs.core.async.t_cljs$core$async60781(self__.f,self__.ch,self__.meta60775,self__._,self__.fn1,meta60782__$1));
}));

(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60783){
var self__ = this;
var _60783__$1 = this;
return self__.meta60782;
}));

(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__60772_SHARP_){
var G__60793 = (((p1__60772_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__60772_SHARP_) : self__.f.call(null,p1__60772_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60793) : f1.call(null,G__60793));
});
}));

(cljs.core.async.t_cljs$core$async60781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60775","meta60775",730869355,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60774","cljs.core.async/t_cljs$core$async60774",1431693932,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60782","meta60782",902731723,null)], null);
}));

(cljs.core.async.t_cljs$core$async60781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60781");

(cljs.core.async.t_cljs$core$async60781.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60781.
 */
cljs.core.async.__GT_t_cljs$core$async60781 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60781(f__$1,ch__$1,meta60775__$1,___$2,fn1__$1,meta60782){
return (new cljs.core.async.t_cljs$core$async60781(f__$1,ch__$1,meta60775__$1,___$2,fn1__$1,meta60782));
});

}

return (new cljs.core.async.t_cljs$core$async60781(self__.f,self__.ch,self__.meta60775,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60810 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60810) : self__.f.call(null,G__60810));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60775","meta60775",730869355,null)], null);
}));

(cljs.core.async.t_cljs$core$async60774.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60774");

(cljs.core.async.t_cljs$core$async60774.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60774");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60774.
 */
cljs.core.async.__GT_t_cljs$core$async60774 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60774(f__$1,ch__$1,meta60775){
return (new cljs.core.async.t_cljs$core$async60774(f__$1,ch__$1,meta60775));
});

}

return (new cljs.core.async.t_cljs$core$async60774(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60819 = (function (f,ch,meta60820){
this.f = f;
this.ch = ch;
this.meta60820 = meta60820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60821,meta60820__$1){
var self__ = this;
var _60821__$1 = this;
return (new cljs.core.async.t_cljs$core$async60819(self__.f,self__.ch,meta60820__$1));
}));

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60821){
var self__ = this;
var _60821__$1 = this;
return self__.meta60820;
}));

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60820","meta60820",-1598182646,null)], null);
}));

(cljs.core.async.t_cljs$core$async60819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60819");

(cljs.core.async.t_cljs$core$async60819.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60819.
 */
cljs.core.async.__GT_t_cljs$core$async60819 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60819(f__$1,ch__$1,meta60820){
return (new cljs.core.async.t_cljs$core$async60819(f__$1,ch__$1,meta60820));
});

}

return (new cljs.core.async.t_cljs$core$async60819(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60825 = (function (p,ch,meta60826){
this.p = p;
this.ch = ch;
this.meta60826 = meta60826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60827,meta60826__$1){
var self__ = this;
var _60827__$1 = this;
return (new cljs.core.async.t_cljs$core$async60825(self__.p,self__.ch,meta60826__$1));
}));

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60827){
var self__ = this;
var _60827__$1 = this;
return self__.meta60826;
}));

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60826","meta60826",1731175176,null)], null);
}));

(cljs.core.async.t_cljs$core$async60825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60825");

(cljs.core.async.t_cljs$core$async60825.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async60825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60825.
 */
cljs.core.async.__GT_t_cljs$core$async60825 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60825(p__$1,ch__$1,meta60826){
return (new cljs.core.async.t_cljs$core$async60825(p__$1,ch__$1,meta60826));
});

}

return (new cljs.core.async.t_cljs$core$async60825(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__60831 = arguments.length;
switch (G__60831) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___62065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60852){
var state_val_60853 = (state_60852[(1)]);
if((state_val_60853 === (7))){
var inst_60848 = (state_60852[(2)]);
var state_60852__$1 = state_60852;
var statearr_60856_62066 = state_60852__$1;
(statearr_60856_62066[(2)] = inst_60848);

(statearr_60856_62066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (1))){
var state_60852__$1 = state_60852;
var statearr_60857_62067 = state_60852__$1;
(statearr_60857_62067[(2)] = null);

(statearr_60857_62067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (4))){
var inst_60834 = (state_60852[(7)]);
var inst_60834__$1 = (state_60852[(2)]);
var inst_60835 = (inst_60834__$1 == null);
var state_60852__$1 = (function (){var statearr_60858 = state_60852;
(statearr_60858[(7)] = inst_60834__$1);

return statearr_60858;
})();
if(cljs.core.truth_(inst_60835)){
var statearr_60859_62071 = state_60852__$1;
(statearr_60859_62071[(1)] = (5));

} else {
var statearr_60860_62072 = state_60852__$1;
(statearr_60860_62072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (6))){
var inst_60834 = (state_60852[(7)]);
var inst_60839 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60834) : p.call(null,inst_60834));
var state_60852__$1 = state_60852;
if(cljs.core.truth_(inst_60839)){
var statearr_60861_62075 = state_60852__$1;
(statearr_60861_62075[(1)] = (8));

} else {
var statearr_60862_62078 = state_60852__$1;
(statearr_60862_62078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (3))){
var inst_60850 = (state_60852[(2)]);
var state_60852__$1 = state_60852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60852__$1,inst_60850);
} else {
if((state_val_60853 === (2))){
var state_60852__$1 = state_60852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60852__$1,(4),ch);
} else {
if((state_val_60853 === (11))){
var inst_60842 = (state_60852[(2)]);
var state_60852__$1 = state_60852;
var statearr_60865_62079 = state_60852__$1;
(statearr_60865_62079[(2)] = inst_60842);

(statearr_60865_62079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (9))){
var state_60852__$1 = state_60852;
var statearr_60866_62081 = state_60852__$1;
(statearr_60866_62081[(2)] = null);

(statearr_60866_62081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (5))){
var inst_60837 = cljs.core.async.close_BANG_(out);
var state_60852__$1 = state_60852;
var statearr_60867_62082 = state_60852__$1;
(statearr_60867_62082[(2)] = inst_60837);

(statearr_60867_62082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (10))){
var inst_60845 = (state_60852[(2)]);
var state_60852__$1 = (function (){var statearr_60868 = state_60852;
(statearr_60868[(8)] = inst_60845);

return statearr_60868;
})();
var statearr_60869_62083 = state_60852__$1;
(statearr_60869_62083[(2)] = null);

(statearr_60869_62083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60853 === (8))){
var inst_60834 = (state_60852[(7)]);
var state_60852__$1 = state_60852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60852__$1,(11),out,inst_60834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_60870 = [null,null,null,null,null,null,null,null,null];
(statearr_60870[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_60870[(1)] = (1));

return statearr_60870;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_60852){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60852);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e60871){var ex__58871__auto__ = e60871;
var statearr_60872_62085 = state_60852;
(statearr_60872_62085[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60852[(4)]))){
var statearr_60873_62086 = state_60852;
(statearr_60873_62086[(1)] = cljs.core.first((state_60852[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62087 = state_60852;
state_60852 = G__62087;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_60852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_60852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_60874 = f__59063__auto__();
(statearr_60874[(6)] = c__59061__auto___62065);

return statearr_60874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60876 = arguments.length;
switch (G__60876) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__59061__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_60945){
var state_val_60946 = (state_60945[(1)]);
if((state_val_60946 === (7))){
var inst_60940 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
var statearr_60947_62093 = state_60945__$1;
(statearr_60947_62093[(2)] = inst_60940);

(statearr_60947_62093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (20))){
var inst_60910 = (state_60945[(7)]);
var inst_60921 = (state_60945[(2)]);
var inst_60922 = cljs.core.next(inst_60910);
var inst_60896 = inst_60922;
var inst_60897 = null;
var inst_60898 = (0);
var inst_60899 = (0);
var state_60945__$1 = (function (){var statearr_60949 = state_60945;
(statearr_60949[(8)] = inst_60896);

(statearr_60949[(9)] = inst_60897);

(statearr_60949[(10)] = inst_60899);

(statearr_60949[(11)] = inst_60921);

(statearr_60949[(12)] = inst_60898);

return statearr_60949;
})();
var statearr_60950_62094 = state_60945__$1;
(statearr_60950_62094[(2)] = null);

(statearr_60950_62094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (1))){
var state_60945__$1 = state_60945;
var statearr_60951_62095 = state_60945__$1;
(statearr_60951_62095[(2)] = null);

(statearr_60951_62095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (4))){
var inst_60881 = (state_60945[(13)]);
var inst_60881__$1 = (state_60945[(2)]);
var inst_60882 = (inst_60881__$1 == null);
var state_60945__$1 = (function (){var statearr_60953 = state_60945;
(statearr_60953[(13)] = inst_60881__$1);

return statearr_60953;
})();
if(cljs.core.truth_(inst_60882)){
var statearr_60954_62096 = state_60945__$1;
(statearr_60954_62096[(1)] = (5));

} else {
var statearr_60955_62097 = state_60945__$1;
(statearr_60955_62097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (15))){
var state_60945__$1 = state_60945;
var statearr_60959_62098 = state_60945__$1;
(statearr_60959_62098[(2)] = null);

(statearr_60959_62098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (21))){
var state_60945__$1 = state_60945;
var statearr_60960_62101 = state_60945__$1;
(statearr_60960_62101[(2)] = null);

(statearr_60960_62101[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (13))){
var inst_60896 = (state_60945[(8)]);
var inst_60897 = (state_60945[(9)]);
var inst_60899 = (state_60945[(10)]);
var inst_60898 = (state_60945[(12)]);
var inst_60906 = (state_60945[(2)]);
var inst_60907 = (inst_60899 + (1));
var tmp60956 = inst_60896;
var tmp60957 = inst_60897;
var tmp60958 = inst_60898;
var inst_60896__$1 = tmp60956;
var inst_60897__$1 = tmp60957;
var inst_60898__$1 = tmp60958;
var inst_60899__$1 = inst_60907;
var state_60945__$1 = (function (){var statearr_60963 = state_60945;
(statearr_60963[(8)] = inst_60896__$1);

(statearr_60963[(9)] = inst_60897__$1);

(statearr_60963[(10)] = inst_60899__$1);

(statearr_60963[(12)] = inst_60898__$1);

(statearr_60963[(14)] = inst_60906);

return statearr_60963;
})();
var statearr_60964_62108 = state_60945__$1;
(statearr_60964_62108[(2)] = null);

(statearr_60964_62108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (22))){
var state_60945__$1 = state_60945;
var statearr_60965_62109 = state_60945__$1;
(statearr_60965_62109[(2)] = null);

(statearr_60965_62109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (6))){
var inst_60881 = (state_60945[(13)]);
var inst_60894 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60881) : f.call(null,inst_60881));
var inst_60895 = cljs.core.seq(inst_60894);
var inst_60896 = inst_60895;
var inst_60897 = null;
var inst_60898 = (0);
var inst_60899 = (0);
var state_60945__$1 = (function (){var statearr_60966 = state_60945;
(statearr_60966[(8)] = inst_60896);

(statearr_60966[(9)] = inst_60897);

(statearr_60966[(10)] = inst_60899);

(statearr_60966[(12)] = inst_60898);

return statearr_60966;
})();
var statearr_60967_62113 = state_60945__$1;
(statearr_60967_62113[(2)] = null);

(statearr_60967_62113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (17))){
var inst_60910 = (state_60945[(7)]);
var inst_60914 = cljs.core.chunk_first(inst_60910);
var inst_60915 = cljs.core.chunk_rest(inst_60910);
var inst_60916 = cljs.core.count(inst_60914);
var inst_60896 = inst_60915;
var inst_60897 = inst_60914;
var inst_60898 = inst_60916;
var inst_60899 = (0);
var state_60945__$1 = (function (){var statearr_60968 = state_60945;
(statearr_60968[(8)] = inst_60896);

(statearr_60968[(9)] = inst_60897);

(statearr_60968[(10)] = inst_60899);

(statearr_60968[(12)] = inst_60898);

return statearr_60968;
})();
var statearr_60969_62115 = state_60945__$1;
(statearr_60969_62115[(2)] = null);

(statearr_60969_62115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (3))){
var inst_60943 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60945__$1,inst_60943);
} else {
if((state_val_60946 === (12))){
var inst_60930 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
var statearr_60970_62116 = state_60945__$1;
(statearr_60970_62116[(2)] = inst_60930);

(statearr_60970_62116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (2))){
var state_60945__$1 = state_60945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60945__$1,(4),in$);
} else {
if((state_val_60946 === (23))){
var inst_60938 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
var statearr_60971_62117 = state_60945__$1;
(statearr_60971_62117[(2)] = inst_60938);

(statearr_60971_62117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (19))){
var inst_60925 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
var statearr_60975_62118 = state_60945__$1;
(statearr_60975_62118[(2)] = inst_60925);

(statearr_60975_62118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (11))){
var inst_60896 = (state_60945[(8)]);
var inst_60910 = (state_60945[(7)]);
var inst_60910__$1 = cljs.core.seq(inst_60896);
var state_60945__$1 = (function (){var statearr_60976 = state_60945;
(statearr_60976[(7)] = inst_60910__$1);

return statearr_60976;
})();
if(inst_60910__$1){
var statearr_60977_62119 = state_60945__$1;
(statearr_60977_62119[(1)] = (14));

} else {
var statearr_60978_62120 = state_60945__$1;
(statearr_60978_62120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (9))){
var inst_60932 = (state_60945[(2)]);
var inst_60933 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60945__$1 = (function (){var statearr_60979 = state_60945;
(statearr_60979[(15)] = inst_60932);

return statearr_60979;
})();
if(cljs.core.truth_(inst_60933)){
var statearr_60980_62121 = state_60945__$1;
(statearr_60980_62121[(1)] = (21));

} else {
var statearr_60981_62122 = state_60945__$1;
(statearr_60981_62122[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (5))){
var inst_60884 = cljs.core.async.close_BANG_(out);
var state_60945__$1 = state_60945;
var statearr_60982_62123 = state_60945__$1;
(statearr_60982_62123[(2)] = inst_60884);

(statearr_60982_62123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (14))){
var inst_60910 = (state_60945[(7)]);
var inst_60912 = cljs.core.chunked_seq_QMARK_(inst_60910);
var state_60945__$1 = state_60945;
if(inst_60912){
var statearr_60983_62124 = state_60945__$1;
(statearr_60983_62124[(1)] = (17));

} else {
var statearr_60984_62125 = state_60945__$1;
(statearr_60984_62125[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (16))){
var inst_60928 = (state_60945[(2)]);
var state_60945__$1 = state_60945;
var statearr_60985_62126 = state_60945__$1;
(statearr_60985_62126[(2)] = inst_60928);

(statearr_60985_62126[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60946 === (10))){
var inst_60897 = (state_60945[(9)]);
var inst_60899 = (state_60945[(10)]);
var inst_60904 = cljs.core._nth(inst_60897,inst_60899);
var state_60945__$1 = state_60945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60945__$1,(13),out,inst_60904);
} else {
if((state_val_60946 === (18))){
var inst_60910 = (state_60945[(7)]);
var inst_60919 = cljs.core.first(inst_60910);
var state_60945__$1 = state_60945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60945__$1,(20),out,inst_60919);
} else {
if((state_val_60946 === (8))){
var inst_60899 = (state_60945[(10)]);
var inst_60898 = (state_60945[(12)]);
var inst_60901 = (inst_60899 < inst_60898);
var inst_60902 = inst_60901;
var state_60945__$1 = state_60945;
if(cljs.core.truth_(inst_60902)){
var statearr_60999_62127 = state_60945__$1;
(statearr_60999_62127[(1)] = (10));

} else {
var statearr_61000_62128 = state_60945__$1;
(statearr_61000_62128[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____0 = (function (){
var statearr_61007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__);

(statearr_61007[(1)] = (1));

return statearr_61007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____1 = (function (state_60945){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_60945);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e61008){var ex__58871__auto__ = e61008;
var statearr_61009_62129 = state_60945;
(statearr_61009_62129[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_60945[(4)]))){
var statearr_61010_62130 = state_60945;
(statearr_61010_62130[(1)] = cljs.core.first((state_60945[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62132 = state_60945;
state_60945 = G__62132;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__ = function(state_60945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____1.call(this,state_60945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58868__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_61018 = f__59063__auto__();
(statearr_61018[(6)] = c__59061__auto__);

return statearr_61018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

return c__59061__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__61023 = arguments.length;
switch (G__61023) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__61028 = arguments.length;
switch (G__61028) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__61034 = arguments.length;
switch (G__61034) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___62150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_61064){
var state_val_61065 = (state_61064[(1)]);
if((state_val_61065 === (7))){
var inst_61059 = (state_61064[(2)]);
var state_61064__$1 = state_61064;
var statearr_61067_62151 = state_61064__$1;
(statearr_61067_62151[(2)] = inst_61059);

(statearr_61067_62151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (1))){
var inst_61035 = null;
var state_61064__$1 = (function (){var statearr_61069 = state_61064;
(statearr_61069[(7)] = inst_61035);

return statearr_61069;
})();
var statearr_61070_62152 = state_61064__$1;
(statearr_61070_62152[(2)] = null);

(statearr_61070_62152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (4))){
var inst_61042 = (state_61064[(8)]);
var inst_61042__$1 = (state_61064[(2)]);
var inst_61043 = (inst_61042__$1 == null);
var inst_61044 = cljs.core.not(inst_61043);
var state_61064__$1 = (function (){var statearr_61071 = state_61064;
(statearr_61071[(8)] = inst_61042__$1);

return statearr_61071;
})();
if(inst_61044){
var statearr_61072_62157 = state_61064__$1;
(statearr_61072_62157[(1)] = (5));

} else {
var statearr_61073_62158 = state_61064__$1;
(statearr_61073_62158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (6))){
var state_61064__$1 = state_61064;
var statearr_61074_62159 = state_61064__$1;
(statearr_61074_62159[(2)] = null);

(statearr_61074_62159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (3))){
var inst_61061 = (state_61064[(2)]);
var inst_61062 = cljs.core.async.close_BANG_(out);
var state_61064__$1 = (function (){var statearr_61075 = state_61064;
(statearr_61075[(9)] = inst_61061);

return statearr_61075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61064__$1,inst_61062);
} else {
if((state_val_61065 === (2))){
var state_61064__$1 = state_61064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61064__$1,(4),ch);
} else {
if((state_val_61065 === (11))){
var inst_61042 = (state_61064[(8)]);
var inst_61051 = (state_61064[(2)]);
var inst_61035 = inst_61042;
var state_61064__$1 = (function (){var statearr_61078 = state_61064;
(statearr_61078[(7)] = inst_61035);

(statearr_61078[(10)] = inst_61051);

return statearr_61078;
})();
var statearr_61079_62160 = state_61064__$1;
(statearr_61079_62160[(2)] = null);

(statearr_61079_62160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (9))){
var inst_61042 = (state_61064[(8)]);
var state_61064__$1 = state_61064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61064__$1,(11),out,inst_61042);
} else {
if((state_val_61065 === (5))){
var inst_61035 = (state_61064[(7)]);
var inst_61042 = (state_61064[(8)]);
var inst_61046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61042,inst_61035);
var state_61064__$1 = state_61064;
if(inst_61046){
var statearr_61086_62161 = state_61064__$1;
(statearr_61086_62161[(1)] = (8));

} else {
var statearr_61087_62162 = state_61064__$1;
(statearr_61087_62162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (10))){
var inst_61056 = (state_61064[(2)]);
var state_61064__$1 = state_61064;
var statearr_61088_62163 = state_61064__$1;
(statearr_61088_62163[(2)] = inst_61056);

(statearr_61088_62163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61065 === (8))){
var inst_61035 = (state_61064[(7)]);
var tmp61081 = inst_61035;
var inst_61035__$1 = tmp61081;
var state_61064__$1 = (function (){var statearr_61089 = state_61064;
(statearr_61089[(7)] = inst_61035__$1);

return statearr_61089;
})();
var statearr_61090_62164 = state_61064__$1;
(statearr_61090_62164[(2)] = null);

(statearr_61090_62164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_61091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61091[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_61091[(1)] = (1));

return statearr_61091;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_61064){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_61064);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e61092){var ex__58871__auto__ = e61092;
var statearr_61093_62165 = state_61064;
(statearr_61093_62165[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_61064[(4)]))){
var statearr_61094_62166 = state_61064;
(statearr_61094_62166[(1)] = cljs.core.first((state_61064[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62167 = state_61064;
state_61064 = G__62167;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_61064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_61064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_61095 = f__59063__auto__();
(statearr_61095[(6)] = c__59061__auto___62150);

return statearr_61095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__61101 = arguments.length;
switch (G__61101) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___62169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_61142){
var state_val_61143 = (state_61142[(1)]);
if((state_val_61143 === (7))){
var inst_61138 = (state_61142[(2)]);
var state_61142__$1 = state_61142;
var statearr_61146_62170 = state_61142__$1;
(statearr_61146_62170[(2)] = inst_61138);

(statearr_61146_62170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (1))){
var inst_61105 = (new Array(n));
var inst_61106 = inst_61105;
var inst_61107 = (0);
var state_61142__$1 = (function (){var statearr_61150 = state_61142;
(statearr_61150[(7)] = inst_61106);

(statearr_61150[(8)] = inst_61107);

return statearr_61150;
})();
var statearr_61151_62171 = state_61142__$1;
(statearr_61151_62171[(2)] = null);

(statearr_61151_62171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (4))){
var inst_61110 = (state_61142[(9)]);
var inst_61110__$1 = (state_61142[(2)]);
var inst_61111 = (inst_61110__$1 == null);
var inst_61112 = cljs.core.not(inst_61111);
var state_61142__$1 = (function (){var statearr_61152 = state_61142;
(statearr_61152[(9)] = inst_61110__$1);

return statearr_61152;
})();
if(inst_61112){
var statearr_61153_62172 = state_61142__$1;
(statearr_61153_62172[(1)] = (5));

} else {
var statearr_61154_62173 = state_61142__$1;
(statearr_61154_62173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (15))){
var inst_61132 = (state_61142[(2)]);
var state_61142__$1 = state_61142;
var statearr_61155_62174 = state_61142__$1;
(statearr_61155_62174[(2)] = inst_61132);

(statearr_61155_62174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (13))){
var state_61142__$1 = state_61142;
var statearr_61156_62175 = state_61142__$1;
(statearr_61156_62175[(2)] = null);

(statearr_61156_62175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (6))){
var inst_61107 = (state_61142[(8)]);
var inst_61128 = (inst_61107 > (0));
var state_61142__$1 = state_61142;
if(cljs.core.truth_(inst_61128)){
var statearr_61157_62176 = state_61142__$1;
(statearr_61157_62176[(1)] = (12));

} else {
var statearr_61158_62177 = state_61142__$1;
(statearr_61158_62177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (3))){
var inst_61140 = (state_61142[(2)]);
var state_61142__$1 = state_61142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61142__$1,inst_61140);
} else {
if((state_val_61143 === (12))){
var inst_61106 = (state_61142[(7)]);
var inst_61130 = cljs.core.vec(inst_61106);
var state_61142__$1 = state_61142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61142__$1,(15),out,inst_61130);
} else {
if((state_val_61143 === (2))){
var state_61142__$1 = state_61142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61142__$1,(4),ch);
} else {
if((state_val_61143 === (11))){
var inst_61122 = (state_61142[(2)]);
var inst_61123 = (new Array(n));
var inst_61106 = inst_61123;
var inst_61107 = (0);
var state_61142__$1 = (function (){var statearr_61159 = state_61142;
(statearr_61159[(7)] = inst_61106);

(statearr_61159[(8)] = inst_61107);

(statearr_61159[(10)] = inst_61122);

return statearr_61159;
})();
var statearr_61160_62178 = state_61142__$1;
(statearr_61160_62178[(2)] = null);

(statearr_61160_62178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (9))){
var inst_61106 = (state_61142[(7)]);
var inst_61120 = cljs.core.vec(inst_61106);
var state_61142__$1 = state_61142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61142__$1,(11),out,inst_61120);
} else {
if((state_val_61143 === (5))){
var inst_61106 = (state_61142[(7)]);
var inst_61115 = (state_61142[(11)]);
var inst_61110 = (state_61142[(9)]);
var inst_61107 = (state_61142[(8)]);
var inst_61114 = (inst_61106[inst_61107] = inst_61110);
var inst_61115__$1 = (inst_61107 + (1));
var inst_61116 = (inst_61115__$1 < n);
var state_61142__$1 = (function (){var statearr_61161 = state_61142;
(statearr_61161[(11)] = inst_61115__$1);

(statearr_61161[(12)] = inst_61114);

return statearr_61161;
})();
if(cljs.core.truth_(inst_61116)){
var statearr_61162_62179 = state_61142__$1;
(statearr_61162_62179[(1)] = (8));

} else {
var statearr_61164_62180 = state_61142__$1;
(statearr_61164_62180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (14))){
var inst_61135 = (state_61142[(2)]);
var inst_61136 = cljs.core.async.close_BANG_(out);
var state_61142__$1 = (function (){var statearr_61169 = state_61142;
(statearr_61169[(13)] = inst_61135);

return statearr_61169;
})();
var statearr_61170_62183 = state_61142__$1;
(statearr_61170_62183[(2)] = inst_61136);

(statearr_61170_62183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (10))){
var inst_61126 = (state_61142[(2)]);
var state_61142__$1 = state_61142;
var statearr_61171_62187 = state_61142__$1;
(statearr_61171_62187[(2)] = inst_61126);

(statearr_61171_62187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61143 === (8))){
var inst_61106 = (state_61142[(7)]);
var inst_61115 = (state_61142[(11)]);
var tmp61168 = inst_61106;
var inst_61106__$1 = tmp61168;
var inst_61107 = inst_61115;
var state_61142__$1 = (function (){var statearr_61172 = state_61142;
(statearr_61172[(7)] = inst_61106__$1);

(statearr_61172[(8)] = inst_61107);

return statearr_61172;
})();
var statearr_61173_62188 = state_61142__$1;
(statearr_61173_62188[(2)] = null);

(statearr_61173_62188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_61178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61178[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_61178[(1)] = (1));

return statearr_61178;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_61142){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_61142);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e61179){var ex__58871__auto__ = e61179;
var statearr_61180_62196 = state_61142;
(statearr_61180_62196[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_61142[(4)]))){
var statearr_61181_62197 = state_61142;
(statearr_61181_62197[(1)] = cljs.core.first((state_61142[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62198 = state_61142;
state_61142 = G__62198;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_61142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_61142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_61182 = f__59063__auto__();
(statearr_61182[(6)] = c__59061__auto___62169);

return statearr_61182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__61184 = arguments.length;
switch (G__61184) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59061__auto___62203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_61231){
var state_val_61232 = (state_61231[(1)]);
if((state_val_61232 === (7))){
var inst_61227 = (state_61231[(2)]);
var state_61231__$1 = state_61231;
var statearr_61236_62204 = state_61231__$1;
(statearr_61236_62204[(2)] = inst_61227);

(statearr_61236_62204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (1))){
var inst_61185 = [];
var inst_61187 = inst_61185;
var inst_61188 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61231__$1 = (function (){var statearr_61237 = state_61231;
(statearr_61237[(7)] = inst_61187);

(statearr_61237[(8)] = inst_61188);

return statearr_61237;
})();
var statearr_61238_62205 = state_61231__$1;
(statearr_61238_62205[(2)] = null);

(statearr_61238_62205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (4))){
var inst_61191 = (state_61231[(9)]);
var inst_61191__$1 = (state_61231[(2)]);
var inst_61193 = (inst_61191__$1 == null);
var inst_61194 = cljs.core.not(inst_61193);
var state_61231__$1 = (function (){var statearr_61239 = state_61231;
(statearr_61239[(9)] = inst_61191__$1);

return statearr_61239;
})();
if(inst_61194){
var statearr_61240_62209 = state_61231__$1;
(statearr_61240_62209[(1)] = (5));

} else {
var statearr_61241_62210 = state_61231__$1;
(statearr_61241_62210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (15))){
var inst_61187 = (state_61231[(7)]);
var inst_61219 = cljs.core.vec(inst_61187);
var state_61231__$1 = state_61231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61231__$1,(18),out,inst_61219);
} else {
if((state_val_61232 === (13))){
var inst_61214 = (state_61231[(2)]);
var state_61231__$1 = state_61231;
var statearr_61242_62211 = state_61231__$1;
(statearr_61242_62211[(2)] = inst_61214);

(statearr_61242_62211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (6))){
var inst_61187 = (state_61231[(7)]);
var inst_61216 = inst_61187.length;
var inst_61217 = (inst_61216 > (0));
var state_61231__$1 = state_61231;
if(cljs.core.truth_(inst_61217)){
var statearr_61243_62212 = state_61231__$1;
(statearr_61243_62212[(1)] = (15));

} else {
var statearr_61244_62216 = state_61231__$1;
(statearr_61244_62216[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (17))){
var inst_61224 = (state_61231[(2)]);
var inst_61225 = cljs.core.async.close_BANG_(out);
var state_61231__$1 = (function (){var statearr_61245 = state_61231;
(statearr_61245[(10)] = inst_61224);

return statearr_61245;
})();
var statearr_61246_62217 = state_61231__$1;
(statearr_61246_62217[(2)] = inst_61225);

(statearr_61246_62217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (3))){
var inst_61229 = (state_61231[(2)]);
var state_61231__$1 = state_61231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61231__$1,inst_61229);
} else {
if((state_val_61232 === (12))){
var inst_61187 = (state_61231[(7)]);
var inst_61207 = cljs.core.vec(inst_61187);
var state_61231__$1 = state_61231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61231__$1,(14),out,inst_61207);
} else {
if((state_val_61232 === (2))){
var state_61231__$1 = state_61231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61231__$1,(4),ch);
} else {
if((state_val_61232 === (11))){
var inst_61187 = (state_61231[(7)]);
var inst_61191 = (state_61231[(9)]);
var inst_61196 = (state_61231[(11)]);
var inst_61204 = inst_61187.push(inst_61191);
var tmp61247 = inst_61187;
var inst_61187__$1 = tmp61247;
var inst_61188 = inst_61196;
var state_61231__$1 = (function (){var statearr_61248 = state_61231;
(statearr_61248[(7)] = inst_61187__$1);

(statearr_61248[(8)] = inst_61188);

(statearr_61248[(12)] = inst_61204);

return statearr_61248;
})();
var statearr_61249_62219 = state_61231__$1;
(statearr_61249_62219[(2)] = null);

(statearr_61249_62219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (9))){
var inst_61188 = (state_61231[(8)]);
var inst_61200 = cljs.core.keyword_identical_QMARK_(inst_61188,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_61231__$1 = state_61231;
var statearr_61250_62220 = state_61231__$1;
(statearr_61250_62220[(2)] = inst_61200);

(statearr_61250_62220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (5))){
var inst_61188 = (state_61231[(8)]);
var inst_61191 = (state_61231[(9)]);
var inst_61197 = (state_61231[(13)]);
var inst_61196 = (state_61231[(11)]);
var inst_61196__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61191) : f.call(null,inst_61191));
var inst_61197__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61196__$1,inst_61188);
var state_61231__$1 = (function (){var statearr_61251 = state_61231;
(statearr_61251[(13)] = inst_61197__$1);

(statearr_61251[(11)] = inst_61196__$1);

return statearr_61251;
})();
if(inst_61197__$1){
var statearr_61252_62221 = state_61231__$1;
(statearr_61252_62221[(1)] = (8));

} else {
var statearr_61253_62222 = state_61231__$1;
(statearr_61253_62222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (14))){
var inst_61191 = (state_61231[(9)]);
var inst_61196 = (state_61231[(11)]);
var inst_61209 = (state_61231[(2)]);
var inst_61210 = [];
var inst_61211 = inst_61210.push(inst_61191);
var inst_61187 = inst_61210;
var inst_61188 = inst_61196;
var state_61231__$1 = (function (){var statearr_61254 = state_61231;
(statearr_61254[(14)] = inst_61211);

(statearr_61254[(7)] = inst_61187);

(statearr_61254[(8)] = inst_61188);

(statearr_61254[(15)] = inst_61209);

return statearr_61254;
})();
var statearr_61255_62228 = state_61231__$1;
(statearr_61255_62228[(2)] = null);

(statearr_61255_62228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (16))){
var state_61231__$1 = state_61231;
var statearr_61256_62233 = state_61231__$1;
(statearr_61256_62233[(2)] = null);

(statearr_61256_62233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (10))){
var inst_61202 = (state_61231[(2)]);
var state_61231__$1 = state_61231;
if(cljs.core.truth_(inst_61202)){
var statearr_61257_62234 = state_61231__$1;
(statearr_61257_62234[(1)] = (11));

} else {
var statearr_61258_62235 = state_61231__$1;
(statearr_61258_62235[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (18))){
var inst_61221 = (state_61231[(2)]);
var state_61231__$1 = state_61231;
var statearr_61259_62236 = state_61231__$1;
(statearr_61259_62236[(2)] = inst_61221);

(statearr_61259_62236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61232 === (8))){
var inst_61197 = (state_61231[(13)]);
var state_61231__$1 = state_61231;
var statearr_61260_62243 = state_61231__$1;
(statearr_61260_62243[(2)] = inst_61197);

(statearr_61260_62243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58868__auto__ = null;
var cljs$core$async$state_machine__58868__auto____0 = (function (){
var statearr_61261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61261[(0)] = cljs$core$async$state_machine__58868__auto__);

(statearr_61261[(1)] = (1));

return statearr_61261;
});
var cljs$core$async$state_machine__58868__auto____1 = (function (state_61231){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_61231);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e61262){var ex__58871__auto__ = e61262;
var statearr_61263_62244 = state_61231;
(statearr_61263_62244[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_61231[(4)]))){
var statearr_61264_62245 = state_61231;
(statearr_61264_62245[(1)] = cljs.core.first((state_61231[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62246 = state_61231;
state_61231 = G__62246;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
cljs$core$async$state_machine__58868__auto__ = function(state_61231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58868__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58868__auto____1.call(this,state_61231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58868__auto____0;
cljs$core$async$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58868__auto____1;
return cljs$core$async$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_61265 = f__59063__auto__();
(statearr_61265[(6)] = c__59061__auto___62203);

return statearr_61265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
