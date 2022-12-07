import "./cljs_env.js";
goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__71458 = arguments.length;
switch (G__71458) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__71471 = (fixed_arity | (0));
switch (G__71471) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__71473){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__71473);

while(true){
var ret__70654__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70654__auto__)){
continue;
} else {
return ret__70654__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__71473 = null;
if (arguments.length > 0) {
var G__72173__i = 0, G__72173__a = new Array(arguments.length -  0);
while (G__72173__i < G__72173__a.length) {G__72173__a[G__72173__i] = arguments[G__72173__i + 0]; ++G__72173__i;}
  G__71473 = new cljs.core.IndexedSeq(G__72173__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__71473);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__72174){
var G__71473 = cljs.core.seq(arglist__72174);
return sci$impl$fns$arity_0__delegate(G__71473);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__71476,G__71477){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71476);

(invoc_array[vararg_idx] = G__71477);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__71476,var_args){
var G__71477 = null;
if (arguments.length > 1) {
var G__72175__i = 0, G__72175__a = new Array(arguments.length -  1);
while (G__72175__i < G__72175__a.length) {G__72175__a[G__72175__i] = arguments[G__72175__i + 1]; ++G__72175__i;}
  G__71477 = new cljs.core.IndexedSeq(G__72175__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__71476,G__71477);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__72176){
var G__71476 = cljs.core.first(arglist__72176);
var G__71477 = cljs.core.rest(arglist__72176);
return sci$impl$fns$arity_1__delegate(G__71476,G__71477);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__71480,G__71481,G__71482){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71480);

(invoc_array[(1)] = G__71481);

(invoc_array[vararg_idx] = G__71482);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__71480,G__71481,var_args){
var G__71482 = null;
if (arguments.length > 2) {
var G__72180__i = 0, G__72180__a = new Array(arguments.length -  2);
while (G__72180__i < G__72180__a.length) {G__72180__a[G__72180__i] = arguments[G__72180__i + 2]; ++G__72180__i;}
  G__71482 = new cljs.core.IndexedSeq(G__72180__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__71480,G__71481,G__71482);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__72181){
var G__71480 = cljs.core.first(arglist__72181);
arglist__72181 = cljs.core.next(arglist__72181);
var G__71481 = cljs.core.first(arglist__72181);
var G__71482 = cljs.core.rest(arglist__72181);
return sci$impl$fns$arity_2__delegate(G__71480,G__71481,G__71482);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__71503,G__71504,G__71505,G__71506){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71503);

(invoc_array[(1)] = G__71504);

(invoc_array[(2)] = G__71505);

(invoc_array[vararg_idx] = G__71506);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__71503,G__71504,G__71505,var_args){
var G__71506 = null;
if (arguments.length > 3) {
var G__72184__i = 0, G__72184__a = new Array(arguments.length -  3);
while (G__72184__i < G__72184__a.length) {G__72184__a[G__72184__i] = arguments[G__72184__i + 3]; ++G__72184__i;}
  G__71506 = new cljs.core.IndexedSeq(G__72184__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__71503,G__71504,G__71505,G__71506);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__72185){
var G__71503 = cljs.core.first(arglist__72185);
arglist__72185 = cljs.core.next(arglist__72185);
var G__71504 = cljs.core.first(arglist__72185);
arglist__72185 = cljs.core.next(arglist__72185);
var G__71505 = cljs.core.first(arglist__72185);
var G__71506 = cljs.core.rest(arglist__72185);
return sci$impl$fns$arity_3__delegate(G__71503,G__71504,G__71505,G__71506);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__71543,G__71544,G__71545,G__71546,G__71547){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71543);

(invoc_array[(1)] = G__71544);

(invoc_array[(2)] = G__71545);

(invoc_array[(3)] = G__71546);

(invoc_array[vararg_idx] = G__71547);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__71543,G__71544,G__71545,G__71546,var_args){
var G__71547 = null;
if (arguments.length > 4) {
var G__72189__i = 0, G__72189__a = new Array(arguments.length -  4);
while (G__72189__i < G__72189__a.length) {G__72189__a[G__72189__i] = arguments[G__72189__i + 4]; ++G__72189__i;}
  G__71547 = new cljs.core.IndexedSeq(G__72189__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__71543,G__71544,G__71545,G__71546,G__71547);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__72190){
var G__71543 = cljs.core.first(arglist__72190);
arglist__72190 = cljs.core.next(arglist__72190);
var G__71544 = cljs.core.first(arglist__72190);
arglist__72190 = cljs.core.next(arglist__72190);
var G__71545 = cljs.core.first(arglist__72190);
arglist__72190 = cljs.core.next(arglist__72190);
var G__71546 = cljs.core.first(arglist__72190);
var G__71547 = cljs.core.rest(arglist__72190);
return sci$impl$fns$arity_4__delegate(G__71543,G__71544,G__71545,G__71546,G__71547);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__71579,G__71580,G__71581,G__71582,G__71583,G__71584){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71579);

(invoc_array[(1)] = G__71580);

(invoc_array[(2)] = G__71581);

(invoc_array[(3)] = G__71582);

(invoc_array[(4)] = G__71583);

(invoc_array[vararg_idx] = G__71584);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__71579,G__71580,G__71581,G__71582,G__71583,var_args){
var G__71584 = null;
if (arguments.length > 5) {
var G__72193__i = 0, G__72193__a = new Array(arguments.length -  5);
while (G__72193__i < G__72193__a.length) {G__72193__a[G__72193__i] = arguments[G__72193__i + 5]; ++G__72193__i;}
  G__71584 = new cljs.core.IndexedSeq(G__72193__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__71579,G__71580,G__71581,G__71582,G__71583,G__71584);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__72194){
var G__71579 = cljs.core.first(arglist__72194);
arglist__72194 = cljs.core.next(arglist__72194);
var G__71580 = cljs.core.first(arglist__72194);
arglist__72194 = cljs.core.next(arglist__72194);
var G__71581 = cljs.core.first(arglist__72194);
arglist__72194 = cljs.core.next(arglist__72194);
var G__71582 = cljs.core.first(arglist__72194);
arglist__72194 = cljs.core.next(arglist__72194);
var G__71583 = cljs.core.first(arglist__72194);
var G__71584 = cljs.core.rest(arglist__72194);
return sci$impl$fns$arity_5__delegate(G__71579,G__71580,G__71581,G__71582,G__71583,G__71584);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__71586,G__71587,G__71588,G__71589,G__71590,G__71591,G__71592){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71586);

(invoc_array[(1)] = G__71587);

(invoc_array[(2)] = G__71588);

(invoc_array[(3)] = G__71589);

(invoc_array[(4)] = G__71590);

(invoc_array[(5)] = G__71591);

(invoc_array[vararg_idx] = G__71592);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__71586,G__71587,G__71588,G__71589,G__71590,G__71591,var_args){
var G__71592 = null;
if (arguments.length > 6) {
var G__72195__i = 0, G__72195__a = new Array(arguments.length -  6);
while (G__72195__i < G__72195__a.length) {G__72195__a[G__72195__i] = arguments[G__72195__i + 6]; ++G__72195__i;}
  G__71592 = new cljs.core.IndexedSeq(G__72195__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__71586,G__71587,G__71588,G__71589,G__71590,G__71591,G__71592);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__72196){
var G__71586 = cljs.core.first(arglist__72196);
arglist__72196 = cljs.core.next(arglist__72196);
var G__71587 = cljs.core.first(arglist__72196);
arglist__72196 = cljs.core.next(arglist__72196);
var G__71588 = cljs.core.first(arglist__72196);
arglist__72196 = cljs.core.next(arglist__72196);
var G__71589 = cljs.core.first(arglist__72196);
arglist__72196 = cljs.core.next(arglist__72196);
var G__71590 = cljs.core.first(arglist__72196);
arglist__72196 = cljs.core.next(arglist__72196);
var G__71591 = cljs.core.first(arglist__72196);
var G__71592 = cljs.core.rest(arglist__72196);
return sci$impl$fns$arity_6__delegate(G__71586,G__71587,G__71588,G__71589,G__71590,G__71591,G__71592);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__71614,G__71615,G__71616,G__71617,G__71618,G__71619,G__71620,G__71621){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71614);

(invoc_array[(1)] = G__71615);

(invoc_array[(2)] = G__71616);

(invoc_array[(3)] = G__71617);

(invoc_array[(4)] = G__71618);

(invoc_array[(5)] = G__71619);

(invoc_array[(6)] = G__71620);

(invoc_array[vararg_idx] = G__71621);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__71614,G__71615,G__71616,G__71617,G__71618,G__71619,G__71620,var_args){
var G__71621 = null;
if (arguments.length > 7) {
var G__72205__i = 0, G__72205__a = new Array(arguments.length -  7);
while (G__72205__i < G__72205__a.length) {G__72205__a[G__72205__i] = arguments[G__72205__i + 7]; ++G__72205__i;}
  G__71621 = new cljs.core.IndexedSeq(G__72205__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__71614,G__71615,G__71616,G__71617,G__71618,G__71619,G__71620,G__71621);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__72206){
var G__71614 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71615 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71616 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71617 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71618 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71619 = cljs.core.first(arglist__72206);
arglist__72206 = cljs.core.next(arglist__72206);
var G__71620 = cljs.core.first(arglist__72206);
var G__71621 = cljs.core.rest(arglist__72206);
return sci$impl$fns$arity_7__delegate(G__71614,G__71615,G__71616,G__71617,G__71618,G__71619,G__71620,G__71621);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__71623,G__71624,G__71625,G__71626,G__71627,G__71628,G__71629,G__71630,G__71631){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71623);

(invoc_array[(1)] = G__71624);

(invoc_array[(2)] = G__71625);

(invoc_array[(3)] = G__71626);

(invoc_array[(4)] = G__71627);

(invoc_array[(5)] = G__71628);

(invoc_array[(6)] = G__71629);

(invoc_array[(7)] = G__71630);

(invoc_array[vararg_idx] = G__71631);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__71623,G__71624,G__71625,G__71626,G__71627,G__71628,G__71629,G__71630,var_args){
var G__71631 = null;
if (arguments.length > 8) {
var G__72231__i = 0, G__72231__a = new Array(arguments.length -  8);
while (G__72231__i < G__72231__a.length) {G__72231__a[G__72231__i] = arguments[G__72231__i + 8]; ++G__72231__i;}
  G__71631 = new cljs.core.IndexedSeq(G__72231__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__71623,G__71624,G__71625,G__71626,G__71627,G__71628,G__71629,G__71630,G__71631);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__72233){
var G__71623 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71624 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71625 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71626 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71627 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71628 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71629 = cljs.core.first(arglist__72233);
arglist__72233 = cljs.core.next(arglist__72233);
var G__71630 = cljs.core.first(arglist__72233);
var G__71631 = cljs.core.rest(arglist__72233);
return sci$impl$fns$arity_8__delegate(G__71623,G__71624,G__71625,G__71626,G__71627,G__71628,G__71629,G__71630,G__71631);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__71644,G__71645,G__71646,G__71647,G__71648,G__71649,G__71650,G__71651,G__71652,G__71653){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71644);

(invoc_array[(1)] = G__71645);

(invoc_array[(2)] = G__71646);

(invoc_array[(3)] = G__71647);

(invoc_array[(4)] = G__71648);

(invoc_array[(5)] = G__71649);

(invoc_array[(6)] = G__71650);

(invoc_array[(7)] = G__71651);

(invoc_array[(8)] = G__71652);

(invoc_array[vararg_idx] = G__71653);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__71644,G__71645,G__71646,G__71647,G__71648,G__71649,G__71650,G__71651,G__71652,var_args){
var G__71653 = null;
if (arguments.length > 9) {
var G__72245__i = 0, G__72245__a = new Array(arguments.length -  9);
while (G__72245__i < G__72245__a.length) {G__72245__a[G__72245__i] = arguments[G__72245__i + 9]; ++G__72245__i;}
  G__71653 = new cljs.core.IndexedSeq(G__72245__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__71644,G__71645,G__71646,G__71647,G__71648,G__71649,G__71650,G__71651,G__71652,G__71653);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__72247){
var G__71644 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71645 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71646 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71647 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71648 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71649 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71650 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71651 = cljs.core.first(arglist__72247);
arglist__72247 = cljs.core.next(arglist__72247);
var G__71652 = cljs.core.first(arglist__72247);
var G__71653 = cljs.core.rest(arglist__72247);
return sci$impl$fns$arity_9__delegate(G__71644,G__71645,G__71646,G__71647,G__71648,G__71649,G__71650,G__71651,G__71652,G__71653);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__71656,G__71657,G__71658,G__71659,G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71656);

(invoc_array[(1)] = G__71657);

(invoc_array[(2)] = G__71658);

(invoc_array[(3)] = G__71659);

(invoc_array[(4)] = G__71660);

(invoc_array[(5)] = G__71661);

(invoc_array[(6)] = G__71662);

(invoc_array[(7)] = G__71663);

(invoc_array[(8)] = G__71664);

(invoc_array[(9)] = G__71665);

(invoc_array[vararg_idx] = G__71666);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__71656,G__71657,G__71658,G__71659,G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,var_args){
var G__71666 = null;
if (arguments.length > 10) {
var G__72323__i = 0, G__72323__a = new Array(arguments.length -  10);
while (G__72323__i < G__72323__a.length) {G__72323__a[G__72323__i] = arguments[G__72323__i + 10]; ++G__72323__i;}
  G__71666 = new cljs.core.IndexedSeq(G__72323__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__71656,G__71657,G__71658,G__71659,G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__72324){
var G__71656 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71657 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71658 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71659 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71660 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71661 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71662 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71663 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71664 = cljs.core.first(arglist__72324);
arglist__72324 = cljs.core.next(arglist__72324);
var G__71665 = cljs.core.first(arglist__72324);
var G__71666 = cljs.core.rest(arglist__72324);
return sci$impl$fns$arity_10__delegate(G__71656,G__71657,G__71658,G__71659,G__71660,G__71661,G__71662,G__71663,G__71664,G__71665,G__71666);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__71673,G__71674,G__71675,G__71676,G__71677,G__71678,G__71679,G__71680,G__71681,G__71682,G__71683,G__71684){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71673);

(invoc_array[(1)] = G__71674);

(invoc_array[(2)] = G__71675);

(invoc_array[(3)] = G__71676);

(invoc_array[(4)] = G__71677);

(invoc_array[(5)] = G__71678);

(invoc_array[(6)] = G__71679);

(invoc_array[(7)] = G__71680);

(invoc_array[(8)] = G__71681);

(invoc_array[(9)] = G__71682);

(invoc_array[(10)] = G__71683);

(invoc_array[vararg_idx] = G__71684);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__71673,G__71674,G__71675,G__71676,G__71677,G__71678,G__71679,G__71680,G__71681,G__71682,G__71683,var_args){
var G__71684 = null;
if (arguments.length > 11) {
var G__72342__i = 0, G__72342__a = new Array(arguments.length -  11);
while (G__72342__i < G__72342__a.length) {G__72342__a[G__72342__i] = arguments[G__72342__i + 11]; ++G__72342__i;}
  G__71684 = new cljs.core.IndexedSeq(G__72342__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__71673,G__71674,G__71675,G__71676,G__71677,G__71678,G__71679,G__71680,G__71681,G__71682,G__71683,G__71684);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__72343){
var G__71673 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71674 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71675 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71676 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71677 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71678 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71679 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71680 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71681 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71682 = cljs.core.first(arglist__72343);
arglist__72343 = cljs.core.next(arglist__72343);
var G__71683 = cljs.core.first(arglist__72343);
var G__71684 = cljs.core.rest(arglist__72343);
return sci$impl$fns$arity_11__delegate(G__71673,G__71674,G__71675,G__71676,G__71677,G__71678,G__71679,G__71680,G__71681,G__71682,G__71683,G__71684);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__71690,G__71691,G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71690);

(invoc_array[(1)] = G__71691);

(invoc_array[(2)] = G__71692);

(invoc_array[(3)] = G__71693);

(invoc_array[(4)] = G__71694);

(invoc_array[(5)] = G__71695);

(invoc_array[(6)] = G__71696);

(invoc_array[(7)] = G__71697);

(invoc_array[(8)] = G__71698);

(invoc_array[(9)] = G__71699);

(invoc_array[(10)] = G__71700);

(invoc_array[(11)] = G__71701);

(invoc_array[vararg_idx] = G__71702);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__71690,G__71691,G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,var_args){
var G__71702 = null;
if (arguments.length > 12) {
var G__72358__i = 0, G__72358__a = new Array(arguments.length -  12);
while (G__72358__i < G__72358__a.length) {G__72358__a[G__72358__i] = arguments[G__72358__i + 12]; ++G__72358__i;}
  G__71702 = new cljs.core.IndexedSeq(G__72358__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__71690,G__71691,G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__72359){
var G__71690 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71691 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71692 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71693 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71694 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71695 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71696 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71697 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71698 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71699 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71700 = cljs.core.first(arglist__72359);
arglist__72359 = cljs.core.next(arglist__72359);
var G__71701 = cljs.core.first(arglist__72359);
var G__71702 = cljs.core.rest(arglist__72359);
return sci$impl$fns$arity_12__delegate(G__71690,G__71691,G__71692,G__71693,G__71694,G__71695,G__71696,G__71697,G__71698,G__71699,G__71700,G__71701,G__71702);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__71711,G__71712,G__71713,G__71714,G__71715,G__71716,G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,G__71724){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71711);

(invoc_array[(1)] = G__71712);

(invoc_array[(2)] = G__71713);

(invoc_array[(3)] = G__71714);

(invoc_array[(4)] = G__71715);

(invoc_array[(5)] = G__71716);

(invoc_array[(6)] = G__71717);

(invoc_array[(7)] = G__71718);

(invoc_array[(8)] = G__71719);

(invoc_array[(9)] = G__71720);

(invoc_array[(10)] = G__71721);

(invoc_array[(11)] = G__71722);

(invoc_array[(12)] = G__71723);

(invoc_array[vararg_idx] = G__71724);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__71711,G__71712,G__71713,G__71714,G__71715,G__71716,G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,var_args){
var G__71724 = null;
if (arguments.length > 13) {
var G__72364__i = 0, G__72364__a = new Array(arguments.length -  13);
while (G__72364__i < G__72364__a.length) {G__72364__a[G__72364__i] = arguments[G__72364__i + 13]; ++G__72364__i;}
  G__71724 = new cljs.core.IndexedSeq(G__72364__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__71711,G__71712,G__71713,G__71714,G__71715,G__71716,G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,G__71724);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__72366){
var G__71711 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71712 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71713 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71714 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71715 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71716 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71717 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71718 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71719 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71720 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71721 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71722 = cljs.core.first(arglist__72366);
arglist__72366 = cljs.core.next(arglist__72366);
var G__71723 = cljs.core.first(arglist__72366);
var G__71724 = cljs.core.rest(arglist__72366);
return sci$impl$fns$arity_13__delegate(G__71711,G__71712,G__71713,G__71714,G__71715,G__71716,G__71717,G__71718,G__71719,G__71720,G__71721,G__71722,G__71723,G__71724);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__71725,G__71726,G__71727,G__71728,G__71729,G__71730,G__71731,G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71725);

(invoc_array[(1)] = G__71726);

(invoc_array[(2)] = G__71727);

(invoc_array[(3)] = G__71728);

(invoc_array[(4)] = G__71729);

(invoc_array[(5)] = G__71730);

(invoc_array[(6)] = G__71731);

(invoc_array[(7)] = G__71732);

(invoc_array[(8)] = G__71733);

(invoc_array[(9)] = G__71734);

(invoc_array[(10)] = G__71735);

(invoc_array[(11)] = G__71736);

(invoc_array[(12)] = G__71737);

(invoc_array[(13)] = G__71738);

(invoc_array[vararg_idx] = G__71739);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__71725,G__71726,G__71727,G__71728,G__71729,G__71730,G__71731,G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,var_args){
var G__71739 = null;
if (arguments.length > 14) {
var G__72374__i = 0, G__72374__a = new Array(arguments.length -  14);
while (G__72374__i < G__72374__a.length) {G__72374__a[G__72374__i] = arguments[G__72374__i + 14]; ++G__72374__i;}
  G__71739 = new cljs.core.IndexedSeq(G__72374__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__71725,G__71726,G__71727,G__71728,G__71729,G__71730,G__71731,G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__72375){
var G__71725 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71726 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71727 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71728 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71729 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71730 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71731 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71732 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71733 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71734 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71735 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71736 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71737 = cljs.core.first(arglist__72375);
arglist__72375 = cljs.core.next(arglist__72375);
var G__71738 = cljs.core.first(arglist__72375);
var G__71739 = cljs.core.rest(arglist__72375);
return sci$impl$fns$arity_14__delegate(G__71725,G__71726,G__71727,G__71728,G__71729,G__71730,G__71731,G__71732,G__71733,G__71734,G__71735,G__71736,G__71737,G__71738,G__71739);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__71748,G__71749,G__71750,G__71751,G__71752,G__71753,G__71754,G__71755,G__71756,G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,G__71763){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71748);

(invoc_array[(1)] = G__71749);

(invoc_array[(2)] = G__71750);

(invoc_array[(3)] = G__71751);

(invoc_array[(4)] = G__71752);

(invoc_array[(5)] = G__71753);

(invoc_array[(6)] = G__71754);

(invoc_array[(7)] = G__71755);

(invoc_array[(8)] = G__71756);

(invoc_array[(9)] = G__71757);

(invoc_array[(10)] = G__71758);

(invoc_array[(11)] = G__71759);

(invoc_array[(12)] = G__71760);

(invoc_array[(13)] = G__71761);

(invoc_array[(14)] = G__71762);

(invoc_array[vararg_idx] = G__71763);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__71748,G__71749,G__71750,G__71751,G__71752,G__71753,G__71754,G__71755,G__71756,G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,var_args){
var G__71763 = null;
if (arguments.length > 15) {
var G__72380__i = 0, G__72380__a = new Array(arguments.length -  15);
while (G__72380__i < G__72380__a.length) {G__72380__a[G__72380__i] = arguments[G__72380__i + 15]; ++G__72380__i;}
  G__71763 = new cljs.core.IndexedSeq(G__72380__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__71748,G__71749,G__71750,G__71751,G__71752,G__71753,G__71754,G__71755,G__71756,G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,G__71763);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__72381){
var G__71748 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71749 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71750 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71751 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71752 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71753 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71754 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71755 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71756 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71757 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71758 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71759 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71760 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71761 = cljs.core.first(arglist__72381);
arglist__72381 = cljs.core.next(arglist__72381);
var G__71762 = cljs.core.first(arglist__72381);
var G__71763 = cljs.core.rest(arglist__72381);
return sci$impl$fns$arity_15__delegate(G__71748,G__71749,G__71750,G__71751,G__71752,G__71753,G__71754,G__71755,G__71756,G__71757,G__71758,G__71759,G__71760,G__71761,G__71762,G__71763);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71773);

(invoc_array[(1)] = G__71774);

(invoc_array[(2)] = G__71775);

(invoc_array[(3)] = G__71776);

(invoc_array[(4)] = G__71777);

(invoc_array[(5)] = G__71778);

(invoc_array[(6)] = G__71779);

(invoc_array[(7)] = G__71780);

(invoc_array[(8)] = G__71781);

(invoc_array[(9)] = G__71782);

(invoc_array[(10)] = G__71783);

(invoc_array[(11)] = G__71784);

(invoc_array[(12)] = G__71785);

(invoc_array[(13)] = G__71786);

(invoc_array[(14)] = G__71787);

(invoc_array[(15)] = G__71788);

(invoc_array[vararg_idx] = G__71789);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,var_args){
var G__71789 = null;
if (arguments.length > 16) {
var G__72384__i = 0, G__72384__a = new Array(arguments.length -  16);
while (G__72384__i < G__72384__a.length) {G__72384__a[G__72384__i] = arguments[G__72384__i + 16]; ++G__72384__i;}
  G__71789 = new cljs.core.IndexedSeq(G__72384__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__72385){
var G__71773 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71774 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71775 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71776 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71777 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71778 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71779 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71780 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71781 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71782 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71783 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71784 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71785 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71786 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71787 = cljs.core.first(arglist__72385);
arglist__72385 = cljs.core.next(arglist__72385);
var G__71788 = cljs.core.first(arglist__72385);
var G__71789 = cljs.core.rest(arglist__72385);
return sci$impl$fns$arity_16__delegate(G__71773,G__71774,G__71775,G__71776,G__71777,G__71778,G__71779,G__71780,G__71781,G__71782,G__71783,G__71784,G__71785,G__71786,G__71787,G__71788,G__71789);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803,G__71804,G__71805,G__71806,G__71807,G__71808,G__71809){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71792);

(invoc_array[(1)] = G__71793);

(invoc_array[(2)] = G__71794);

(invoc_array[(3)] = G__71795);

(invoc_array[(4)] = G__71796);

(invoc_array[(5)] = G__71797);

(invoc_array[(6)] = G__71798);

(invoc_array[(7)] = G__71799);

(invoc_array[(8)] = G__71800);

(invoc_array[(9)] = G__71801);

(invoc_array[(10)] = G__71802);

(invoc_array[(11)] = G__71803);

(invoc_array[(12)] = G__71804);

(invoc_array[(13)] = G__71805);

(invoc_array[(14)] = G__71806);

(invoc_array[(15)] = G__71807);

(invoc_array[(16)] = G__71808);

(invoc_array[vararg_idx] = G__71809);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803,G__71804,G__71805,G__71806,G__71807,G__71808,var_args){
var G__71809 = null;
if (arguments.length > 17) {
var G__72387__i = 0, G__72387__a = new Array(arguments.length -  17);
while (G__72387__i < G__72387__a.length) {G__72387__a[G__72387__i] = arguments[G__72387__i + 17]; ++G__72387__i;}
  G__71809 = new cljs.core.IndexedSeq(G__72387__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803,G__71804,G__71805,G__71806,G__71807,G__71808,G__71809);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__72388){
var G__71792 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71793 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71794 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71795 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71796 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71797 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71798 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71799 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71800 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71801 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71802 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71803 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71804 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71805 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71806 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71807 = cljs.core.first(arglist__72388);
arglist__72388 = cljs.core.next(arglist__72388);
var G__71808 = cljs.core.first(arglist__72388);
var G__71809 = cljs.core.rest(arglist__72388);
return sci$impl$fns$arity_17__delegate(G__71792,G__71793,G__71794,G__71795,G__71796,G__71797,G__71798,G__71799,G__71800,G__71801,G__71802,G__71803,G__71804,G__71805,G__71806,G__71807,G__71808,G__71809);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820,G__71821,G__71822,G__71823,G__71824,G__71825,G__71826,G__71827,G__71828,G__71829){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71811);

(invoc_array[(1)] = G__71812);

(invoc_array[(2)] = G__71813);

(invoc_array[(3)] = G__71814);

(invoc_array[(4)] = G__71815);

(invoc_array[(5)] = G__71816);

(invoc_array[(6)] = G__71817);

(invoc_array[(7)] = G__71818);

(invoc_array[(8)] = G__71819);

(invoc_array[(9)] = G__71820);

(invoc_array[(10)] = G__71821);

(invoc_array[(11)] = G__71822);

(invoc_array[(12)] = G__71823);

(invoc_array[(13)] = G__71824);

(invoc_array[(14)] = G__71825);

(invoc_array[(15)] = G__71826);

(invoc_array[(16)] = G__71827);

(invoc_array[(17)] = G__71828);

(invoc_array[vararg_idx] = G__71829);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820,G__71821,G__71822,G__71823,G__71824,G__71825,G__71826,G__71827,G__71828,var_args){
var G__71829 = null;
if (arguments.length > 18) {
var G__72389__i = 0, G__72389__a = new Array(arguments.length -  18);
while (G__72389__i < G__72389__a.length) {G__72389__a[G__72389__i] = arguments[G__72389__i + 18]; ++G__72389__i;}
  G__71829 = new cljs.core.IndexedSeq(G__72389__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820,G__71821,G__71822,G__71823,G__71824,G__71825,G__71826,G__71827,G__71828,G__71829);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__72391){
var G__71811 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71812 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71813 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71814 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71815 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71816 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71817 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71818 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71819 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71820 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71821 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71822 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71823 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71824 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71825 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71826 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71827 = cljs.core.first(arglist__72391);
arglist__72391 = cljs.core.next(arglist__72391);
var G__71828 = cljs.core.first(arglist__72391);
var G__71829 = cljs.core.rest(arglist__72391);
return sci$impl$fns$arity_18__delegate(G__71811,G__71812,G__71813,G__71814,G__71815,G__71816,G__71817,G__71818,G__71819,G__71820,G__71821,G__71822,G__71823,G__71824,G__71825,G__71826,G__71827,G__71828,G__71829);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840,G__71841,G__71842,G__71843,G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,G__71852){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71833);

(invoc_array[(1)] = G__71834);

(invoc_array[(2)] = G__71835);

(invoc_array[(3)] = G__71836);

(invoc_array[(4)] = G__71837);

(invoc_array[(5)] = G__71838);

(invoc_array[(6)] = G__71839);

(invoc_array[(7)] = G__71840);

(invoc_array[(8)] = G__71841);

(invoc_array[(9)] = G__71842);

(invoc_array[(10)] = G__71843);

(invoc_array[(11)] = G__71844);

(invoc_array[(12)] = G__71845);

(invoc_array[(13)] = G__71846);

(invoc_array[(14)] = G__71847);

(invoc_array[(15)] = G__71848);

(invoc_array[(16)] = G__71849);

(invoc_array[(17)] = G__71850);

(invoc_array[(18)] = G__71851);

(invoc_array[vararg_idx] = G__71852);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840,G__71841,G__71842,G__71843,G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,var_args){
var G__71852 = null;
if (arguments.length > 19) {
var G__72396__i = 0, G__72396__a = new Array(arguments.length -  19);
while (G__72396__i < G__72396__a.length) {G__72396__a[G__72396__i] = arguments[G__72396__i + 19]; ++G__72396__i;}
  G__71852 = new cljs.core.IndexedSeq(G__72396__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840,G__71841,G__71842,G__71843,G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,G__71852);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__72397){
var G__71833 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71834 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71835 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71836 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71837 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71838 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71839 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71840 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71841 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71842 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71843 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71844 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71845 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71846 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71847 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71848 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71849 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71850 = cljs.core.first(arglist__72397);
arglist__72397 = cljs.core.next(arglist__72397);
var G__71851 = cljs.core.first(arglist__72397);
var G__71852 = cljs.core.rest(arglist__72397);
return sci$impl$fns$arity_19__delegate(G__71833,G__71834,G__71835,G__71836,G__71837,G__71838,G__71839,G__71840,G__71841,G__71842,G__71843,G__71844,G__71845,G__71846,G__71847,G__71848,G__71849,G__71850,G__71851,G__71852);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__71864,G__71865,G__71866,G__71867,G__71868,G__71869,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,G__71884){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71864);

(invoc_array[(1)] = G__71865);

(invoc_array[(2)] = G__71866);

(invoc_array[(3)] = G__71867);

(invoc_array[(4)] = G__71868);

(invoc_array[(5)] = G__71869);

(invoc_array[(6)] = G__71870);

(invoc_array[(7)] = G__71871);

(invoc_array[(8)] = G__71872);

(invoc_array[(9)] = G__71873);

(invoc_array[(10)] = G__71874);

(invoc_array[(11)] = G__71875);

(invoc_array[(12)] = G__71876);

(invoc_array[(13)] = G__71877);

(invoc_array[(14)] = G__71878);

(invoc_array[(15)] = G__71879);

(invoc_array[(16)] = G__71880);

(invoc_array[(17)] = G__71881);

(invoc_array[(18)] = G__71882);

(invoc_array[(19)] = G__71883);

(invoc_array[vararg_idx] = G__71884);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__71864,G__71865,G__71866,G__71867,G__71868,G__71869,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,var_args){
var G__71884 = null;
if (arguments.length > 20) {
var G__72400__i = 0, G__72400__a = new Array(arguments.length -  20);
while (G__72400__i < G__72400__a.length) {G__72400__a[G__72400__i] = arguments[G__72400__i + 20]; ++G__72400__i;}
  G__71884 = new cljs.core.IndexedSeq(G__72400__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__71864,G__71865,G__71866,G__71867,G__71868,G__71869,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,G__71884);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__72405){
var G__71864 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71865 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71866 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71867 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71868 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71869 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71870 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71871 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71872 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71873 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71874 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71875 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71876 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71877 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71878 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71879 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71880 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71881 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71882 = cljs.core.first(arglist__72405);
arglist__72405 = cljs.core.next(arglist__72405);
var G__71883 = cljs.core.first(arglist__72405);
var G__71884 = cljs.core.rest(arglist__72405);
return sci$impl$fns$arity_20__delegate(G__71864,G__71865,G__71866,G__71867,G__71868,G__71869,G__71870,G__71871,G__71872,G__71873,G__71874,G__71875,G__71876,G__71877,G__71878,G__71879,G__71880,G__71881,G__71882,G__71883,G__71884);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71471)].join('')));

}
})():(function (){var G__71885 = (fixed_arity | (0));
switch (G__71885) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__70654__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70654__auto__)){
continue;
} else {
return ret__70654__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__71886){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71886);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__71890,G__71891){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71890);

