import "./cljs_env.js";
goog.provide('editscript.edit');

/**
 * @interface
 */
editscript.edit.IEdit = function(){};

var editscript$edit$IEdit$auto_sizing$dyn_66940 = (function (this$,path,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.auto_sizing[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4551__auto__.call(null,this$,path,value));
} else {
var m__4549__auto__ = (editscript.edit.auto_sizing["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4549__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.auto-sizing",this$);
}
}
});
editscript.edit.auto_sizing = (function editscript$edit$auto_sizing(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$auto_sizing$arity$3 == null)))))){
return this$.editscript$edit$IEdit$auto_sizing$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$auto_sizing$dyn_66940(this$,path,value);
}
});

var editscript$edit$IEdit$add_data$dyn_66941 = (function (this$,path,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.add_data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4551__auto__.call(null,this$,path,value));
} else {
var m__4549__auto__ = (editscript.edit.add_data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4549__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.add-data",this$);
}
}
});
editscript.edit.add_data = (function editscript$edit$add_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$add_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$add_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$add_data$dyn_66941(this$,path,value);
}
});

var editscript$edit$IEdit$delete_data$dyn_66943 = (function (this$,path){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.delete_data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4551__auto__.call(null,this$,path));
} else {
var m__4549__auto__ = (editscript.edit.delete_data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4549__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("IEdit.delete-data",this$);
}
}
});
editscript.edit.delete_data = (function editscript$edit$delete_data(this$,path){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$delete_data$arity$2 == null)))))){
return this$.editscript$edit$IEdit$delete_data$arity$2(this$,path);
} else {
return editscript$edit$IEdit$delete_data$dyn_66943(this$,path);
}
});

var editscript$edit$IEdit$replace_data$dyn_66944 = (function (this$,path,value){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.replace_data[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4551__auto__.call(null,this$,path,value));
} else {
var m__4549__auto__ = (editscript.edit.replace_data["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,value) : m__4549__auto__.call(null,this$,path,value));
} else {
throw cljs.core.missing_protocol("IEdit.replace-data",this$);
}
}
});
editscript.edit.replace_data = (function editscript$edit$replace_data(this$,path,value){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_data$arity$3 == null)))))){
return this$.editscript$edit$IEdit$replace_data$arity$3(this$,path,value);
} else {
return editscript$edit$IEdit$replace_data$dyn_66944(this$,path,value);
}
});

var editscript$edit$IEdit$replace_str$dyn_66945 = (function (this$,path,ops,level){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.replace_str[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__4551__auto__.call(null,this$,path,ops,level));
} else {
var m__4549__auto__ = (editscript.edit.replace_str["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(this$,path,ops,level) : m__4549__auto__.call(null,this$,path,ops,level));
} else {
throw cljs.core.missing_protocol("IEdit.replace-str",this$);
}
}
});
editscript.edit.replace_str = (function editscript$edit$replace_str(this$,path,ops,level){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEdit$replace_str$arity$4 == null)))))){
return this$.editscript$edit$IEdit$replace_str$arity$4(this$,path,ops,level);
} else {
return editscript$edit$IEdit$replace_str$dyn_66945(this$,path,ops,level);
}
});


/**
 * @interface
 */
editscript.edit.IEditScript = function(){};

var editscript$edit$IEditScript$combine$dyn_66947 = (function (this$,that){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.combine[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4551__auto__.call(null,this$,that));
} else {
var m__4549__auto__ = (editscript.edit.combine["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4549__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("IEditScript.combine",this$);
}
}
});
/**
 * Concate that editscript onto this editscript, return the new editscript
 */
editscript.edit.combine = (function editscript$edit$combine(this$,that){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$combine$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$combine$arity$2(this$,that);
} else {
return editscript$edit$IEditScript$combine$dyn_66947(this$,that);
}
});

var editscript$edit$IEditScript$get_size$dyn_66948 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_size[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_size["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-size",this$);
}
}
});
/**
 * Report the size of the editscript
 */
editscript.edit.get_size = (function editscript$edit$get_size(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_size$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_size$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_size$dyn_66948(this$);
}
});

var editscript$edit$IEditScript$set_size$dyn_66949 = (function (this$,size){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.set_size[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__4551__auto__.call(null,this$,size));
} else {
var m__4549__auto__ = (editscript.edit.set_size["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,size) : m__4549__auto__.call(null,this$,size));
} else {
throw cljs.core.missing_protocol("IEditScript.set-size",this$);
}
}
});
/**
 * Set the size, return the script
 */
