Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');
var _utils=require('../../utils');
var _AndroidAction=require('./AndroidAction');var _AndroidAction2=_interopRequireDefault(_AndroidAction);
var _AndroidChannel=require('./AndroidChannel');var _AndroidChannel2=_interopRequireDefault(_AndroidChannel);
var _AndroidChannelGroup=require('./AndroidChannelGroup');var _AndroidChannelGroup2=_interopRequireDefault(_AndroidChannelGroup);
var _AndroidNotifications=require('./AndroidNotifications');var _AndroidNotifications2=_interopRequireDefault(_AndroidNotifications);
var _AndroidRemoteInput=require('./AndroidRemoteInput');var _AndroidRemoteInput2=_interopRequireDefault(_AndroidRemoteInput);
var _Notification=require('./Notification');var _Notification2=_interopRequireDefault(_Notification);
var _types=require('./types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






























var NATIVE_EVENTS=[
'notifications_notification_displayed',
'notifications_notification_opened',
'notifications_notification_received'];


var MODULE_NAME=exports.MODULE_NAME='RNFirebaseNotifications';
var NAMESPACE=exports.NAMESPACE='notifications';var


















Notifications=function(_ModuleBase){_inherits(Notifications,_ModuleBase);


function Notifications(app){_classCallCheck(this,Notifications);var _this=_possibleConstructorReturn(this,(Notifications.__proto__||Object.getPrototypeOf(Notifications)).call(this,
app,{
events:NATIVE_EVENTS,
hasShards:false,
moduleName:MODULE_NAME,
multiApp:false,
namespace:NAMESPACE}));

_this._android=new _AndroidNotifications2.default(_this);

_events.SharedEventEmitter.addListener(


'notifications_notification_displayed',
function(notification){
_events.SharedEventEmitter.emit(
'onNotificationDisplayed',
new _Notification2.default(notification));

});


_events.SharedEventEmitter.addListener(


'notifications_notification_opened',
function(notificationOpen){
_events.SharedEventEmitter.emit('onNotificationOpened',{
action:notificationOpen.action,
notification:new _Notification2.default(notificationOpen.notification),
results:notificationOpen.results});

});


_events.SharedEventEmitter.addListener(


'notifications_notification_received',
function(notification){
_events.SharedEventEmitter.emit(
'onNotification',
new _Notification2.default(notification));

});



if(_reactNative.Platform.OS==='ios'){
(0,_native.getNativeModule)(_this).jsInitialised();
}return _this;
}_createClass(Notifications,[{key:'cancelAllNotifications',value:function cancelAllNotifications()








{
return(0,_native.getNativeModule)(this).cancelAllNotifications();
}},{key:'cancelNotification',value:function cancelNotification(





notificationId){
if(!notificationId){
return Promise.reject(
new Error(
'Notifications: cancelNotification expects a `notificationId`'));


}
return(0,_native.getNativeModule)(this).cancelNotification(notificationId);
}},{key:'displayNotification',value:function displayNotification(






notification){
if(!(notification instanceof _Notification2.default)){
return Promise.reject(
new Error('Notifications:displayNotification expects a \'Notification\' but got type '+
typeof notification));


}
try{
return(0,_native.getNativeModule)(this).displayNotification(notification.build());
}catch(error){
return Promise.reject(error);
}
}},{key:'getBadge',value:function getBadge()

{
return(0,_native.getNativeModule)(this).getBadge();
}},{key:'getInitialNotification',value:function getInitialNotification()

{
return(0,_native.getNativeModule)(this).
getInitialNotification().
then(function(notificationOpen){
if(notificationOpen){
return{
action:notificationOpen.action,
notification:new _Notification2.default(notificationOpen.notification),
results:notificationOpen.results};

}
return null;
});
}},{key:'getScheduledNotifications',value:function getScheduledNotifications()





{
return(0,_native.getNativeModule)(this).getScheduledNotifications();
}},{key:'onNotification',value:function onNotification(


nextOrObserver)
{var _this2=this;
var listener=void 0;
if((0,_utils.isFunction)(nextOrObserver)){
listener=nextOrObserver;
}else if((0,_utils.isObject)(nextOrObserver)&&(0,_utils.isFunction)(nextOrObserver.next)){
listener=nextOrObserver.next;
}else{
throw new Error(
'Notifications.onNotification failed: First argument must be a function or observer object with a `next` function.');

}

(0,_log.getLogger)(this).info('Creating onNotification listener');
_events.SharedEventEmitter.addListener('onNotification',listener);

return function(){
(0,_log.getLogger)(_this2).info('Removing onNotification listener');
_events.SharedEventEmitter.removeListener('onNotification',listener);
};
}},{key:'onNotificationDisplayed',value:function onNotificationDisplayed(


nextOrObserver)
{var _this3=this;
var listener=void 0;
if((0,_utils.isFunction)(nextOrObserver)){
listener=nextOrObserver;
}else if((0,_utils.isObject)(nextOrObserver)&&(0,_utils.isFunction)(nextOrObserver.next)){
listener=nextOrObserver.next;
}else{
throw new Error(
'Notifications.onNotificationDisplayed failed: First argument must be a function or observer object with a `next` function.');

}

(0,_log.getLogger)(this).info('Creating onNotificationDisplayed listener');
_events.SharedEventEmitter.addListener('onNotificationDisplayed',listener);

return function(){
(0,_log.getLogger)(_this3).info('Removing onNotificationDisplayed listener');
_events.SharedEventEmitter.removeListener('onNotificationDisplayed',listener);
};
}},{key:'onNotificationOpened',value:function onNotificationOpened(


nextOrObserver)
{var _this4=this;
var listener=void 0;
if((0,_utils.isFunction)(nextOrObserver)){
listener=nextOrObserver;
}else if((0,_utils.isObject)(nextOrObserver)&&(0,_utils.isFunction)(nextOrObserver.next)){
listener=nextOrObserver.next;
}else{
throw new Error(
'Notifications.onNotificationOpened failed: First argument must be a function or observer object with a `next` function.');

}

(0,_log.getLogger)(this).info('Creating onNotificationOpened listener');
_events.SharedEventEmitter.addListener('onNotificationOpened',listener);

return function(){
(0,_log.getLogger)(_this4).info('Removing onNotificationOpened listener');
_events.SharedEventEmitter.removeListener('onNotificationOpened',listener);
};
}},{key:'removeAllDeliveredNotifications',value:function removeAllDeliveredNotifications()




{
return(0,_native.getNativeModule)(this).removeAllDeliveredNotifications();
}},{key:'removeDeliveredNotification',value:function removeDeliveredNotification(





notificationId){
if(!notificationId){
return Promise.reject(
new Error(
'Notifications: removeDeliveredNotification expects a `notificationId`'));


}
return(0,_native.getNativeModule)(this).removeDeliveredNotification(notificationId);
}},{key:'scheduleNotification',value:function scheduleNotification(







notification,
schedule)
{
if(!(notification instanceof _Notification2.default)){
return Promise.reject(
new Error('Notifications:scheduleNotification expects a \'Notification\' but got type '+
typeof notification));


}
try{
var nativeNotification=notification.build();
nativeNotification.schedule=schedule;
return(0,_native.getNativeModule)(this).scheduleNotification(nativeNotification);
}catch(error){
return Promise.reject(error);
}
}},{key:'setBadge',value:function setBadge(

badge){
return(0,_native.getNativeModule)(this).setBadge(badge);
}},{key:'android',get:function get(){return this._android;}}]);return Notifications;}(_ModuleBase3.default);exports.default=Notifications;


var statics=exports.statics={
Android:{
Action:_AndroidAction2.default,
BadgeIconType:_types.BadgeIconType,
Category:_types.Category,
Channel:_AndroidChannel2.default,
ChannelGroup:_AndroidChannelGroup2.default,
Defaults:_types.Defaults,
GroupAlert:_types.GroupAlert,
Importance:_types.Importance,
Priority:_types.Priority,
RemoteInput:_AndroidRemoteInput2.default,
SemanticAction:_types.SemanticAction,
Visibility:_types.Visibility},

Notification:_Notification2.default};