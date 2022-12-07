import "./cljs_env.js";
goog.provide('nextjournal.clerk.render');
goog.scope(function(){
  nextjournal.clerk.render.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
reagent.core.set_default_compiler_BANG_(reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null)));




nextjournal.clerk.render.nbsp = goog.string.unescapeEntities("&nbsp;");
nextjournal.clerk.render.reagent_atom_QMARK_ = (function nextjournal$clerk$render$reagent_atom_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,x);
}
});
nextjournal.clerk.render.toc_items = (function nextjournal$clerk$render$toc_items(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__77878){
var map__77879 = p__77878;
var map__77879__$1 = cljs.core.__destructure_map(map__77879);
var item = map__77879__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77879__$1,new cljs.core.Keyword(null,"content","content",15833224));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_(content)){
var title = nextjournal.markdown.transform.__GT_text(item);
return cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"path","path",-188191168),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_slug(title))].join(''),new cljs.core.Keyword(null,"items","items",1031954938),(nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(children) : nextjournal.clerk.render.toc_items.call(null,children))], null)));
} else {
var G__77880 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item);
return (nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clerk.render.toc_items.cljs$core$IFn$_invoke$arity$1(G__77880) : nextjournal.clerk.render.toc_items.call(null,G__77880));
}
}),cljs.core.PersistentVector.EMPTY,items);
});
nextjournal.clerk.render.dark_mode_toggle = (function nextjournal$clerk$render$dark_mode_toggle(_BANG_state){
var map__77890 = cljs.core.deref(_BANG_state);
var map__77890__$1 = cljs.core.__destructure_map(map__77890);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77890__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
var spring = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spring","spring",787848305),new cljs.core.Keyword(null,"stiffness","stiffness",-795208962),(200),new cljs.core.Keyword(null,"damping","damping",1054389681),(10)], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.dark-mode-toggle","div.relative.dark-mode-toggle",-1696831098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer","button.text-slate-400.hover:text-slate-600.dark:hover:text-white.cursor-pointer",-1717879008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not(dark_mode_QMARK_));
})], null),(cljs.core.truth_(dark_mode_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 50 50",new cljs.core.Keyword(null,"key","key",-1516042587),"moon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),"M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),0.6,new cljs.core.Keyword(null,"rotate","rotate",152705015),(90)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.svg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"sun",new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 md:w-4 md:h-4",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.circle,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cx","cx",1272694324),"11.9998",new cljs.core.Keyword(null,"cy","cy",755331060),"11.9998",new cljs.core.Keyword(null,"r","r",-471384190),"5.75375",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),1.5], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scale","scale",-230427353),(1),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.ui.components.motion.g,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),"initial",new cljs.core.Keyword(null,"animate","animate",1850194573),"animate",new cljs.core.Keyword(null,"variants","variants",-176391100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(45)], null),new cljs.core.Keyword(null,"animate","animate",1850194573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0),new cljs.core.Keyword(null,"transition","transition",765692007),spring], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.08982",new cljs.core.Keyword(null,"cy","cy",755331060),"6.85502",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 3.08982 6.85502)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"3.0903",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 3.0903 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"22.2881",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"17.1436",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-60 20.9101 17.1436)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"20.9101",new cljs.core.Keyword(null,"cy","cy",755331060),"6.8555",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-120 20.9101 6.8555)",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"1.71143",new cljs.core.Keyword(null,"r","r",-471384190),"1.71143",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null)], null)], null)], null))], null)], null);
});
nextjournal.clerk.render.localstorage_set_BANG_ = (function nextjournal$clerk$render$localstorage_set_BANG_(key,val){
if((typeof window !== 'undefined')){
return window.localStorage.setItem(key,val);
} else {
return null;
}
});
nextjournal.clerk.render.localstorage_get = (function nextjournal$clerk$render$localstorage_get(key){
if((typeof window !== 'undefined')){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(window.localStorage.getItem(key));
} else {
return null;
}
});
nextjournal.clerk.render.local_storage_dark_mode_key = "clerk-darkmode";
nextjournal.clerk.render.set_dark_mode_BANG_ = (function nextjournal$clerk$render$set_dark_mode_BANG_(dark_mode_QMARK_){
var class_list_78221 = document.querySelector("html").classList;
if(cljs.core.truth_(dark_mode_QMARK_)){
class_list_78221.add("dark");
} else {
class_list_78221.remove("dark");
}

return nextjournal.clerk.render.localstorage_set_BANG_(nextjournal.clerk.render.local_storage_dark_mode_key,dark_mode_QMARK_);
});
nextjournal.clerk.render.setup_dark_mode_BANG_ = (function nextjournal$clerk$render$setup_dark_mode_BANG_(_BANG_state){
var map__77899 = cljs.core.deref(_BANG_state);
var map__77899__$1 = cljs.core.__destructure_map(map__77899);
var dark_mode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77899__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
cljs.core.add_watch(_BANG_state,new cljs.core.Keyword("nextjournal.clerk.render","dark-mode","nextjournal.clerk.render/dark-mode",-360205762),(function (_,___$1,old,p__77900){
var map__77904 = p__77900;
var map__77904__$1 = cljs.core.__destructure_map(map__77904);
var dark_mode_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77904__$1,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096).cljs$core$IFn$_invoke$arity$1(old),dark_mode_QMARK___$1)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK___$1);
} else {
return null;
}
}));

