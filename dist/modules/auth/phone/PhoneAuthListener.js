Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();
var _internals=require('../../../utils/internals');var _internals2=_interopRequireDefault(_internals);
var _events=require('../../../utils/events');
var _utils=require('../../../utils');







var _native=require('../../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

















PhoneAuthListener=function(){
















function PhoneAuthListener(auth,phoneNumber,timeout){_classCallCheck(this,PhoneAuthListener);
this._auth=auth;
this._reject=null;
this._resolve=null;
this._promise=null;
this._credential=null;

this._timeout=timeout||20;
this._phoneAuthRequestKey=(0,_utils.generatePushID)();


this._internalEvents={
codeSent:'phone:auth:'+this._phoneAuthRequestKey+':onCodeSent',
verificationFailed:'phone:auth:'+
this._phoneAuthRequestKey+':onVerificationFailed',

verificationComplete:'phone:auth:'+
this._phoneAuthRequestKey+':onVerificationComplete',

codeAutoRetrievalTimeout:'phone:auth:'+
this._phoneAuthRequestKey+':onCodeAutoRetrievalTimeout'};




this._publicEvents={

error:'phone:auth:'+this._phoneAuthRequestKey+':error',

event:'phone:auth:'+this._phoneAuthRequestKey+':event',

success:'phone:auth:'+this._phoneAuthRequestKey+':success'};



this._subscribeToEvents();


if(_utils.isAndroid){
(0,_native.getNativeModule)(this._auth).verifyPhoneNumber(
phoneNumber,
this._phoneAuthRequestKey,
this._timeout);

}

if(_utils.isIOS){
(0,_native.getNativeModule)(this._auth).verifyPhoneNumber(
phoneNumber,
this._phoneAuthRequestKey);

}
}_createClass(PhoneAuthListener,[{key:'_subscribeToEvents',value:function _subscribeToEvents()





{
var events=Object.keys(this._internalEvents);

for(var i=0,len=events.length;i<len;i++){
var type=events[i];
_events.SharedEventEmitter.once(
this._internalEvents[type],

this['_'+type+'Handler'].bind(this));

}
}},{key:'_addUserObserver',value:function _addUserObserver(






observer){
_events.SharedEventEmitter.addListener(this._publicEvents.event,observer);
}},{key:'_emitToObservers',value:function _emitToObservers(






snapshot){
_events.SharedEventEmitter.emit(this._publicEvents.event,snapshot);
}},{key:'_emitToErrorCb',value:function _emitToErrorCb(






snapshot){var
error=snapshot.error;
if(this._reject)this._reject(error);
_events.SharedEventEmitter.emit(this._publicEvents.error,error);
}},{key:'_emitToSuccessCb',value:function _emitToSuccessCb(






snapshot){
if(this._resolve)this._resolve(snapshot);
_events.SharedEventEmitter.emit(this._publicEvents.success,snapshot);
}},{key:'_removeAllListeners',value:function _removeAllListeners()





{var _this=this;
setTimeout(function(){


Object.values(_this._internalEvents).forEach(function(event){
_events.SharedEventEmitter.removeAllListeners(event);
});


Object.values(_this._publicEvents).forEach(function(publicEvent){
_events.SharedEventEmitter.removeAllListeners(publicEvent);
});
},0);
}},{key:'_promiseDeferred',value:function _promiseDeferred()





{var _this2=this;
if(!this._promise){
this._promise=new Promise(function(resolve,reject){
_this2._resolve=function(result){
_this2._resolve=null;
return resolve(result);
};

_this2._reject=function(possibleError){
_this2._reject=null;
return reject(possibleError);
};
});
}
}},{key:'_codeSentHandler',value:function _codeSentHandler(










credential){
var snapshot={
verificationId:credential.verificationId,
code:null,
error:null,
state:'sent'};


this._emitToObservers(snapshot);

if(_utils.isIOS){
this._emitToSuccessCb(snapshot);
}

if(_utils.isAndroid){


}
}},{key:'_codeAutoRetrievalTimeoutHandler',value:function _codeAutoRetrievalTimeoutHandler(






credential){
var snapshot={
verificationId:credential.verificationId,
code:null,
error:null,
state:'timeout'};


this._emitToObservers(snapshot);
this._emitToSuccessCb(snapshot);
}},{key:'_verificationCompleteHandler',value:function _verificationCompleteHandler(






credential){
var snapshot={
verificationId:credential.verificationId,
code:credential.code||null,
error:null,
state:'verified'};


this._emitToObservers(snapshot);
this._emitToSuccessCb(snapshot);
this._removeAllListeners();
}},{key:'_verificationFailedHandler',value:function _verificationFailedHandler(






state){
var snapshot={
verificationId:state.verificationId,
code:null,
error:null,
state:'error'};var _state$error=


state.error,code=_state$error.code,message=_state$error.message,nativeErrorMessage=_state$error.nativeErrorMessage;
snapshot.error=(0,_utils.nativeToJSError)(code,message,{nativeErrorMessage:nativeErrorMessage});

this._emitToObservers(snapshot);
this._emitToErrorCb(snapshot);
this._removeAllListeners();
}},{key:'on',value:function on(






event,
observer,
errorCb,
successCb)
{
if(!(0,_utils.isString)(event)){
throw new Error(
_internals2.default.STRINGS.ERROR_MISSING_ARG_NAMED('event','string','on'));

}

if(event!=='state_changed'){
throw new Error(
_internals2.default.STRINGS.ERROR_ARG_INVALID_VALUE(
'event',
'state_changed',
event));


}

if(!(0,_utils.isFunction)(observer)){
throw new Error(
_internals2.default.STRINGS.ERROR_MISSING_ARG_NAMED('observer','function','on'));

}

this._addUserObserver(observer);

if((0,_utils.isFunction)(errorCb)){
_events.SharedEventEmitter.once(this._publicEvents.error,errorCb);
}

if((0,_utils.isFunction)(successCb)){
_events.SharedEventEmitter.once(this._publicEvents.success,successCb);
}

return this;
}},{key:'then',value:function then(





fn){
this._promiseDeferred();

if(this._promise)return this._promise.then.bind(this._promise)(fn);
return undefined;
}},{key:'catch',value:function _catch(





fn){
this._promiseDeferred();

if(this._promise)return this._promise.catch.bind(this._promise)(fn);
return undefined;
}}]);return PhoneAuthListener;}();exports.default=PhoneAuthListener;