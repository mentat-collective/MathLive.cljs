import "./cljs_env.js";
goog.provide('editscript.diff.quick');
editscript.diff.quick.diff_map = (function editscript$diff$quick$diff_map(script,path,a,b,opts){
cljs.core.reduce_kv((function (_,ka,va){
var path_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ka);
if(cljs.core.contains_QMARK_(b,ka)){
var G__67090 = script;
var G__67091 = path_SINGLEQUOTE_;
var G__67092 = va;
var G__67093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ka);
var G__67094 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67090,G__67091,G__67092,G__67093,G__67094) : editscript.diff.quick.diff_STAR_.call(null,G__67090,G__67091,G__67092,G__67093,G__67094));
} else {
var G__67096 = script;
var G__67097 = path_SINGLEQUOTE_;
var G__67098 = va;
var G__67099 = editscript.edit.nada();
var G__67100 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67096,G__67097,G__67098,G__67099,G__67100) : editscript.diff.quick.diff_STAR_.call(null,G__67096,G__67097,G__67098,G__67099,G__67100));
}
}),null,a);

return cljs.core.reduce_kv((function (_,kb,vb){
if(cljs.core.contains_QMARK_(a,kb)){
return null;
} else {
var G__67102 = script;
var G__67103 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,kb);
var G__67104 = editscript.edit.nada();
var G__67105 = vb;
var G__67106 = opts;
return (editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67102,G__67103,G__67104,G__67105,G__67106) : editscript.diff.quick.diff_STAR_.call(null,G__67102,G__67103,G__67104,G__67105,G__67106));
}
}),null,b);
});
/**
 * Adjust the indices to have a correct editscript
 */
editscript.diff.quick.diff_vec = (function editscript$diff$quick$diff_vec(script,path,a,b,opts){
var edits = editscript.util.common.vec_edits(a,b,opts);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edits,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return editscript.edit.replace_data(script,path,b);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67115,op){
var vec__67116 = p__67115;
var ia = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116,(0),null);
var ia_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116,(1),null);
var ib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67116,(2),null);
var G__67122 = op;
var G__67122__$1 = (((G__67122 instanceof cljs.core.Keyword))?G__67122.fqn:null);
switch (G__67122__$1) {
case "-":
var G__67124_67237 = script;
var G__67125_67238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__67126_67239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__67127_67240 = editscript.edit.nada();
var G__67128_67241 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67124_67237,G__67125_67238,G__67126_67239,G__67127_67240,G__67128_67241) : editscript.diff.quick.diff_STAR_.call(null,G__67124_67237,G__67125_67238,G__67126_67239,G__67127_67240,G__67128_67241));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),ia_SINGLEQUOTE_,ib], null);

break;
case "+":
var G__67129_67242 = script;
var G__67130_67243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__67131_67244 = editscript.edit.nada();
var G__67132_67245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__67133_67246 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67129_67242,G__67130_67243,G__67131_67244,G__67132_67245,G__67133_67246) : editscript.diff.quick.diff_STAR_.call(null,G__67129_67242,G__67130_67243,G__67131_67244,G__67132_67245,G__67133_67246));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ia,(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
case "r":
var G__67134_67251 = script;
var G__67135_67252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,ia_SINGLEQUOTE_);
var G__67136_67253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,ia);
var G__67137_67254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,ib);
var G__67138_67255 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67134_67251,G__67135_67252,G__67136_67253,G__67137_67254,G__67138_67255) : editscript.diff.quick.diff_STAR_.call(null,G__67134_67251,G__67135_67252,G__67136_67253,G__67137_67254,G__67138_67255));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + (1)),(ia_SINGLEQUOTE_ + (1)),(ib + (1))], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ia + op),(ia_SINGLEQUOTE_ + op),(ib + op)], null);

}
}),cljs.core.transient$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),edits);
}
});
editscript.diff.quick.diff_set = (function editscript$diff$quick$diff_set(script,path,a,b,opts){
var seq__67144_67260 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b));
var chunk__67145_67261 = null;
var count__67146_67262 = (0);
var i__67147_67263 = (0);
while(true){
if((i__67147_67263 < count__67146_67262)){
var va_67264 = chunk__67145_67261.cljs$core$IIndexed$_nth$arity$2(null,i__67147_67263);
var G__67164_67265 = script;
var G__67165_67266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_67264);
var G__67166_67267 = va_67264;
var G__67167_67268 = editscript.edit.nada();
var G__67168_67270 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67164_67265,G__67165_67266,G__67166_67267,G__67167_67268,G__67168_67270) : editscript.diff.quick.diff_STAR_.call(null,G__67164_67265,G__67165_67266,G__67166_67267,G__67167_67268,G__67168_67270));


