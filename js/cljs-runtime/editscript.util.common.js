import "./cljs_env.js";
goog.provide('editscript.util.common');
/**
 * Szudzik's paring function
 */
editscript.util.common.szudzik = (function editscript$util$common$szudzik(x,y){
if((y > x)){
return (x + (y * y));
} else {
return ((x + y) + (x * x));
}
});
editscript.util.common.current_time = (function editscript$util$common$current_time(){
return (new Date()).getTime();
});
/**
 * Based on 'Wu, S. et al., 1990, An O(NP) Sequence Comparison Algorithm,
 *   Information Processing Letters, 35:6, p317-23.'
 * 
 *   A greedy algorithm, attempting to get to the furthest points with a given
 *   number of edits. Very fast. However, it does not have replacement operations,
 *   so it is not very useful for nested trees. It can also only do unit cost for
 *   addition and deletion. 
 */
editscript.util.common.vec_edits_STAR_ = (function editscript$util$common$vec_edits_STAR_(a,b,n,m,timeout){
var n__$1 = n;
var m__$1 = m;
var delta = (n__$1 - m__$1);
var snake = (function (k,x){
var x__$1 = x;
var y = (x__$1 - k);
while(true){
var ax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,x__$1);
var by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,y);
if((((x__$1 < n__$1)) && ((((y < m__$1)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(ax),cljs.core.type(by))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ax,by)))))))){
var G__67075 = (x__$1 + (1));
var G__67076 = (y + (1));
x__$1 = G__67075;
y = G__67076;
continue;
} else {
return x__$1;
}
break;
}
});
var fp_fn = (function (fp,k){
var vec__66973 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),cljs.core.PersistentVector.EMPTY], null));
var dk_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66973,(0),null);
var vk_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66973,(1),null);
var dk_1__$1 = (dk_1 + (1));
var vec__66976 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(fp,(k + (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),cljs.core.PersistentVector.EMPTY], null));
var dk_PLUS_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66976,(0),null);
var vk_PLUS_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66976,(1),null);
var x = (function (){var x__4336__auto__ = dk_1__$1;
var y__4337__auto__ = dk_PLUS_1;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var sk = snake(k,x);
var ops = (function (){var es = (((dk_1__$1 > dk_PLUS_1))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vk_1,new cljs.core.Keyword(null,"-","-",-2112348439)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vk_PLUS_1,new cljs.core.Keyword(null,"+","+",1913524883)));
if((sk > x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,(sk - x));
} else {
return es;
}
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fp,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sk,ops], null));
});
var begin = editscript.util.common.current_time();
var p = (0);
var fp = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var fp__$1 = (function (){var k = ((-1) * p);
var fp__$1 = fp;
while(true){
if((k < delta)){
var G__67078 = (k + (1));
var G__67079 = fp_fn(fp__$1,k);
k = G__67078;
fp__$1 = G__67079;
continue;
} else {
return fp__$1;
}
break;
}
})();
var fp__$2 = (function (){var k = (delta + p);
var fp__$2 = fp__$1;
while(true){
if((delta < k)){
var G__67080 = (k - (1));
var G__67081 = fp_fn(fp__$2,k);
k = G__67080;
fp__$2 = G__67081;
continue;
} else {
return fp__$2;
}
break;
}
})();
var fp__$3 = fp_fn(fp__$2,delta);
if(cljs.core.truth_((function (){var and__4251__auto__ = timeout;
if(cljs.core.truth_(and__4251__auto__)){
return (timeout < (editscript.util.common.current_time() - begin));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.Keyword(null,"timeout","timeout",-318625318);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fp__$3,delta),(0)))){
return cljs.core.rest(((function (p,fp,fp__$1,fp__$2,fp__$3,n__$1,m__$1,delta,snake,fp_fn,begin){
return (function (p1__66957_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__66957_SHARP_,(1));
});})(p,fp,fp__$1,fp__$2,fp__$3,n__$1,m__$1,delta,snake,fp_fn,begin))
(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(fp__$3),delta)));
} else {
var G__67084 = (p + (1));
var G__67085 = fp__$3;
p = G__67084;
fp = G__67085;
continue;

}
}
break;
}
});
editscript.util.common.swap_ops = (function editscript$util$common$swap_ops(edits){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (op){
var G__67013 = op;
var G__67013__$1 = (((G__67013 instanceof cljs.core.Keyword))?G__67013.fqn:null);
switch (G__67013__$1) {
case "+":
return new cljs.core.Keyword(null,"-","-",-2112348439);

break;
case "-":
return new cljs.core.Keyword(null,"+","+",1913524883);

break;
default:
return op;

}
}),edits);
});
/**
 * Aggressively turn :- and :+ into replacements.
 */