(invoc_array[(1)] = G__71891);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__71892,G__71893,G__71894){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71892);

(invoc_array[(1)] = G__71893);

(invoc_array[(2)] = G__71894);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__71895,G__71896,G__71897,G__71898){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71895);

(invoc_array[(1)] = G__71896);

(invoc_array[(2)] = G__71897);

(invoc_array[(3)] = G__71898);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__71903,G__71904,G__71905,G__71906,G__71907){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71903);

(invoc_array[(1)] = G__71904);

(invoc_array[(2)] = G__71905);

(invoc_array[(3)] = G__71906);

(invoc_array[(4)] = G__71907);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__71908,G__71909,G__71910,G__71911,G__71912,G__71913){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71908);

(invoc_array[(1)] = G__71909);

(invoc_array[(2)] = G__71910);

(invoc_array[(3)] = G__71911);

(invoc_array[(4)] = G__71912);

(invoc_array[(5)] = G__71913);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__71917,G__71918,G__71920,G__71921,G__71922,G__71924,G__71926){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71917);

(invoc_array[(1)] = G__71918);

(invoc_array[(2)] = G__71920);

(invoc_array[(3)] = G__71921);

(invoc_array[(4)] = G__71922);

(invoc_array[(5)] = G__71924);

(invoc_array[(6)] = G__71926);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__71929,G__71930,G__71931,G__71932,G__71933,G__71934,G__71935,G__71936){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71929);

