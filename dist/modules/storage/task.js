Object.defineProperty(exports,"__esModule",{value:true});exports.DOWNLOAD_TASK=exports.UPLOAD_TASK=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _=require('./');
var _utils=require('./../../utils');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}



var UPLOAD_TASK=exports.UPLOAD_TASK='upload';
var DOWNLOAD_TASK=exports.DOWNLOAD_TASK='download';var


































StorageTask=function(){







function StorageTask(
type,
promise,
storageRef)
{_classCallCheck(this,StorageTask);
this.type=type;
this.ref=storageRef;
this.storage=storageRef._storage;
this.path=storageRef.path;


this.then=promise.then.bind(promise);
this.catch=promise.catch.bind(promise);
}_createClass(StorageTask,[{key:'_interceptSnapshotEvent',value:function _interceptSnapshotEvent(







f){var _this=this;
if(!(0,_utils.isFunction)(f))return null;
return function(snapshot){
var _snapshot=_extends({},snapshot);
_snapshot.task=_this;
_snapshot.ref=_this.ref;
return f&&f(_snapshot);
};
}},{key:'_interceptErrorEvent',value:function _interceptErrorEvent(







f){
if(!(0,_utils.isFunction)(f))return null;
return function(error){
var _error=new Error(error.message);

_error.code=error.code;
return f&&f(_error);
};
}},{key:'_subscribe',value:function _subscribe(










nextOrObserver,
error,
complete)
{var _this2=this;
var _error=void 0;
var _next=void 0;
var _complete=void 0;

if(typeof nextOrObserver==='function'){
_error=this._interceptErrorEvent(error);
_next=this._interceptSnapshotEvent(nextOrObserver);
_complete=this._interceptSnapshotEvent(complete);
}else if(nextOrObserver){
_error=this._interceptErrorEvent(nextOrObserver.error);
_next=this._interceptSnapshotEvent(nextOrObserver.next);
_complete=this._interceptSnapshotEvent(nextOrObserver.complete);
}

if(_next){
this.storage._addListener(
this.path,
_.statics.TaskEvent.STATE_CHANGED,
_next);

}
if(_error){
this.storage._addListener(this.path,this.type+'_failure',_error);
}
if(_complete){
this.storage._addListener(this.path,this.type+'_success',_complete);
}

return function(){
if(_next)
_this2.storage._removeListener(
_this2.path,
_.statics.TaskEvent.STATE_CHANGED,
_next);

if(_error)
_this2.storage._removeListener(_this2.path,_this2.type+'_failure',_error);
if(_complete)
_this2.storage._removeListener(
_this2.path,
_this2.type+'_success',
_complete);

};
}},{key:'on',value:function on()














{var event=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_.statics.TaskEvent.STATE_CHANGED;var nextOrObserver=arguments[1];var error=arguments[2];var complete=arguments[3];
if(!event){
throw new Error(
"StorageTask.on listener is missing required string argument 'event'.");

}

if(event!==_.statics.TaskEvent.STATE_CHANGED){
throw new Error('StorageTask.on event argument must be a string with a value of \''+

_.statics.TaskEvent.STATE_CHANGED+'\'');


}


if(!nextOrObserver&&!error&&!complete){
return this._subscribe.bind(this);
}

return this._subscribe(nextOrObserver,error,complete);
}},{key:'pause',value:function pause()

{
throw new Error(
'.pause() is not currently supported by react-native-firebase');

}},{key:'resume',value:function resume()

{

throw new Error(
'.resume() is not currently supported by react-native-firebase');

}},{key:'cancel',value:function cancel()

{

throw new Error(
'.cancel() is not currently supported by react-native-firebase');

}}]);return StorageTask;}();exports.default=StorageTask;