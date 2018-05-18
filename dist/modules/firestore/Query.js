Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _DocumentSnapshot=require('./DocumentSnapshot');var _DocumentSnapshot2=_interopRequireDefault(_DocumentSnapshot);
var _FieldPath=require('./FieldPath');var _FieldPath2=_interopRequireDefault(_FieldPath);
var _QuerySnapshot=require('./QuerySnapshot');var _QuerySnapshot2=_interopRequireDefault(_QuerySnapshot);
var _serialize=require('./utils/serialize');
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _utils=require('../../utils');
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var DIRECTIONS={
ASC:'ASCENDING',
asc:'ASCENDING',
DESC:'DESCENDING',
desc:'DESCENDING'};


var OPERATORS={
'=':'EQUAL',
'==':'EQUAL',
'>':'GREATER_THAN',
'>=':'GREATER_THAN_OR_EQUAL',
'<':'LESS_THAN',
'<=':'LESS_THAN_OR_EQUAL'};


































var buildNativeFieldPath=function buildNativeFieldPath(
fieldPath)
{
if(fieldPath instanceof _FieldPath2.default){
return{
elements:fieldPath._segments,
type:'fieldpath'};

}
return{
string:fieldPath,
type:'string'};

};var




Query=function(){







function Query(
firestore,
path,
fieldFilters,
fieldOrders,
queryOptions)
{_classCallCheck(this,Query);
this._fieldFilters=fieldFilters||[];
this._fieldOrders=fieldOrders||[];
this._firestore=firestore;
this._queryOptions=queryOptions||{};
this._referencePath=path;
}_createClass(Query,[{key:'endAt',value:function endAt()





{for(var _len=arguments.length,snapshotOrVarArgs=Array(_len),_key=0;_key<_len;_key++){snapshotOrVarArgs[_key]=arguments[_key];}
var options=_extends({},
this._queryOptions,{
endAt:this._buildOrderByOption(snapshotOrVarArgs)});


return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
this._fieldOrders,
options);

}},{key:'endBefore',value:function endBefore()

{for(var _len2=arguments.length,snapshotOrVarArgs=Array(_len2),_key2=0;_key2<_len2;_key2++){snapshotOrVarArgs[_key2]=arguments[_key2];}
var options=_extends({},
this._queryOptions,{
endBefore:this._buildOrderByOption(snapshotOrVarArgs)});


return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
this._fieldOrders,
options);

}},{key:'get',value:function get()

{var _this=this;
return(0,_native.getNativeModule)(this._firestore).
collectionGet(
this._referencePath.relativeName,
this._fieldFilters,
this._fieldOrders,
this._queryOptions).

then(function(nativeData){return new _QuerySnapshot2.default(_this._firestore,_this,nativeData);});
}},{key:'limit',value:function(_limit){function limit(_x){return _limit.apply(this,arguments);}limit.toString=function(){return _limit.toString();};return limit;}(function(

limit){



var options=_extends({},
this._queryOptions,{
limit:limit});

return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
this._fieldOrders,
options);

})},{key:'onSnapshot',value:function onSnapshot(


optionsOrObserverOrOnNext,
observerOrOnNextOrOnError,
onError)
{var _this2=this;
var observer=void 0;
var metadataChanges={};

if((0,_utils.isFunction)(optionsOrObserverOrOnNext)){
if(observerOrOnNextOrOnError&&!(0,_utils.isFunction)(observerOrOnNextOrOnError)){
throw new Error(
'Query.onSnapshot failed: Second argument must be a valid function.');

}

observer={
next:optionsOrObserverOrOnNext,
error:observerOrOnNextOrOnError};

}else if(
optionsOrObserverOrOnNext&&
(0,_utils.isObject)(optionsOrObserverOrOnNext))
{

if(optionsOrObserverOrOnNext.next){
if((0,_utils.isFunction)(optionsOrObserverOrOnNext.next)){
if(
optionsOrObserverOrOnNext.error&&
!(0,_utils.isFunction)(optionsOrObserverOrOnNext.error))
{
throw new Error(
'Query.onSnapshot failed: Observer.error must be a valid function.');

}

observer={
next:optionsOrObserverOrOnNext.next,
error:optionsOrObserverOrOnNext.error};

}else{
throw new Error(
'Query.onSnapshot failed: Observer.next must be a valid function.');

}
}else if(
Object.prototype.hasOwnProperty.call(
optionsOrObserverOrOnNext,
'includeMetadataChanges'))

{
metadataChanges=optionsOrObserverOrOnNext;

if((0,_utils.isFunction)(observerOrOnNextOrOnError)){
if(onError&&!(0,_utils.isFunction)(onError)){
throw new Error(
'Query.onSnapshot failed: Third argument must be a valid function.');

}

observer={
next:observerOrOnNextOrOnError,
error:onError};


}else if(
observerOrOnNextOrOnError&&
(0,_utils.isObject)(observerOrOnNextOrOnError)&&
observerOrOnNextOrOnError.next)
{
if((0,_utils.isFunction)(observerOrOnNextOrOnError.next)){
if(
observerOrOnNextOrOnError.error&&
!(0,_utils.isFunction)(observerOrOnNextOrOnError.error))
{
throw new Error(
'Query.onSnapshot failed: Observer.error must be a valid function.');

}
observer={
next:observerOrOnNextOrOnError.next,
error:observerOrOnNextOrOnError.error};

}else{
throw new Error(
'Query.onSnapshot failed: Observer.next must be a valid function.');

}
}else{
throw new Error(
'Query.onSnapshot failed: Second argument must be a function or observer.');

}
}else{
throw new Error(
'Query.onSnapshot failed: First argument must be a function, observer or options.');

}
}else{
throw new Error(
'Query.onSnapshot failed: Called with invalid arguments.');

}
var listenerId=(0,_utils.firestoreAutoId)();

var listener=function listener(nativeQuerySnapshot){
var querySnapshot=new _QuerySnapshot2.default(
_this2._firestore,
_this2,
nativeQuerySnapshot);

observer.next(querySnapshot);
};


_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this._firestore,'onQuerySnapshot:'+listenerId),
listener);