if(cljs.core.truth_(dark_mode_QMARK_)){
return nextjournal.clerk.render.set_dark_mode_BANG_(dark_mode_QMARK_);
} else {
return null;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_eval_counter !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_eval_counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
nextjournal.clerk.render.render_notebook = (function nextjournal$clerk$render$render_notebook(p__77913){
var map__77915 = p__77913;
var map__77915__$1 = cljs.core.__destructure_map(map__77915);
var _doc = map__77915__$1;
var xs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var bundle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"bundle?","bundle?",-35631730));
var css_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"css-class","css-class",-919455334));
var toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"toc","toc",2050089251));
var toc_visibility = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77915__$1,new cljs.core.Keyword(null,"toc-visibility","toc-visibility",-1781055352));
var with_let77918 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77918","with-let77918",962881382));
var temp__5757__auto___78223 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___78223 == null)){
} else {
var c__64227__auto___78224 = temp__5757__auto___78223;
if((with_let77918.generation === c__64227__auto___78224.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77918.generation = c__64227__auto___78224.ratomGeneration);
}

var init77919 = (with_let77918.length === (0));
var local_storage_key = ((((init77919) || (cljs.core.not(with_let77918.hasOwnProperty((0))))))?(with_let77918[(0)] = "clerk-navbar"):(with_let77918[(0)]));
var _BANG_state = ((((init77919) || (cljs.core.not(with_let77918.hasOwnProperty((1))))))?(with_let77918[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"toc","toc",2050089251),new cljs.core.Keyword(null,"md-toc","md-toc",401610567),new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),new cljs.core.Keyword(null,"local-storage-key","local-storage-key",-1983909558),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"mobile-width","mobile-width",-48320880),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"set-hash?","set-hash?",1284779132)],[nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),toc,nextjournal.clerk.render.localstorage_get(nextjournal.clerk.render.local_storage_dark_mode_key),local_storage_key,(220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slide-over","slide-over",1619183007),"bg-slate-100 dark:bg-gray-800 font-sans border-r dark:border-slate-900"], null),(300),(function (){var temp__5755__auto__ = nextjournal.clerk.render.localstorage_get(local_storage_key);
if((temp__5755__auto__ == null)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility);
} else {
var stored_open_QMARK_ = temp__5755__auto__;
return stored_open_QMARK_;
}
})(),cljs.core.not(bundle_QMARK_)]))):(with_let77918[(1)]));
var root_ref_fn = ((((init77919) || (cljs.core.not(with_let77918.hasOwnProperty((2))))))?(with_let77918[(2)] = (function (p1__77908_SHARP_){
if(cljs.core.truth_(p1__77908_SHARP_)){
return nextjournal.clerk.render.setup_dark_mode_BANG_(_BANG_state);
} else {
return null;
}
})):(with_let77918[(2)]));
var ref_fn = ((((init77919) || (cljs.core.not(with_let77918.hasOwnProperty((3))))))?(with_let77918[(3)] = (function (p1__77909_SHARP_){
if(cljs.core.truth_(p1__77909_SHARP_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-el","scroll-el",2005954473),p1__77909_SHARP_);
} else {
return null;
}
})):(with_let77918[(3)]));
var res77922 = (function (){var map__77933 = cljs.core.deref(_BANG_state);
var map__77933__$1 = cljs.core.__destructure_map(map__77933);
var md_toc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77933__$1,new cljs.core.Keyword(null,"md-toc","md-toc",401610567));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md_toc,toc)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"toc","toc",2050089251),nextjournal.clerk.render.toc_items(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(toc)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"md-toc","md-toc",401610567),toc,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"collapsed","collapsed",-628494523),toc_visibility)], 0));
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),root_ref_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10","div.fixed.top-2.left-2.md:left-auto.md:right-2.z-10",-1924941252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.dark_mode_toggle,_BANG_state], null)], null),(cljs.core.truth_((function (){var and__4251__auto__ = toc;
if(cljs.core.truth_(and__4251__auto__)){
return toc_visibility;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.toggle_button,_BANG_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.icon.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uppercase.tracking-wider.ml-1.font-bold","span.uppercase.tracking-wider.ml-1.font-bold",184219074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[12px]"], null),"ToC"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"z-10 fixed right-2 top-2 md:right-auto md:left-3 md:top-3 text-slate-400 font-sans text-xs hover:underline cursor-pointer flex items-center bg-white dark:bg-gray-900 py-1 px-3 md:p-0 rounded-full md:rounded-none border md:border-0 border-slate-200 dark:border-gray-500 shadow md:shadow-none dark:text-slate-400 dark:hover:text-white"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.panel,_BANG_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.ui.components.navbar.navbar,_BANG_state], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-auto.h-screen.overflow-y-auto.scroll-container","div.flex-auto.h-screen.overflow-y-auto.scroll-container",-676818277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__4253__auto__ = css_class;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "flex flex-col items-center viewer-notebook flex-auto";
}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,x){
var map__77934 = nextjournal.clerk.viewer.__GT_viewer(x);
var map__77934__$1 = cljs.core.__destructure_map(map__77934);
var viewer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var viewer_css_class = nextjournal.clerk.viewer.css_class(x);
var inner_viewer_name = (function (){var G__77935 = x;
var G__77935__$1 = (((G__77935 == null))?null:nextjournal.clerk.viewer.__GT_value(G__77935));
var G__77935__$2 = (((G__77935__$1 == null))?null:nextjournal.clerk.viewer.__GT_viewer(G__77935__$1));
if((G__77935__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__77935__$2);
}
})();
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword("nextjournal","open-graph-image-capture","nextjournal/open-graph-image-capture",201173909).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(x)))?"open-graph-image-capture":null)], null),(cljs.core.truth_(viewer_css_class)?(function (){var G__77936 = viewer_css_class;
if(typeof viewer_css_class === 'string'){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__77936],null));
} else {
return G__77936;
}
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer",(cljs.core.truth_(viewer_name)?["viewer-",cljs.core.name(viewer_name)].join(''):null),(cljs.core.truth_(inner_viewer_name)?["viewer-",cljs.core.name(inner_viewer_name)].join(''):null),(function (){var G__77937 = (function (){var or__4253__auto__ = nextjournal.clerk.viewer.width(x);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__77938 = viewer_name;
var G__77938__$1 = (((G__77938 instanceof cljs.core.Keyword))?G__77938.fqn:null);
switch (G__77938__$1) {
case "code":
case "code-folded":
return new cljs.core.Keyword(null,"wide","wide",-151772487);

break;
default:
return new cljs.core.Keyword(null,"prose","prose",2099617726);

}
}
})();
var G__77937__$1 = (((G__77937 instanceof cljs.core.Keyword))?G__77937.fqn:null);
switch (G__77937__$1) {
case "wide":
return "w-full max-w-wide";

break;
case "full":
return "w-full";

break;
default:
return "w-full max-w-prose px-8";

}
})()], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,x], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nextjournal.clerk.render._BANG_eval_counter))].join('')], null));
}),xs))], null)], null)], null);
})();
return res77922;
});
nextjournal.clerk.render.opts__GT_query = (function nextjournal$clerk$render$opts__GT_query(opts){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,"="),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77939_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__77939_SHARP_,(0),cljs.core.name);
}),opts)));
});
nextjournal.clerk.render.render_unreadable_edn = (function nextjournal$clerk$render$render_unreadable_edn(edn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap.cmt-default","span.inspected-value.whitespace-nowrap.cmt-default",1768608485),edn], null);
});
nextjournal.clerk.render.error_badge = (function nextjournal$clerk$render$error_badge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78236 = arguments.length;
var i__4865__auto___78237 = (0);
while(true){
if((i__4865__auto___78237 < len__4864__auto___78236)){
args__4870__auto__.push((arguments[i__4865__auto___78237]));

var G__78238 = (i__4865__auto___78237 + (1));
i__4865__auto___78237 = G__78238;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nextjournal.clerk.render.error_badge.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex","div.bg-red-50.rounded-sm.text-xs.text-red-400.px-2.py-1.items-center.sans-serif.inline-flex",1436970942),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4.text-red-400","svg.h-4.w-4.text-red-400",-439155594),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ml-2.font-bold","div.ml-2.font-bold",1964855578)], null),content)], null);
}));

(nextjournal.clerk.render.error_badge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nextjournal.clerk.render.error_badge.cljs$lang$applyTo = (function (seq77940){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77940));
}));

