Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _CollectionReference=require('./CollectionReference');var _CollectionReference2=_interopRequireDefault(_CollectionReference);
var _DocumentSnapshot=require('./DocumentSnapshot');var _DocumentSnapshot2=_interopRequireDefault(_DocumentSnapshot);
var _utils=require('./utils');
var _serialize=require('./utils/serialize');
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _utils2=require('../../utils');
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var




















DocumentReference=function(){



function DocumentReference(firestore,documentPath){_classCallCheck(this,DocumentReference);
this._documentPath=documentPath;
this._firestore=firestore;
}_createClass(DocumentReference,[{key:'collection',value:function collection(



















collectionPath){
var path=this._documentPath.child(collectionPath);
if(!path.isCollection){
throw new Error('Argument "collectionPath" must point to a collection.');
}

return new _CollectionReference2.default(this._firestore,path);
}},{key:'delete',value:function _delete()

{
return(0,_native.getNativeModule)(this._firestore).documentDelete(this.path);
}},{key:'get',value:function get()

{var _this=this;
return(0,_native.getNativeModule)(this._firestore).
documentGet(this.path).
then(function(result){return new _DocumentSnapshot2.default(_this._firestore,result);});
}},{key:'onSnapshot',value:function onSnapshot(


optionsOrObserverOrOnNext,
observerOrOnNextOrOnError,
onError)
{var _this2=this;
var observer=void 0;
var docListenOptions={};

if((0,_utils2.isFunction)(optionsOrObserverOrOnNext)){
if(observerOrOnNextOrOnError&&!(0,_utils2.isFunction)(observerOrOnNextOrOnError)){
throw new Error(
'DocumentReference.onSnapshot failed: Second argument must be a valid function.');

}

observer={
next:optionsOrObserverOrOnNext,
error:observerOrOnNextOrOnError};

}else if(
optionsOrObserverOrOnNext&&
(0,_utils2.isObject)(optionsOrObserverOrOnNext))
{

if(optionsOrObserverOrOnNext.next){
if((0,_utils2.isFunction)(optionsOrObserverOrOnNext.next)){
if(
optionsOrObserverOrOnNext.error&&
!(0,_utils2.isFunction)(optionsOrObserverOrOnNext.error))
{
throw new Error(
'DocumentReference.onSnapshot failed: Observer.error must be a valid function.');

}

observer={
next:optionsOrObserverOrOnNext.next,
error:optionsOrObserverOrOnNext.error};

}else{
throw new Error(
'DocumentReference.onSnapshot failed: Observer.next must be a valid function.');

}
}else if(
Object.prototype.hasOwnProperty.call(
optionsOrObserverOrOnNext,
'includeMetadataChanges'))

{
docListenOptions=optionsOrObserverOrOnNext;

if((0,_utils2.isFunction)(observerOrOnNextOrOnError)){
if(onError&&!(0,_utils2.isFunction)(onError)){
throw new Error(
'DocumentReference.onSnapshot failed: Third argument must be a valid function.');

}

observer={
next:observerOrOnNextOrOnError,
error:onError};


}else if(
observerOrOnNextOrOnError&&
(0,_utils2.isObject)(observerOrOnNextOrOnError)&&
observerOrOnNextOrOnError.next)
{
if((0,_utils2.isFunction)(observerOrOnNextOrOnError.next)){
if(
observerOrOnNextOrOnError.error&&
!(0,_utils2.isFunction)(observerOrOnNextOrOnError.error))
{
throw new Error(
'DocumentReference.onSnapshot failed: Observer.error must be a valid function.');

}
observer={
next:observerOrOnNextOrOnError.next,
error:observerOrOnNextOrOnError.error};

}else{
throw new Error(
'DocumentReference.onSnapshot failed: Observer.next must be a valid function.');

}
}else{
throw new Error(
'DocumentReference.onSnapshot failed: Second argument must be a function or observer.');

}
}else{
throw new Error(
'DocumentReference.onSnapshot failed: First argument must be a function, observer or options.');

}
}else{
throw new Error(
'DocumentReference.onSnapshot failed: Called with invalid arguments.');

}
var listenerId=(0,_utils2.firestoreAutoId)();

var listener=function listener(nativeDocumentSnapshot){
var documentSnapshot=new _DocumentSnapshot2.default(
_this2.firestore,
nativeDocumentSnapshot);

observer.next(documentSnapshot);
};


_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this._firestore,'onDocumentSnapshot:'+listenerId),
listener);



if(observer.error){
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(
this._firestore,'onDocumentSnapshotError:'+
listenerId),

observer.error);

}


(0,_native.getNativeModule)(this._firestore).documentOnSnapshot(
this.path,
listenerId,
docListenOptions);



return this._offDocumentSnapshot.bind(this,listenerId,listener);
}},{key:'set',value:function set(

data,options){
var nativeData=(0,_serialize.buildNativeMap)(data);
return(0,_native.getNativeModule)(this._firestore).documentSet(
this.path,
nativeData,
options);

}},{key:'update',value:function update()

{for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
var data=(0,_utils.parseUpdateArgs)(args,'DocumentReference.update');
var nativeData=(0,_serialize.buildNativeMap)(data);
return(0,_native.getNativeModule)(this._firestore).documentUpdate(
this.path,
nativeData);

}},{key:'_offDocumentSnapshot',value:function _offDocumentSnapshot(









listenerId,listener){
(0,_log.getLogger)(this._firestore).info('Removing onDocumentSnapshot listener');
_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(this._firestore,'onDocumentSnapshot:'+listenerId),
listener);

_events.SharedEventEmitter.removeListener(
(0,_events.getAppEventName)(this._firestore,'onDocumentSnapshotError:'+listenerId),
listener);

(0,_native.getNativeModule)(this._firestore).documentOffSnapshot(this.path,listenerId);
}},{key:'firestore',get:function get(){return this._firestore;}},{key:'id',get:function get(){return this._documentPath.id;}},{key:'parent',get:function get(){var parentPath=this._documentPath.parent();return new _CollectionReference2.default(this._firestore,parentPath);}},{key:'path',get:function get(){return this._documentPath.relativeName;}}]);return DocumentReference;}();exports.default=DocumentReference;