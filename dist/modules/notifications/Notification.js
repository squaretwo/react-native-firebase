Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _AndroidNotification=require('./AndroidNotification');var _AndroidNotification2=_interopRequireDefault(_AndroidNotification);
var _IOSNotification=require('./IOSNotification');var _IOSNotification2=_interopRequireDefault(_IOSNotification);
var _utils=require('../../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var









Notification=function(){










function Notification(data){_classCallCheck(this,Notification);
this._android=new _AndroidNotification2.default(this,data&&data.android);
this._ios=new _IOSNotification2.default(this,data&&data.ios);

if(data){
this._body=data.body;
this._data=data.data;
this._notificationId=data.notificationId;
this._sound=data.sound;
this._subtitle=data.subtitle;
this._title=data.title;
}


this._data=this._data||{};

this._notificationId=this._notificationId||(0,_utils.generatePushID)();
}_createClass(Notification,[{key:'setBody',value:function setBody(






































body){
this._body=body;
return this;
}},{key:'setData',value:function setData()






{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
if(!(0,_utils.isObject)(data)){
throw new Error('Notification:withData expects an object but got type \''+
typeof data+'\'.');

}
this._data=data;
return this;
}},{key:'setNotificationId',value:function setNotificationId(






notificationId){
this._notificationId=notificationId;
return this;
}},{key:'setSound',value:function setSound(






sound){
this._sound=sound;
return this;
}},{key:'setSubtitle',value:function setSubtitle(






subtitle){
this._subtitle=subtitle;
return this;
}},{key:'setTitle',value:function setTitle(






title){
this._title=title;
return this;
}},{key:'build',value:function build()

{
if(!this._notificationId){
throw new Error(
'Notification: Missing required `notificationId` property');

}

return{
android:_reactNative.Platform.OS==='android'?this._android.build():undefined,
body:this._body,
data:this._data,
ios:_reactNative.Platform.OS==='ios'?this._ios.build():undefined,
notificationId:this._notificationId,
sound:this._sound,
subtitle:this._subtitle,
title:this._title};

}},{key:'android',get:function get(){return this._android;}},{key:'body',get:function get(){return this._body;}},{key:'data',get:function get(){return this._data;}},{key:'ios',get:function get(){return this._ios;}},{key:'notificationId',get:function get(){return this._notificationId;}},{key:'sound',get:function get(){return this._sound;}},{key:'subtitle',get:function get(){return this._subtitle;}},{key:'title',get:function get(){return this._title;}}]);return Notification;}();exports.default=Notification;