nextjournal.clerk.render.error_view = (function nextjournal$clerk$render$error_view(error){
var _BANG_stack_expanded = nextjournal.clerk.render.hooks.use_state(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-300.not-prose",1278649712),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.font-mono.text-red-600.dark:text-red-300.font-bold","p.font-mono.text-red-600.dark:text-red-300.font-bold",-1938208543),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return error.message;
}
})()], null),(function (){var temp__5753__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return error.data;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.overflow-auto","div.mt-2.overflow-auto",452117243),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = (function (){try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),clojure.string.split_lines((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return error.stack;
}
})())));
}catch (e77950){if((e77950 instanceof Error)){
var _ = e77950;
return null;
} else {
throw e77950;

}
}})();
if(cljs.core.truth_(temp__5753__auto__)){
var stack = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2","pre.text-red-600.dark:text-red-300.w-full.overflow-auto.mt-2",113939522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] max-h-[155px]"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.underline.cursor-pointer","span.underline.cursor-pointer",2117382003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_stack_expanded,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(_BANG_stack_expanded))?"Hide":"Show")," Stacktrace (",cljs.core.count(stack)," lines)\n"], null),(cljs.core.truth_(cljs.core.deref(_BANG_stack_expanded))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",stack):null)], null);
} else {
return null;
}
})()], null);
});
nextjournal.clerk.render.ErrorBoundary = class nextjournal$clerk$render$ErrorBoundary extends module$node_modules$react$index.Component {
  constructor(G__77953) {
var props_78243 = G__77953;
super(props_78243);
var self__ = this;

(self__.state = ({"error": null, "hash": (function (){var obj77958 = props_78243;
if((!((obj77958 == null)))){
return (obj77958["hash"]);
} else {
return undefined;
}
})()}));

(self__.hash = (function (){var obj77959 = props_78243;
if((!((obj77959 == null)))){
return (obj77959["hash"]);
} else {
return undefined;
}
})());

(self__.handle_error = (function (error){
return (self__.state = ({"error": error}));
}));
  }
};
(nextjournal.clerk.render.ErrorBoundary.prototype.render = (function (props){
var self__ = this;
var this$ = this;
var map__77960 = this$;
var map__77960__$1 = (((((!((map__77960 == null))))?(((((map__77960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77960):map__77960);
var map__77961 = (function (){var obj77964 = map__77960__$1;
if((!((obj77964 == null)))){
return (obj77964["state"]);
} else {
return undefined;
}
})();
var map__77961__$1 = (((((!((map__77961 == null))))?(((((map__77961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77961):map__77961);
var error = (function (){var obj77966 = map__77961__$1;
if((!((obj77966 == null)))){
return (obj77966["error"]);
} else {
return undefined;
}
})();
var map__77962 = (function (){var obj77967 = map__77960__$1;
if((!((obj77967 == null)))){
return (obj77967["props"]);
} else {
return undefined;
}
})();
var map__77962__$1 = (((((!((map__77962 == null))))?(((((map__77962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77962):map__77962);
var children = (function (){var obj77969 = map__77962__$1;
if((!((obj77969 == null)))){
return (obj77969["children"]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(error)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.error_view,error], null));
} else {
return children;
}
}));
var obj77970_78251 = nextjournal.clerk.render.ErrorBoundary;
(obj77970_78251["getDerivedStateFromError"] = (function (error){
return ({"error": error});
}));

(obj77970_78251["getDerivedStateFromProps"] = (function (props,state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var obj77971 = props;
if((!((obj77971 == null)))){
return (obj77971["hash"]);
} else {
return undefined;
}
})(),(function (){var obj77976 = state;
if((!((obj77976 == null)))){
return (obj77976["hash"]);
} else {
return undefined;
}
})())){
return ({"hash": (function (){var obj77977 = props;
if((!((obj77977 == null)))){
return (obj77977["hash"]);
} else {
return undefined;
}
})(), "error": null});
} else {
return null;
}
}));

nextjournal.clerk.render.default_loading_view = "Loading...";
nextjournal.clerk.render.read_string = (function nextjournal$clerk$render$read_string(s){
return nextjournal.clerk.sci_env.read_string(s);
});
nextjournal.clerk.render.fetch_BANG_ = (function nextjournal$clerk$render$fetch_BANG_(p__77980,opts){
var map__77981 = p__77980;
var map__77981__$1 = cljs.core.__destructure_map(map__77981);
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77981__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
return fetch(["_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),((cljs.core.seq(opts))?["?",nextjournal.clerk.render.opts__GT_query(opts)].join(''):null)].join('')).then((function (p1__77978_SHARP_){
return p1__77978_SHARP_.text();
})).then((function (p1__77979_SHARP_){
try{return nextjournal.clerk.render.read_string(p1__77979_SHARP_);
}catch (e77983){if((e77983 instanceof Error)){
var e = e77983;
console.error(({"message": "sci read error", "blob-id": blob_id, "code-string": p1__77979_SHARP_, "error": e}));

return nextjournal.clerk.render.render_unreadable_edn(p1__77979_SHARP_);
} else {
throw e77983;

}
}}));
});
nextjournal.clerk.render.__GT_expanded_at = (function nextjournal$clerk$render$__GT_expanded_at(auto_expand_QMARK_,presented){
var G__77988 = presented;
var G__77988__$1 = (cljs.core.truth_(auto_expand_QMARK_)?nextjournal.clerk.viewer.assign_content_lengths(G__77988):G__77988);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.viewer.assign_expanded_at(G__77988__$1),new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009),cljs.core.PersistentArrayMap.EMPTY);

});
nextjournal.clerk.render.render_result = (function nextjournal$clerk$render$render_result(p__77992,p__77993){
var map__77994 = p__77992;
var map__77994__$1 = cljs.core.__destructure_map(map__77994);
var result = map__77994__$1;
var fetch_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77994__$1,new cljs.core.Keyword("nextjournal","fetch-opts","nextjournal/fetch-opts",61437218));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77994__$1,new cljs.core.Keyword("nextjournal","hash","nextjournal/hash",669857928));
var presented = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77994__$1,new cljs.core.Keyword("nextjournal","presented","nextjournal/presented",1933851841));
var map__77995 = p__77993;
var map__77995__$1 = cljs.core.__destructure_map(map__77995);
var opts = map__77995__$1;
var auto_expand_results_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77995__$1,new cljs.core.Keyword(null,"auto-expand-results?","auto-expand-results?",945863436));
var _BANG_desc = nextjournal.clerk.render.hooks.use_state_with_deps(presented,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hash], null));
var _BANG_expanded_at = nextjournal.clerk.render.hooks.use_state(((cljs.core.map_QMARK_(cljs.core.deref(_BANG_desc)))?nextjournal.clerk.render.__GT_expanded_at(auto_expand_results_QMARK_,cljs.core.deref(_BANG_desc)):null));
var fetch_fn = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(fetch_opts)?(function (opts__$1){
return nextjournal.clerk.render.fetch_BANG_(fetch_opts,opts__$1).then((function (more){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_desc,nextjournal.clerk.viewer.merge_presentations,more,opts__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (p1__77990_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clerk.render.__GT_expanded_at(auto_expand_results_QMARK_,cljs.core.deref(_BANG_desc)),p1__77990_SHARP_], 0));
}));
}));
}):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hash], null));
var on_key_down = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(event.altKey)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923),true);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}
}));
var on_key_up = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
}));
var ref_fn = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (p1__77991_SHARP_){
if(cljs.core.truth_(p1__77991_SHARP_)){
if((typeof document !== 'undefined')){
document.addEventListener("keydown",on_key_down);

return document.addEventListener("keyup",on_key_up);
} else {
return null;
}
} else {
if((typeof document !== 'undefined')){
document.removeEventListener("keydown",on_key_down);

return document.removeEventListener("up",on_key_up);
} else {
return null;
}
}
}));
if(cljs.core.truth_(cljs.core.deref(_BANG_desc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),fetch_fn], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),nextjournal.clerk.render.ErrorBoundary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-y-hidden","div.overflow-y-hidden",1952845994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),cljs.core.deref(_BANG_desc)], null)], null)], null)], null)], null);
} else {
return null;
}
});
nextjournal.clerk.render.toggle_expanded = (function nextjournal$clerk$render$toggle_expanded(_BANG_expanded_at,path,event){
event.preventDefault();

event.stopPropagation();

var map__78004 = cljs.core.deref(_BANG_expanded_at);
var map__78004__$1 = cljs.core.__destructure_map(map__78004);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78004__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78004__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var hover_path_count = cljs.core.count(hover_path);
var hover_path_expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
if(cljs.core.truth_((function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),hover_path_count);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_expanded_at,(function (expanded_at){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__78013){
var vec__78015 = p__78013;
var path__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78015,(0),null);
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78015,(1),null);
if(((cljs.core.coll_QMARK_(path__$1)) && (((cljs.core.vector_QMARK_(path__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path__$1),hover_path_count)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,cljs.core.not(hover_path_expanded_QMARK_));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,path__$1,expanded_QMARK_);
}
}),cljs.core.PersistentArrayMap.EMPTY,expanded_at);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.update,path,cljs.core.not);
}
});
nextjournal.clerk.render.expandable_QMARK_ = (function nextjournal$clerk$render$expandable_QMARK_(xs){
return ((1) < cljs.core.count(xs));
});
nextjournal.clerk.render.inspect_children = (function nextjournal$clerk$render$inspect_children(opts){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,x){
var G__78020 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),idx);
var G__78021 = x;
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(G__78020,G__78021) : nextjournal.clerk.render.inspect_presented.call(null,G__78020,G__78021));
}));
});
nextjournal.clerk.render.expand_style = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cursor-pointer","bg-indigo-50","hover:bg-indigo-100","border-b","border-gray-400","hover:border-gray-500","dark:bg-gray-900","dark:hover:bg-slate-700","dark:border-slate-600","dark:hover:border-slate-500"], null);
nextjournal.clerk.render.triangle = (function nextjournal$clerk$render$triangle(expanded_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"class","class",-2030961996),["w-[7px] h-[7px] fill-current inline-block transition-all mr-[1px] -mt-[2px] ",(cljs.core.truth_(expanded_QMARK_)?"rotate-180":"rotate-90")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),"5.9,88.2 50,11.8 94.1,88.2 "], null)], null)], null);
});
nextjournal.clerk.render.triangle_spacer = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-block w-[8px]"], null)], null);
nextjournal.clerk.render.expand_button = (function nextjournal$clerk$render$expand_button(_BANG_expanded_at,opening_paren,path){
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__78026 = cljs.core.deref(_BANG_expanded_at);
var map__78026__$1 = cljs.core.__destructure_map(map__78026);
var hover_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78026__$1,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
var prompt_multi_expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78026__$1,new cljs.core.Keyword(null,"prompt-multi-expand?","prompt-multi-expand?",1843593923));
var multi_expand_QMARK_ = (function (){var and__4251__auto__ = hover_path;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = prompt_multi_expand_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.count(hover_path));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer","span.group.hover:bg-indigo-100.rounded-sm.hover:shadow.cursor-pointer",-1703697853),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"bg-indigo-100 shadow ":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render.toggle_expanded,_BANG_expanded_at,path),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_BANG_expanded_at,cljs.core.assoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491),path);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_expanded_at,cljs.core.dissoc,new cljs.core.Keyword(null,"hover-path","hover-path",2016983491));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400.group-hover:text-indigo-700","span.text-slate-400.group-hover:text-indigo-700",438525494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(multi_expand_QMARK_)?"text-indigo-700 ":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.triangle,expanded_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.group-hover:text-indigo-700","span.group-hover:text-indigo-700",-444234631),opening_paren], null)], null);
});
nextjournal.clerk.render.render_coll = (function nextjournal$clerk$render$render_coll(xs,p__78030){
var map__78031 = p__78030;
var map__78031__$1 = cljs.core.__destructure_map(map__78031);
var opts = map__78031__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78031__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78031__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78031__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__78032 = viewer;
var map__78032__$1 = cljs.core.__destructure_map(map__78032);
var opening_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78032__$1,new cljs.core.Keyword(null,"opening-paren","opening-paren",2017445203));
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78032__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((((1) < cljs.core.count(xs)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,opening_paren,path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opening_paren], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(opening_paren)))?nextjournal.clerk.render.nbsp:null)], null):" "))),xs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__78033 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__78033);
} else {
return G__78033;
}
})()], null)], null)], null);
});
nextjournal.clerk.render.render_elision = (function nextjournal$clerk$render$render_elision(p__78034,_){
var map__78035 = p__78034;
var map__78035__$1 = cljs.core.__destructure_map(map__78035);
var fetch_opts = map__78035__$1;
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78035__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78035__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var unbounded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78035__$1,new cljs.core.Keyword(null,"unbounded?","unbounded?",1662946650));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.consume,new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sans-serif.relative.whitespace-nowrap","span.sans-serif.relative.whitespace-nowrap",1223699353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(2),new cljs.core.Keyword(null,"padding","padding",1660304693),((cljs.core.fn_QMARK_(fetch_fn))?"1px 3px":null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(11),new cljs.core.Keyword(null,"top","top",-1856271961),(-1)], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.fn_QMARK_(fetch_fn))?"cursor-pointer bg-indigo-200 hover:bg-indigo-300 dark:bg-gray-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white":"text-gray-400 dark:text-slate-300"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(fetch_fn)){
return (fetch_fn.cljs$core$IFn$_invoke$arity$1 ? fetch_fn.cljs$core$IFn$_invoke$arity$1(fetch_opts) : fetch_fn.call(null,fetch_opts));
} else {
return null;
}
})], null),(total - offset),(cljs.core.truth_(unbounded_QMARK_)?"+":null),((cljs.core.fn_QMARK_(fetch_fn))?" more\u2026":" more elided")], null);
})], null);
});
nextjournal.clerk.render.render_map = (function nextjournal$clerk$render$render_map(xs,p__78036){
var map__78037 = p__78036;
var map__78037__$1 = cljs.core.__destructure_map(map__78037);
var opts = map__78037__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78037__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78037__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78037__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
var map__78038 = viewer;
var map__78038__$1 = cljs.core.__destructure_map(map__78038);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78038__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(expanded_QMARK_)?"inline-flex":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((nextjournal.clerk.render.expandable_QMARK_(xs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,"{",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{"], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render.inspect_children(opts),cljs.core.interpose.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),nextjournal.clerk.render.triangle_spacer,nextjournal.clerk.render.nbsp], null):" "))),xs),(function (){var G__78039 = closing_paren;
if(cljs.core.list_QMARK_(closing_paren)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),G__78039);
} else {
return G__78039;
}
})()], null)], null);
});
nextjournal.clerk.render.render_string = (function nextjournal$clerk$render$render_string(s,p__78041){
var map__78043 = p__78041;
var map__78043__$1 = cljs.core.__destructure_map(map__78043);
var opts = map__78043__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78043__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78043__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_expanded_at),path);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78040_SHARP_){
if(typeof p1__78040_SHARP_ === 'string'){
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),clojure.string.split_lines(p1__78040_SHARP_)));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-slate-400","span.text-slate-400",-1212905222),"\u21A9\uFE0E"], null),clojure.string.split_lines(p1__78040_SHARP_)));
}
} else {
return (nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 ? nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2(opts,p1__78040_SHARP_) : nextjournal.clerk.render.inspect_presented.call(null,opts,p1__78040_SHARP_));
}
})),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s));
});
nextjournal.clerk.render.render_quoted_string = (function nextjournal$clerk$render$render_quoted_string(s,p__78045){
var map__78046 = p__78045;
var map__78046__$1 = cljs.core.__destructure_map(map__78046);
var opts = map__78046__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78046__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78046__$1,new cljs.core.Keyword(null,"viewer","viewer",-783949853));
var _BANG_expanded_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78046__$1,new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694));
var map__78047 = viewer;
var map__78047__$1 = cljs.core.__destructure_map(map__78047);
var closing_paren = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78047__$1,new cljs.core.Keyword(null,"closing-paren","closing-paren",1898479602));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-string.inspected-value.whitespace-nowrap.inline-flex","span.cmt-string.inspected-value.whitespace-nowrap.inline-flex",1767737962),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(cljs.core.some((function (p1__78044_SHARP_){
return ((typeof p1__78044_SHARP_ === 'string') && (clojure.string.includes_QMARK_(p1__78044_SHARP_,"\n")));
}),((typeof s === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null):s)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.expand_button,_BANG_expanded_at,"\"",path], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\""], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nextjournal.clerk.viewer.__GT_value(nextjournal.clerk.render.render_string(s,opts)),"\"",closing_paren], null)], null);
});
nextjournal.clerk.render.render_number = (function nextjournal$clerk$render$render_number(num){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-number.inspected-value","span.cmt-number.inspected-value",1512437969),(cljs.core.truth_(Number.isNaN(num))?"NaN":cljs.core.str.cljs$core$IFn$_invoke$arity$1(num))], null);
});
nextjournal.clerk.render.sort_BANG_ = (function nextjournal$clerk$render$sort_BANG_(_BANG_sort,i,k){
var map__78048 = cljs.core.deref(_BANG_sort);
var map__78048__$1 = cljs.core.__destructure_map(map__78048);
var sort_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78048__$1,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78048__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
return cljs.core.reset_BANG_(_BANG_sort,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222),i,new cljs.core.Keyword(null,"sort-key","sort-key",1285844623),k,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_key,k))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
});
nextjournal.clerk.render.sort_data = (function nextjournal$clerk$render$sort_data(p__78054,p__78055){
var map__78056 = p__78054;
var map__78056__$1 = cljs.core.__destructure_map(map__78056);
var sort_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78056__$1,new cljs.core.Keyword(null,"sort-index","sort-index",-1082353222));
var sort_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78056__$1,new cljs.core.Keyword(null,"sort-order","sort-order",1853277479));
var map__78057 = p__78055;
var map__78057__$1 = cljs.core.__destructure_map(map__78057);
var data = map__78057__$1;
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78057__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78057__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var G__78058 = data;
if(cljs.core.truth_(head)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78058,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__78049_SHARP_){
var G__78059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78049_SHARP_,sort_index);
if(typeof cljs.core.val === 'string'){
return clojure.string.lower_case(G__78059);
} else {
return G__78059;
}
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_order,new cljs.core.Keyword(null,"asc","asc",356854569)))?(function (p1__78050_SHARP_,p2__78051_SHARP_){
return cljs.core.compare(p1__78050_SHARP_,p2__78051_SHARP_);
}):(function (p1__78053_SHARP_,p2__78052_SHARP_){
return cljs.core.compare(p2__78052_SHARP_,p1__78053_SHARP_);
})),rows)));
} else {
return G__78058;
}
});
nextjournal.clerk.render.x_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.check_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.h-4.w-4","svg.h-4.w-4",1958440568),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_table_error = (function nextjournal$clerk$render$render_table_error(p__78060){
var vec__78061 = p__78060;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78061,(0),null);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose","div.bg-red-100.dark:bg-gray-800.px-6.py-4.rounded-md.text-xs.dark:border-2.dark:border-red-400.not-prose",472299052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide","h4.mt-0.uppercase.text-xs.dark:text-red-400.tracking-wide",-1114358129),"Table Error"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Clerk\u2019s table viewer does not recognize the format of your data:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex","div.mt-2.flex",-812335696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-red-500.mr-2","div.text-red-500.mr-2",-1965802655),nextjournal.clerk.render.x_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,data], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mt-4.font-medium","p.mt-4.font-medium",778592363),"Currently, the following formats are supported:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"column-2","column-2",1966117147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(1),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-1","column-1",844467295),(2),new cljs.core.Keyword(null,"column-2","column-2",1966117147),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2.flex.items-center","div.mt-2.flex.items-center",-1376887428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-green-500.mr-2","div.text-green-500.mr-2",746047511),nextjournal.clerk.render.check_icon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-1","column-1",844467295),new cljs.core.Keyword(null,"column-2","column-2",1966117147)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)], null)], null)], null)], null)], null);
});
nextjournal.clerk.render.throwable_view = (function nextjournal$clerk$render$throwable_view(p__78064){
var map__78065 = p__78064;
var map__78065__$1 = cljs.core.__destructure_map(map__78065);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78065__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78065__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose","div.bg-white.max-w-6xl.mx-auto.text-xs.monospace.not-prose",-741753812),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78066){
var map__78067 = p__78066;
var map__78067__$1 = cljs.core.__destructure_map(map__78067);
var _ex = map__78067__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78067__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78067__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78067__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var _trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78067__$1,new cljs.core.Keyword(null,"_trace","_trace",-196725681));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.bg-red-100.border-b.border-b-gray-300","div.p-4.bg-red-100.border-b.border-b-gray-300",-1067794245),(cljs.core.truth_(type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold","div.font-bold",2116623818),"Unhandled ",type], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-bold.mt-1","div.font-bold.mt-1",-1699801213),message], null),(cljs.core.truth_(data)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-1","div.mt-1",-36845891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect,data], null)], null):null)], null);
}),via)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-6.overflow-x-auto","div.py-6.overflow-x-auto",-1663715111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full","table.w-full",1746679141),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__78068){
var vec__78069 = p__78068;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78069,(0),null);
var _x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78069,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78069,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78069,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.hover:bg-red-100.leading-tight","tr.hover:bg-red-100.leading-tight",96605729),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.px-6","td.text-right.px-6",324007517),file,":"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right.pr-6","td.text-right.pr-6",1739173277),line], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.py-1.pr-6","td.py-1.pr-6",1245547684),call], null)], null);
})),trace)], null)], null)], null);
});
nextjournal.clerk.render.render_throwable = (function nextjournal$clerk$render$render_throwable(ex){
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(ex);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (ex instanceof Error);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.error_view,ex], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.throwable_view,ex], null);
}
});
nextjournal.clerk.render.render_tagged_value = (function nextjournal$clerk$render$render_tagged_value(var_args){
var G__78073 = arguments.length;
switch (G__78073) {
case 2:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$2 = (function (tag,value){
return nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"space?","space?",-1369314665),true], null),tag,value);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$core$IFn$_invoke$arity$3 = (function (p__78074,tag,value){
var map__78075 = p__78074;
var map__78075__$1 = cljs.core.__destructure_map(map__78075);
var space_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78075__$1,new cljs.core.Keyword(null,"space?","space?",-1369314665));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.inspected-value.whitespace-nowrap","span.inspected-value.whitespace-nowrap",1177458280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cmt-meta","span.cmt-meta",1534644051),tag], null),(cljs.core.truth_(space_QMARK_)?nextjournal.clerk.render.nbsp:null),value], null);
}));

