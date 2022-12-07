import "./cljs_env.js";
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_62303 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_62303(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_62304 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_62304(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61413 = coll;
var G__61414 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61413,G__61414) : shadow.dom.lazy_native_coll_seq.call(null,G__61413,G__61414));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61441 = arguments.length;
switch (G__61441) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61451 = arguments.length;
switch (G__61451) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61460 = arguments.length;
switch (G__61460) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61463 = arguments.length;
switch (G__61463) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61473 = arguments.length;
switch (G__61473) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61479 = arguments.length;
switch (G__61479) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61484){if((e61484 instanceof Object)){
var e = e61484;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61484;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61490 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61491 = null;
var count__61492 = (0);
var i__61493 = (0);
while(true){
if((i__61493 < count__61492)){
var el = chunk__61491.cljs$core$IIndexed$_nth$arity$2(null,i__61493);
var handler_62315__$1 = ((function (seq__61490,chunk__61491,count__61492,i__61493,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61490,chunk__61491,count__61492,i__61493,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62315__$1);


var G__62316 = seq__61490;
var G__62317 = chunk__61491;
var G__62318 = count__61492;
var G__62319 = (i__61493 + (1));
seq__61490 = G__62316;
chunk__61491 = G__62317;
count__61492 = G__62318;
i__61493 = G__62319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61490);
if(temp__5753__auto__){
var seq__61490__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61490__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61490__$1);
var G__62320 = cljs.core.chunk_rest(seq__61490__$1);
var G__62321 = c__4679__auto__;
var G__62322 = cljs.core.count(c__4679__auto__);
var G__62323 = (0);
seq__61490 = G__62320;
chunk__61491 = G__62321;
count__61492 = G__62322;
i__61493 = G__62323;
continue;
} else {
var el = cljs.core.first(seq__61490__$1);
var handler_62325__$1 = ((function (seq__61490,chunk__61491,count__61492,i__61493,el,seq__61490__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61490,chunk__61491,count__61492,i__61493,el,seq__61490__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_62325__$1);


var G__62326 = cljs.core.next(seq__61490__$1);
var G__62327 = null;
var G__62328 = (0);
var G__62329 = (0);
seq__61490 = G__62326;
chunk__61491 = G__62327;
count__61492 = G__62328;
i__61493 = G__62329;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61526 = arguments.length;
switch (G__61526) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61546 = cljs.core.seq(events);
var chunk__61547 = null;
var count__61548 = (0);
var i__61549 = (0);
while(true){
if((i__61549 < count__61548)){
var vec__61578 = chunk__61547.cljs$core$IIndexed$_nth$arity$2(null,i__61549);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61578,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62332 = seq__61546;
var G__62333 = chunk__61547;
var G__62334 = count__61548;
var G__62335 = (i__61549 + (1));
seq__61546 = G__62332;
chunk__61547 = G__62333;
count__61548 = G__62334;
i__61549 = G__62335;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61546);
if(temp__5753__auto__){
var seq__61546__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61546__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61546__$1);
var G__62336 = cljs.core.chunk_rest(seq__61546__$1);
var G__62337 = c__4679__auto__;
var G__62338 = cljs.core.count(c__4679__auto__);
var G__62339 = (0);
seq__61546 = G__62336;
chunk__61547 = G__62337;
count__61548 = G__62338;
i__61549 = G__62339;
continue;
} else {
var vec__61585 = cljs.core.first(seq__61546__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61585,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__62340 = cljs.core.next(seq__61546__$1);
var G__62341 = null;
var G__62342 = (0);
var G__62343 = (0);
seq__61546 = G__62340;
chunk__61547 = G__62341;
count__61548 = G__62342;
i__61549 = G__62343;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61588 = cljs.core.seq(styles);
var chunk__61589 = null;
var count__61590 = (0);
var i__61591 = (0);
while(true){
if((i__61591 < count__61590)){
var vec__61602 = chunk__61589.cljs$core$IIndexed$_nth$arity$2(null,i__61591);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61602,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62344 = seq__61588;
var G__62345 = chunk__61589;
var G__62346 = count__61590;
var G__62347 = (i__61591 + (1));
seq__61588 = G__62344;
chunk__61589 = G__62345;
count__61590 = G__62346;
i__61591 = G__62347;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61588);
if(temp__5753__auto__){
var seq__61588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61588__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61588__$1);
var G__62348 = cljs.core.chunk_rest(seq__61588__$1);
var G__62349 = c__4679__auto__;
var G__62350 = cljs.core.count(c__4679__auto__);
var G__62351 = (0);
seq__61588 = G__62348;
chunk__61589 = G__62349;
count__61590 = G__62350;
i__61591 = G__62351;
continue;
} else {
var vec__61607 = cljs.core.first(seq__61588__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61607,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61607,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__62353 = cljs.core.next(seq__61588__$1);
var G__62354 = null;
var G__62355 = (0);
var G__62356 = (0);
seq__61588 = G__62353;
chunk__61589 = G__62354;
count__61590 = G__62355;
i__61591 = G__62356;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61612_62357 = key;
var G__61612_62358__$1 = (((G__61612_62357 instanceof cljs.core.Keyword))?G__61612_62357.fqn:null);
switch (G__61612_62358__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_62362 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_62362,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_62362,"aria-");
}
})())){
el.setAttribute(ks_62362,value);
} else {
(el[ks_62362] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61627){
var map__61629 = p__61627;
var map__61629__$1 = cljs.core.__destructure_map(map__61629);
var props = map__61629__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61629__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61631 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61631,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61636 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61636,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61636;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61640 = arguments.length;
switch (G__61640) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61659){
var vec__61660 = p__61659;
var seq__61661 = cljs.core.seq(vec__61660);
var first__61662 = cljs.core.first(seq__61661);
var seq__61661__$1 = cljs.core.next(seq__61661);
var nn = first__61662;
var first__61662__$1 = cljs.core.first(seq__61661__$1);
var seq__61661__$2 = cljs.core.next(seq__61661__$1);
var np = first__61662__$1;
var nc = seq__61661__$2;
var node = vec__61660;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61667 = nn;
var G__61668 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61667,G__61668) : create_fn.call(null,G__61667,G__61668));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61672 = nn;
var G__61673 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61672,G__61673) : create_fn.call(null,G__61672,G__61673));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61677 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61677,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61677,(1),null);
var seq__61681_62376 = cljs.core.seq(node_children);
var chunk__61682_62377 = null;
var count__61683_62378 = (0);
var i__61684_62379 = (0);
while(true){
if((i__61684_62379 < count__61683_62378)){
var child_struct_62380 = chunk__61682_62377.cljs$core$IIndexed$_nth$arity$2(null,i__61684_62379);
var children_62381 = shadow.dom.dom_node(child_struct_62380);
if(cljs.core.seq_QMARK_(children_62381)){
var seq__61746_62382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62381));
var chunk__61748_62383 = null;
var count__61749_62384 = (0);
var i__61750_62385 = (0);
while(true){
if((i__61750_62385 < count__61749_62384)){
var child_62386 = chunk__61748_62383.cljs$core$IIndexed$_nth$arity$2(null,i__61750_62385);
if(cljs.core.truth_(child_62386)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62386);


var G__62387 = seq__61746_62382;
var G__62388 = chunk__61748_62383;
var G__62389 = count__61749_62384;
var G__62390 = (i__61750_62385 + (1));
seq__61746_62382 = G__62387;
chunk__61748_62383 = G__62388;
count__61749_62384 = G__62389;
i__61750_62385 = G__62390;
continue;
} else {
var G__62391 = seq__61746_62382;
var G__62392 = chunk__61748_62383;
var G__62393 = count__61749_62384;
var G__62394 = (i__61750_62385 + (1));
seq__61746_62382 = G__62391;
chunk__61748_62383 = G__62392;
count__61749_62384 = G__62393;
i__61750_62385 = G__62394;
continue;
}
} else {
var temp__5753__auto___62399 = cljs.core.seq(seq__61746_62382);
if(temp__5753__auto___62399){
var seq__61746_62400__$1 = temp__5753__auto___62399;
if(cljs.core.chunked_seq_QMARK_(seq__61746_62400__$1)){
var c__4679__auto___62401 = cljs.core.chunk_first(seq__61746_62400__$1);
var G__62402 = cljs.core.chunk_rest(seq__61746_62400__$1);
var G__62403 = c__4679__auto___62401;
var G__62404 = cljs.core.count(c__4679__auto___62401);
var G__62405 = (0);
seq__61746_62382 = G__62402;
chunk__61748_62383 = G__62403;
count__61749_62384 = G__62404;
i__61750_62385 = G__62405;
continue;
} else {
var child_62406 = cljs.core.first(seq__61746_62400__$1);
if(cljs.core.truth_(child_62406)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62406);


var G__62407 = cljs.core.next(seq__61746_62400__$1);
var G__62408 = null;
var G__62409 = (0);
var G__62410 = (0);
seq__61746_62382 = G__62407;
chunk__61748_62383 = G__62408;
count__61749_62384 = G__62409;
i__61750_62385 = G__62410;
continue;
} else {
var G__62411 = cljs.core.next(seq__61746_62400__$1);
var G__62412 = null;
var G__62413 = (0);
var G__62414 = (0);
seq__61746_62382 = G__62411;
chunk__61748_62383 = G__62412;
count__61749_62384 = G__62413;
i__61750_62385 = G__62414;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62381);
}


var G__62415 = seq__61681_62376;
var G__62416 = chunk__61682_62377;
var G__62417 = count__61683_62378;
var G__62418 = (i__61684_62379 + (1));
seq__61681_62376 = G__62415;
chunk__61682_62377 = G__62416;
count__61683_62378 = G__62417;
i__61684_62379 = G__62418;
continue;
} else {
var temp__5753__auto___62419 = cljs.core.seq(seq__61681_62376);
if(temp__5753__auto___62419){
var seq__61681_62424__$1 = temp__5753__auto___62419;
if(cljs.core.chunked_seq_QMARK_(seq__61681_62424__$1)){
var c__4679__auto___62425 = cljs.core.chunk_first(seq__61681_62424__$1);
var G__62426 = cljs.core.chunk_rest(seq__61681_62424__$1);
var G__62427 = c__4679__auto___62425;
var G__62428 = cljs.core.count(c__4679__auto___62425);
var G__62429 = (0);
seq__61681_62376 = G__62426;
chunk__61682_62377 = G__62427;
count__61683_62378 = G__62428;
i__61684_62379 = G__62429;
continue;
} else {
var child_struct_62430 = cljs.core.first(seq__61681_62424__$1);
var children_62431 = shadow.dom.dom_node(child_struct_62430);
if(cljs.core.seq_QMARK_(children_62431)){
var seq__61767_62432 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_62431));
var chunk__61769_62433 = null;
var count__61770_62434 = (0);
var i__61771_62435 = (0);
while(true){
if((i__61771_62435 < count__61770_62434)){
var child_62436 = chunk__61769_62433.cljs$core$IIndexed$_nth$arity$2(null,i__61771_62435);
if(cljs.core.truth_(child_62436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62436);


var G__62437 = seq__61767_62432;
var G__62438 = chunk__61769_62433;
var G__62439 = count__61770_62434;
var G__62440 = (i__61771_62435 + (1));
seq__61767_62432 = G__62437;
chunk__61769_62433 = G__62438;
count__61770_62434 = G__62439;
i__61771_62435 = G__62440;
continue;
} else {
var G__62441 = seq__61767_62432;
var G__62442 = chunk__61769_62433;
var G__62443 = count__61770_62434;
var G__62444 = (i__61771_62435 + (1));
seq__61767_62432 = G__62441;
chunk__61769_62433 = G__62442;
count__61770_62434 = G__62443;
i__61771_62435 = G__62444;
continue;
}
} else {
var temp__5753__auto___62445__$1 = cljs.core.seq(seq__61767_62432);
if(temp__5753__auto___62445__$1){
var seq__61767_62446__$1 = temp__5753__auto___62445__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61767_62446__$1)){
var c__4679__auto___62450 = cljs.core.chunk_first(seq__61767_62446__$1);
var G__62452 = cljs.core.chunk_rest(seq__61767_62446__$1);
var G__62453 = c__4679__auto___62450;
var G__62454 = cljs.core.count(c__4679__auto___62450);
var G__62455 = (0);
seq__61767_62432 = G__62452;
chunk__61769_62433 = G__62453;
count__61770_62434 = G__62454;
i__61771_62435 = G__62455;
continue;
} else {
var child_62456 = cljs.core.first(seq__61767_62446__$1);
if(cljs.core.truth_(child_62456)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_62456);


var G__62457 = cljs.core.next(seq__61767_62446__$1);
var G__62458 = null;
var G__62459 = (0);
var G__62460 = (0);
seq__61767_62432 = G__62457;
chunk__61769_62433 = G__62458;
count__61770_62434 = G__62459;
i__61771_62435 = G__62460;
continue;
} else {
var G__62461 = cljs.core.next(seq__61767_62446__$1);
var G__62462 = null;
var G__62463 = (0);
var G__62464 = (0);
seq__61767_62432 = G__62461;
chunk__61769_62433 = G__62462;
count__61770_62434 = G__62463;
i__61771_62435 = G__62464;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_62431);
}


var G__62465 = cljs.core.next(seq__61681_62424__$1);
var G__62466 = null;
var G__62467 = (0);
var G__62468 = (0);
seq__61681_62376 = G__62465;
chunk__61682_62377 = G__62466;
count__61683_62378 = G__62467;
i__61684_62379 = G__62468;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61822 = cljs.core.seq(node);
var chunk__61823 = null;
var count__61824 = (0);
var i__61825 = (0);
while(true){
if((i__61825 < count__61824)){
var n = chunk__61823.cljs$core$IIndexed$_nth$arity$2(null,i__61825);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62475 = seq__61822;
var G__62476 = chunk__61823;
var G__62477 = count__61824;
var G__62478 = (i__61825 + (1));
seq__61822 = G__62475;
chunk__61823 = G__62476;
count__61824 = G__62477;
i__61825 = G__62478;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61822);
if(temp__5753__auto__){
var seq__61822__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61822__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61822__$1);
var G__62479 = cljs.core.chunk_rest(seq__61822__$1);
var G__62480 = c__4679__auto__;
var G__62481 = cljs.core.count(c__4679__auto__);
var G__62482 = (0);
seq__61822 = G__62479;
chunk__61823 = G__62480;
count__61824 = G__62481;
i__61825 = G__62482;
continue;
} else {
var n = cljs.core.first(seq__61822__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__62483 = cljs.core.next(seq__61822__$1);
var G__62484 = null;
var G__62485 = (0);
var G__62486 = (0);
seq__61822 = G__62483;
chunk__61823 = G__62484;
count__61824 = G__62485;
i__61825 = G__62486;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61840 = arguments.length;
switch (G__61840) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61850 = arguments.length;
switch (G__61850) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61871 = arguments.length;
switch (G__61871) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62491 = arguments.length;
var i__4865__auto___62492 = (0);
while(true){
if((i__4865__auto___62492 < len__4864__auto___62491)){
args__4870__auto__.push((arguments[i__4865__auto___62492]));

var G__62493 = (i__4865__auto___62492 + (1));
i__4865__auto___62492 = G__62493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61889_62494 = cljs.core.seq(nodes);
var chunk__61890_62495 = null;
var count__61891_62496 = (0);
var i__61892_62497 = (0);
while(true){
if((i__61892_62497 < count__61891_62496)){
var node_62498 = chunk__61890_62495.cljs$core$IIndexed$_nth$arity$2(null,i__61892_62497);
fragment.appendChild(shadow.dom._to_dom(node_62498));


var G__62499 = seq__61889_62494;
var G__62500 = chunk__61890_62495;
var G__62501 = count__61891_62496;
var G__62502 = (i__61892_62497 + (1));
seq__61889_62494 = G__62499;
chunk__61890_62495 = G__62500;
count__61891_62496 = G__62501;
i__61892_62497 = G__62502;
continue;
} else {
var temp__5753__auto___62503 = cljs.core.seq(seq__61889_62494);
if(temp__5753__auto___62503){
var seq__61889_62504__$1 = temp__5753__auto___62503;
if(cljs.core.chunked_seq_QMARK_(seq__61889_62504__$1)){
var c__4679__auto___62505 = cljs.core.chunk_first(seq__61889_62504__$1);
var G__62506 = cljs.core.chunk_rest(seq__61889_62504__$1);
var G__62507 = c__4679__auto___62505;
var G__62508 = cljs.core.count(c__4679__auto___62505);
var G__62509 = (0);
seq__61889_62494 = G__62506;
chunk__61890_62495 = G__62507;
count__61891_62496 = G__62508;
i__61892_62497 = G__62509;
continue;
} else {
var node_62510 = cljs.core.first(seq__61889_62504__$1);
fragment.appendChild(shadow.dom._to_dom(node_62510));


var G__62511 = cljs.core.next(seq__61889_62504__$1);
var G__62512 = null;
var G__62513 = (0);
var G__62514 = (0);
seq__61889_62494 = G__62511;
chunk__61890_62495 = G__62512;
count__61891_62496 = G__62513;
i__61892_62497 = G__62514;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61886){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61886));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61908_62516 = cljs.core.seq(scripts);
var chunk__61910_62517 = null;
var count__61911_62518 = (0);
var i__61912_62519 = (0);
while(true){
if((i__61912_62519 < count__61911_62518)){
var vec__61936_62521 = chunk__61910_62517.cljs$core$IIndexed$_nth$arity$2(null,i__61912_62519);
var script_tag_62522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61936_62521,(0),null);
var script_body_62523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61936_62521,(1),null);
eval(script_body_62523);


var G__62525 = seq__61908_62516;
var G__62526 = chunk__61910_62517;
var G__62527 = count__61911_62518;
var G__62528 = (i__61912_62519 + (1));
seq__61908_62516 = G__62525;
chunk__61910_62517 = G__62526;
count__61911_62518 = G__62527;
i__61912_62519 = G__62528;
continue;
} else {
var temp__5753__auto___62530 = cljs.core.seq(seq__61908_62516);
if(temp__5753__auto___62530){
var seq__61908_62531__$1 = temp__5753__auto___62530;
if(cljs.core.chunked_seq_QMARK_(seq__61908_62531__$1)){
var c__4679__auto___62532 = cljs.core.chunk_first(seq__61908_62531__$1);
var G__62533 = cljs.core.chunk_rest(seq__61908_62531__$1);
var G__62534 = c__4679__auto___62532;
var G__62535 = cljs.core.count(c__4679__auto___62532);
var G__62536 = (0);
seq__61908_62516 = G__62533;
chunk__61910_62517 = G__62534;
count__61911_62518 = G__62535;
i__61912_62519 = G__62536;
continue;
} else {
var vec__61940_62537 = cljs.core.first(seq__61908_62531__$1);
var script_tag_62538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61940_62537,(0),null);
var script_body_62539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61940_62537,(1),null);
eval(script_body_62539);


var G__62540 = cljs.core.next(seq__61908_62531__$1);
var G__62541 = null;
var G__62542 = (0);
var G__62543 = (0);
seq__61908_62516 = G__62540;
chunk__61910_62517 = G__62541;
count__61911_62518 = G__62542;
i__61912_62519 = G__62543;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61950){
var vec__61951 = p__61950;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61951,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61968 = arguments.length;
switch (G__61968) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61984 = cljs.core.seq(style_keys);
var chunk__61985 = null;
var count__61986 = (0);
var i__61987 = (0);
while(true){
if((i__61987 < count__61986)){
var it = chunk__61985.cljs$core$IIndexed$_nth$arity$2(null,i__61987);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62554 = seq__61984;
var G__62555 = chunk__61985;
var G__62556 = count__61986;
var G__62557 = (i__61987 + (1));
seq__61984 = G__62554;
chunk__61985 = G__62555;
count__61986 = G__62556;
i__61987 = G__62557;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61984);
if(temp__5753__auto__){
var seq__61984__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61984__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__61984__$1);
var G__62559 = cljs.core.chunk_rest(seq__61984__$1);
var G__62560 = c__4679__auto__;
var G__62561 = cljs.core.count(c__4679__auto__);
var G__62562 = (0);
seq__61984 = G__62559;
chunk__61985 = G__62560;
count__61986 = G__62561;
i__61987 = G__62562;
continue;
} else {
var it = cljs.core.first(seq__61984__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62565 = cljs.core.next(seq__61984__$1);
var G__62566 = null;
var G__62567 = (0);
var G__62568 = (0);
seq__61984 = G__62565;
chunk__61985 = G__62566;
count__61986 = G__62567;
i__61987 = G__62568;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k61995,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__62010 = k61995;
var G__62010__$1 = (((G__62010 instanceof cljs.core.Keyword))?G__62010.fqn:null);
switch (G__62010__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61995,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__62019){
var vec__62020 = p__62019;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62020,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62020,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61994){
var self__ = this;
var G__61994__$1 = this;
return (new cljs.core.RecordIter((0),G__61994__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61996,other61997){
var self__ = this;
var this61996__$1 = this;
return (((!((other61997 == null)))) && ((((this61996__$1.constructor === other61997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61996__$1.x,other61997.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61996__$1.y,other61997.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61996__$1.__extmap,other61997.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k61995){
var self__ = this;
var this__4509__auto____$1 = this;
var G__62045 = k61995;
var G__62045__$1 = (((G__62045 instanceof cljs.core.Keyword))?G__62045.fqn:null);
switch (G__62045__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61995);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__61994){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__62046 = cljs.core.keyword_identical_QMARK_;
var expr__62047 = k__4511__auto__;
if(cljs.core.truth_((pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__62047) : pred__62046.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62047)))){
return (new shadow.dom.Coordinate(G__61994,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62046.cljs$core$IFn$_invoke$arity$2 ? pred__62046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__62047) : pred__62046.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62047)))){
return (new shadow.dom.Coordinate(self__.x,G__61994,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__61994),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__61994){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61994,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__62001){
var extmap__4542__auto__ = (function (){var G__62063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62001,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__62001)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62063);
} else {
return G__62063;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62001),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62001),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k62074,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__62084 = k62074;
var G__62084__$1 = (((G__62084 instanceof cljs.core.Keyword))?G__62084.fqn:null);
switch (G__62084__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62074,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__62089){
var vec__62090 = p__62089;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62090,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62073){
var self__ = this;
var G__62073__$1 = this;
return (new cljs.core.RecordIter((0),G__62073__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62076,other62077){
var self__ = this;
var this62076__$1 = this;
return (((!((other62077 == null)))) && ((((this62076__$1.constructor === other62077.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62076__$1.w,other62077.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62076__$1.h,other62077.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62076__$1.__extmap,other62077.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k62074){
var self__ = this;
var this__4509__auto____$1 = this;
var G__62100 = k62074;
var G__62100__$1 = (((G__62100 instanceof cljs.core.Keyword))?G__62100.fqn:null);
switch (G__62100__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k62074);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__62073){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__62102 = cljs.core.keyword_identical_QMARK_;
var expr__62103 = k__4511__auto__;
if(cljs.core.truth_((pred__62102.cljs$core$IFn$_invoke$arity$2 ? pred__62102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__62103) : pred__62102.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__62103)))){
return (new shadow.dom.Size(G__62073,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62102.cljs$core$IFn$_invoke$arity$2 ? pred__62102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__62103) : pred__62102.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__62103)))){
return (new shadow.dom.Size(self__.w,G__62073,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__62073),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__62073){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__62073,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__62080){
var extmap__4542__auto__ = (function (){var G__62114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62080,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__62080)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62114);
} else {
return G__62114;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__62080),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__62080),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__62800 = (i + (1));
var G__62801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62800;
ret = G__62801;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62138){
var vec__62139 = p__62138;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62139,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__62145 = arguments.length;
switch (G__62145) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62825 = ps;
var G__62826 = (i + (1));
el__$1 = G__62825;
i = G__62826;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__62184 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62184,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62184,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62184,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__62189_62837 = cljs.core.seq(props);
var chunk__62190_62838 = null;
var count__62191_62839 = (0);
var i__62192_62840 = (0);
while(true){
if((i__62192_62840 < count__62191_62839)){
var vec__62206_62841 = chunk__62190_62838.cljs$core$IIndexed$_nth$arity$2(null,i__62192_62840);
var k_62842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62206_62841,(0),null);
var v_62843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62206_62841,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_62842);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62842),v_62843);


var G__62844 = seq__62189_62837;
var G__62845 = chunk__62190_62838;
var G__62846 = count__62191_62839;
var G__62847 = (i__62192_62840 + (1));
seq__62189_62837 = G__62844;
chunk__62190_62838 = G__62845;
count__62191_62839 = G__62846;
i__62192_62840 = G__62847;
continue;
} else {
var temp__5753__auto___62850 = cljs.core.seq(seq__62189_62837);
if(temp__5753__auto___62850){
var seq__62189_62851__$1 = temp__5753__auto___62850;
if(cljs.core.chunked_seq_QMARK_(seq__62189_62851__$1)){
var c__4679__auto___62853 = cljs.core.chunk_first(seq__62189_62851__$1);
var G__62854 = cljs.core.chunk_rest(seq__62189_62851__$1);
var G__62855 = c__4679__auto___62853;
var G__62856 = cljs.core.count(c__4679__auto___62853);
var G__62857 = (0);
seq__62189_62837 = G__62854;
chunk__62190_62838 = G__62855;
count__62191_62839 = G__62856;
i__62192_62840 = G__62857;
continue;
} else {
var vec__62213_62858 = cljs.core.first(seq__62189_62851__$1);
var k_62859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213_62858,(0),null);
var v_62860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213_62858,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_62859);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62859),v_62860);


var G__62861 = cljs.core.next(seq__62189_62851__$1);
var G__62862 = null;
var G__62863 = (0);
var G__62864 = (0);
seq__62189_62837 = G__62861;
chunk__62190_62838 = G__62862;
count__62191_62839 = G__62863;
i__62192_62840 = G__62864;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__62223 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62223,(1),null);
var seq__62226_62866 = cljs.core.seq(node_children);
var chunk__62229_62867 = null;
var count__62230_62868 = (0);
var i__62231_62869 = (0);
while(true){
if((i__62231_62869 < count__62230_62868)){
var child_struct_62873 = chunk__62229_62867.cljs$core$IIndexed$_nth$arity$2(null,i__62231_62869);
if((!((child_struct_62873 == null)))){
if(typeof child_struct_62873 === 'string'){
var text_62875 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62875),child_struct_62873].join(''));
} else {
var children_62876 = shadow.dom.svg_node(child_struct_62873);
if(cljs.core.seq_QMARK_(children_62876)){
var seq__62260_62877 = cljs.core.seq(children_62876);
var chunk__62262_62878 = null;
var count__62263_62879 = (0);
var i__62264_62880 = (0);
while(true){
if((i__62264_62880 < count__62263_62879)){
var child_62881 = chunk__62262_62878.cljs$core$IIndexed$_nth$arity$2(null,i__62264_62880);
if(cljs.core.truth_(child_62881)){
node.appendChild(child_62881);


var G__62882 = seq__62260_62877;
var G__62883 = chunk__62262_62878;
var G__62884 = count__62263_62879;
var G__62885 = (i__62264_62880 + (1));
seq__62260_62877 = G__62882;
chunk__62262_62878 = G__62883;
count__62263_62879 = G__62884;
i__62264_62880 = G__62885;
continue;
} else {
var G__62886 = seq__62260_62877;
var G__62887 = chunk__62262_62878;
var G__62888 = count__62263_62879;
var G__62889 = (i__62264_62880 + (1));
seq__62260_62877 = G__62886;
chunk__62262_62878 = G__62887;
count__62263_62879 = G__62888;
i__62264_62880 = G__62889;
continue;
}
} else {
var temp__5753__auto___62890 = cljs.core.seq(seq__62260_62877);
if(temp__5753__auto___62890){
var seq__62260_62891__$1 = temp__5753__auto___62890;
if(cljs.core.chunked_seq_QMARK_(seq__62260_62891__$1)){
var c__4679__auto___62892 = cljs.core.chunk_first(seq__62260_62891__$1);
var G__62893 = cljs.core.chunk_rest(seq__62260_62891__$1);
var G__62894 = c__4679__auto___62892;
var G__62895 = cljs.core.count(c__4679__auto___62892);
var G__62896 = (0);
seq__62260_62877 = G__62893;
chunk__62262_62878 = G__62894;
count__62263_62879 = G__62895;
i__62264_62880 = G__62896;
continue;
} else {
var child_62897 = cljs.core.first(seq__62260_62891__$1);
if(cljs.core.truth_(child_62897)){
node.appendChild(child_62897);


var G__62898 = cljs.core.next(seq__62260_62891__$1);
var G__62899 = null;
var G__62900 = (0);
var G__62901 = (0);
seq__62260_62877 = G__62898;
chunk__62262_62878 = G__62899;
count__62263_62879 = G__62900;
i__62264_62880 = G__62901;
continue;
} else {
var G__62902 = cljs.core.next(seq__62260_62891__$1);
var G__62903 = null;
var G__62904 = (0);
var G__62905 = (0);
seq__62260_62877 = G__62902;
chunk__62262_62878 = G__62903;
count__62263_62879 = G__62904;
i__62264_62880 = G__62905;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62876);
}
}


var G__62906 = seq__62226_62866;
var G__62907 = chunk__62229_62867;
var G__62908 = count__62230_62868;
var G__62909 = (i__62231_62869 + (1));
seq__62226_62866 = G__62906;
chunk__62229_62867 = G__62907;
count__62230_62868 = G__62908;
i__62231_62869 = G__62909;
continue;
} else {
var G__62910 = seq__62226_62866;
var G__62911 = chunk__62229_62867;
var G__62912 = count__62230_62868;
var G__62913 = (i__62231_62869 + (1));
seq__62226_62866 = G__62910;
chunk__62229_62867 = G__62911;
count__62230_62868 = G__62912;
i__62231_62869 = G__62913;
continue;
}
} else {
var temp__5753__auto___62914 = cljs.core.seq(seq__62226_62866);
if(temp__5753__auto___62914){
var seq__62226_62915__$1 = temp__5753__auto___62914;
if(cljs.core.chunked_seq_QMARK_(seq__62226_62915__$1)){
var c__4679__auto___62916 = cljs.core.chunk_first(seq__62226_62915__$1);
var G__62917 = cljs.core.chunk_rest(seq__62226_62915__$1);
var G__62918 = c__4679__auto___62916;
var G__62919 = cljs.core.count(c__4679__auto___62916);
var G__62920 = (0);
seq__62226_62866 = G__62917;
chunk__62229_62867 = G__62918;
count__62230_62868 = G__62919;
i__62231_62869 = G__62920;
continue;
} else {
var child_struct_62923 = cljs.core.first(seq__62226_62915__$1);
if((!((child_struct_62923 == null)))){
if(typeof child_struct_62923 === 'string'){
var text_62925 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62925),child_struct_62923].join(''));
} else {
var children_62926 = shadow.dom.svg_node(child_struct_62923);
if(cljs.core.seq_QMARK_(children_62926)){
var seq__62267_62927 = cljs.core.seq(children_62926);
var chunk__62269_62928 = null;
var count__62270_62929 = (0);
var i__62271_62930 = (0);
while(true){
if((i__62271_62930 < count__62270_62929)){
var child_62932 = chunk__62269_62928.cljs$core$IIndexed$_nth$arity$2(null,i__62271_62930);
if(cljs.core.truth_(child_62932)){
node.appendChild(child_62932);


var G__62933 = seq__62267_62927;
var G__62934 = chunk__62269_62928;
var G__62935 = count__62270_62929;
var G__62936 = (i__62271_62930 + (1));
seq__62267_62927 = G__62933;
chunk__62269_62928 = G__62934;
count__62270_62929 = G__62935;
i__62271_62930 = G__62936;
continue;
} else {
var G__62937 = seq__62267_62927;
var G__62938 = chunk__62269_62928;
var G__62939 = count__62270_62929;
var G__62940 = (i__62271_62930 + (1));
seq__62267_62927 = G__62937;
chunk__62269_62928 = G__62938;
count__62270_62929 = G__62939;
i__62271_62930 = G__62940;
continue;
}
} else {
var temp__5753__auto___62941__$1 = cljs.core.seq(seq__62267_62927);
if(temp__5753__auto___62941__$1){
var seq__62267_62942__$1 = temp__5753__auto___62941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62267_62942__$1)){
var c__4679__auto___62943 = cljs.core.chunk_first(seq__62267_62942__$1);
var G__62944 = cljs.core.chunk_rest(seq__62267_62942__$1);
var G__62945 = c__4679__auto___62943;
var G__62946 = cljs.core.count(c__4679__auto___62943);
var G__62947 = (0);
seq__62267_62927 = G__62944;
chunk__62269_62928 = G__62945;
count__62270_62929 = G__62946;
i__62271_62930 = G__62947;
continue;
} else {
var child_62949 = cljs.core.first(seq__62267_62942__$1);
if(cljs.core.truth_(child_62949)){
node.appendChild(child_62949);


var G__62950 = cljs.core.next(seq__62267_62942__$1);
var G__62951 = null;
var G__62952 = (0);
var G__62953 = (0);
seq__62267_62927 = G__62950;
chunk__62269_62928 = G__62951;
count__62270_62929 = G__62952;
i__62271_62930 = G__62953;
continue;
} else {
var G__62954 = cljs.core.next(seq__62267_62942__$1);
var G__62955 = null;
var G__62956 = (0);
var G__62957 = (0);
seq__62267_62927 = G__62954;
chunk__62269_62928 = G__62955;
count__62270_62929 = G__62956;
i__62271_62930 = G__62957;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62926);
}
}


var G__62958 = cljs.core.next(seq__62226_62915__$1);
var G__62959 = null;
var G__62960 = (0);
var G__62961 = (0);
seq__62226_62866 = G__62958;
chunk__62229_62867 = G__62959;
count__62230_62868 = G__62960;
i__62231_62869 = G__62961;
continue;
} else {
var G__62963 = cljs.core.next(seq__62226_62915__$1);
var G__62964 = null;
var G__62965 = (0);
var G__62966 = (0);
seq__62226_62866 = G__62963;
chunk__62229_62867 = G__62964;
count__62230_62868 = G__62965;
i__62231_62869 = G__62966;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62968 = arguments.length;
var i__4865__auto___62969 = (0);
while(true){
if((i__4865__auto___62969 < len__4864__auto___62968)){
args__4870__auto__.push((arguments[i__4865__auto___62969]));

var G__62970 = (i__4865__auto___62969 + (1));
i__4865__auto___62969 = G__62970;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62276){
var G__62277 = cljs.core.first(seq62276);
var seq62276__$1 = cljs.core.next(seq62276);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62277,seq62276__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62280 = arguments.length;
switch (G__62280) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__59061__auto___62977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59063__auto__ = (function (){var switch__58867__auto__ = (function (state_62287){
var state_val_62288 = (state_62287[(1)]);
if((state_val_62288 === (1))){
var state_62287__$1 = state_62287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62287__$1,(2),once_or_cleanup);
} else {
if((state_val_62288 === (2))){
var inst_62284 = (state_62287[(2)]);
var inst_62285 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62287__$1 = (function (){var statearr_62289 = state_62287;
(statearr_62289[(7)] = inst_62284);

return statearr_62289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62287__$1,inst_62285);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58868__auto__ = null;
var shadow$dom$state_machine__58868__auto____0 = (function (){
var statearr_62290 = [null,null,null,null,null,null,null,null];
(statearr_62290[(0)] = shadow$dom$state_machine__58868__auto__);

(statearr_62290[(1)] = (1));

return statearr_62290;
});
var shadow$dom$state_machine__58868__auto____1 = (function (state_62287){
while(true){
var ret_value__58869__auto__ = (function (){try{while(true){
var result__58870__auto__ = switch__58867__auto__(state_62287);
if(cljs.core.keyword_identical_QMARK_(result__58870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58870__auto__;
}
break;
}
}catch (e62291){var ex__58871__auto__ = e62291;
var statearr_62292_62988 = state_62287;
(statearr_62292_62988[(2)] = ex__58871__auto__);


if(cljs.core.seq((state_62287[(4)]))){
var statearr_62293_62989 = state_62287;
(statearr_62293_62989[(1)] = cljs.core.first((state_62287[(4)])));

} else {
throw ex__58871__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62992 = state_62287;
state_62287 = G__62992;
continue;
} else {
return ret_value__58869__auto__;
}
break;
}
});
shadow$dom$state_machine__58868__auto__ = function(state_62287){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58868__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58868__auto____1.call(this,state_62287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58868__auto____0;
shadow$dom$state_machine__58868__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58868__auto____1;
return shadow$dom$state_machine__58868__auto__;
})()
})();
var state__59064__auto__ = (function (){var statearr_62294 = f__59063__auto__();
(statearr_62294[(6)] = c__59061__auto___62977);

return statearr_62294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59064__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
