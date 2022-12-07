import "./cljs_env.js";
goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__62360){
var map__62361 = p__62360;
var map__62361__$1 = cljs.core.__destructure_map(map__62361);
var m = map__62361__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62363_62732 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62364_62733 = null;
var count__62365_62734 = (0);
var i__62366_62735 = (0);
while(true){
if((i__62366_62735 < count__62365_62734)){
var f_62736 = chunk__62364_62733.cljs$core$IIndexed$_nth$arity$2(null,i__62366_62735);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62736], 0));


var G__62737 = seq__62363_62732;
var G__62738 = chunk__62364_62733;
var G__62739 = count__62365_62734;
var G__62740 = (i__62366_62735 + (1));
seq__62363_62732 = G__62737;
chunk__62364_62733 = G__62738;
count__62365_62734 = G__62739;
i__62366_62735 = G__62740;
continue;
} else {
var temp__5753__auto___62741 = cljs.core.seq(seq__62363_62732);
if(temp__5753__auto___62741){
var seq__62363_62742__$1 = temp__5753__auto___62741;
if(cljs.core.chunked_seq_QMARK_(seq__62363_62742__$1)){
var c__4679__auto___62743 = cljs.core.chunk_first(seq__62363_62742__$1);
var G__62748 = cljs.core.chunk_rest(seq__62363_62742__$1);
var G__62749 = c__4679__auto___62743;
var G__62750 = cljs.core.count(c__4679__auto___62743);
var G__62751 = (0);
seq__62363_62732 = G__62748;
chunk__62364_62733 = G__62749;
count__62365_62734 = G__62750;
i__62366_62735 = G__62751;
continue;
} else {
var f_62752 = cljs.core.first(seq__62363_62742__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62752], 0));


var G__62753 = cljs.core.next(seq__62363_62742__$1);
var G__62754 = null;
var G__62755 = (0);
var G__62756 = (0);
seq__62363_62732 = G__62753;
chunk__62364_62733 = G__62754;
count__62365_62734 = G__62755;
i__62366_62735 = G__62756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_62757 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_62757], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_62757)))?cljs.core.second(arglists_62757):arglists_62757)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62368_62764 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62369_62765 = null;
var count__62370_62766 = (0);
var i__62371_62767 = (0);
while(true){
if((i__62371_62767 < count__62370_62766)){
var vec__62420_62768 = chunk__62369_62765.cljs$core$IIndexed$_nth$arity$2(null,i__62371_62767);
var name_62769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62420_62768,(0),null);
var map__62423_62770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62420_62768,(1),null);
var map__62423_62771__$1 = cljs.core.__destructure_map(map__62423_62770);
var doc_62772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62423_62771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62423_62771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62769], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62773], 0));

if(cljs.core.truth_(doc_62772)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62772], 0));
} else {
}


var G__62774 = seq__62368_62764;
var G__62775 = chunk__62369_62765;
var G__62776 = count__62370_62766;
var G__62777 = (i__62371_62767 + (1));
seq__62368_62764 = G__62774;
chunk__62369_62765 = G__62775;
count__62370_62766 = G__62776;
i__62371_62767 = G__62777;
continue;
} else {
var temp__5753__auto___62778 = cljs.core.seq(seq__62368_62764);
if(temp__5753__auto___62778){
var seq__62368_62782__$1 = temp__5753__auto___62778;
if(cljs.core.chunked_seq_QMARK_(seq__62368_62782__$1)){
var c__4679__auto___62783 = cljs.core.chunk_first(seq__62368_62782__$1);
var G__62787 = cljs.core.chunk_rest(seq__62368_62782__$1);
var G__62788 = c__4679__auto___62783;
var G__62789 = cljs.core.count(c__4679__auto___62783);
var G__62791 = (0);
seq__62368_62764 = G__62787;
chunk__62369_62765 = G__62788;
count__62370_62766 = G__62789;
i__62371_62767 = G__62791;
continue;
} else {
var vec__62447_62793 = cljs.core.first(seq__62368_62782__$1);
var name_62794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62447_62793,(0),null);
var map__62451_62795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62447_62793,(1),null);
var map__62451_62796__$1 = cljs.core.__destructure_map(map__62451_62795);
var doc_62797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62451_62796__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62451_62796__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62794], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62798], 0));

if(cljs.core.truth_(doc_62797)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62797], 0));
} else {
}


var G__62802 = cljs.core.next(seq__62368_62782__$1);
var G__62803 = null;
var G__62804 = (0);
var G__62805 = (0);
seq__62368_62764 = G__62802;
chunk__62369_62765 = G__62803;
count__62370_62766 = G__62804;
i__62371_62767 = G__62805;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__62471 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__62472 = null;
var count__62473 = (0);
var i__62474 = (0);
while(true){
if((i__62474 < count__62473)){
var role = chunk__62472.cljs$core$IIndexed$_nth$arity$2(null,i__62474);
var temp__5753__auto___62811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___62811__$1)){
var spec_62813 = temp__5753__auto___62811__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62813)], 0));
} else {
}


