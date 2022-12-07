import "./cljs_env.js";
goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66016 = arguments.length;
var i__4865__auto___66017 = (0);
while(true){
if((i__4865__auto___66017 < len__4864__auto___66016)){
args__4870__auto__.push((arguments[i__4865__auto___66017]));

var G__66019 = (i__4865__auto___66017 + (1));
i__4865__auto___66017 = G__66019;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__65811_66020 = keyvals;
var vec__65812_66021 = G__65811_66020;
var seq__65813_66022 = cljs.core.seq(vec__65812_66021);
var first__65814_66023 = cljs.core.first(seq__65813_66022);
var seq__65813_66024__$1 = cljs.core.next(seq__65813_66022);
var k_66025 = first__65814_66023;
var first__65814_66026__$1 = cljs.core.first(seq__65813_66024__$1);
var seq__65813_66027__$2 = cljs.core.next(seq__65813_66024__$1);
var v_66028 = first__65814_66026__$1;
var keyvals_66029__$1 = seq__65813_66027__$2;
var G__65811_66030__$1 = G__65811_66020;
while(true){
var vec__65816_66031 = G__65811_66030__$1;
var seq__65817_66032 = cljs.core.seq(vec__65816_66031);
var first__65818_66033 = cljs.core.first(seq__65817_66032);
var seq__65817_66034__$1 = cljs.core.next(seq__65817_66032);
var k_66035__$1 = first__65818_66033;
var first__65818_66036__$1 = cljs.core.first(seq__65817_66034__$1);
var seq__65817_66037__$2 = cljs.core.next(seq__65817_66034__$1);
var v_66038__$1 = first__65818_66036__$1;
var keyvals_66039__$2 = seq__65817_66037__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_66035__$1)] = v_66038__$1);

