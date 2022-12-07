import "./cljs_env.js";
goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___64463 = arguments.length;
var i__4865__auto___64464 = (0);
while(true){
if((i__4865__auto___64464 < len__4864__auto___64463)){
args__4870__auto__.push((arguments[i__4865__auto___64464]));

var G__64466 = (i__4865__auto___64464 + (1));
i__4865__auto___64464 = G__64466;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63996){
var G__63998 = cljs.core.first(seq63996);
var seq63996__$1 = cljs.core.next(seq63996);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63998,seq63996__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__64005 = cljs.core.seq(sources);
var chunk__64006 = null;
var count__64007 = (0);
var i__64008 = (0);
while(true){
if((i__64008 < count__64007)){
var map__64013 = chunk__64006.cljs$core$IIndexed$_nth$arity$2(null,i__64008);
var map__64013__$1 = cljs.core.__destructure_map(map__64013);
var src = map__64013__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64013__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64013__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64013__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64013__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64014){var e_64467 = e64014;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64467);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64467.message)].join('')));
}

var G__64468 = seq__64005;
var G__64469 = chunk__64006;
var G__64470 = count__64007;
var G__64471 = (i__64008 + (1));
seq__64005 = G__64468;
chunk__64006 = G__64469;
count__64007 = G__64470;
i__64008 = G__64471;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64005);
if(temp__5753__auto__){
var seq__64005__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64005__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64005__$1);
var G__64472 = cljs.core.chunk_rest(seq__64005__$1);
var G__64473 = c__4679__auto__;
var G__64474 = cljs.core.count(c__4679__auto__);
var G__64475 = (0);
seq__64005 = G__64472;
chunk__64006 = G__64473;
count__64007 = G__64474;
i__64008 = G__64475;
continue;
} else {
var map__64020 = cljs.core.first(seq__64005__$1);
var map__64020__$1 = cljs.core.__destructure_map(map__64020);
var src = map__64020__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64021){var e_64477 = e64021;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_64477);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_64477.message)].join('')));
}

var G__64478 = cljs.core.next(seq__64005__$1);
var G__64479 = null;
var G__64480 = (0);
var G__64481 = (0);
seq__64005 = G__64478;
chunk__64006 = G__64479;
count__64007 = G__64480;
i__64008 = G__64481;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__64026 = cljs.core.seq(js_requires);
var chunk__64027 = null;
var count__64028 = (0);
var i__64029 = (0);
while(true){
if((i__64029 < count__64028)){
var js_ns = chunk__64027.cljs$core$IIndexed$_nth$arity$2(null,i__64029);
var require_str_64484 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64484);


var G__64485 = seq__64026;
var G__64486 = chunk__64027;
var G__64487 = count__64028;
var G__64488 = (i__64029 + (1));
seq__64026 = G__64485;
chunk__64027 = G__64486;
count__64028 = G__64487;
i__64029 = G__64488;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64026);
if(temp__5753__auto__){
var seq__64026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64026__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64026__$1);
var G__64489 = cljs.core.chunk_rest(seq__64026__$1);
var G__64490 = c__4679__auto__;
var G__64491 = cljs.core.count(c__4679__auto__);
var G__64492 = (0);
seq__64026 = G__64489;
chunk__64027 = G__64490;
count__64028 = G__64491;
i__64029 = G__64492;
continue;
} else {
var js_ns = cljs.core.first(seq__64026__$1);
var require_str_64493 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_64493);


