Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _types=require('./types');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


















AndroidChannel=function(){














function AndroidChannel(channelId,name,importance){_classCallCheck(this,AndroidChannel);
if(!Object.values(_types.Importance).includes(importance)){
throw new Error('AndroidChannel() Invalid Importance: '+importance);
}
this._channelId=channelId;
this._name=name;
this._importance=importance;
}_createClass(AndroidChannel,[{key:'enableLights',value:function enableLights(


























































lightsEnabled){
this._lightsEnabled=lightsEnabled;
return this;
}},{key:'enableVibration',value:function enableVibration(






vibrationEnabled){
this._vibrationEnabled=vibrationEnabled;
return this;
}},{key:'setBypassDnd',value:function setBypassDnd(






bypassDnd){
this._bypassDnd=bypassDnd;
return this;
}},{key:'setDescription',value:function setDescription(






description){
this._description=description;
return this;
}},{key:'setGroup',value:function setGroup(






groupId){
this._group=groupId;
return this;
}},{key:'setLightColor',value:function setLightColor(






lightColor){
this._lightColor=lightColor;
return this;
}},{key:'setLockScreenVisibility',value:function setLockScreenVisibility(







lockScreenVisibility)
{
if(!Object.values(_types.Visibility).includes(lockScreenVisibility)){
throw new Error('AndroidChannel:setLockScreenVisibility Invalid Visibility: '+
lockScreenVisibility);

}
this._lockScreenVisibility=lockScreenVisibility;
return this;
}},{key:'setShowBadge',value:function setShowBadge(






showBadge){
this._showBadge=showBadge;
return this;
}},{key:'setSound',value:function setSound(






sound){
this._sound=sound;
return this;
}},{key:'setVibrationPattern',value:function setVibrationPattern(






vibrationPattern){
this._vibrationPattern=vibrationPattern;
return this;
}},{key:'build',value:function build()

{
if(!this._channelId){
throw new Error('AndroidChannel: Missing required `channelId` property');
}else if(!this._importance){
throw new Error('AndroidChannel: Missing required `importance` property');
}else if(!this._name){
throw new Error('AndroidChannel: Missing required `name` property');
}

return{
bypassDnd:this._bypassDnd,
channelId:this._channelId,
description:this._description,
group:this._group,
importance:this._importance,
lightColor:this._lightColor,
lightsEnabled:this._lightsEnabled,
lockScreenVisibility:this._lockScreenVisibility,
name:this._name,
showBadge:this._showBadge,
sound:this._sound,
vibrationEnabled:this._vibrationEnabled,
vibrationPattern:this._vibrationPattern};

}},{key:'bypassDnd',get:function get(){return this._bypassDnd;}},{key:'channelId',get:function get(){return this._channelId;}},{key:'description',get:function get(){return this._description;}},{key:'group',get:function get(){return this._group;}},{key:'importance',get:function get(){return this._importance;}},{key:'lightColor',get:function get(){return this._lightColor;}},{key:'lightsEnabled',get:function get(){return this._lightsEnabled;}},{key:'lockScreenVisibility',get:function get(){return this._lockScreenVisibility;}},{key:'name',get:function get(){return this._name;}},{key:'showBadge',get:function get(){return this._showBadge;}},{key:'sound',get:function get(){return this._sound;}},{key:'vibrationEnabled',get:function get(){return this._vibrationEnabled;}},{key:'vibrationPattern',get:function get(){return this._vibrationPattern;}}]);return AndroidChannel;}();exports.default=AndroidChannel;