editscript.edit.set_size = (function editscript$edit$set_size(this$,size){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$set_size$arity$2 == null)))))){
return this$.editscript$edit$IEditScript$set_size$arity$2(this$,size);
} else {
return editscript$edit$IEditScript$set_size$dyn_66949(this$,size);
}
});

var editscript$edit$IEditScript$edit_distance$dyn_66950 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.edit_distance[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.edit_distance["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.edit-distance",this$);
}
}
});
/**
 * Report the edit distance, i.e number of operations
 */
editscript.edit.edit_distance = (function editscript$edit$edit_distance(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$edit_distance$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$edit_distance$arity$1(this$);
} else {
return editscript$edit$IEditScript$edit_distance$dyn_66950(this$);
}
});

var editscript$edit$IEditScript$get_edits$dyn_66951 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_edits[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_edits["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-edits",this$);
}
}
});
/**
 * Report the edits as a vector
 */
editscript.edit.get_edits = (function editscript$edit$get_edits(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_edits$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_edits$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_edits$dyn_66951(this$);
}
});

var editscript$edit$IEditScript$get_adds_num$dyn_66952 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_adds_num[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_adds_num["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-adds-num",this$);
}
}
});
/**
 * Report the number of additions
 */
editscript.edit.get_adds_num = (function editscript$edit$get_adds_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_adds_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_adds_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_adds_num$dyn_66952(this$);
}
});

var editscript$edit$IEditScript$get_dels_num$dyn_66953 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_dels_num[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_dels_num["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-dels-num",this$);
}
}
});
/**
 * Report the number of deletions
 */
editscript.edit.get_dels_num = (function editscript$edit$get_dels_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_dels_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_dels_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_dels_num$dyn_66953(this$);
}
});

var editscript$edit$IEditScript$get_reps_num$dyn_66954 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_reps_num[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_reps_num["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditScript.get-reps-num",this$);
}
}
});
/**
 * Report the number of replacements
 */
editscript.edit.get_reps_num = (function editscript$edit$get_reps_num(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IEditScript$get_reps_num$arity$1 == null)))))){
return this$.editscript$edit$IEditScript$get_reps_num$arity$1(this$);
} else {
return editscript$edit$IEditScript$get_reps_num$dyn_66954(this$);
}
});


/**
 * @interface
 */
editscript.edit.IType = function(){};

var editscript$edit$IType$get_type$dyn_66956 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (editscript.edit.get_type[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (editscript.edit.get_type["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IType.get-type",this$);
}
}
});
/**
 * Return a type keyword, :val, :map, :lst, etc.
 */
editscript.edit.get_type = (function editscript$edit$get_type(this$){
if((((!((this$ == null)))) && ((!((this$.editscript$edit$IType$get_type$arity$1 == null)))))){
return this$.editscript$edit$IType$get_type$arity$1(this$);
} else {
return editscript$edit$IType$get_type$dyn_66956(this$);
}
});

/**
 * A special type means 'not present'
 */
editscript.edit.nada = (function editscript$edit$nada(){
if((typeof editscript !== 'undefined') && (typeof editscript.edit !== 'undefined') && (typeof editscript.edit.t_editscript$edit66809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {editscript.edit.IType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
editscript.edit.t_editscript$edit66809 = (function (meta66810){
this.meta66810 = meta66810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(editscript.edit.t_editscript$edit66809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66811,meta66810__$1){
var self__ = this;
var _66811__$1 = this;
return (new editscript.edit.t_editscript$edit66809(meta66810__$1));
}));

(editscript.edit.t_editscript$edit66809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66811){
var self__ = this;
var _66811__$1 = this;
return self__.meta66810;
}));

(editscript.edit.t_editscript$edit66809.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.t_editscript$edit66809.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"nil","nil",99600501);
}));

(editscript.edit.t_editscript$edit66809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66810","meta66810",-1634649187,null)], null);
}));

(editscript.edit.t_editscript$edit66809.cljs$lang$type = true);

(editscript.edit.t_editscript$edit66809.cljs$lang$ctorStr = "editscript.edit/t_editscript$edit66809");

(editscript.edit.t_editscript$edit66809.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"editscript.edit/t_editscript$edit66809");
}));

