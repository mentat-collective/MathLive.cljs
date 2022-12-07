import "./cljs_env.js";
goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63171,p__63172){
var map__63175 = p__63171;
var map__63175__$1 = cljs.core.__destructure_map(map__63175);
var svc = map__63175__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63175__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63175__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63175__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63176 = p__63172;
var map__63176__$1 = cljs.core.__destructure_map(map__63176);
var msg = map__63176__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63176__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63176__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63176__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63176__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__63189,p__63190){
var map__63191 = p__63189;
var map__63191__$1 = cljs.core.__destructure_map(map__63191);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63191__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63192 = p__63190;
var map__63192__$1 = cljs.core.__destructure_map(map__63192);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63192__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__63198,p__63199){
var map__63201 = p__63198;
var map__63201__$1 = cljs.core.__destructure_map(map__63201);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63201__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63202 = p__63199;
var map__63202__$1 = cljs.core.__destructure_map(map__63202);
var msg = map__63202__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63202__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__63214,tid){
var map__63215 = p__63214;
var map__63215__$1 = cljs.core.__destructure_map(map__63215);
var svc = map__63215__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63215__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__63232 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__63233 = null;
var count__63234 = (0);
var i__63235 = (0);
while(true){
if((i__63235 < count__63234)){
var vec__63245 = chunk__63233.cljs$core$IIndexed$_nth$arity$2(null,i__63235);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63245,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63245,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63268 = seq__63232;
var G__63269 = chunk__63233;
var G__63270 = count__63234;
var G__63271 = (i__63235 + (1));
seq__63232 = G__63268;
chunk__63233 = G__63269;
count__63234 = G__63270;
i__63235 = G__63271;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63232);
if(temp__5753__auto__){
var seq__63232__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63232__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__63232__$1);
var G__63272 = cljs.core.chunk_rest(seq__63232__$1);
var G__63273 = c__4679__auto__;
var G__63274 = cljs.core.count(c__4679__auto__);
var G__63275 = (0);
seq__63232 = G__63272;
chunk__63233 = G__63273;
count__63234 = G__63274;
i__63235 = G__63275;
continue;
} else {
var vec__63248 = cljs.core.first(seq__63232__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63248,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63248,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63276 = cljs.core.next(seq__63232__$1);
var G__63277 = null;
var G__63278 = (0);
var G__63279 = (0);
seq__63232 = G__63276;
chunk__63233 = G__63277;
count__63234 = G__63278;
i__63235 = G__63279;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__63222_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__63222_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__63223_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__63223_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__63224_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__63224_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__63225_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__63225_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__63252){
var map__63253 = p__63252;
var map__63253__$1 = cljs.core.__destructure_map(map__63253);
var svc = map__63253__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63253__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