var G__67274 = seq__67144_67260;
var G__67275 = chunk__67145_67261;
var G__67276 = count__67146_67262;
var G__67277 = (i__67147_67263 + (1));
seq__67144_67260 = G__67274;
chunk__67145_67261 = G__67275;
count__67146_67262 = G__67276;
i__67147_67263 = G__67277;
continue;
} else {
var temp__5753__auto___67278 = cljs.core.seq(seq__67144_67260);
if(temp__5753__auto___67278){
var seq__67144_67279__$1 = temp__5753__auto___67278;
if(cljs.core.chunked_seq_QMARK_(seq__67144_67279__$1)){
var c__4679__auto___67280 = cljs.core.chunk_first(seq__67144_67279__$1);
var G__67281 = cljs.core.chunk_rest(seq__67144_67279__$1);
var G__67282 = c__4679__auto___67280;
var G__67283 = cljs.core.count(c__4679__auto___67280);
var G__67284 = (0);
seq__67144_67260 = G__67281;
chunk__67145_67261 = G__67282;
count__67146_67262 = G__67283;
i__67147_67263 = G__67284;
continue;
} else {
var va_67289 = cljs.core.first(seq__67144_67279__$1);
var G__67174_67290 = script;
var G__67175_67291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,va_67289);
var G__67176_67292 = va_67289;
var G__67177_67293 = editscript.edit.nada();
var G__67178_67294 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67174_67290,G__67175_67291,G__67176_67292,G__67177_67293,G__67178_67294) : editscript.diff.quick.diff_STAR_.call(null,G__67174_67290,G__67175_67291,G__67176_67292,G__67177_67293,G__67178_67294));


var G__67295 = cljs.core.next(seq__67144_67279__$1);
var G__67296 = null;
var G__67297 = (0);
var G__67298 = (0);
seq__67144_67260 = G__67295;
chunk__67145_67261 = G__67296;
count__67146_67262 = G__67297;
i__67147_67263 = G__67298;
continue;
}
} else {
}
}
break;
}

var seq__67179 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a));
var chunk__67180 = null;
var count__67181 = (0);
var i__67182 = (0);
while(true){
if((i__67182 < count__67181)){
var vb = chunk__67180.cljs$core$IIndexed$_nth$arity$2(null,i__67182);
var G__67199_67299 = script;
var G__67200_67300 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__67201_67301 = editscript.edit.nada();
var G__67202_67302 = vb;
var G__67203_67303 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67199_67299,G__67200_67300,G__67201_67301,G__67202_67302,G__67203_67303) : editscript.diff.quick.diff_STAR_.call(null,G__67199_67299,G__67200_67300,G__67201_67301,G__67202_67302,G__67203_67303));