/**
 * Positional factory function for editscript.edit/t_editscript$edit66809.
 */
editscript.edit.__GT_t_editscript$edit66809 = (function editscript$edit$nada_$___GT_t_editscript$edit66809(meta66810){
return (new editscript.edit.t_editscript$edit66809(meta66810));
});

}

return (new editscript.edit.t_editscript$edit66809(cljs.core.PersistentArrayMap.EMPTY));
});
(editscript.edit.IType["null"] = true);

(editscript.edit.get_type["null"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.MapEntry.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.Cons.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.Subvec.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["_"] = true);

(editscript.edit.get_type["_"] = (function (_){
return new cljs.core.Keyword(null,"val","val",128701612);
}));

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"set","set",304602554);
}));

(cljs.core.PersistentVector.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"vec","vec",-657847931);
}));

(editscript.edit.IType["string"] = true);

(editscript.edit.get_type["string"] = (function (_){
return new cljs.core.Keyword(null,"str","str",1089608819);
}));

(cljs.core.EmptyList.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"map","map",1371690461);
}));

(cljs.core.List.prototype.editscript$edit$IType$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.editscript$edit$IType$get_type$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword(null,"lst","lst",269745987);
}));
editscript.edit.sizing_STAR_ = (function editscript$edit$sizing_STAR_(data,size){
var up = (function (s){
return (s + (1));
});
if(cljs.core.truth_((function (){var G__66817 = editscript.edit.get_type(data);
var fexpr__66816 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lst","lst",269745987),null,new cljs.core.Keyword(null,"vec","vec",-657847931),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__66816.cljs$core$IFn$_invoke$arity$1 ? fexpr__66816.cljs$core$IFn$_invoke$arity$1(G__66817) : fexpr__66816.call(null,G__66817));
})())){
cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));

var seq__66818 = cljs.core.seq(data);
var chunk__66819 = null;
var count__66820 = (0);
var i__66821 = (0);
while(true){
if((i__66821 < count__66820)){
var child = chunk__66819.cljs$core$IIndexed$_nth$arity$2(null,i__66821);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__66958 = seq__66818;
var G__66959 = chunk__66819;
var G__66960 = count__66820;
var G__66961 = (i__66821 + (1));
seq__66818 = G__66958;
chunk__66819 = G__66959;
count__66820 = G__66960;
i__66821 = G__66961;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66818);
if(temp__5753__auto__){
var seq__66818__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66818__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__66818__$1);
var G__66962 = cljs.core.chunk_rest(seq__66818__$1);
var G__66963 = c__4679__auto__;
var G__66964 = cljs.core.count(c__4679__auto__);
var G__66965 = (0);
seq__66818 = G__66962;
chunk__66819 = G__66963;
count__66820 = G__66964;
i__66821 = G__66965;
continue;
} else {
var child = cljs.core.first(seq__66818__$1);
(editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2 ? editscript.edit.sizing_STAR_.cljs$core$IFn$_invoke$arity$2(child,size) : editscript.edit.sizing_STAR_.call(null,child,size));


var G__66966 = cljs.core.next(seq__66818__$1);
var G__66967 = null;
var G__66968 = (0);
var G__66969 = (0);
seq__66818 = G__66966;
chunk__66819 = G__66967;
count__66820 = G__66968;
i__66821 = G__66969;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return cljs.core._vreset_BANG_(size,up(cljs.core._deref(size)));
}
});
editscript.edit.sizing = (function editscript$edit$sizing(data){
var size = cljs.core.volatile_BANG_((0));
editscript.edit.sizing_STAR_(data,size);

return cljs.core.deref(size);
});

