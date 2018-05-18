Object.defineProperty(exports,"__esModule",{value:true});exports.initialiseLogger=exports.LEVELS=exports.getLogger=undefined;



var _internals=require('./internals');var _internals2=_interopRequireDefault(_internals);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}


var NATIVE_LOGGERS={};

var getModuleKey=function getModuleKey(module){return(
module.app.name+':'+module.namespace);};

var getLogger=exports.getLogger=function getLogger(module){
var key=getModuleKey(module);
return NATIVE_LOGGERS[key];
};

var LEVELS=exports.LEVELS={
debug:0,
info:1,
warn:2,
error:3};


var initialiseLogger=exports.initialiseLogger=function initialiseLogger(module,logNamespace){
var key=getModuleKey(module);
if(!NATIVE_LOGGERS[key]){
var prefix='\uD83D\uDD25 '+logNamespace.toUpperCase();
NATIVE_LOGGERS[key]={
debug:function debug(){var _console;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
if(__DEV__&&LEVELS.debug>=LEVELS[_internals2.default.OPTIONS.logLevel])
(_console=console).log.apply(_console,[prefix].concat(_toConsumableArray(args)));
},
info:function info(){var _console2;for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}
if(__DEV__&&LEVELS.info>=LEVELS[_internals2.default.OPTIONS.logLevel])
(_console2=console).log.apply(_console2,[prefix].concat(_toConsumableArray(args)));
},
warn:function warn(){var _console3;
if(__DEV__&&LEVELS.warn>=LEVELS[_internals2.default.OPTIONS.logLevel])
(_console3=console).warn.apply(_console3,arguments);
},
error:function error(){var _console4;
(_console4=console).error.apply(_console4,arguments);
}};

}
};