var G__67308 = seq__67179;
var G__67309 = chunk__67180;
var G__67310 = count__67181;
var G__67311 = (i__67182 + (1));
seq__67179 = G__67308;
chunk__67180 = G__67309;
count__67181 = G__67310;
i__67182 = G__67311;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67179);
if(temp__5753__auto__){
var seq__67179__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67179__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__67179__$1);
var G__67312 = cljs.core.chunk_rest(seq__67179__$1);
var G__67313 = c__4679__auto__;
var G__67314 = cljs.core.count(c__4679__auto__);
var G__67315 = (0);
seq__67179 = G__67312;
chunk__67180 = G__67313;
count__67181 = G__67314;
i__67182 = G__67315;
continue;
} else {
var vb = cljs.core.first(seq__67179__$1);
var G__67206_67316 = script;
var G__67207_67317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,vb);
var G__67208_67318 = editscript.edit.nada();
var G__67209_67319 = vb;
var G__67210_67320 = opts;
(editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5 ? editscript.diff.quick.diff_STAR_.cljs$core$IFn$_invoke$arity$5(G__67206_67316,G__67207_67317,G__67208_67318,G__67209_67319,G__67210_67320) : editscript.diff.quick.diff_STAR_.call(null,G__67206_67316,G__67207_67317,G__67208_67318,G__67209_67319,G__67210_67320));