(nextjournal.clerk.render.render_tagged_value.cljs$lang$maxFixedArity = 3);

if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_doc !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_doc = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_error !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_error = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_viewers !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_viewers = nextjournal.clerk.viewer._BANG_viewers;
}
nextjournal.clerk.render.set_viewers_BANG_ = (function nextjournal$clerk$render$set_viewers_BANG_(scope,viewers){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nextjournal.clerk.render._BANG_viewers,cljs.core.assoc,scope,cljs.core.vec(viewers));

return new cljs.core.Symbol(null,"set-viewers!","set-viewers!",-745204889,null);
});
nextjournal.clerk.render.valid_react_element_QMARK_ = (function nextjournal$clerk$render$valid_react_element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
nextjournal.clerk.render.inspect_presented = (function nextjournal$clerk$render$inspect_presented(var_args){
var G__78077 = arguments.length;
switch (G__78077) {
case 1:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$1 = (function (x){
var with_let78078 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let78078","with-let78078",1388536881));
var temp__5757__auto___78287 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___78287 == null)){
} else {
var c__64227__auto___78288 = temp__5757__auto___78287;
if((with_let78078.generation === c__64227__auto___78288.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let78078.generation = c__64227__auto___78288.ratomGeneration);
}

var init78079 = (with_let78078.length === (0));
var _BANG_expanded_at = ((((init78079) || (cljs.core.not(with_let78078.hasOwnProperty((0))))))?(with_let78078[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("nextjournal","expanded-at","nextjournal/expanded-at",-1490351009).cljs$core$IFn$_invoke$arity$1(x))):(with_let78078[(0)]));
var res78080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!expanded-at","!expanded-at",-2122105694),_BANG_expanded_at], null),x], null);
return res78080;
}));

(nextjournal.clerk.render.inspect_presented.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(nextjournal.clerk.render.valid_react_element_QMARK_(x))){
return x;
} else {
var map__78083 = x;
var map__78083__$1 = cljs.core.__destructure_map(map__78083);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78083__$1,new cljs.core.Keyword("nextjournal","value","nextjournal/value",-1912768947));
var viewer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78083__$1,new cljs.core.Keyword("nextjournal","viewer","nextjournal/viewer",646341759));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(viewer),value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword("nextjournal","opts","nextjournal/opts",570344249).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),viewer], null)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(viewer)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.peek(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))].join('')], null));
}
}));

