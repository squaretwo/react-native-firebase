Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('./../../utils');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






RemoteMessage=function(){









function RemoteMessage(inboundMessage){_classCallCheck(this,RemoteMessage);
if(inboundMessage){
this._collapseKey=inboundMessage.collapseKey;
this._data=inboundMessage.data;
this._from=inboundMessage.from;
this._messageId=inboundMessage.messageId;
this._messageType=inboundMessage.messageType;
this._sentTime=inboundMessage.sentTime;
}

this._data=this._data||{};

this._messageId=this._messageId||(0,_utils.generatePushID)();
this._ttl=3600;
}_createClass(RemoteMessage,[{key:'setCollapseKey',value:function setCollapseKey(






































collapseKey){
this._collapseKey=collapseKey;
return this;
}},{key:'setData',value:function setData()






{var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
if(!(0,_utils.isObject)(data)){
throw new Error('RemoteMessage:setData expects an object but got type \''+
typeof data+'\'.');

}
this._data=data;
return this;
}},{key:'setMessageId',value:function setMessageId(






messageId){
this._messageId=messageId;
return this;
}},{key:'setMessageType',value:function setMessageType(






messageType){
this._messageType=messageType;
return this;
}},{key:'setTo',value:function setTo(






to){
this._to=to;
return this;
}},{key:'setTtl',value:function setTtl(






ttl){
this._ttl=ttl;
return this;
}},{key:'build',value:function build()

{
if(!this._data){
throw new Error('RemoteMessage: Missing required `data` property');
}else if(!this._messageId){
throw new Error('RemoteMessage: Missing required `messageId` property');
}else if(!this._to){
throw new Error('RemoteMessage: Missing required `to` property');
}else if(!this._ttl){
throw new Error('RemoteMessage: Missing required `ttl` property');
}

return{
collapseKey:this._collapseKey,
data:this._data,
messageId:this._messageId,
messageType:this._messageType,
to:this._to,
ttl:this._ttl};

}},{key:'collapseKey',get:function get(){return this._collapseKey;}},{key:'data',get:function get(){return this._data;}},{key:'from',get:function get(){return this._from;}},{key:'messageId',get:function get(){return this._messageId;}},{key:'messageType',get:function get(){return this._messageType;}},{key:'sentTime',get:function get(){return this._sentTime;}},{key:'to',get:function get(){return this._to;}},{key:'ttl',get:function get(){return this._ttl;}}]);return RemoteMessage;}();exports.default=RemoteMessage;