(invoc_array[(1)] = G__71930);

(invoc_array[(2)] = G__71931);

(invoc_array[(3)] = G__71932);

(invoc_array[(4)] = G__71933);

(invoc_array[(5)] = G__71934);

(invoc_array[(6)] = G__71935);

(invoc_array[(7)] = G__71936);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__71937,G__71938,G__71939,G__71940,G__71941,G__71942,G__71943,G__71944,G__71945){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71937);

(invoc_array[(1)] = G__71938);

(invoc_array[(2)] = G__71939);

(invoc_array[(3)] = G__71940);

(invoc_array[(4)] = G__71941);

(invoc_array[(5)] = G__71942);

(invoc_array[(6)] = G__71943);

(invoc_array[(7)] = G__71944);

(invoc_array[(8)] = G__71945);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__71947,G__71948,G__71949,G__71950,G__71951,G__71952,G__71953,G__71954,G__71955,G__71956){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71947);

(invoc_array[(1)] = G__71948);

(invoc_array[(2)] = G__71949);

(invoc_array[(3)] = G__71950);

(invoc_array[(4)] = G__71951);

(invoc_array[(5)] = G__71952);

(invoc_array[(6)] = G__71953);

(invoc_array[(7)] = G__71954);

(invoc_array[(8)] = G__71955);