(nextjournal.clerk.render.inspect_presented.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.in_process_fetch = (function nextjournal$clerk$render$in_process_fetch(value,opts){
return Promise.resolve(nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$2(value,opts));
});
nextjournal.clerk.render.inspect = (function nextjournal$clerk$render$inspect(value){
var with_let78087 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let78087","with-let78087",798642330));
var temp__5757__auto___78290 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___78290 == null)){
} else {
var c__64227__auto___78291 = temp__5757__auto___78290;
if((with_let78087.generation === c__64227__auto___78291.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let78087.generation = c__64227__auto___78291.ratomGeneration);
}

var init78088 = (with_let78087.length === (0));
var _BANG_state = ((((init78088) || (cljs.core.not(with_let78087.hasOwnProperty((0))))))?(with_let78087[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let78087[(0)]));
var res78089 = (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_state),new cljs.core.Keyword("nextjournal.clerk.render","not-found","nextjournal.clerk.render/not-found",-247770595)),value)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.present.cljs$core$IFn$_invoke$arity$1(value)], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.view.context.provide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fetch-fn","fetch-fn",42316383),(function (fetch_opts){
return nextjournal.clerk.render.in_process_fetch(value,fetch_opts).then((function (more){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(_BANG_state,cljs.core.update,new cljs.core.Keyword(null,"desc","desc",2093485764),nextjournal.clerk.viewer.merge_presentations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more,fetch_opts], 0));
}));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_state))], null)], null);
})()
;
return res78089;
});
nextjournal.clerk.render.root = (function nextjournal$clerk$render$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_doc)], null),(cljs.core.truth_(cljs.core.deref(nextjournal.clerk.render._BANG_error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.top-0.left-0.w-full.h-full","div.fixed.top-0.left-0.w-full.h-full",1721394456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.inspect_presented,cljs.core.deref(nextjournal.clerk.render._BANG_error)], null)], null):null)], null);
});
nextjournal.clerk.render.intern_atom_BANG_ = (function nextjournal$clerk$render$intern_atom_BANG_(var_name,state){
if(cljs.core.truth_(sci.ctx_store.get_ctx())){
} else {
throw (new Error(["Assert failed: ","sci-ctx must be set","\n","(sci.ctx-store/get-ctx)"].join('')));
}

return sci.core.intern.cljs$core$IFn$_invoke$arity$4(sci.ctx_store.get_ctx(),sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name)),cljs.core.with_meta(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name], null)));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._BANG_synced_atom_vars !== 'undefined')){
} else {
nextjournal.clerk.render._BANG_synced_atom_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
nextjournal.clerk.render.sci_ns_unmap_BANG_ = (function nextjournal$clerk$render$sci_ns_unmap_BANG_(ns_sym,var_sym){
var ns_unmap = sci.core.eval_string_STAR_(sci.ctx_store.get_ctx(),"ns-unmap");
return (ns_unmap.cljs$core$IFn$_invoke$arity$2 ? ns_unmap.cljs$core$IFn$_invoke$arity$2(ns_sym,var_sym) : ns_unmap.call(null,ns_sym,var_sym));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ !== 'undefined')){
} else {
nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ = true;
}
nextjournal.clerk.render.set_reset_sync_atoms_BANG_ = (function nextjournal$clerk$render$set_reset_sync_atoms_BANG_(new_val){
return (nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_ = new_val);
});
nextjournal.clerk.render.intern_atoms_BANG_ = (function nextjournal$clerk$render$intern_atoms_BANG_(atom_var_name__GT_state){
var vars_in_use = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(atom_var_name__GT_state));
var vars_interned = cljs.core.deref(nextjournal.clerk.render._BANG_synced_atom_vars);
var seq__78115_78295 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(vars_interned,vars_in_use));
var chunk__78116_78296 = null;
var count__78117_78297 = (0);
var i__78118_78298 = (0);
while(true){
if((i__78118_78298 < count__78117_78297)){
var var_name_to_unmap_78299 = chunk__78116_78296.cljs$core$IIndexed$_nth$arity$2(null,i__78118_78298);
nextjournal.clerk.render.sci_ns_unmap_BANG_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name_to_unmap_78299)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name_to_unmap_78299)));


