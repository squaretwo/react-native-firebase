Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






AndroidRemoteInput=function(){






function AndroidRemoteInput(resultKey){_classCallCheck(this,AndroidRemoteInput);
this._allowedDataTypes=[];
this._choices=[];
this._resultKey=resultKey;
}_createClass(AndroidRemoteInput,[{key:'setAllowDataType',value:function setAllowDataType(



























mimeType,allow){
this._allowedDataTypes.push({
allow:allow,
mimeType:mimeType});

return this;
}},{key:'setAllowFreeFormInput',value:function setAllowFreeFormInput(






allowFreeFormInput){
this._allowFreeFormInput=allowFreeFormInput;
return this;
}},{key:'setChoices',value:function setChoices(






choices){
this._choices=choices;
return this;
}},{key:'setLabel',value:function setLabel(






label){
this._label=label;
return this;
}},{key:'build',value:function build()

{
if(!this._resultKey){
throw new Error(
'AndroidRemoteInput: Missing required `resultKey` property');

}

return{
allowedDataTypes:this._allowedDataTypes,
allowFreeFormInput:this._allowFreeFormInput,
choices:this._choices,
label:this._label,
resultKey:this._resultKey};

}},{key:'allowedDataTypes',get:function get(){return this._allowedDataTypes;}},{key:'allowFreeFormInput',get:function get(){return this._allowFreeFormInput;}},{key:'choices',get:function get(){return this._choices;}},{key:'label',get:function get(){return this._label;}},{key:'resultKey',get:function get(){return this._resultKey;}}]);return AndroidRemoteInput;}();exports.default=AndroidRemoteInput;


var fromNativeAndroidRemoteInput=exports.fromNativeAndroidRemoteInput=function fromNativeAndroidRemoteInput(
nativeRemoteInput)
{
var remoteInput=new AndroidRemoteInput(nativeRemoteInput.resultKey);
if(nativeRemoteInput.allowedDataTypes){
for(var i=0;i<nativeRemoteInput.allowedDataTypes.length;i++){
var allowDataType=nativeRemoteInput.allowedDataTypes[i];
remoteInput.setAllowDataType(allowDataType.mimeType,allowDataType.allow);
}
}
if(nativeRemoteInput.allowFreeFormInput){
remoteInput.setAllowFreeFormInput(nativeRemoteInput.allowFreeFormInput);
}
if(nativeRemoteInput.choices){
remoteInput.setChoices(nativeRemoteInput.choices);
}
if(nativeRemoteInput.label){
remoteInput.setLabel(nativeRemoteInput.label);
}

return remoteInput;
};