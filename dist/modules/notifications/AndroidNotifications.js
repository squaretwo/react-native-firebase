Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _AndroidChannel=require('./AndroidChannel');var _AndroidChannel2=_interopRequireDefault(_AndroidChannel);
var _AndroidChannelGroup=require('./AndroidChannelGroup');var _AndroidChannelGroup2=_interopRequireDefault(_AndroidChannelGroup);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



AndroidNotifications=function(){


function AndroidNotifications(notifications){_classCallCheck(this,AndroidNotifications);
this._notifications=notifications;
}_createClass(AndroidNotifications,[{key:'createChannel',value:function createChannel(

channel){
if(_reactNative.Platform.OS==='android'){
if(!(channel instanceof _AndroidChannel2.default)){
throw new Error('AndroidNotifications:createChannel expects an \'AndroidChannel\' but got type '+
typeof channel);

}
return(0,_native.getNativeModule)(this._notifications).createChannel(
channel.build());

}
return Promise.resolve();
}},{key:'createChannelGroup',value:function createChannelGroup(

channelGroup){
if(_reactNative.Platform.OS==='android'){
if(!(channelGroup instanceof _AndroidChannelGroup2.default)){
throw new Error('AndroidNotifications:createChannelGroup expects an \'AndroidChannelGroup\' but got type '+
typeof channelGroup);

}
return(0,_native.getNativeModule)(this._notifications).createChannelGroup(
channelGroup.build());

}
return Promise.resolve();
}},{key:'createChannelGroups',value:function createChannelGroups(

channelGroups){
if(_reactNative.Platform.OS==='android'){
if(!Array.isArray(channelGroups)){
throw new Error('AndroidNotifications:createChannelGroups expects an \'Array\' but got type '+
typeof channelGroups);

}
var nativeChannelGroups=[];
for(var i=0;i<channelGroups.length;i++){
var channelGroup=channelGroups[i];
if(!(channelGroup instanceof _AndroidChannelGroup2.default)){
throw new Error('AndroidNotifications:createChannelGroups expects array items of type \'AndroidChannelGroup\' but got type '+
typeof channelGroup);

}
nativeChannelGroups.push(channelGroup.build());
}
return(0,_native.getNativeModule)(this._notifications).createChannelGroups(
nativeChannelGroups);

}
return Promise.resolve();
}},{key:'createChannels',value:function createChannels(

channels){
if(_reactNative.Platform.OS==='android'){
if(!Array.isArray(channels)){
throw new Error('AndroidNotifications:createChannels expects an \'Array\' but got type '+
typeof channels);

}
var nativeChannels=[];
for(var i=0;i<channels.length;i++){
var channel=channels[i];
if(!(channel instanceof _AndroidChannel2.default)){
throw new Error('AndroidNotifications:createChannels expects array items of type \'AndroidChannel\' but got type '+
typeof channel);

}
nativeChannels.push(channel.build());
}
return(0,_native.getNativeModule)(this._notifications).createChannels(
nativeChannels);

}
return Promise.resolve();
}}]);return AndroidNotifications;}();exports.default=AndroidNotifications;