var G__78300 = seq__78115_78295;
var G__78301 = chunk__78116_78296;
var G__78302 = count__78117_78297;
var G__78303 = (i__78118_78298 + (1));
seq__78115_78295 = G__78300;
chunk__78116_78296 = G__78301;
count__78117_78297 = G__78302;
i__78118_78298 = G__78303;
continue;
} else {
var temp__5753__auto___78304 = cljs.core.seq(seq__78115_78295);
if(temp__5753__auto___78304){
var seq__78115_78305__$1 = temp__5753__auto___78304;
if(cljs.core.chunked_seq_QMARK_(seq__78115_78305__$1)){
var c__4679__auto___78306 = cljs.core.chunk_first(seq__78115_78305__$1);
var G__78308 = cljs.core.chunk_rest(seq__78115_78305__$1);
var G__78309 = c__4679__auto___78306;
var G__78310 = cljs.core.count(c__4679__auto___78306);
var G__78311 = (0);
seq__78115_78295 = G__78308;
chunk__78116_78296 = G__78309;
count__78117_78297 = G__78310;
i__78118_78298 = G__78311;
continue;
} else {
var var_name_to_unmap_78313 = cljs.core.first(seq__78115_78305__$1);
nextjournal.clerk.render.sci_ns_unmap_BANG_(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(var_name_to_unmap_78313)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name_to_unmap_78313)));


var G__78314 = cljs.core.next(seq__78115_78305__$1);
var G__78315 = null;
var G__78316 = (0);
var G__78317 = (0);
seq__78115_78295 = G__78314;
chunk__78116_78296 = G__78315;
count__78117_78297 = G__78316;
i__78118_78298 = G__78317;
continue;
}
} else {
}
}
break;
}