var G__62817 = seq__62471;
var G__62818 = chunk__62472;
var G__62819 = count__62473;
var G__62820 = (i__62474 + (1));
seq__62471 = G__62817;
chunk__62472 = G__62818;
count__62473 = G__62819;
i__62474 = G__62820;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__62471);
if(temp__5753__auto____$1){
var seq__62471__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__62471__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__62471__$1);
var G__62821 = cljs.core.chunk_rest(seq__62471__$1);
var G__62822 = c__4679__auto__;
var G__62823 = cljs.core.count(c__4679__auto__);
var G__62824 = (0);
seq__62471 = G__62821;
chunk__62472 = G__62822;
count__62473 = G__62823;
i__62474 = G__62824;
continue;
} else {
var role = cljs.core.first(seq__62471__$1);
var temp__5753__auto___62827__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___62827__$2)){
var spec_62828 = temp__5753__auto___62827__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62828)], 0));
} else {
}


var G__62833 = cljs.core.next(seq__62471__$1);
var G__62834 = null;
var G__62835 = (0);
var G__62836 = (0);
seq__62471 = G__62833;
chunk__62472 = G__62834;
count__62473 = G__62835;
i__62474 = G__62836;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__62848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__62849 = cljs.core.ex_cause(t);
via = G__62848;
t = G__62849;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__62547 = datafied_throwable;
var map__62547__$1 = cljs.core.__destructure_map(map__62547);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62547__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__62548 = cljs.core.last(via);
var map__62548__$1 = cljs.core.__destructure_map(map__62548);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62548__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62548__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62548__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__62549 = data;
var map__62549__$1 = cljs.core.__destructure_map(map__62549);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62549__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__62550 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__62550__$1 = cljs.core.__destructure_map(map__62550);
var top_data = map__62550__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__62551 = phase;
var G__62551__$1 = (((G__62551 instanceof cljs.core.Keyword))?G__62551.fqn:null);
switch (G__62551__$1) {
case "read-source":
var map__62552 = data;
var map__62552__$1 = cljs.core.__destructure_map(map__62552);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62552__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__62553 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__62553__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62553,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62553);
var G__62553__$2 = (cljs.core.truth_((function (){var fexpr__62558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62558.cljs$core$IFn$_invoke$arity$1 ? fexpr__62558.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62558.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62553__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62553__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62553__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__62563 = top_data;
var G__62563__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62563,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__62563);
var G__62563__$2 = (cljs.core.truth_((function (){var fexpr__62569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62569.cljs$core$IFn$_invoke$arity$1 ? fexpr__62569.cljs$core$IFn$_invoke$arity$1(source) : fexpr__62569.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__62563__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__62563__$1);
var G__62563__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62563__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62563__$2);
var G__62563__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62563__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62563__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62563__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62563__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__62578 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62578,(3),null);
var G__62581 = top_data;
var G__62581__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62581,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__62581);
var G__62581__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__62581__$1);
var G__62581__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62581__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__62581__$2);
var G__62581__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62581__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__62581__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62581__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__62581__$4;
}

break;
case "execution":
var vec__62594 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62594,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__62545_SHARP_){
var or__4253__auto__ = (p1__62545_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__62597 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__62597.cljs$core$IFn$_invoke$arity$1 ? fexpr__62597.cljs$core$IFn$_invoke$arity$1(p1__62545_SHARP_) : fexpr__62597.call(null,p1__62545_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__62598 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__62598__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__62598);
var G__62598__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62598__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__62598__$1);
var G__62598__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__62598__$2);
var G__62598__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62598__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__62598__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62598__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__62598__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62551__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__62616){
var map__62618 = p__62616;
var map__62618__$1 = cljs.core.__destructure_map(map__62618);
var triage_data = map__62618__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__62632 = phase;
var G__62632__$1 = (((G__62632 instanceof cljs.core.Keyword))?G__62632.fqn:null);
switch (G__62632__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__62639 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__62640 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62641 = loc;
var G__62642 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62649_63010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62650_63011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62651_63012 = true;
var _STAR_print_fn_STAR__temp_val__62652_63013 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62651_63012);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62652_63013);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62607_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62607_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62650_63011);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62649_63010);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62639,G__62640,G__62641,G__62642) : format.call(null,G__62639,G__62640,G__62641,G__62642));

break;
case "macroexpansion":
var G__62665 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__62666 = cause_type;
var G__62667 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62668 = loc;
var G__62669 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62665,G__62666,G__62667,G__62668,G__62669) : format.call(null,G__62665,G__62666,G__62667,G__62668,G__62669));

break;
case "compile-syntax-check":
var G__62672 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__62673 = cause_type;
var G__62674 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62675 = loc;
var G__62676 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62672,G__62673,G__62674,G__62675,G__62676) : format.call(null,G__62672,G__62673,G__62674,G__62675,G__62676));

break;
case "compilation":
var G__62677 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__62678 = cause_type;
var G__62679 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62680 = loc;
var G__62681 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62677,G__62678,G__62679,G__62680,G__62681) : format.call(null,G__62677,G__62678,G__62679,G__62680,G__62681));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__62682 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__62683 = symbol;
var G__62684 = loc;
var G__62685 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62690_63018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62691_63019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62692_63020 = true;
var _STAR_print_fn_STAR__temp_val__62693_63021 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62692_63020);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62693_63021);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62608_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__62608_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62691_63019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62690_63018);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__62682,G__62683,G__62684,G__62685) : format.call(null,G__62682,G__62683,G__62684,G__62685));
} else {
var G__62697 = "Execution error%s at %s(%s).\n%s\n";
var G__62698 = cause_type;
var G__62699 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__62700 = loc;
var G__62701 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__62697,G__62698,G__62699,G__62700,G__62701) : format.call(null,G__62697,G__62698,G__62699,G__62700,G__62701));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62632__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
