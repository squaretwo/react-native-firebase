Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






AndroidInvitation=function(){






function AndroidInvitation(invitation){_classCallCheck(this,AndroidInvitation);
this._invitation=invitation;
}_createClass(AndroidInvitation,[{key:'setAdditionalReferralParameters',value:function setAdditionalReferralParameters(






additionalReferralParameters)

{
this._additionalReferralParameters=additionalReferralParameters;
return this._invitation;
}},{key:'setEmailHtmlContent',value:function setEmailHtmlContent(






emailHtmlContent){
this._emailHtmlContent=emailHtmlContent;
return this._invitation;
}},{key:'setEmailSubject',value:function setEmailSubject(






emailSubject){
this._emailSubject=emailSubject;
return this._invitation;
}},{key:'setGoogleAnalyticsTrackingId',value:function setGoogleAnalyticsTrackingId(






googleAnalyticsTrackingId){
this._googleAnalyticsTrackingId=googleAnalyticsTrackingId;
return this._invitation;
}},{key:'build',value:function build()

{
return{
additionalReferralParameters:this._additionalReferralParameters,
emailHtmlContent:this._emailHtmlContent,
emailSubject:this._emailSubject,
googleAnalyticsTrackingId:this._googleAnalyticsTrackingId};

}}]);return AndroidInvitation;}();exports.default=AndroidInvitation;