var seq__78147_78318 = cljs.core.seq(atom_var_name__GT_state);
var chunk__78148_78319 = null;
var count__78149_78320 = (0);
var i__78150_78321 = (0);
while(true){
if((i__78150_78321 < count__78149_78320)){
var vec__78162_78322 = chunk__78148_78319.cljs$core$IIndexed$_nth$arity$2(null,i__78150_78321);
var var_name_78323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78162_78322,(0),null);
var value_78324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78162_78322,(1),null);
var temp__5751__auto___78326 = sci.core.resolve(sci.ctx_store.get_ctx(),var_name_78323);
if(cljs.core.truth_(temp__5751__auto___78326)){
var existing_var_78329 = temp__5751__auto___78326;
if(cljs.core.truth_(nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_)){
cljs.core.reset_BANG_(cljs.core.deref(existing_var_78329),value_78324);
} else {
}
} else {
nextjournal.clerk.render.intern_atom_BANG_(var_name_78323,value_78324);
}


var G__78330 = seq__78147_78318;
var G__78331 = chunk__78148_78319;
var G__78332 = count__78149_78320;
var G__78333 = (i__78150_78321 + (1));
seq__78147_78318 = G__78330;
chunk__78148_78319 = G__78331;
count__78149_78320 = G__78332;
i__78150_78321 = G__78333;
continue;
} else {
var temp__5753__auto___78335 = cljs.core.seq(seq__78147_78318);
if(temp__5753__auto___78335){
var seq__78147_78336__$1 = temp__5753__auto___78335;
if(cljs.core.chunked_seq_QMARK_(seq__78147_78336__$1)){
var c__4679__auto___78337 = cljs.core.chunk_first(seq__78147_78336__$1);
var G__78338 = cljs.core.chunk_rest(seq__78147_78336__$1);
var G__78339 = c__4679__auto___78337;
var G__78340 = cljs.core.count(c__4679__auto___78337);
var G__78341 = (0);
seq__78147_78318 = G__78338;
chunk__78148_78319 = G__78339;
count__78149_78320 = G__78340;
i__78150_78321 = G__78341;
continue;
} else {
var vec__78165_78342 = cljs.core.first(seq__78147_78336__$1);
var var_name_78343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78165_78342,(0),null);
var value_78344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78165_78342,(1),null);
var temp__5751__auto___78347 = sci.core.resolve(sci.ctx_store.get_ctx(),var_name_78343);
if(cljs.core.truth_(temp__5751__auto___78347)){
var existing_var_78348 = temp__5751__auto___78347;
if(cljs.core.truth_(nextjournal.clerk.render._STAR_reset_sync_atoms_QMARK__STAR_)){
cljs.core.reset_BANG_(cljs.core.deref(existing_var_78348),value_78344);
} else {
}
} else {
nextjournal.clerk.render.intern_atom_BANG_(var_name_78343,value_78344);
}


var G__78349 = cljs.core.next(seq__78147_78336__$1);
var G__78350 = null;
var G__78351 = (0);
var G__78352 = (0);
seq__78147_78318 = G__78349;
chunk__78148_78319 = G__78350;
count__78149_78320 = G__78351;
i__78150_78321 = G__78352;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_synced_atom_vars,vars_in_use);
});
nextjournal.clerk.render.remount_QMARK_ = (function nextjournal$clerk$render$remount_QMARK_(doc_or_patch){
return cljs.core.some((function (p1__78171_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78171_SHARP_,new cljs.core.Keyword("nextjournal.clerk","remount","nextjournal.clerk/remount",-1003805683));
}),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,doc_or_patch)) === true;
});
nextjournal.clerk.render.re_eval_viewer_fns = (function nextjournal$clerk$render$re_eval_viewer_fns(doc){
var re_eval = (function (p1__78172_SHARP_){
return nextjournal.clerk.viewer.__GT_viewer_fn(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(p1__78172_SHARP_));
});
return clojure.walk.postwalk((function (p1__78173_SHARP_){
var G__78174 = p1__78173_SHARP_;
if(nextjournal.clerk.viewer.viewer_fn_QMARK_(p1__78173_SHARP_)){
return re_eval(G__78174);
} else {
return G__78174;
}
}),doc);
});
nextjournal.clerk.render.set_state_BANG_ = (function nextjournal$clerk$render$set_state_BANG_(p__78178){
var map__78179 = p__78178;
var map__78179__$1 = cljs.core.__destructure_map(map__78179);
var state = map__78179__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78179__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78179__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"doc","doc",1913296891))){
cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_doc,doc);
} else {
}

if(nextjournal.clerk.render.remount_QMARK_(doc)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_eval_counter,cljs.core.inc);
} else {
}

cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_error,error);

var temp__5753__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.viewer.__GT_value(doc));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var title = temp__5753__auto__;
return (document.title = title);
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.set_state_BANG_', nextjournal.clerk.render.set_state_BANG_);
nextjournal.clerk.render.apply_patch = (function nextjournal$clerk$render$apply_patch(x,patch){
return editscript.core.patch(x,(editscript.core.edits__GT_script.cljs$core$IFn$_invoke$arity$1 ? editscript.core.edits__GT_script.cljs$core$IFn$_invoke$arity$1(patch) : editscript.core.edits__GT_script.call(null,patch)));
});
nextjournal.clerk.render.patch_state_BANG_ = (function nextjournal$clerk$render$patch_state_BANG_(p__78181){
var map__78182 = p__78181;
var map__78182__$1 = cljs.core.__destructure_map(map__78182);
var patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78182__$1,new cljs.core.Keyword(null,"patch","patch",380775109));
cljs.core.reset_BANG_(nextjournal.clerk.render._BANG_error,null);

if(nextjournal.clerk.render.remount_QMARK_(patch)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_doc,(function (p1__78180_SHARP_){
return nextjournal.clerk.render.re_eval_viewer_fns(nextjournal.clerk.render.apply_patch(p1__78180_SHARP_,patch));
}));

return setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.render._BANG_eval_counter,cljs.core.inc);
}),(10));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nextjournal.clerk.render._BANG_doc,nextjournal.clerk.render.apply_patch,patch);
}
});
nextjournal.clerk.render.clerk_swap_BANG_ = (function nextjournal$clerk$render$clerk_swap_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___78354 = arguments.length;
var i__4865__auto___78356 = (0);
while(true){
if((i__4865__auto___78356 < len__4864__auto___78354)){
args__4870__auto__.push((arguments[i__4865__auto___78356]));

var G__78358 = (i__4865__auto___78356 + (1));
i__4865__auto___78356 = G__78358;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return nextjournal.clerk.render.clerk_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(nextjournal.clerk.render.clerk_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,swap_args){
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,atom,swap_args);
var temp__5753__auto___78360 = new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(atom));
if(cljs.core.truth_(temp__5753__auto___78360)){
var var_name_78362 = temp__5753__auto___78360;
ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"swap!","swap!",1998758253),new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name_78362,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,new_val,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null))], null)], null)], 0)));
} else {
}

return new_val;
}));

(nextjournal.clerk.render.clerk_swap_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(nextjournal.clerk.render.clerk_swap_BANG_.cljs$lang$applyTo = (function (seq78183){
var G__78184 = cljs.core.first(seq78183);
var seq78183__$1 = cljs.core.next(seq78183);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78184,seq78183__$1);
}));

nextjournal.clerk.render.clerk_reset_BANG_ = (function nextjournal$clerk$render$clerk_reset_BANG_(atom,new_val){
nextjournal.clerk.render.clerk_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(atom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.constantly(new_val)], 0));

