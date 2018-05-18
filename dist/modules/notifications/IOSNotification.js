Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var










IOSNotification=function(){









function IOSNotification(notification,data){_classCallCheck(this,IOSNotification);
this._notification=notification;

if(data){
this._alertAction=data.alertAction;
this._attachments=data.attachments;
this._badge=data.badge;
this._category=data.category;
this._hasAction=data.hasAction;
this._launchImage=data.launchImage;
this._threadIdentifier=data.threadIdentifier;
}


this._attachments=this._attachments||[];
}_createClass(IOSNotification,[{key:'addAttachment',value:function addAttachment(





































identifier,
url,
options)
{
this._attachments.push({
identifier:identifier,
options:options,
url:url});

return this._notification;
}},{key:'setAlertAction',value:function setAlertAction(






alertAction){
this._alertAction=alertAction;
return this._notification;
}},{key:'setBadge',value:function setBadge(






badge){
this._badge=badge;
return this._notification;
}},{key:'setCategory',value:function setCategory(






category){
this._category=category;
return this._notification;
}},{key:'setHasAction',value:function setHasAction(






hasAction){
this._hasAction=hasAction;
return this._notification;
}},{key:'setLaunchImage',value:function setLaunchImage(






launchImage){
this._launchImage=launchImage;
return this._notification;
}},{key:'setThreadIdentifier',value:function setThreadIdentifier(






threadIdentifier){
this._threadIdentifier=threadIdentifier;
return this._notification;
}},{key:'build',value:function build()

{


return{
alertAction:this._alertAction,
attachments:this._attachments,
badge:this._badge,
category:this._category,
hasAction:this._hasAction,
launchImage:this._launchImage,
threadIdentifier:this._threadIdentifier};

}},{key:'alertAction',get:function get(){return this._alertAction;}},{key:'attachments',get:function get(){return this._attachments;}},{key:'badge',get:function get(){return this._badge;}},{key:'category',get:function get(){return this._category;}},{key:'hasAction',get:function get(){return this._hasAction;}},{key:'launchImage',get:function get(){return this._launchImage;}},{key:'threadIdentifier',get:function get(){return this._threadIdentifier;}}]);return IOSNotification;}();exports.default=IOSNotification;