(invoc_array[(9)] = G__71956);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__71957,G__71958,G__71959,G__71960,G__71961,G__71962,G__71963,G__71964,G__71965,G__71966,G__71967){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71957);

(invoc_array[(1)] = G__71958);

(invoc_array[(2)] = G__71959);

(invoc_array[(3)] = G__71960);

(invoc_array[(4)] = G__71961);

(invoc_array[(5)] = G__71962);

(invoc_array[(6)] = G__71963);

(invoc_array[(7)] = G__71964);

(invoc_array[(8)] = G__71965);

(invoc_array[(9)] = G__71966);

(invoc_array[(10)] = G__71967);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__71968,G__71969,G__71970,G__71971,G__71972,G__71973,G__71974,G__71975,G__71976,G__71977,G__71978,G__71979){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71968);

(invoc_array[(1)] = G__71969);

(invoc_array[(2)] = G__71970);

(invoc_array[(3)] = G__71971);

(invoc_array[(4)] = G__71972);

(invoc_array[(5)] = G__71973);

(invoc_array[(6)] = G__71974);

(invoc_array[(7)] = G__71975);

(invoc_array[(8)] = G__71976);

(invoc_array[(9)] = G__71977);

(invoc_array[(10)] = G__71978);

(invoc_array[(11)] = G__71979);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__71989,G__71990,G__71991,G__71992,G__71993,G__71994,G__71995,G__71996,G__71997,G__71998,G__71999,G__72000,G__72001){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__71989);

