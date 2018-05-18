Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






IOSParameters=function(){









function IOSParameters(link){_classCallCheck(this,IOSParameters);
this._link=link;
}_createClass(IOSParameters,[{key:'setAppStoreId',value:function setAppStoreId(






appStoreId){
this._appStoreId=appStoreId;
return this._link;
}},{key:'setBundleId',value:function setBundleId(






bundleId){
this._bundleId=bundleId;
return this._link;
}},{key:'setCustomScheme',value:function setCustomScheme(






customScheme){
this._customScheme=customScheme;
return this._link;
}},{key:'setFallbackUrl',value:function setFallbackUrl(






fallbackUrl){
this._fallbackUrl=fallbackUrl;
return this._link;
}},{key:'setIPadBundleId',value:function setIPadBundleId(






iPadBundleId){
this._iPadBundleId=iPadBundleId;
return this._link;
}},{key:'setIPadFallbackUrl',value:function setIPadFallbackUrl(






iPadFallbackUrl){
this._iPadFallbackUrl=iPadFallbackUrl;
return this._link;
}},{key:'setMinimumVersion',value:function setMinimumVersion(






minimumVersion){
this._minimumVersion=minimumVersion;
return this._link;
}},{key:'build',value:function build()

{
if(
(this._appStoreId||
this._customScheme||
this._fallbackUrl||
this._iPadBundleId||
this._iPadFallbackUrl||
this._minimumVersion)&&
!this._bundleId)
{
throw new Error('IOSParameters: Missing required `bundleId` property');
}
return{
appStoreId:this._appStoreId,
bundleId:this._bundleId,
customScheme:this._customScheme,
fallbackUrl:this._fallbackUrl,
iPadBundleId:this._iPadBundleId,
iPadFallbackUrl:this._iPadFallbackUrl,
minimumVersion:this._minimumVersion};

}}]);return IOSParameters;}();exports.default=IOSParameters;