var G__64495 = cljs.core.next(seq__64026__$1);
var G__64496 = null;
var G__64497 = (0);
var G__64498 = (0);
seq__64026 = G__64495;
chunk__64027 = G__64496;
count__64028 = G__64497;
i__64029 = G__64498;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__64036){
var map__64037 = p__64036;
var map__64037__$1 = cljs.core.__destructure_map(map__64037);
var msg = map__64037__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64037__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64038(s__64039){
return (new cljs.core.LazySeq(null,(function (){
var s__64039__$1 = s__64039;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__64039__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__64044 = cljs.core.first(xs__6308__auto__);
var map__64044__$1 = cljs.core.__destructure_map(map__64044);
var src = map__64044__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64044__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__64039__$1,map__64044,map__64044__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__64037,map__64037__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64038_$_iter__64040(s__64041){
return (new cljs.core.LazySeq(null,((function (s__64039__$1,map__64044,map__64044__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__64037,map__64037__$1,msg,info,reload_info){
return (function (){
var s__64041__$1 = s__64041;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__64041__$1);
if(temp__5753__auto____$1){
var s__64041__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64041__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__64041__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__64043 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__64042 = (0);
while(true){
if((i__64042 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__64042);
cljs.core.chunk_append(b__64043,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__64507 = (i__64042 + (1));
i__64042 = G__64507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64043),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64038_$_iter__64040(cljs.core.chunk_rest(s__64041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64043),null);
}
} else {
var warning = cljs.core.first(s__64041__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64038_$_iter__64040(cljs.core.rest(s__64041__$2)));
}
} else {
return null;
}
break;
}
});})(s__64039__$1,map__64044,map__64044__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__64037,map__64037__$1,msg,info,reload_info))
,null,null));
});})(s__64039__$1,map__64044,map__64044__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__64037,map__64037__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64038(cljs.core.rest(s__64039__$1)));
} else {
var G__64508 = cljs.core.rest(s__64039__$1);
s__64039__$1 = G__64508;
continue;
}
} else {
var G__64509 = cljs.core.rest(s__64039__$1);
s__64039__$1 = G__64509;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__64049_64510 = cljs.core.seq(warnings);
var chunk__64050_64511 = null;
var count__64051_64512 = (0);
var i__64052_64513 = (0);
while(true){
if((i__64052_64513 < count__64051_64512)){
var map__64058_64514 = chunk__64050_64511.cljs$core$IIndexed$_nth$arity$2(null,i__64052_64513);
var map__64058_64515__$1 = cljs.core.__destructure_map(map__64058_64514);
var w_64516 = map__64058_64515__$1;
var msg_64517__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64058_64515__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64058_64515__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64058_64515__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64058_64515__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64520)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64518),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64519),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64517__$1)].join(''));


var G__64521 = seq__64049_64510;
var G__64522 = chunk__64050_64511;
var G__64523 = count__64051_64512;
var G__64524 = (i__64052_64513 + (1));
seq__64049_64510 = G__64521;
chunk__64050_64511 = G__64522;
count__64051_64512 = G__64523;
i__64052_64513 = G__64524;
continue;
} else {
var temp__5753__auto___64525 = cljs.core.seq(seq__64049_64510);
if(temp__5753__auto___64525){
var seq__64049_64526__$1 = temp__5753__auto___64525;
if(cljs.core.chunked_seq_QMARK_(seq__64049_64526__$1)){
var c__4679__auto___64527 = cljs.core.chunk_first(seq__64049_64526__$1);
var G__64528 = cljs.core.chunk_rest(seq__64049_64526__$1);
var G__64529 = c__4679__auto___64527;
var G__64530 = cljs.core.count(c__4679__auto___64527);
var G__64531 = (0);
seq__64049_64510 = G__64528;
chunk__64050_64511 = G__64529;
count__64051_64512 = G__64530;
i__64052_64513 = G__64531;
continue;
} else {
var map__64059_64533 = cljs.core.first(seq__64049_64526__$1);
var map__64059_64534__$1 = cljs.core.__destructure_map(map__64059_64533);
var w_64535 = map__64059_64534__$1;
var msg_64536__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059_64534__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_64537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059_64534__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_64538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059_64534__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_64539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059_64534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_64539)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_64537),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_64538),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_64536__$1)].join(''));


