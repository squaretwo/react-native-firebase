Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






ITunesParameters=function(){





function ITunesParameters(link){_classCallCheck(this,ITunesParameters);
this._link=link;
}_createClass(ITunesParameters,[{key:'setAffiliateToken',value:function setAffiliateToken(






affiliateToken){
this._affiliateToken=affiliateToken;
return this._link;
}},{key:'setCampaignToken',value:function setCampaignToken(






campaignToken){
this._campaignToken=campaignToken;
return this._link;
}},{key:'setProviderToken',value:function setProviderToken(






providerToken){
this._providerToken=providerToken;
return this._link;
}},{key:'build',value:function build()

{
return{
affiliateToken:this._affiliateToken,
campaignToken:this._campaignToken,
providerToken:this._providerToken};

}}]);return ITunesParameters;}();exports.default=ITunesParameters;