var G__67321 = cljs.core.next(seq__67179__$1);
var G__67322 = null;
var G__67323 = (0);
var G__67324 = (0);
seq__67179 = G__67321;
chunk__67180 = G__67322;
count__67181 = G__67323;
i__67182 = G__67324;
continue;
}
} else {
return null;
}
}
break;
}
});
editscript.diff.quick.diff_lst = (function editscript$diff$quick$diff_lst(script,path,a,b,opts){
return editscript.diff.quick.diff_vec(script,path,cljs.core.vec(a),cljs.core.vec(b),opts);
});
editscript.diff.quick.diff_val = (function editscript$diff$quick$diff_val(script,path,_,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editscript.edit.get_type(b),new cljs.core.Keyword(null,"nil","nil",99600501))){
return editscript.edit.delete_data(script,path);
} else {
return editscript.edit.replace_data(script,path,b);
}
});
editscript.diff.quick.diff_STAR_ = (function editscript$diff$quick$diff_STAR_(script,path,a,b,p__67213){
var map__67214 = p__67213;
var map__67214__$1 = cljs.core.__destructure_map(map__67214);
var opts = map__67214__$1;
var str_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67214__$1,new cljs.core.Keyword(null,"str-diff","str-diff",1239614806),new cljs.core.Keyword(null,"none","none",1333468478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return null;
} else {
var G__67215 = editscript.edit.get_type(a);
var G__67215__$1 = (((G__67215 instanceof cljs.core.Keyword))?G__67215.fqn:null);
switch (G__67215__$1) {
case "nil":
return editscript.edit.add_data(script,path,b);

break;
case "map":
var G__67217 = editscript.edit.get_type(b);
var G__67217__$1 = (((G__67217 instanceof cljs.core.Keyword))?G__67217.fqn:null);
switch (G__67217__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "map":
var fexpr__67218 = new cljs.core.Var(function(){return editscript.diff.quick.diff_map;},new cljs.core.Symbol("editscript.diff.quick","diff-map","editscript.diff.quick/diff-map",1973051147,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-map","diff-map",-711364586,null),"editscript/diff/quick.cljc",16,1,22,22,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_map)?editscript.diff.quick.diff_map.cljs$lang$test:null)]));
return (fexpr__67218.cljs$core$IFn$_invoke$arity$5 ? fexpr__67218.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__67218.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "vec":
var G__67220 = editscript.edit.get_type(b);
var G__67220__$1 = (((G__67220 instanceof cljs.core.Keyword))?G__67220.fqn:null);
switch (G__67220__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "vec":
var fexpr__67222 = new cljs.core.Var(function(){return editscript.diff.quick.diff_vec;},new cljs.core.Symbol("editscript.diff.quick","diff-vec","editscript.diff.quick/diff-vec",-1781503036,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-vec","diff-vec",-170849589,null),"editscript/diff/quick.cljc",16,1,39,39,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),"Adjust the indices to have a correct editscript",(cljs.core.truth_(editscript.diff.quick.diff_vec)?editscript.diff.quick.diff_vec.cljs$lang$test:null)]));
return (fexpr__67222.cljs$core$IFn$_invoke$arity$5 ? fexpr__67222.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__67222.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "set":
var G__67223 = editscript.edit.get_type(b);
var G__67223__$1 = (((G__67223 instanceof cljs.core.Keyword))?G__67223.fqn:null);
switch (G__67223__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "set":
var fexpr__67224 = new cljs.core.Var(function(){return editscript.diff.quick.diff_set;},new cljs.core.Symbol("editscript.diff.quick","diff-set","editscript.diff.quick/diff-set",1246078730,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-set","diff-set",-364591609,null),"editscript/diff/quick.cljc",16,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_set)?editscript.diff.quick.diff_set.cljs$lang$test:null)]));
return (fexpr__67224.cljs$core$IFn$_invoke$arity$5 ? fexpr__67224.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__67224.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "lst":
var G__67225 = editscript.edit.get_type(b);
var G__67225__$1 = (((G__67225 instanceof cljs.core.Keyword))?G__67225.fqn:null);
switch (G__67225__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "lst":
var fexpr__67226 = new cljs.core.Var(function(){return editscript.diff.quick.diff_lst;},new cljs.core.Symbol("editscript.diff.quick","diff-lst","editscript.diff.quick/diff-lst",-1885319001,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,cljs.core.with_meta(new cljs.core.Symbol(null,"editscript.diff.quick","editscript.diff.quick",165700457,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"diff-lst","diff-lst",799109538,null),"editscript/diff/quick.cljc",16,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)),null,(cljs.core.truth_(editscript.diff.quick.diff_lst)?editscript.diff.quick.diff_lst.cljs$lang$test:null)]));
return (fexpr__67226.cljs$core$IFn$_invoke$arity$5 ? fexpr__67226.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__67226.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}

break;
case "str":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(str_diff,new cljs.core.Keyword(null,"none","none",1333468478))){
return editscript.diff.quick.diff_val(script,path,a,b);
} else {
var G__67228 = editscript.edit.get_type(b);
var G__67228__$1 = (((G__67228 instanceof cljs.core.Keyword))?G__67228.fqn:null);
switch (G__67228__$1) {
case "nil":
return editscript.edit.delete_data(script,path);

break;
case "str":
var fexpr__67229 = new cljs.core.Var(function(){return editscript.util.common.diff_str;},new cljs.core.Symbol("editscript.util.common","diff-str","editscript.util.common/diff-str",283460236,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"editscript.util.common","editscript.util.common",1209759084,null),new cljs.core.Symbol(null,"diff-str","diff-str",1255675210,null),"editscript/util/common.cljc",15,1,161,161,cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),new cljs.core.Symbol(null,"str-diff","str-diff",-1414820963,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"str-change-limit","str-change-limit",-2124863440,null),0.2], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null)], null)),null,(cljs.core.truth_(editscript.util.common.diff_str)?editscript.util.common.diff_str.cljs$lang$test:null)]));
return (fexpr__67229.cljs$core$IFn$_invoke$arity$5 ? fexpr__67229.cljs$core$IFn$_invoke$arity$5(script,path,a,b,opts) : fexpr__67229.call(null,script,path,a,b,opts));

break;
default:
return editscript.edit.replace_data(script,path,b);

}
}

break;
case "val":
return editscript.diff.quick.diff_val(script,path,a,b);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67215__$1)].join('')));

}
}
});
/**
 * Create an EditScript that represents the difference between `b` and `a`
 *   This algorithm is fast, but it does not attempt to generate an EditScript
 *   that is minimal in size
 */
editscript.diff.quick.diff = (function editscript$diff$quick$diff(var_args){
var G__67231 = arguments.length;
switch (G__67231) {
case 2:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3(a,b,null);
}));

(editscript.diff.quick.diff.cljs$core$IFn$_invoke$arity$3 = (function (a,b,opts){
var script = editscript.edit.edits__GT_script(cljs.core.PersistentVector.EMPTY);
editscript.diff.quick.diff_STAR_(script,cljs.core.PersistentVector.EMPTY,a,b,opts);

return script;
}));

(editscript.diff.quick.diff.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=editscript.diff.quick.js.map