var G__64541 = cljs.core.next(seq__64049_64526__$1);
var G__64542 = null;
var G__64543 = (0);
var G__64544 = (0);
seq__64049_64510 = G__64541;
chunk__64050_64511 = G__64542;
count__64051_64512 = G__64543;
i__64052_64513 = G__64544;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__64034_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__64034_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__64060){
var map__64061 = p__64060;
var map__64061__$1 = cljs.core.__destructure_map(map__64061);
var msg = map__64061__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64061__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64061__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__64062 = cljs.core.seq(updates);
var chunk__64064 = null;
var count__64065 = (0);
var i__64066 = (0);
while(true){
if((i__64066 < count__64065)){
var path = chunk__64064.cljs$core$IIndexed$_nth$arity$2(null,i__64066);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64251_64545 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64255_64546 = null;
var count__64256_64547 = (0);
var i__64257_64548 = (0);
while(true){
if((i__64257_64548 < count__64256_64547)){
var node_64549 = chunk__64255_64546.cljs$core$IIndexed$_nth$arity$2(null,i__64257_64548);
if(cljs.core.not(node_64549.shadow$old)){
var path_match_64550 = shadow.cljs.devtools.client.browser.match_paths(node_64549.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64550)){
var new_link_64551 = (function (){var G__64291 = node_64549.cloneNode(true);
G__64291.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64550),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64291;
})();
(node_64549.shadow$old = true);

(new_link_64551.onload = ((function (seq__64251_64545,chunk__64255_64546,count__64256_64547,i__64257_64548,seq__64062,chunk__64064,count__64065,i__64066,new_link_64551,path_match_64550,node_64549,path,map__64061,map__64061__$1,msg,updates,reload_info){
return (function (e){
var seq__64295_64552 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64297_64553 = null;
var count__64298_64554 = (0);
var i__64299_64555 = (0);
while(true){
if((i__64299_64555 < count__64298_64554)){
var map__64304_64556 = chunk__64297_64553.cljs$core$IIndexed$_nth$arity$2(null,i__64299_64555);
var map__64304_64557__$1 = cljs.core.__destructure_map(map__64304_64556);
var task_64558 = map__64304_64557__$1;
var fn_str_64559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64304_64557__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64304_64557__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64561 = goog.getObjectByName(fn_str_64559,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64560)].join(''));

(fn_obj_64561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64561.cljs$core$IFn$_invoke$arity$2(path,new_link_64551) : fn_obj_64561.call(null,path,new_link_64551));


var G__64564 = seq__64295_64552;
var G__64565 = chunk__64297_64553;
var G__64566 = count__64298_64554;
var G__64567 = (i__64299_64555 + (1));
seq__64295_64552 = G__64564;
chunk__64297_64553 = G__64565;
count__64298_64554 = G__64566;
i__64299_64555 = G__64567;
continue;
} else {
var temp__5753__auto___64568 = cljs.core.seq(seq__64295_64552);
if(temp__5753__auto___64568){
var seq__64295_64570__$1 = temp__5753__auto___64568;
if(cljs.core.chunked_seq_QMARK_(seq__64295_64570__$1)){
var c__4679__auto___64571 = cljs.core.chunk_first(seq__64295_64570__$1);
var G__64572 = cljs.core.chunk_rest(seq__64295_64570__$1);
var G__64573 = c__4679__auto___64571;
var G__64574 = cljs.core.count(c__4679__auto___64571);
var G__64575 = (0);
seq__64295_64552 = G__64572;
chunk__64297_64553 = G__64573;
count__64298_64554 = G__64574;
i__64299_64555 = G__64575;
continue;
} else {
var map__64306_64576 = cljs.core.first(seq__64295_64570__$1);
var map__64306_64577__$1 = cljs.core.__destructure_map(map__64306_64576);
var task_64578 = map__64306_64577__$1;
var fn_str_64579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64306_64577__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64306_64577__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64581 = goog.getObjectByName(fn_str_64579,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64580)].join(''));

(fn_obj_64581.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64581.cljs$core$IFn$_invoke$arity$2(path,new_link_64551) : fn_obj_64581.call(null,path,new_link_64551));


var G__64582 = cljs.core.next(seq__64295_64570__$1);
var G__64583 = null;
var G__64584 = (0);
var G__64585 = (0);
seq__64295_64552 = G__64582;
chunk__64297_64553 = G__64583;
count__64298_64554 = G__64584;
i__64299_64555 = G__64585;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64549);
});})(seq__64251_64545,chunk__64255_64546,count__64256_64547,i__64257_64548,seq__64062,chunk__64064,count__64065,i__64066,new_link_64551,path_match_64550,node_64549,path,map__64061,map__64061__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64550], 0));

goog.dom.insertSiblingAfter(new_link_64551,node_64549);


var G__64588 = seq__64251_64545;
var G__64589 = chunk__64255_64546;
var G__64590 = count__64256_64547;
var G__64591 = (i__64257_64548 + (1));
seq__64251_64545 = G__64588;
chunk__64255_64546 = G__64589;
count__64256_64547 = G__64590;
i__64257_64548 = G__64591;
continue;
} else {
var G__64594 = seq__64251_64545;
var G__64595 = chunk__64255_64546;
var G__64596 = count__64256_64547;
var G__64597 = (i__64257_64548 + (1));
seq__64251_64545 = G__64594;
chunk__64255_64546 = G__64595;
count__64256_64547 = G__64596;
i__64257_64548 = G__64597;
continue;
}
} else {
var G__64598 = seq__64251_64545;
var G__64599 = chunk__64255_64546;
var G__64600 = count__64256_64547;
var G__64601 = (i__64257_64548 + (1));
seq__64251_64545 = G__64598;
chunk__64255_64546 = G__64599;
count__64256_64547 = G__64600;
i__64257_64548 = G__64601;
continue;
}
} else {
var temp__5753__auto___64602 = cljs.core.seq(seq__64251_64545);
if(temp__5753__auto___64602){
var seq__64251_64603__$1 = temp__5753__auto___64602;
if(cljs.core.chunked_seq_QMARK_(seq__64251_64603__$1)){
var c__4679__auto___64604 = cljs.core.chunk_first(seq__64251_64603__$1);
var G__64605 = cljs.core.chunk_rest(seq__64251_64603__$1);
var G__64606 = c__4679__auto___64604;
var G__64607 = cljs.core.count(c__4679__auto___64604);
var G__64608 = (0);
seq__64251_64545 = G__64605;
chunk__64255_64546 = G__64606;
count__64256_64547 = G__64607;
i__64257_64548 = G__64608;
continue;
} else {
var node_64609 = cljs.core.first(seq__64251_64603__$1);
if(cljs.core.not(node_64609.shadow$old)){
var path_match_64610 = shadow.cljs.devtools.client.browser.match_paths(node_64609.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64610)){
var new_link_64611 = (function (){var G__64308 = node_64609.cloneNode(true);
G__64308.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64610),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64308;
})();
(node_64609.shadow$old = true);

(new_link_64611.onload = ((function (seq__64251_64545,chunk__64255_64546,count__64256_64547,i__64257_64548,seq__64062,chunk__64064,count__64065,i__64066,new_link_64611,path_match_64610,node_64609,seq__64251_64603__$1,temp__5753__auto___64602,path,map__64061,map__64061__$1,msg,updates,reload_info){
return (function (e){
var seq__64309_64613 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64311_64614 = null;
var count__64312_64615 = (0);
var i__64313_64616 = (0);
while(true){
if((i__64313_64616 < count__64312_64615)){
var map__64320_64617 = chunk__64311_64614.cljs$core$IIndexed$_nth$arity$2(null,i__64313_64616);
var map__64320_64618__$1 = cljs.core.__destructure_map(map__64320_64617);
var task_64619 = map__64320_64618__$1;
var fn_str_64620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64320_64618__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64320_64618__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64622 = goog.getObjectByName(fn_str_64620,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64621)].join(''));

(fn_obj_64622.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64622.cljs$core$IFn$_invoke$arity$2(path,new_link_64611) : fn_obj_64622.call(null,path,new_link_64611));


var G__64623 = seq__64309_64613;
var G__64624 = chunk__64311_64614;
var G__64625 = count__64312_64615;
var G__64626 = (i__64313_64616 + (1));
seq__64309_64613 = G__64623;
chunk__64311_64614 = G__64624;
count__64312_64615 = G__64625;
i__64313_64616 = G__64626;
continue;
} else {
var temp__5753__auto___64627__$1 = cljs.core.seq(seq__64309_64613);
if(temp__5753__auto___64627__$1){
var seq__64309_64630__$1 = temp__5753__auto___64627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64309_64630__$1)){
var c__4679__auto___64631 = cljs.core.chunk_first(seq__64309_64630__$1);
var G__64632 = cljs.core.chunk_rest(seq__64309_64630__$1);
var G__64633 = c__4679__auto___64631;
var G__64634 = cljs.core.count(c__4679__auto___64631);
var G__64635 = (0);
seq__64309_64613 = G__64632;
chunk__64311_64614 = G__64633;
count__64312_64615 = G__64634;
i__64313_64616 = G__64635;
continue;
} else {
var map__64321_64636 = cljs.core.first(seq__64309_64630__$1);
var map__64321_64637__$1 = cljs.core.__destructure_map(map__64321_64636);
var task_64638 = map__64321_64637__$1;
var fn_str_64639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321_64637__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64321_64637__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64641 = goog.getObjectByName(fn_str_64639,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64640)].join(''));

(fn_obj_64641.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64641.cljs$core$IFn$_invoke$arity$2(path,new_link_64611) : fn_obj_64641.call(null,path,new_link_64611));


var G__64642 = cljs.core.next(seq__64309_64630__$1);
var G__64643 = null;
var G__64644 = (0);
var G__64645 = (0);
seq__64309_64613 = G__64642;
chunk__64311_64614 = G__64643;
count__64312_64615 = G__64644;
i__64313_64616 = G__64645;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64609);
});})(seq__64251_64545,chunk__64255_64546,count__64256_64547,i__64257_64548,seq__64062,chunk__64064,count__64065,i__64066,new_link_64611,path_match_64610,node_64609,seq__64251_64603__$1,temp__5753__auto___64602,path,map__64061,map__64061__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64610], 0));

goog.dom.insertSiblingAfter(new_link_64611,node_64609);


var G__64648 = cljs.core.next(seq__64251_64603__$1);
var G__64649 = null;
var G__64650 = (0);
var G__64651 = (0);
seq__64251_64545 = G__64648;
chunk__64255_64546 = G__64649;
count__64256_64547 = G__64650;
i__64257_64548 = G__64651;
continue;
} else {
var G__64654 = cljs.core.next(seq__64251_64603__$1);
var G__64655 = null;
var G__64656 = (0);
var G__64657 = (0);
seq__64251_64545 = G__64654;
chunk__64255_64546 = G__64655;
count__64256_64547 = G__64656;
i__64257_64548 = G__64657;
continue;
}
} else {
var G__64658 = cljs.core.next(seq__64251_64603__$1);
var G__64659 = null;
var G__64660 = (0);
var G__64661 = (0);
seq__64251_64545 = G__64658;
chunk__64255_64546 = G__64659;
count__64256_64547 = G__64660;
i__64257_64548 = G__64661;
continue;
}
}
} else {
}
}
break;
}