(invoc_array[(1)] = G__71990);

(invoc_array[(2)] = G__71991);

(invoc_array[(3)] = G__71992);

(invoc_array[(4)] = G__71993);

(invoc_array[(5)] = G__71994);

(invoc_array[(6)] = G__71995);

(invoc_array[(7)] = G__71996);

(invoc_array[(8)] = G__71997);

(invoc_array[(9)] = G__71998);

(invoc_array[(10)] = G__71999);

(invoc_array[(11)] = G__72000);

(invoc_array[(12)] = G__72001);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__72003,G__72004,G__72005,G__72006,G__72007,G__72008,G__72009,G__72010,G__72011,G__72012,G__72013,G__72014,G__72015,G__72016){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72003);

(invoc_array[(1)] = G__72004);

(invoc_array[(2)] = G__72005);

(invoc_array[(3)] = G__72006);

(invoc_array[(4)] = G__72007);

(invoc_array[(5)] = G__72008);

(invoc_array[(6)] = G__72009);

(invoc_array[(7)] = G__72010);

(invoc_array[(8)] = G__72011);

(invoc_array[(9)] = G__72012);

(invoc_array[(10)] = G__72013);

(invoc_array[(11)] = G__72014);

(invoc_array[(12)] = G__72015);

(invoc_array[(13)] = G__72016);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__72020,G__72021,G__72022,G__72023,G__72024,G__72025,G__72026,G__72027,G__72028,G__72029,G__72030,G__72031,G__72032,G__72033,G__72034){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72020);

