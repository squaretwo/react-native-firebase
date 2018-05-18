Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _events=require('../../utils/events');
var _internals=require('../../utils/internals');var _internals2=_interopRequireDefault(_internals);
var _log=require('../../utils/log');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');
var _utils=require('../../utils');
var _RemoteMessage=require('./RemoteMessage');var _RemoteMessage2=_interopRequireDefault(_RemoteMessage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
















var NATIVE_EVENTS=[
'messaging_message_received',
'messaging_token_refreshed'];


var MODULE_NAME=exports.MODULE_NAME='RNFirebaseMessaging';
var NAMESPACE=exports.NAMESPACE='messaging';var




Messaging=function(_ModuleBase){_inherits(Messaging,_ModuleBase);
function Messaging(app){_classCallCheck(this,Messaging);var _this=_possibleConstructorReturn(this,(Messaging.__proto__||Object.getPrototypeOf(Messaging)).call(this,
app,{
events:NATIVE_EVENTS,
moduleName:MODULE_NAME,
multiApp:false,
hasShards:false,
namespace:NAMESPACE}));


_events.SharedEventEmitter.addListener(


'messaging_message_received',
function(message){
_events.SharedEventEmitter.emit('onMessage',new _RemoteMessage2.default(message));
});


_events.SharedEventEmitter.addListener(


'messaging_token_refreshed',
function(token){
_events.SharedEventEmitter.emit('onTokenRefresh',token);
});



if(_reactNative.Platform.OS==='ios'){
(0,_native.getNativeModule)(_this).jsInitialised();
}return _this;
}_createClass(Messaging,[{key:'getToken',value:function getToken()

{
return(0,_native.getNativeModule)(this).getToken();
}},{key:'onMessage',value:function onMessage(

nextOrObserver){var _this2=this;
var listener=void 0;
if((0,_utils.isFunction)(nextOrObserver)){

listener=nextOrObserver;
}else if((0,_utils.isObject)(nextOrObserver)&&(0,_utils.isFunction)(nextOrObserver.next)){
listener=nextOrObserver.next;
}else{
throw new Error(
'Messaging.onMessage failed: First argument must be a function or observer object with a `next` function.');

}

(0,_log.getLogger)(this).info('Creating onMessage listener');

_events.SharedEventEmitter.addListener('onMessage',listener);

return function(){
(0,_log.getLogger)(_this2).info('Removing onMessage listener');
_events.SharedEventEmitter.removeListener('onMessage',listener);
};
}},{key:'onTokenRefresh',value:function onTokenRefresh(


nextOrObserver)
{var _this3=this;
var listener=void 0;
if((0,_utils.isFunction)(nextOrObserver)){

listener=nextOrObserver;
}else if((0,_utils.isObject)(nextOrObserver)&&(0,_utils.isFunction)(nextOrObserver.next)){
listener=nextOrObserver.next;
}else{
throw new Error(
'Messaging.OnTokenRefresh failed: First argument must be a function or observer object with a `next` function.');

}

(0,_log.getLogger)(this).info('Creating onTokenRefresh listener');
_events.SharedEventEmitter.addListener('onTokenRefresh',listener);

return function(){
(0,_log.getLogger)(_this3).info('Removing onTokenRefresh listener');
_events.SharedEventEmitter.removeListener('onTokenRefresh',listener);
};
}},{key:'requestPermission',value:function requestPermission()

{
return(0,_native.getNativeModule)(this).requestPermission();
}},{key:'hasPermission',value:function hasPermission()




{
return(0,_native.getNativeModule)(this).hasPermission();
}},{key:'sendMessage',value:function sendMessage(

remoteMessage){
if(!(remoteMessage instanceof _RemoteMessage2.default)){
return Promise.reject(
new Error('Messaging:sendMessage expects a \'RemoteMessage\' but got type '+
typeof remoteMessage));


}
try{
return(0,_native.getNativeModule)(this).sendMessage(remoteMessage.build());
}catch(error){
return Promise.reject(error);
}
}},{key:'subscribeToTopic',value:function subscribeToTopic(

topic){
return(0,_native.getNativeModule)(this).subscribeToTopic(topic);
}},{key:'unsubscribeFromTopic',value:function unsubscribeFromTopic(

topic){
return(0,_native.getNativeModule)(this).unsubscribeFromTopic(topic);
}},{key:'deleteToken',value:function deleteToken()





{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'messaging',
'deleteToken'));


}},{key:'setBackgroundMessageHandler',value:function setBackgroundMessageHandler()

{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'messaging',
'setBackgroundMessageHandler'));


}},{key:'useServiceWorker',value:function useServiceWorker()

{
throw new Error(
_internals2.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD(
'messaging',
'useServiceWorker'));


}}]);return Messaging;}(_ModuleBase3.default);exports.default=Messaging;


var statics=exports.statics={
RemoteMessage:_RemoteMessage2.default};