if(observer.error){
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this._firestore,'onQuerySnapshotError:'+listenerId),
observer.error);

}


(0,_native.getNativeModule)(this._firestore).collectionOnSnapshot(
this._referencePath.relativeName,
this._fieldFilters,
this._fieldOrders,
this._queryOptions,
listenerId,
metadataChanges);



return this._offCollectionSnapshot.bind(this,listenerId,listener);
}},{key:'orderBy',value:function orderBy(


fieldPath)

{var directionStr=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'asc';




if(
this._queryOptions.startAt||
this._queryOptions.startAfter||
this._queryOptions.endAt||
this._queryOptions.endBefore)
{
throw new Error(
'Cannot specify an orderBy() constraint after calling '+
'startAt(), startAfter(), endBefore() or endAt().');

}

var newOrder={
direction:DIRECTIONS[directionStr],
fieldPath:buildNativeFieldPath(fieldPath)};

var combinedOrders=this._fieldOrders.concat(newOrder);
return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
combinedOrders,
this._queryOptions);

}},{key:'startAfter',value:function startAfter()

{for(var _len3=arguments.length,snapshotOrVarArgs=Array(_len3),_key3=0;_key3<_len3;_key3++){snapshotOrVarArgs[_key3]=arguments[_key3];}
var options=_extends({},
this._queryOptions,{
startAfter:this._buildOrderByOption(snapshotOrVarArgs)});


return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
this._fieldOrders,
options);

}},{key:'startAt',value:function startAt()

{for(var _len4=arguments.length,snapshotOrVarArgs=Array(_len4),_key4=0;_key4<_len4;_key4++){snapshotOrVarArgs[_key4]=arguments[_key4];}
var options=_extends({},
this._queryOptions,{
startAt:this._buildOrderByOption(snapshotOrVarArgs)});


return new Query(
this.firestore,
this._referencePath,
this._fieldFilters,
this._fieldOrders,
options);

}},{key:'where',value:function where(


fieldPath,
opStr,
value)
{



var nativeValue=(0,_serialize.buildTypeMap)(value);
var newFilter={
fieldPath:buildNativeFieldPath(fieldPath),
operator:OPERATORS[opStr],
value:nativeValue};

var combinedFilters=this._fieldFilters.concat(newFilter);
return new Query(
this.firestore,
this._referencePath,
combinedFilters,
this._fieldOrders,
this._queryOptions);

}},{key:'_buildOrderByOption',value:function _buildOrderByOption(





snapshotOrVarArgs){

var values=void 0;
if(
snapshotOrVarArgs.length===1&&
snapshotOrVarArgs[0]instanceof _DocumentSnapshot2.default)
{
var docSnapshot=snapshotOrVarArgs[0];
values=[];
for(var i=0;i<this._fieldOrders.length;i++){
var fieldOrder=this._fieldOrders[i];
if(
fieldOrder.fieldPath.type==='string'&&
fieldOrder.fieldPath.string)
{
values.push(docSnapshot.get(fieldOrder.fieldPath.string));
}else if(fieldOrder.fieldPath.fieldpath){
var _fieldPath=new(Function.prototype.bind.apply(_FieldPath2.default,[null].concat(_toConsumableArray(fieldOrder.fieldPath.fieldpath))))();
values.push(docSnapshot.get(_fieldPath));
}
}
}else{
values=snapshotOrVarArgs;
}

return(0,_serialize.buildNativeArray)(values);
}},{key:'_offCollectionSnapshot',value:function _offCollectionSnapshot(





listenerId,listener){
(0,_log.getLogger)(this._firestore).info('Removing onQuerySnapshot listener');
_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(this._firestore,'onQuerySnapshot:'+listenerId),
listener);

_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(this._firestore,'onQuerySnapshotError:'+listenerId),
listener);

(0,_native.getNativeModule)(this._firestore).collectionOffSnapshot(
this._referencePath.relativeName,
this._fieldFilters,
this._fieldOrders,
this._queryOptions,
listenerId);

}},{key:'firestore',get:function get(){return this._firestore;}}]);return Query;}();exports.default=Query;