Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






AndroidParameters=function(){





function AndroidParameters(link){_classCallCheck(this,AndroidParameters);
this._link=link;
}_createClass(AndroidParameters,[{key:'setFallbackUrl',value:function setFallbackUrl(






fallbackUrl){
this._fallbackUrl=fallbackUrl;
return this._link;
}},{key:'setMinimumVersion',value:function setMinimumVersion(






minimumVersion){
this._minimumVersion=minimumVersion;
return this._link;
}},{key:'setPackageName',value:function setPackageName(






packageName){
this._packageName=packageName;
return this._link;
}},{key:'build',value:function build()

{
if((this._fallbackUrl||this._minimumVersion)&&!this._packageName){
throw new Error(
'AndroidParameters: Missing required `packageName` property');

}
return{
fallbackUrl:this._fallbackUrl,
minimumVersion:this._minimumVersion,
packageName:this._packageName};

}}]);return AndroidParameters;}();exports.default=AndroidParameters;