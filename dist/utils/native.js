Object.defineProperty(exports,"__esModule",{value:true});exports.initialiseNativeModule=exports.getNativeModule=undefined;


var _reactNative=require('react-native');
var _events=require('./events');
var _internals=require('./internals');var _internals2=_interopRequireDefault(_internals);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}




var NATIVE_MODULES={};






var nativeWithArgs=function nativeWithArgs(
NativeModule,
argToPrepend)
{
var native={};
var methods=Object.keys(NativeModule);var _loop=function _loop(

i,len){
var method=methods[i];
native[method]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(
NativeModule[method].apply(NativeModule,[].concat(_toConsumableArray(argToPrepend),args)));};};for(var i=0,len=methods.length;i<len;i++){_loop(i,len);
}

return native;
};

var nativeModuleKey=function nativeModuleKey(module){return(
module._serviceUrl||module.app.name)+':'+module.namespace;};

var getNativeModule=exports.getNativeModule=function getNativeModule(module){return(
NATIVE_MODULES[nativeModuleKey(module)]);};

var initialiseNativeModule=exports.initialiseNativeModule=function initialiseNativeModule(
module,
config,
serviceUrl)
{var
moduleName=config.moduleName,multiApp=config.multiApp,hasShards=config.hasShards,namespace=config.namespace;
var nativeModule=_reactNative.NativeModules[moduleName];
var key=nativeModuleKey(module);

if(!nativeModule&&namespace!=='utils'){
throw new Error(
_internals2.default.STRINGS.ERROR_MISSING_MODULE(namespace,moduleName));

}



var argToPrepend=[];
if(multiApp){
argToPrepend.push(module.app.name);
}
if(hasShards){
argToPrepend.push(serviceUrl);
}

if(argToPrepend.length){
NATIVE_MODULES[key]=nativeWithArgs(nativeModule,argToPrepend);
}else{
NATIVE_MODULES[key]=nativeModule;
}

(0,_events.initialiseNativeModuleEventEmitter)(module,config);

return NATIVE_MODULES[key];
};