(invoc_array[(1)] = G__72021);

(invoc_array[(2)] = G__72022);

(invoc_array[(3)] = G__72023);

(invoc_array[(4)] = G__72024);

(invoc_array[(5)] = G__72025);

(invoc_array[(6)] = G__72026);

(invoc_array[(7)] = G__72027);

(invoc_array[(8)] = G__72028);

(invoc_array[(9)] = G__72029);

(invoc_array[(10)] = G__72030);

(invoc_array[(11)] = G__72031);

(invoc_array[(12)] = G__72032);

(invoc_array[(13)] = G__72033);

(invoc_array[(14)] = G__72034);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__72040,G__72041,G__72042,G__72043,G__72044,G__72045,G__72046,G__72047,G__72048,G__72049,G__72050,G__72051,G__72052,G__72053,G__72054,G__72055){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72040);

(invoc_array[(1)] = G__72041);

(invoc_array[(2)] = G__72042);

(invoc_array[(3)] = G__72043);

(invoc_array[(4)] = G__72044);

(invoc_array[(5)] = G__72045);

(invoc_array[(6)] = G__72046);

(invoc_array[(7)] = G__72047);

(invoc_array[(8)] = G__72048);

(invoc_array[(9)] = G__72049);

(invoc_array[(10)] = G__72050);

