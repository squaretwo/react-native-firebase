Object.defineProperty(exports,"__esModule",{value:true});exports.fromNativeAndroidAction=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _AndroidRemoteInput=require('./AndroidRemoteInput');var _AndroidRemoteInput2=_interopRequireDefault(_AndroidRemoteInput);


var _types=require('./types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


AndroidAction=function(){








function AndroidAction(action,icon,title){_classCallCheck(this,AndroidAction);
this._action=action;
this._icon=icon;
this._remoteInputs=[];
this._title=title;
}_createClass(AndroidAction,[{key:'addRemoteInput',value:function addRemoteInput(


































remoteInput){
if(!(remoteInput instanceof _AndroidRemoteInput2.default)){
throw new Error('AndroidAction:addRemoteInput expects an \'RemoteInput\' but got type '+
typeof remoteInput);

}
this._remoteInputs.push(remoteInput);
return this;
}},{key:'setAllowGenerateReplies',value:function setAllowGenerateReplies(






allowGeneratedReplies){
this._allowGeneratedReplies=allowGeneratedReplies;
return this;
}},{key:'setSemanticAction',value:function setSemanticAction(






semanticAction){
if(!Object.values(_types.SemanticAction).includes(semanticAction)){
throw new Error('AndroidAction:setSemanticAction Invalid Semantic Action: '+
semanticAction);

}
this._semanticAction=semanticAction;
return this;
}},{key:'setShowUserInterface',value:function setShowUserInterface(






showUserInterface){
this._showUserInterface=showUserInterface;
return this;
}},{key:'build',value:function build()

{
if(!this._action){
throw new Error('AndroidAction: Missing required `action` property');
}else if(!this._icon){
throw new Error('AndroidAction: Missing required `icon` property');
}else if(!this._title){
throw new Error('AndroidAction: Missing required `title` property');
}

return{
action:this._action,
allowGeneratedReplies:this._allowGeneratedReplies,
icon:this._icon,
remoteInputs:this._remoteInputs.map(function(remoteInput){return remoteInput.build();}),
semanticAction:this._semanticAction,
showUserInterface:this._showUserInterface,
title:this._title};

}},{key:'action',get:function get(){return this._action;}},{key:'allowGeneratedReplies',get:function get(){return this._allowGeneratedReplies;}},{key:'icon',get:function get(){return this._icon;}},{key:'remoteInputs',get:function get(){return this._remoteInputs;}},{key:'semanticAction',get:function get(){return this._semanticAction;}},{key:'showUserInterface',get:function get(){return this._showUserInterface;}},{key:'title',get:function get(){return this._title;}}]);return AndroidAction;}();exports.default=AndroidAction;


var fromNativeAndroidAction=exports.fromNativeAndroidAction=function fromNativeAndroidAction(
nativeAction)
{
var action=new AndroidAction(
nativeAction.action,
nativeAction.icon,
nativeAction.title);

if(nativeAction.allowGeneratedReplies){
action.setAllowGenerateReplies(nativeAction.allowGeneratedReplies);
}
if(nativeAction.remoteInputs){
nativeAction.remoteInputs.forEach(function(remoteInput){
action.addRemoteInput((0,_AndroidRemoteInput.fromNativeAndroidRemoteInput)(remoteInput));
});
}
if(nativeAction.semanticAction){
action.setSemanticAction(nativeAction.semanticAction);
}
if(nativeAction.showUserInterface){
action.setShowUserInterface(nativeAction.showUserInterface);
}

return action;
};