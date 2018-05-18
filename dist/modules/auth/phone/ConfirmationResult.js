Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _native=require('../../../utils/native');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



ConfirmationResult=function(){








function ConfirmationResult(auth,verificationId){_classCallCheck(this,ConfirmationResult);
this._auth=auth;
this._verificationId=verificationId;
}_createClass(ConfirmationResult,[{key:'confirm',value:function confirm(






verificationCode){var _this=this;
return(0,_native.getNativeModule)(this._auth).
_confirmVerificationCode(verificationCode).
then(function(user){return _this._auth._setUser(user);});
}},{key:'verificationId',get:function get()

{
return this._verificationId;
}}]);return ConfirmationResult;}();exports.default=ConfirmationResult;