(invoc_array[(11)] = G__72051);

(invoc_array[(12)] = G__72052);

(invoc_array[(13)] = G__72053);

(invoc_array[(14)] = G__72054);

(invoc_array[(15)] = G__72055);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__72068,G__72069,G__72070,G__72071,G__72072,G__72073,G__72074,G__72075,G__72076,G__72077,G__72078,G__72079,G__72080,G__72081,G__72082,G__72083,G__72084){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72068);

(invoc_array[(1)] = G__72069);

(invoc_array[(2)] = G__72070);

(invoc_array[(3)] = G__72071);

(invoc_array[(4)] = G__72072);

(invoc_array[(5)] = G__72073);

(invoc_array[(6)] = G__72074);

(invoc_array[(7)] = G__72075);

(invoc_array[(8)] = G__72076);

(invoc_array[(9)] = G__72077);

(invoc_array[(10)] = G__72078);

(invoc_array[(11)] = G__72079);

(invoc_array[(12)] = G__72080);

(invoc_array[(13)] = G__72081);

(invoc_array[(14)] = G__72082);

(invoc_array[(15)] = G__72083);

(invoc_array[(16)] = G__72084);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__72091,G__72092,G__72093,G__72094,G__72095,G__72096,G__72097,G__72098,G__72099,G__72100,G__72101,G__72102,G__72103,G__72104,G__72105,G__72106,G__72107,G__72108){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72091);