/**
* @constructor
 * @implements {editscript.edit.IEditScript}
 * @implements {editscript.edit.IEdit}
*/
editscript.edit.EditScript = (function (edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
this.edits = edits;
this.auto_sizing_QMARK_ = auto_sizing_QMARK_;
this.size = size;
this.adds_num = adds_num;
this.dels_num = dels_num;
this.reps_num = reps_num;
});
(editscript.edit.EditScript.prototype.editscript$edit$IEdit$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$auto_sizing$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
if(self__.auto_sizing_QMARK_){
(self__.size = cljs.core.long$(((((2) + self__.size) + editscript.edit.sizing(path)) + (cljs.core.truth_(value)?editscript.edit.sizing(value):(0)))));
} else {
}

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$add_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.adds_num = (self__.adds_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"+","+",1913524883),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$delete_data$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
(self__.dels_num = (self__.dels_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"-","-",-2112348439)], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,null);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_data$arity$3 = (function (this$,path,value){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new cljs.core.Keyword(null,"r","r",-471384190),value], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,value);
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEdit$replace_str$arity$4 = (function (this$,path,ops,level){
var self__ = this;
var this$__$1 = this;
(self__.reps_num = (self__.reps_num + (1)));

(self__.edits = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.edits,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,(function (){var G__66826 = level;
var G__66826__$1 = (((G__66826 instanceof cljs.core.Keyword))?G__66826.fqn:null);
switch (G__66826__$1) {
case "character":
return new cljs.core.Keyword(null,"s","s",1705939918);

break;
case "word":
return new cljs.core.Keyword(null,"sw","sw",833113913);

break;
case "line":
return new cljs.core.Keyword(null,"sl","sl",1007549161);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66826__$1)].join('')));

}
})(),ops], null)));

return this$__$1.editscript$edit$IEdit$auto_sizing$arity$3(null,path,"");
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$combine$arity$2 = (function (_,that){
var self__ = this;
var ___$1 = this;
return (new editscript.edit.EditScript(cljs.core.into.cljs$core$IFn$_invoke$arity$2(self__.edits,editscript.edit.get_edits(that)),self__.auto_sizing_QMARK_,(self__.size + editscript.edit.get_size(that)),(self__.adds_num + editscript.edit.get_adds_num(that)),(self__.dels_num + editscript.edit.get_dels_num(that)),(self__.reps_num + editscript.edit.get_reps_num(that))));
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_size$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$set_size$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
(self__.size = cljs.core.long$(s));

return this$__$1;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_edits$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.edits;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_adds_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.adds_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_dels_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.dels_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$get_reps_num$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.reps_num;
}));

(editscript.edit.EditScript.prototype.editscript$edit$IEditScript$edit_distance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.adds_num + self__.dels_num) + self__.reps_num);
}));

(editscript.edit.EditScript.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"edits","edits",-599366147,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-sizing?","auto-sizing?",-1705546383,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"adds-num","adds-num",-1467287693,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dels-num","dels-num",819513451,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"reps-num","reps-num",582946575,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(editscript.edit.EditScript.cljs$lang$type = true);

(editscript.edit.EditScript.cljs$lang$ctorStr = "editscript.edit/EditScript");

(editscript.edit.EditScript.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"editscript.edit/EditScript");
}));

/**
 * Positional factory function for editscript.edit/EditScript.
 */
editscript.edit.__GT_EditScript = (function editscript$edit$__GT_EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num){
return (new editscript.edit.EditScript(edits,auto_sizing_QMARK_,size,adds_num,dels_num,reps_num));
});

