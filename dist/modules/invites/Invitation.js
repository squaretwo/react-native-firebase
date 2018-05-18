Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _AndroidInvitation=require('./AndroidInvitation');var _AndroidInvitation2=_interopRequireDefault(_AndroidInvitation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



Invitation=function(){










function Invitation(title,message){_classCallCheck(this,Invitation);
this._android=new _AndroidInvitation2.default(this);
this._message=message;
this._title=title;
}_createClass(Invitation,[{key:'setAndroidClientId',value:function setAndroidClientId(










androidClientId){
this._androidClientId=androidClientId;
return this;
}},{key:'setAndroidMinimumVersionCode',value:function setAndroidMinimumVersionCode(






androidMinimumVersionCode){
this._androidMinimumVersionCode=androidMinimumVersionCode;
return this;
}},{key:'setCallToActionText',value:function setCallToActionText(






callToActionText){
this._callToActionText=callToActionText;
return this;
}},{key:'setCustomImage',value:function setCustomImage(






customImage){
this._customImage=customImage;
return this;
}},{key:'setDeepLink',value:function setDeepLink(






deepLink){
this._deepLink=deepLink;
return this;
}},{key:'setIOSClientId',value:function setIOSClientId(






iosClientId){
this._iosClientId=iosClientId;
return this;
}},{key:'build',value:function build()

{
if(!this._message){
throw new Error('Invitation: Missing required `message` property');
}else if(!this._title){
throw new Error('Invitation: Missing required `title` property');
}

return{
android:_reactNative.Platform.OS==='android'?this._android.build():undefined,
androidClientId:this._androidClientId,
androidMinimumVersionCode:this._androidMinimumVersionCode,
callToActionText:this._callToActionText,
customImage:this._customImage,
deepLink:this._deepLink,
iosClientId:this._iosClientId,
message:this._message,
title:this._title};

}},{key:'android',get:function get(){return this._android;}}]);return Invitation;}();exports.default=Invitation;