editscript.util.common.min_PLUS_plus__GT_replace = (function editscript$util$common$min_PLUS_plus__GT_replace(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (coll){
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(0));
if(((cljs.core.integer_QMARK_(m)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coll))))){
return coll;
} else {
var p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"-","-",-2112348439)))?new cljs.core.Keyword(null,"+","+",1913524883):new cljs.core.Keyword(null,"-","-",-2112348439));
var vec__67028 = cljs.core.split_with((function (p1__67020_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__67020_SHARP_,m);
}),coll);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67028,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67028,(1),null);
var mc = cljs.core.count(ms);
var pc = cljs.core.count(ps);
var delta = Math.abs((mc - pc));
var rs = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var x__4336__auto__ = mc;
var y__4337__auto__ = pc;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() - delta),new cljs.core.Keyword(null,"r","r",-471384190));
if((mc < pc)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(delta,p));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mc,pc)){
return rs;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(delta,m),rs);

}
}
}
}))),v);
});
editscript.util.common.vec_edits = (function editscript$util$common$vec_edits(a,b,p__67051){
var map__67054 = p__67051;
var map__67054__$1 = cljs.core.__destructure_map(map__67054);
var vec_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67054__$1,new cljs.core.Keyword(null,"vec-timeout","vec-timeout",1050752333),(1000));
var a__$1 = cljs.core.vec(a);
var b__$1 = cljs.core.vec(b);
var n = cljs.core.count(a__$1);
var m = cljs.core.count(b__$1);
var e = (((n < m))?editscript.util.common.vec_edits_STAR_(b__$1,a__$1,m,n,vec_timeout):editscript.util.common.vec_edits_STAR_(a__$1,b__$1,n,m,vec_timeout));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return e;
} else {
return editscript.util.common.min_PLUS_plus__GT_replace((((n < m))?editscript.util.common.swap_ops(e):e));
}
});
editscript.util.common.group_strs = (function editscript$util$common$group_strs(edits,b,level){
var sf = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.Keyword(null,"character","character",380652989)))?cljs.core.subs:cljs.core.subvec);
var i = cljs.core.volatile_BANG_((0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1(cljs.core.identity),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (coll){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(0));
var c = cljs.core.count(coll);
if(cljs.core.integer_QMARK_(x)){
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,x)(i.cljs$core$IDeref$_deref$arity$1(null)));

return coll;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,c], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"r","r",-471384190),x)){
var s = (function (){var G__67058 = b;
var G__67059 = cljs.core.deref(i);
var G__67060 = (cljs.core.deref(i) + c);
return (sf.cljs$core$IFn$_invoke$arity$3 ? sf.cljs$core$IFn$_invoke$arity$3(G__67058,G__67059,G__67060) : sf.call(null,G__67058,G__67059,G__67060));
})();
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,c)(i.cljs$core$IDeref$_deref$arity$1(null)));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,s], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),x)){
var s = (function (){var G__67063 = b;
var G__67064 = cljs.core.deref(i);
var G__67065 = (cljs.core.deref(i) + c);
return (sf.cljs$core$IFn$_invoke$arity$3 ? sf.cljs$core$IFn$_invoke$arity$3(G__67063,G__67064,G__67065) : sf.call(null,G__67063,G__67064,G__67065));
})();
i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,c)(i.cljs$core$IDeref$_deref$arity$1(null)));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,s], null)], null);
} else {
return null;
}
}
}
}
}))),edits);
});
editscript.util.common.transform_str = (function editscript$util$common$transform_str(s,level){
var G__67066 = level;
var G__67066__$1 = (((G__67066 instanceof cljs.core.Keyword))?G__67066.fqn:null);
switch (G__67066__$1) {
case "character":
return s;

break;
case "word":
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/ /));

break;
case "line":
return cljs.core.vec(clojure.string.split_lines(s));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown string diff level",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),level], null));

}
});
editscript.util.common.diff_str = (function editscript$util$common$diff_str(script,path,a,b,p__67069){
var map__67070 = p__67069;
var map__67070__$1 = cljs.core.__destructure_map(map__67070);
var opts = map__67070__$1;
var str_change_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67070__$1,new cljs.core.Keyword(null,"str-change-limit","str-change-limit",529572329),0.2);
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67070__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806));
var a_SINGLEQUOTE_ = editscript.util.common.transform_str(a,str_diff);
var b_SINGLEQUOTE_ = editscript.util.common.transform_str(b,str_diff);
var edits = editscript.util.common.vec_edits(a_SINGLEQUOTE_,b_SINGLEQUOTE_,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
var ca = cljs.core.count(a_SINGLEQUOTE_);
var unchanged = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_),cljs.core._PLUS_,edits);
if(((((((0) < str_change_limit)) && ((str_change_limit < 1.0)))) && (((ca * (1.0 - str_change_limit)) < unchanged)))){
var edits_SINGLEQUOTE_ = editscript.util.common.group_strs(edits,b_SINGLEQUOTE_,str_diff);
return editscript.edit.replace_str(script,path,edits_SINGLEQUOTE_,str_diff);
} else {
return editscript.edit.replace_data(script,path,b_SINGLEQUOTE_);
}
}
});

//# sourceMappingURL=editscript.util.common.js.map