var G__64662 = seq__64062;
var G__64663 = chunk__64064;
var G__64664 = count__64065;
var G__64665 = (i__64066 + (1));
seq__64062 = G__64662;
chunk__64064 = G__64663;
count__64065 = G__64664;
i__64066 = G__64665;
continue;
} else {
var G__64666 = seq__64062;
var G__64667 = chunk__64064;
var G__64668 = count__64065;
var G__64669 = (i__64066 + (1));
seq__64062 = G__64666;
chunk__64064 = G__64667;
count__64065 = G__64668;
i__64066 = G__64669;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64062);
if(temp__5753__auto__){
var seq__64062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64062__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__64062__$1);
var G__64670 = cljs.core.chunk_rest(seq__64062__$1);
var G__64671 = c__4679__auto__;
var G__64672 = cljs.core.count(c__4679__auto__);
var G__64673 = (0);
seq__64062 = G__64670;
chunk__64064 = G__64671;
count__64065 = G__64672;
i__64066 = G__64673;
continue;
} else {
var path = cljs.core.first(seq__64062__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64322_64674 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64326_64675 = null;
var count__64327_64676 = (0);
var i__64328_64677 = (0);
while(true){
if((i__64328_64677 < count__64327_64676)){
var node_64678 = chunk__64326_64675.cljs$core$IIndexed$_nth$arity$2(null,i__64328_64677);
if(cljs.core.not(node_64678.shadow$old)){
var path_match_64679 = shadow.cljs.devtools.client.browser.match_paths(node_64678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64679)){
var new_link_64680 = (function (){var G__64372 = node_64678.cloneNode(true);
G__64372.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64372;
})();
(node_64678.shadow$old = true);

(new_link_64680.onload = ((function (seq__64322_64674,chunk__64326_64675,count__64327_64676,i__64328_64677,seq__64062,chunk__64064,count__64065,i__64066,new_link_64680,path_match_64679,node_64678,path,seq__64062__$1,temp__5753__auto__,map__64061,map__64061__$1,msg,updates,reload_info){
return (function (e){
var seq__64374_64681 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64376_64682 = null;
var count__64377_64683 = (0);
var i__64378_64684 = (0);
while(true){
if((i__64378_64684 < count__64377_64683)){
var map__64388_64685 = chunk__64376_64682.cljs$core$IIndexed$_nth$arity$2(null,i__64378_64684);
var map__64388_64686__$1 = cljs.core.__destructure_map(map__64388_64685);
var task_64687 = map__64388_64686__$1;
var fn_str_64688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388_64686__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64388_64686__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64690 = goog.getObjectByName(fn_str_64688,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64689)].join(''));

(fn_obj_64690.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64690.cljs$core$IFn$_invoke$arity$2(path,new_link_64680) : fn_obj_64690.call(null,path,new_link_64680));


var G__64691 = seq__64374_64681;
var G__64692 = chunk__64376_64682;
var G__64693 = count__64377_64683;
var G__64694 = (i__64378_64684 + (1));
seq__64374_64681 = G__64691;
chunk__64376_64682 = G__64692;
count__64377_64683 = G__64693;
i__64378_64684 = G__64694;
continue;
} else {
var temp__5753__auto___64695__$1 = cljs.core.seq(seq__64374_64681);
if(temp__5753__auto___64695__$1){
var seq__64374_64696__$1 = temp__5753__auto___64695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64374_64696__$1)){
var c__4679__auto___64697 = cljs.core.chunk_first(seq__64374_64696__$1);
var G__64698 = cljs.core.chunk_rest(seq__64374_64696__$1);
var G__64699 = c__4679__auto___64697;
var G__64700 = cljs.core.count(c__4679__auto___64697);
var G__64701 = (0);
seq__64374_64681 = G__64698;
chunk__64376_64682 = G__64699;
count__64377_64683 = G__64700;
i__64378_64684 = G__64701;
continue;
} else {
var map__64389_64702 = cljs.core.first(seq__64374_64696__$1);
var map__64389_64703__$1 = cljs.core.__destructure_map(map__64389_64702);
var task_64704 = map__64389_64703__$1;
var fn_str_64705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389_64703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64389_64703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64707 = goog.getObjectByName(fn_str_64705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64706)].join(''));

(fn_obj_64707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64707.cljs$core$IFn$_invoke$arity$2(path,new_link_64680) : fn_obj_64707.call(null,path,new_link_64680));


var G__64709 = cljs.core.next(seq__64374_64696__$1);
var G__64710 = null;
var G__64711 = (0);
var G__64712 = (0);
seq__64374_64681 = G__64709;
chunk__64376_64682 = G__64710;
count__64377_64683 = G__64711;
i__64378_64684 = G__64712;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64678);
});})(seq__64322_64674,chunk__64326_64675,count__64327_64676,i__64328_64677,seq__64062,chunk__64064,count__64065,i__64066,new_link_64680,path_match_64679,node_64678,path,seq__64062__$1,temp__5753__auto__,map__64061,map__64061__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64679], 0));

goog.dom.insertSiblingAfter(new_link_64680,node_64678);


var G__64713 = seq__64322_64674;
var G__64714 = chunk__64326_64675;
var G__64715 = count__64327_64676;
var G__64716 = (i__64328_64677 + (1));
seq__64322_64674 = G__64713;
chunk__64326_64675 = G__64714;
count__64327_64676 = G__64715;
i__64328_64677 = G__64716;
continue;
} else {
var G__64718 = seq__64322_64674;
var G__64719 = chunk__64326_64675;
var G__64720 = count__64327_64676;
var G__64721 = (i__64328_64677 + (1));
seq__64322_64674 = G__64718;
chunk__64326_64675 = G__64719;
count__64327_64676 = G__64720;
i__64328_64677 = G__64721;
continue;
}
} else {
var G__64722 = seq__64322_64674;
var G__64723 = chunk__64326_64675;
var G__64724 = count__64327_64676;
var G__64725 = (i__64328_64677 + (1));
seq__64322_64674 = G__64722;
chunk__64326_64675 = G__64723;
count__64327_64676 = G__64724;
i__64328_64677 = G__64725;
continue;
}
} else {
var temp__5753__auto___64726__$1 = cljs.core.seq(seq__64322_64674);
if(temp__5753__auto___64726__$1){
var seq__64322_64727__$1 = temp__5753__auto___64726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64322_64727__$1)){
var c__4679__auto___64728 = cljs.core.chunk_first(seq__64322_64727__$1);
var G__64729 = cljs.core.chunk_rest(seq__64322_64727__$1);
var G__64730 = c__4679__auto___64728;
var G__64731 = cljs.core.count(c__4679__auto___64728);
var G__64732 = (0);
seq__64322_64674 = G__64729;
chunk__64326_64675 = G__64730;
count__64327_64676 = G__64731;
i__64328_64677 = G__64732;
continue;
} else {
var node_64733 = cljs.core.first(seq__64322_64727__$1);
if(cljs.core.not(node_64733.shadow$old)){
var path_match_64734 = shadow.cljs.devtools.client.browser.match_paths(node_64733.getAttribute("href"),path);
if(cljs.core.truth_(path_match_64734)){
var new_link_64735 = (function (){var G__64391 = node_64733.cloneNode(true);
G__64391.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_64734),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__64391;
})();
(node_64733.shadow$old = true);

(new_link_64735.onload = ((function (seq__64322_64674,chunk__64326_64675,count__64327_64676,i__64328_64677,seq__64062,chunk__64064,count__64065,i__64066,new_link_64735,path_match_64734,node_64733,seq__64322_64727__$1,temp__5753__auto___64726__$1,path,seq__64062__$1,temp__5753__auto__,map__64061,map__64061__$1,msg,updates,reload_info){
return (function (e){
var seq__64392_64736 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__64394_64737 = null;
var count__64395_64738 = (0);
var i__64396_64739 = (0);
while(true){
if((i__64396_64739 < count__64395_64738)){
var map__64404_64740 = chunk__64394_64737.cljs$core$IIndexed$_nth$arity$2(null,i__64396_64739);
var map__64404_64741__$1 = cljs.core.__destructure_map(map__64404_64740);
var task_64742 = map__64404_64741__$1;
var fn_str_64743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64404_64741__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64404_64741__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64745 = goog.getObjectByName(fn_str_64743,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64744)].join(''));

(fn_obj_64745.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64745.cljs$core$IFn$_invoke$arity$2(path,new_link_64735) : fn_obj_64745.call(null,path,new_link_64735));


var G__64746 = seq__64392_64736;
var G__64747 = chunk__64394_64737;
var G__64748 = count__64395_64738;
var G__64749 = (i__64396_64739 + (1));
seq__64392_64736 = G__64746;
chunk__64394_64737 = G__64747;
count__64395_64738 = G__64748;
i__64396_64739 = G__64749;
continue;
} else {
var temp__5753__auto___64750__$2 = cljs.core.seq(seq__64392_64736);
if(temp__5753__auto___64750__$2){
var seq__64392_64751__$1 = temp__5753__auto___64750__$2;
if(cljs.core.chunked_seq_QMARK_(seq__64392_64751__$1)){
var c__4679__auto___64752 = cljs.core.chunk_first(seq__64392_64751__$1);
var G__64753 = cljs.core.chunk_rest(seq__64392_64751__$1);
var G__64754 = c__4679__auto___64752;
var G__64755 = cljs.core.count(c__4679__auto___64752);
var G__64756 = (0);
seq__64392_64736 = G__64753;
chunk__64394_64737 = G__64754;
count__64395_64738 = G__64755;
i__64396_64739 = G__64756;
continue;
} else {
var map__64410_64759 = cljs.core.first(seq__64392_64751__$1);
var map__64410_64760__$1 = cljs.core.__destructure_map(map__64410_64759);
var task_64761 = map__64410_64760__$1;
var fn_str_64762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410_64760__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_64763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64410_64760__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_64765 = goog.getObjectByName(fn_str_64762,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_64763)].join(''));

(fn_obj_64765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_64765.cljs$core$IFn$_invoke$arity$2(path,new_link_64735) : fn_obj_64765.call(null,path,new_link_64735));


var G__64766 = cljs.core.next(seq__64392_64751__$1);
var G__64767 = null;
var G__64768 = (0);
var G__64769 = (0);
seq__64392_64736 = G__64766;
chunk__64394_64737 = G__64767;
count__64395_64738 = G__64768;
i__64396_64739 = G__64769;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_64733);
});})(seq__64322_64674,chunk__64326_64675,count__64327_64676,i__64328_64677,seq__64062,chunk__64064,count__64065,i__64066,new_link_64735,path_match_64734,node_64733,seq__64322_64727__$1,temp__5753__auto___64726__$1,path,seq__64062__$1,temp__5753__auto__,map__64061,map__64061__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_64734], 0));

goog.dom.insertSiblingAfter(new_link_64735,node_64733);


var G__64770 = cljs.core.next(seq__64322_64727__$1);
var G__64771 = null;
var G__64772 = (0);
var G__64773 = (0);
seq__64322_64674 = G__64770;
chunk__64326_64675 = G__64771;
count__64327_64676 = G__64772;
i__64328_64677 = G__64773;
continue;
} else {
var G__64774 = cljs.core.next(seq__64322_64727__$1);
var G__64775 = null;
var G__64776 = (0);
var G__64777 = (0);
seq__64322_64674 = G__64774;
chunk__64326_64675 = G__64775;
count__64327_64676 = G__64776;
i__64328_64677 = G__64777;
continue;
}
} else {
var G__64778 = cljs.core.next(seq__64322_64727__$1);
var G__64779 = null;
var G__64780 = (0);
var G__64781 = (0);
seq__64322_64674 = G__64778;
chunk__64326_64675 = G__64779;
count__64327_64676 = G__64780;
i__64328_64677 = G__64781;
continue;
}
}
} else {
}
}
break;
}