editscript.edit.valid_str_edits_QMARK_ = (function editscript$edit$valid_str_edits_QMARK_(data,level){
return ((cljs.core.vector_QMARK_(data)) && (cljs.core.every_QMARK_((function (x){
var or__4253__auto__ = cljs.core.nat_int_QMARK_(x);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var and__4251__auto____$1 = cljs.core.vector_QMARK_(x);
if(and__4251__auto____$1){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x));
if(and__4251__auto____$2){
var vec__66841 = x;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66841,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66841,(1),null);
var and__4251__auto____$3 = (function (){var fexpr__66844 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null);
return (fexpr__66844.cljs$core$IFn$_invoke$arity$1 ? fexpr__66844.cljs$core$IFn$_invoke$arity$1(op) : fexpr__66844.call(null,op));
})();
if(cljs.core.truth_(and__4251__auto____$3)){
var G__66845 = op;
var G__66845__$1 = (((G__66845 instanceof cljs.core.Keyword))?G__66845.fqn:null);
switch (G__66845__$1) {
case "-":
return cljs.core.nat_int_QMARK_(y);

break;
case "+":
case "r":
var G__66847 = level;
var G__66847__$1 = (((G__66847 instanceof cljs.core.Keyword))?G__66847.fqn:null);
switch (G__66847__$1) {
case "s":
return typeof y === 'string';

break;
case "sl":
case "sw":
return cljs.core.vector_QMARK_(y);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66847__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66845__$1)].join('')));

}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
}
}),data)));
});
editscript.edit.valid_edit_QMARK_ = (function editscript$edit$valid_edit_QMARK_(edit){
if(cljs.core.vector_QMARK_(edit)){
var c = cljs.core.count(edit);
if(((((1) < c)) && ((c < (4))))){
var vec__66855 = edit;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66855,(0),null);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66855,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66855,(2),null);
var and__4251__auto__ = cljs.core.vector_QMARK_(path);
if(and__4251__auto__){
var and__4251__auto____$1 = (function (){var fexpr__66858 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__66858.cljs$core$IFn$_invoke$arity$1 ? fexpr__66858.cljs$core$IFn$_invoke$arity$1(op) : fexpr__66858.call(null,op));
})();
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),op))?(data == null):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(3)));
if(and__4251__auto____$2){
if(cljs.core.truth_((function (){var fexpr__66859 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sl","sl",1007549161),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"sw","sw",833113913),null], null), null);
return (fexpr__66859.cljs$core$IFn$_invoke$arity$1 ? fexpr__66859.cljs$core$IFn$_invoke$arity$1(op) : fexpr__66859.call(null,op));
})())){
return editscript.edit.valid_str_edits_QMARK_(data,op);
} else {
return true;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
} else {
return null;
}
} else {
return null;
}
});
editscript.edit.valid_edits_QMARK_ = (function editscript$edit$valid_edits_QMARK_(edits){
if(cljs.core.vector_QMARK_(edits)){
if(cljs.core.seq(edits)){
return cljs.core.every_QMARK_(editscript.edit.valid_edit_QMARK_,edits);
} else {
return true;
}
} else {
return null;
}
});
editscript.edit.count_str_ops = (function editscript$edit$count_str_ops(data,adds,dels,reps){
var seq__66862 = cljs.core.seq(data);
var chunk__66864 = null;
var count__66865 = (0);
var i__66866 = (0);
while(true){
if((i__66866 < count__66865)){
var d = chunk__66864.cljs$core$IIndexed$_nth$arity$2(null,i__66866);
if(cljs.core.vector_QMARK_(d)){
var G__66881_66979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__66881_66980__$1 = (((G__66881_66979 instanceof cljs.core.Keyword))?G__66881_66979.fqn:null);
switch (G__66881_66980__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66881_66980__$1)].join('')));

}


var G__66982 = seq__66862;
var G__66983 = chunk__66864;
var G__66984 = count__66865;
var G__66985 = (i__66866 + (1));
seq__66862 = G__66982;
chunk__66864 = G__66983;
count__66865 = G__66984;
i__66866 = G__66985;
continue;
} else {
var G__66986 = seq__66862;
var G__66987 = chunk__66864;
var G__66988 = count__66865;
var G__66989 = (i__66866 + (1));
seq__66862 = G__66986;
chunk__66864 = G__66987;
count__66865 = G__66988;
i__66866 = G__66989;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66862);
if(temp__5753__auto__){
var seq__66862__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66862__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__66862__$1);
var G__66990 = cljs.core.chunk_rest(seq__66862__$1);
var G__66991 = c__4679__auto__;
var G__66992 = cljs.core.count(c__4679__auto__);
var G__66993 = (0);
seq__66862 = G__66990;
chunk__66864 = G__66991;
count__66865 = G__66992;
i__66866 = G__66993;
continue;
} else {
var d = cljs.core.first(seq__66862__$1);
if(cljs.core.vector_QMARK_(d)){
var G__66884_66994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(d,(0));
var G__66884_66995__$1 = (((G__66884_66994 instanceof cljs.core.Keyword))?G__66884_66994.fqn:null);
switch (G__66884_66995__$1) {
case "+":
cljs.core._vreset_BANG_(adds,(cljs.core._deref(adds) + (1)));

break;
case "-":
cljs.core._vreset_BANG_(dels,(cljs.core._deref(dels) + (1)));

break;
case "r":
cljs.core._vreset_BANG_(reps,(cljs.core._deref(reps) + (1)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66884_66995__$1)].join('')));

}


