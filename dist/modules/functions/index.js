Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.MODULE_NAME=exports.NAMESPACE=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _utils=require('../../utils');
var _native=require('../../utils/native');


var _HttpsError=require('./HttpsError');var _HttpsError2=_interopRequireDefault(_HttpsError);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}







var NAMESPACE=exports.NAMESPACE='functions';
var MODULE_NAME=exports.MODULE_NAME='RNFirebaseFunctions';






function errorOrResult(possibleError){
if((0,_utils.isObject)(possibleError)&&possibleError.__error){var
code=possibleError.code,message=possibleError.message,details=possibleError.details;
return Promise.reject(
new _HttpsError2.default(
statics.HttpsErrorCode[code]||statics.HttpsErrorCode.UNKNOWN,
message,
details));


}

return Promise.resolve(possibleError);
}var

Functions=function(_ModuleBase){_inherits(Functions,_ModuleBase);
function Functions(app){_classCallCheck(this,Functions);return _possibleConstructorReturn(this,(Functions.__proto__||Object.getPrototypeOf(Functions)).call(this,
app,{
multiApp:false,
hasShards:false,
namespace:NAMESPACE,
moduleName:MODULE_NAME}));

}_createClass(Functions,[{key:'httpsCallable',value:function httpsCallable(











name){var _this2=this;
return function(data){
var promise=(0,_native.getNativeModule)(_this2).httpsCallable(name,{data:data});
return promise.then(errorOrResult);
};
}}]);return Functions;}(_ModuleBase3.default);exports.default=Functions;


var statics=exports.statics={
HttpsErrorCode:{
OK:'ok',
CANCELLED:'cancelled',
UNKNOWN:'unknown',
INVALID_ARGUMENT:'invalid-argument',
DEADLINE_EXCEEDED:'deadline-exceeded',
NOT_FOUND:'not-found',
ALREADY_EXISTS:'already-exists',
PERMISSION_DENIED:'permission-denied',
UNAUTHENTICATED:'unauthenticated',
RESOURCE_EXHAUSTED:'resource-exhausted',
FAILED_PRECONDITION:'failed-precondition',
ABORTED:'aborted',
OUT_OF_RANGE:'out-of-range',
UNIMPLEMENTED:'unimplemented',
INTERNAL:'internal',
UNAVAILABLE:'unavailable',
DATA_LOSS:'data-loss'}};