var G__64782 = cljs.core.next(seq__64062__$1);
var G__64783 = null;
var G__64784 = (0);
var G__64785 = (0);
seq__64062 = G__64782;
chunk__64064 = G__64783;
count__64065 = G__64784;
i__64066 = G__64785;
continue;
} else {
var G__64786 = cljs.core.next(seq__64062__$1);
var G__64787 = null;
var G__64788 = (0);
var G__64789 = (0);
seq__64062 = G__64786;
chunk__64064 = G__64787;
count__64065 = G__64788;
i__64066 = G__64789;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__64414){
var map__64415 = p__64414;
var map__64415__$1 = cljs.core.__destructure_map(map__64415);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64415__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__64422){
var map__64424 = p__64422;
var map__64424__$1 = cljs.core.__destructure_map(map__64424);
var _ = map__64424__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64424__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__64427,done,error){
var map__64428 = p__64427;
var map__64428__$1 = cljs.core.__destructure_map(map__64428);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64428__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__64429,done,error){
var map__64430 = p__64429;
var map__64430__$1 = cljs.core.__destructure_map(map__64430);
var msg = map__64430__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64430__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64435){
var map__64436 = p__64435;
var map__64436__$1 = cljs.core.__destructure_map(map__64436);
var src = map__64436__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64436__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__64437 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__64437) : done.call(null,G__64437));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__64438){
var map__64439 = p__64438;
var map__64439__$1 = cljs.core.__destructure_map(map__64439);
var msg__$1 = map__64439__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e64440){var ex = e64440;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__64441){
var map__64443 = p__64441;
var map__64443__$1 = cljs.core.__destructure_map(map__64443);
var env = map__64443__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64443__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__64449){
var map__64451 = p__64449;
var map__64451__$1 = cljs.core.__destructure_map(map__64451);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64451__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64451__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__64453){
var map__64454 = p__64453;
var map__64454__$1 = cljs.core.__destructure_map(map__64454);
var svc = map__64454__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64454__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