return new_val;
});
nextjournal.clerk.render.dispatch = (function nextjournal$clerk$render$dispatch(p__78188){
var map__78189 = p__78188;
var map__78189__$1 = cljs.core.__destructure_map(map__78189);
var msg = map__78189__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78189__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var dispatch_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patch-state!","patch-state!",1188766076),nextjournal.clerk.render.patch_state_BANG_,new cljs.core.Keyword(null,"set-state!","set-state!",1449612100),nextjournal.clerk.render.set_state_BANG_], null),type,(function (_){
return console.warn(["no on-message dispatch for type `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"`"].join(''));
}));
return (dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? dispatch_fn.cljs$core$IFn$_invoke$arity$1(msg) : dispatch_fn.call(null,msg));
});
goog.exportSymbol('nextjournal.clerk.render.dispatch', nextjournal.clerk.render.dispatch);
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clerk !== 'undefined') && (typeof nextjournal.clerk.render !== 'undefined') && (typeof nextjournal.clerk.render.react_root !== 'undefined')){
} else {
nextjournal.clerk.render.react_root = (function (){var temp__5753__auto__ = (function (){var and__4251__auto__ = (typeof document !== 'undefined');
if(and__4251__auto__){
return document.getElementById("clerk");
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
return module$node_modules$react_dom$client.createRoot(el);
} else {
return null;
}
})();
}
nextjournal.clerk.render.mount = (function nextjournal$clerk$render$mount(){
if(cljs.core.truth_(nextjournal.clerk.render.react_root)){
return nextjournal.clerk.render.react_root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.root], null)));
} else {
return null;
}
});
goog.exportSymbol('nextjournal.clerk.render.mount', nextjournal.clerk.render.mount);
nextjournal.clerk.render.clerk_eval = (function nextjournal$clerk$render$clerk_eval(form){
return goog.global.ws_send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], 0)));
});
nextjournal.clerk.render.render_katex = (function nextjournal$clerk$render$render_katex(tex_string,p__78193){
var map__78194 = p__78193;
var map__78194__$1 = cljs.core.__destructure_map(map__78194);
var inline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78194__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),nextjournal.viewer.katex.to_html_string.cljs$core$IFn$_invoke$arity$2(tex_string,({"displayMode":cljs.core.not(inline_QMARK_)}))], null)], null)], null);
});
nextjournal.clerk.render.html_render = (function nextjournal$clerk$render$html_render(markup){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(((typeof markup === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markup], null)], null)], null):markup));
});
nextjournal.clerk.render.html_viewer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),nextjournal.clerk.render.html_render], null);
nextjournal.clerk.render.html = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nextjournal.clerk.viewer.with_viewer,nextjournal.clerk.render.html_viewer);
nextjournal.clerk.render.render_reagent = (function nextjournal$clerk$render$render_reagent(x){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__78200 = x;
if(cljs.core.fn_QMARK_(x)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__78200],null));
} else {
return G__78200;
}
})());
});
nextjournal.clerk.render.reagent_viewer = nextjournal.clerk.render.render_reagent;
nextjournal.clerk.render.with_d3_require = (function nextjournal$clerk$render$with_d3_require(p__78202,f){
var map__78205 = p__78202;
var map__78205__$1 = cljs.core.__destructure_map(map__78205);
var package$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78205__$1,new cljs.core.Keyword(null,"package","package",1189062786));
var loading_view = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78205__$1,new cljs.core.Keyword(null,"loading-view","loading-view",1386748874),nextjournal.clerk.render.default_loading_view);
var temp__5751__auto__ = nextjournal.clerk.render.hooks.use_d3_require(package$);
if(cljs.core.truth_(temp__5751__auto__)){
var package$__$1 = temp__5751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(package$__$1) : f.call(null,package$__$1));
} else {
return loading_view;
}
});
nextjournal.clerk.render.render_vega_lite = (function nextjournal$clerk$render$render_vega_lite(value){
var handle_error = nextjournal.clerk.render.hooks.use_error_handler();
var vega_embed = nextjournal.clerk.render.hooks.use_d3_require("vega-embed@6.11.1");
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792),cljs.core.PersistentArrayMap.EMPTY);
var ref_fn = module$node_modules$react$index.useCallback((function (p1__78206_SHARP_){
if(cljs.core.truth_(p1__78206_SHARP_)){
return vega_embed.embed(p1__78206_SHARP_,cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(value,new cljs.core.Keyword("embed","opts","embed/opts",187667792),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("embed","callback","embed/callback",-604624783)], 0))),cljs.core.clj__GT_js(opts)).then((function (result){
var temp__5751__auto__ = new cljs.core.Keyword("embed","callback","embed/callback",-604624783).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(temp__5751__auto__)){
var callback = temp__5751__auto__;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(result) : callback.call(null,result));
} else {
return result;
}
})).catch(handle_error);
} else {
return null;
}
}),[value,vega_embed]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(vega_embed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vega-lite","div.vega-lite",1198823274),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_plotly = (function nextjournal$clerk$render$render_plotly(value){
var plotly = nextjournal.clerk.render.hooks.use_d3_require("plotly.js-dist@2.15.1");
var ref_fn = module$node_modules$react$index.useCallback((function (p1__78209_SHARP_){
if(cljs.core.truth_(p1__78209_SHARP_)){
return plotly.newPlot(p1__78209_SHARP_,cljs.core.clj__GT_js(value));
} else {
return null;
}
}),[value,plotly]);
if(cljs.core.truth_(value)){
if(cljs.core.truth_(plotly)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overflow-x-auto","div.overflow-x-auto",-1359457684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plotly","div.plotly",-1155863466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)], null);
} else {
return nextjournal.clerk.render.default_loading_view;
}
} else {
return null;
}
});
nextjournal.clerk.render.render_mathjax = nextjournal.viewer.mathjax.viewer;
nextjournal.clerk.render.render_code = nextjournal.clerk.render.code.render_code;
nextjournal.clerk.render.expand_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 20 20",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"width","width",-384071477),(12),new cljs.core.Keyword(null,"height","height",1025178622),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"d","d",1972142424),"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),"evenodd"], null)], null)], null);
nextjournal.clerk.render.render_folded_code = (function nextjournal$clerk$render$render_folded_code(code_string){
var _BANG_hidden_QMARK_ = nextjournal.clerk.render.hooks.use_state(true);
if(cljs.core.truth_(cljs.core.deref(_BANG_hidden_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group",45115011),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"show code"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1","div.relative.pl-12.font-sans.text-slate-400.cursor-pointer.flex.overflow-y-hidden.group.mb-1",1365696722),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.hover:text-slate-500","span.hover:text-slate-500",807205573),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10px]",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_hidden_QMARK_,cljs.core.not);
})], null),"hide code"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.viewer-code.mb-2.relative","div.viewer-code.mb-2.relative",-490925077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clerk.render.render_code,code_string], null)], null)], null);
}
});
nextjournal.clerk.render.url_for = (function nextjournal$clerk$render$url_for(p__78210){
var map__78211 = p__78210;
var map__78211__$1 = cljs.core.__destructure_map(map__78211);
var src = map__78211__$1;
var blob_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78211__$1,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970));
if(typeof src === 'string'){
return src;
} else {
return ["/_blob/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(blob_id),(function (){var temp__5753__auto__ = cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(src,new cljs.core.Keyword(null,"blob-id","blob-id",1929300970)));
if(temp__5753__auto__){
var opts = temp__5753__auto__;
return ["?",nextjournal.clerk.render.opts__GT_query(opts)].join('');
} else {
return null;
}
})()].join('');
}
});
nextjournal.clerk.render.consume_view_context = nextjournal.view.context.consume;

//# sourceMappingURL=nextjournal.clerk.render.js.map