(invoc_array[(1)] = G__72092);

(invoc_array[(2)] = G__72093);

(invoc_array[(3)] = G__72094);

(invoc_array[(4)] = G__72095);

(invoc_array[(5)] = G__72096);

(invoc_array[(6)] = G__72097);

(invoc_array[(7)] = G__72098);

(invoc_array[(8)] = G__72099);

(invoc_array[(9)] = G__72100);

(invoc_array[(10)] = G__72101);

(invoc_array[(11)] = G__72102);

(invoc_array[(12)] = G__72103);

(invoc_array[(13)] = G__72104);

(invoc_array[(14)] = G__72105);

(invoc_array[(15)] = G__72106);

(invoc_array[(16)] = G__72107);

(invoc_array[(17)] = G__72108);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__72112,G__72113,G__72114,G__72115,G__72116,G__72117,G__72118,G__72119,G__72120,G__72121,G__72122,G__72123,G__72124,G__72125,G__72126,G__72127,G__72128,G__72129,G__72130){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72112);

(invoc_array[(1)] = G__72113);

(invoc_array[(2)] = G__72114);

(invoc_array[(3)] = G__72115);

(invoc_array[(4)] = G__72116);

(invoc_array[(5)] = G__72117);

(invoc_array[(6)] = G__72118);

(invoc_array[(7)] = G__72119);

(invoc_array[(8)] = G__72120);

(invoc_array[(9)] = G__72121);

(invoc_array[(10)] = G__72122);

(invoc_array[(11)] = G__72123);

(invoc_array[(12)] = G__72124);

(invoc_array[(13)] = G__72125);

(invoc_array[(14)] = G__72126);

(invoc_array[(15)] = G__72127);

(invoc_array[(16)] = G__72128);

(invoc_array[(17)] = G__72129);

(invoc_array[(18)] = G__72130);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__72134,G__72135,G__72136,G__72137,G__72138,G__72139,G__72140,G__72141,G__72142,G__72143,G__72144,G__72145,G__72146,G__72147,G__72148,G__72149,G__72150,G__72151,G__72152,G__72153){
var invoc_array = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size);
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72134);

(invoc_array[(1)] = G__72135);

(invoc_array[(2)] = G__72136);

(invoc_array[(3)] = G__72137);

(invoc_array[(4)] = G__72138);

(invoc_array[(5)] = G__72139);

(invoc_array[(6)] = G__72140);

(invoc_array[(7)] = G__72141);

(invoc_array[(8)] = G__72142);

(invoc_array[(9)] = G__72143);

(invoc_array[(10)] = G__72144);

(invoc_array[(11)] = G__72145);

(invoc_array[(12)] = G__72146);

(invoc_array[(13)] = G__72147);

(invoc_array[(14)] = G__72148);

(invoc_array[(15)] = G__72149);

(invoc_array[(16)] = G__72150);

(invoc_array[(17)] = G__72151);

(invoc_array[(18)] = G__72152);

(invoc_array[(19)] = G__72153);

while(true){
var ret__70656__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__70656__auto__)){
continue;
} else {
return ret__70656__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71885)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});

//# sourceMappingURL=sci.impl.fns.js.map
