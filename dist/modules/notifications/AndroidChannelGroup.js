Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var









AndroidChannelGroup=function(){



function AndroidChannelGroup(groupId,name){_classCallCheck(this,AndroidChannelGroup);
this._groupId=groupId;
this._name=name;
}_createClass(AndroidChannelGroup,[{key:'build',value:function build()









{
if(!this._groupId){
throw new Error(
'AndroidChannelGroup: Missing required `groupId` property');

}else if(!this._name){
throw new Error('AndroidChannelGroup: Missing required `name` property');
}

return{
groupId:this._groupId,
name:this._name};

}},{key:'groupId',get:function get(){return this._groupId;}},{key:'name',get:function get(){return this._name;}}]);return AndroidChannelGroup;}();exports.default=AndroidChannelGroup;