var G__66997 = cljs.core.next(seq__66862__$1);
var G__66998 = null;
var G__66999 = (0);
var G__67000 = (0);
seq__66862 = G__66997;
chunk__66864 = G__66998;
count__66865 = G__66999;
i__66866 = G__67000;
continue;
} else {
var G__67001 = cljs.core.next(seq__66862__$1);
var G__67002 = null;
var G__67003 = (0);
var G__67004 = (0);
seq__66862 = G__67001;
chunk__66864 = G__67002;
count__66865 = G__67003;
i__66866 = G__67004;
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
editscript.edit.count_ops = (function editscript$edit$count_ops(edits){
var adds = cljs.core.volatile_BANG_((0));
var dels = cljs.core.volatile_BANG_((0));
var reps = cljs.core.volatile_BANG_((0));
var seq__66894_67005 = cljs.core.seq(edits);
var chunk__66895_67006 = null;
var count__66896_67007 = (0);
var i__66897_67008 = (0);
while(true){
if((i__66897_67008 < count__66896_67007)){
var vec__66929_67009 = chunk__66895_67006.cljs$core$IIndexed$_nth$arity$2(null,i__66897_67008);
var __67010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66929_67009,(0),null);
var op_67011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66929_67009,(1),null);
var data_67012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66929_67009,(2),null);
var G__66932_67017 = op_67011;
var G__66932_67018__$1 = (((G__66932_67017 instanceof cljs.core.Keyword))?G__66932_67017.fqn:null);
switch (G__66932_67018__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_67012,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66932_67018__$1)].join('')));

}


var G__67021 = seq__66894_67005;
var G__67022 = chunk__66895_67006;
var G__67023 = count__66896_67007;
var G__67024 = (i__66897_67008 + (1));
seq__66894_67005 = G__67021;
chunk__66895_67006 = G__67022;
count__66896_67007 = G__67023;
i__66897_67008 = G__67024;
continue;
} else {
var temp__5753__auto___67025 = cljs.core.seq(seq__66894_67005);
if(temp__5753__auto___67025){
var seq__66894_67026__$1 = temp__5753__auto___67025;
if(cljs.core.chunked_seq_QMARK_(seq__66894_67026__$1)){
var c__4679__auto___67027 = cljs.core.chunk_first(seq__66894_67026__$1);
var G__67031 = cljs.core.chunk_rest(seq__66894_67026__$1);
var G__67032 = c__4679__auto___67027;
var G__67033 = cljs.core.count(c__4679__auto___67027);
var G__67034 = (0);
seq__66894_67005 = G__67031;
chunk__66895_67006 = G__67032;
count__66896_67007 = G__67033;
i__66897_67008 = G__67034;
continue;
} else {
var vec__66933_67035 = cljs.core.first(seq__66894_67026__$1);
var __67036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933_67035,(0),null);
var op_67037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933_67035,(1),null);
var data_67038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933_67035,(2),null);
var G__66936_67041 = op_67037;
var G__66936_67042__$1 = (((G__66936_67041 instanceof cljs.core.Keyword))?G__66936_67041.fqn:null);
switch (G__66936_67042__$1) {
case "+":
adds.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(adds.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "-":
dels.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(dels.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "r":
reps.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(reps.cljs$core$IDeref$_deref$arity$1(null) + (1)));

break;
case "s":
case "sw":
case "sl":
editscript.edit.count_str_ops(data_67038,adds,dels,reps);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66936_67042__$1)].join('')));

}


var G__67047 = cljs.core.next(seq__66894_67026__$1);
var G__67048 = null;
var G__67049 = (0);
var G__67050 = (0);
seq__66894_67005 = G__67047;
chunk__66895_67006 = G__67048;
count__66896_67007 = G__67049;
i__66897_67008 = G__67050;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(adds),cljs.core.deref(dels),cljs.core.deref(reps)], null);
});
/**
 * Create an EditScript instance from a vector of edits, like those obtained
 *   through calling `get-edits` on an EditScript
 */
editscript.edit.edits__GT_script = (function editscript$edit$edits__GT_script(edits){
if(cljs.core.truth_(editscript.edit.valid_edits_QMARK_(edits))){
} else {
throw (new Error(["Assert failed: ","Not a vector of valid edits","\n","(valid-edits? edits)"].join('')));
}

var vec__66937 = editscript.edit.count_ops(edits);
var adds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66937,(0),null);
var dels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66937,(1),null);
var reps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66937,(2),null);
return editscript.edit.__GT_EditScript(edits,true,editscript.edit.sizing(edits),adds,dels,reps);
});
(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(editscript.edit.EditScript.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,opts){
var o__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(o__$1.editscript$edit$IEditScript$get_edits$arity$1(null))], 0));
}));

//# sourceMappingURL=editscript.edit.js.map