if(keyvals_66039__$2){
var G__66040 = keyvals_66039__$2;
G__65811_66030__$1 = G__66040;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq65806){
var G__65807 = cljs.core.first(seq65806);
var seq65806__$1 = cljs.core.next(seq65806);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65807,seq65806__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__65820 = arguments.length;
switch (G__65820) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj65822 = obj;
if((!((obj65822 == null)))){
return (obj65822[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj65823 = obj;
if((!((obj65823 == null)))){
return (obj65823[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__65440__auto__ = (function (){var obj65824 = obj;
if((!((obj65824 == null)))){
return (obj65824[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__65440__auto__)){
return not_found;
} else {
return val__65440__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__65847 = arguments.length;
switch (G__65847) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj65869 = self__.obj;
if((!((obj65869 == null)))){
return (obj65869[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__65440__auto__ = (function (){var obj65870 = self__.obj;
if((!((obj65870 == null)))){
return (obj65870[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__65440__auto__)){
return not_found;
} else {
return val__65440__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66051 = arguments.length;
var i__4865__auto___66053 = (0);
while(true){
if((i__4865__auto___66053 < len__4864__auto___66051)){
args__4870__auto__.push((arguments[i__4865__auto___66053]));

var G__66056 = (i__4865__auto___66053 + (1));
i__4865__auto___66053 = G__66056;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__65908 = keyvals;
var vec__65909 = G__65908;
var seq__65910 = cljs.core.seq(vec__65909);
var first__65911 = cljs.core.first(seq__65910);
var seq__65910__$1 = cljs.core.next(seq__65910);
var k = first__65911;
var first__65911__$1 = cljs.core.first(seq__65910__$1);
var seq__65910__$2 = cljs.core.next(seq__65910__$1);
var v = first__65911__$1;
var kvs = seq__65910__$2;
var G__65908__$1 = G__65908;
while(true){
var vec__65912 = G__65908__$1;
var seq__65913 = cljs.core.seq(vec__65912);
var first__65914 = cljs.core.first(seq__65913);
var seq__65913__$1 = cljs.core.next(seq__65913);
var k__$1 = first__65914;
var first__65914__$1 = cljs.core.first(seq__65913__$1);
var seq__65913__$2 = cljs.core.next(seq__65913__$1);
var v__$1 = first__65914__$1;
var kvs__$1 = seq__65913__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__66060 = kvs__$1;
G__65908__$1 = G__66060;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq65891){
var G__65892 = cljs.core.first(seq65891);
var seq65891__$1 = cljs.core.next(seq65891);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65892,seq65891__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66061 = arguments.length;
var i__4865__auto___66062 = (0);
while(true){
if((i__4865__auto___66062 < len__4864__auto___66061)){
args__4870__auto__.push((arguments[i__4865__auto___66062]));

var G__66064 = (i__4865__auto___66062 + (1));
i__4865__auto___66062 = G__66064;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq65915){
var G__65916 = cljs.core.first(seq65915);
var seq65915__$1 = cljs.core.next(seq65915);
var G__65917 = cljs.core.first(seq65915__$1);
var seq65915__$2 = cljs.core.next(seq65915__$1);
var G__65918 = cljs.core.first(seq65915__$2);
var seq65915__$3 = cljs.core.next(seq65915__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65916,G__65917,G__65918,seq65915__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66070 = arguments.length;
var i__4865__auto___66071 = (0);
while(true){
if((i__4865__auto___66071 < len__4864__auto___66070)){
args__4870__auto__.push((arguments[i__4865__auto___66071]));

var G__66072 = (i__4865__auto___66071 + (1));
i__4865__auto___66071 = G__66072;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq65925){
var G__65926 = cljs.core.first(seq65925);
var seq65925__$1 = cljs.core.next(seq65925);
var G__65927 = cljs.core.first(seq65925__$1);
var seq65925__$2 = cljs.core.next(seq65925__$1);
var G__65928 = cljs.core.first(seq65925__$2);
var seq65925__$3 = cljs.core.next(seq65925__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65926,G__65927,G__65928,seq65925__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__65939 = arguments.length;
switch (G__65939) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___66074 = arguments.length;
var i__4865__auto___66075 = (0);
while(true){
if((i__4865__auto___66075 < len__4864__auto___66074)){
args_arr__4885__auto__.push((arguments[i__4865__auto___66075]));

var G__66076 = (i__4865__auto___66075 + (1));
i__4865__auto___66075 = G__66076;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__65948_66077 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__65949_66078 = null;
var count__65950_66079 = (0);
var i__65951_66080 = (0);
while(true){
if((i__65951_66080 < count__65950_66079)){
var k_66081 = chunk__65949_66078.cljs$core$IIndexed$_nth$arity$2(null,i__65951_66080);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_66081,applied_science.js_interop.unchecked_get(x,k_66081)], 0));


var G__66082 = seq__65948_66077;
var G__66083 = chunk__65949_66078;
var G__66084 = count__65950_66079;
var G__66085 = (i__65951_66080 + (1));
seq__65948_66077 = G__66082;
chunk__65949_66078 = G__66083;
count__65950_66079 = G__66084;
i__65951_66080 = G__66085;
continue;
} else {
var temp__5753__auto___66086 = cljs.core.seq(seq__65948_66077);
if(temp__5753__auto___66086){
var seq__65948_66087__$1 = temp__5753__auto___66086;
if(cljs.core.chunked_seq_QMARK_(seq__65948_66087__$1)){
var c__4679__auto___66088 = cljs.core.chunk_first(seq__65948_66087__$1);
var G__66089 = cljs.core.chunk_rest(seq__65948_66087__$1);
var G__66090 = c__4679__auto___66088;
var G__66091 = cljs.core.count(c__4679__auto___66088);
var G__66092 = (0);
seq__65948_66077 = G__66089;
chunk__65949_66078 = G__66090;
count__65950_66079 = G__66091;
i__65951_66080 = G__66092;
continue;
} else {
var k_66093 = cljs.core.first(seq__65948_66087__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_66093,applied_science.js_interop.unchecked_get(x,k_66093)], 0));


var G__66094 = cljs.core.next(seq__65948_66087__$1);
var G__66095 = null;
var G__66096 = (0);
var G__66097 = (0);
seq__65948_66077 = G__66094;
chunk__65949_66078 = G__66095;
count__65950_66079 = G__66096;
i__65951_66080 = G__66097;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq65933){
var G__65934 = cljs.core.first(seq65933);
var seq65933__$1 = cljs.core.next(seq65933);
var G__65935 = cljs.core.first(seq65933__$1);
var seq65933__$2 = cljs.core.next(seq65933__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65934,G__65935,seq65933__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__65962 = array;
G__65962.push(x);

return G__65962;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__65963 = array;
G__65963.unshift(x);

return G__65963;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66098 = arguments.length;
var i__4865__auto___66099 = (0);
while(true){
if((i__4865__auto___66099 < len__4864__auto___66098)){
args__4870__auto__.push((arguments[i__4865__auto___66099]));

var G__66100 = (i__4865__auto___66099 + (1));
i__4865__auto___66099 = G__66100;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj65970 = obj;
if((!((obj65970 == null)))){
return (obj65970[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq65964){
var G__65965 = cljs.core.first(seq65964);
var seq65964__$1 = cljs.core.next(seq65964);
var G__65966 = cljs.core.first(seq65964__$1);
var seq65964__$2 = cljs.core.next(seq65964__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65965,G__65966,seq65964__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj65973 = obj;
if((!((obj65973 == null)))){
return (obj65973[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66101 = arguments.length;
var i__4865__auto___66102 = (0);
while(true){
if((i__4865__auto___66102 < len__4864__auto___66101)){
args__4870__auto__.push((arguments[i__4865__auto___66102]));

var G__66103 = (i__4865__auto___66102 + (1));
i__4865__auto___66102 = G__66103;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq65978){
var G__65979 = cljs.core.first(seq65978);
var seq65978__$1 = cljs.core.next(seq65978);
var G__65980 = cljs.core.first(seq65978__$1);
var seq65978__$2 = cljs.core.next(seq65978__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65979,G__65980,seq65978__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___66104 = arguments.length;
var i__4865__auto___66105 = (0);
while(true){
if((i__4865__auto___66105 < len__4864__auto___66104)){
args__4870__auto__.push((arguments[i__4865__auto___66105]));

var G__66106 = (i__4865__auto___66105 + (1));
i__4865__auto___66105 = G__66106;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__65984_66107 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__65985_66108 = null;
var count__65986_66109 = (0);
var i__65987_66110 = (0);
while(true){
if((i__65987_66110 < count__65986_66109)){
var vec__66002_66111 = chunk__65985_66108.cljs$core$IIndexed$_nth$arity$2(null,i__65987_66110);
var k_66112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66002_66111,(0),null);
var v_66113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66002_66111,(1),null);
var obj66005_66114 = obj;
var obj66006_66115 = (((!((obj66005_66114 == null))))?obj66005_66114:({}));
(obj66006_66115[applied_science.js_interop.impl.wrap_key(k_66112)] = v_66113);



var G__66116 = seq__65984_66107;
var G__66117 = chunk__65985_66108;
var G__66118 = count__65986_66109;
var G__66119 = (i__65987_66110 + (1));
seq__65984_66107 = G__66116;
chunk__65985_66108 = G__66117;
count__65986_66109 = G__66118;
i__65987_66110 = G__66119;
continue;
} else {
var temp__5753__auto___66120 = cljs.core.seq(seq__65984_66107);
if(temp__5753__auto___66120){
var seq__65984_66121__$1 = temp__5753__auto___66120;
if(cljs.core.chunked_seq_QMARK_(seq__65984_66121__$1)){
var c__4679__auto___66123 = cljs.core.chunk_first(seq__65984_66121__$1);
var G__66124 = cljs.core.chunk_rest(seq__65984_66121__$1);
var G__66125 = c__4679__auto___66123;
var G__66126 = cljs.core.count(c__4679__auto___66123);
var G__66127 = (0);
seq__65984_66107 = G__66124;
chunk__65985_66108 = G__66125;
count__65986_66109 = G__66126;
i__65987_66110 = G__66127;
continue;
} else {
var vec__66009_66129 = cljs.core.first(seq__65984_66121__$1);
var k_66130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66009_66129,(0),null);
var v_66131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66009_66129,(1),null);
var obj66012_66133 = obj;
var obj66013_66134 = (((!((obj66012_66133 == null))))?obj66012_66133:({}));
(obj66013_66134[applied_science.js_interop.impl.wrap_key(k_66130)] = v_66131);



var G__66135 = cljs.core.next(seq__65984_66121__$1);
var G__66136 = null;
var G__66137 = (0);
var G__66138 = (0);
seq__65984_66107 = G__66135;
chunk__65985_66108 = G__66136;
count__65986_66109 = G__66137;
i__65987_66110 = G__66138;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq65981){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65981));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
