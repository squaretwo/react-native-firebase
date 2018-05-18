Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _reactNative=require('react-native');
var _app2=require('../modules/core/app');var _app3=_interopRequireDefault(_app2);
var _internals=require('./internals');var _internals2=_interopRequireDefault(_internals);
var _=require('./');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}










var FirebaseCoreModule=_reactNative.NativeModules.RNFirebase;

var APPS={};
var APP_MODULES={};
var DEFAULT_APP_NAME='[DEFAULT]';exports.default=

{
DEFAULT_APP_NAME:DEFAULT_APP_NAME,

app:function app(name){
var _name=name?name.toUpperCase():DEFAULT_APP_NAME;
var app=APPS[_name];
if(!app)throw new Error(_internals2.default.STRINGS.ERROR_APP_NOT_INIT(_name));
return app;
},

apps:function apps(){

return Object.values(APPS);
},









appModule:function appModule(
app,
namespace,
InstanceClass)
{
return function(){var serviceUrl=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;
if(serviceUrl&&namespace!=='database'){
throw new Error(
_internals2.default.STRINGS.ERROR_INIT_SERVICE_URL_UNSUPPORTED(namespace));

}

var appOrShardName=serviceUrl||app.name;
if(!APP_MODULES[appOrShardName]){
APP_MODULES[appOrShardName]={};
}

if(
_.isAndroid&&
namespace!=='utils'&&
!_internals2.default.FLAGS.checkedPlayServices)
{
_internals2.default.FLAGS.checkedPlayServices=true;
app.utils().checkPlayServicesAvailability();
}

if(!APP_MODULES[appOrShardName][namespace]){
APP_MODULES[appOrShardName][namespace]=new InstanceClass(
serviceUrl||app,
app.options);

}

return APP_MODULES[appOrShardName][namespace];
};
},

deleteApp:function deleteApp(name){
var app=APPS[name];
if(!app)return Promise.resolve(true);


return app.delete().then(function(){
delete APPS[name];
return true;
});
},








initializeApp:function initializeApp(options,name){
if(name&&!(0,_.isString)(name)){
throw new Error(_internals2.default.STRINGS.ERROR_INIT_STRING_NAME);
}

var _name=(name||DEFAULT_APP_NAME).toUpperCase();



if(APPS[_name]){
console.warn(_internals2.default.STRINGS.WARN_INITIALIZE_DEPRECATION);
return APPS[_name];
}




if(!(0,_.isObject)(options)){
throw new Error(_internals2.default.STRINGS.ERROR_INIT_OBJECT);
}

if(!options.apiKey){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('apiKey'));
}

if(!options.appId){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('appId'));
}

if(!options.databaseURL){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('databaseURL'));
}

if(!options.messagingSenderId){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('messagingSenderId'));
}

if(!options.projectId){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('projectId'));
}

if(!options.storageBucket){
throw new Error(_internals2.default.STRINGS.ERROR_MISSING_OPT('storageBucket'));
}

APPS[_name]=new _app3.default(_name,options);

return APPS[_name];
},




initializeNativeApps:function initializeNativeApps(){
for(var i=0,len=FirebaseCoreModule.apps.length;i<len;i++){
var app=FirebaseCoreModule.apps[i];
var options=_extends({},app);
delete options.name;
APPS[app.name]=new _app3.default(app.name,options,true);
}
},








moduleAndStatics:function moduleAndStatics(
namespace,
statics,
moduleName)
{var _this=this;
var getModule=function getModule(appOrUrl){
var _app=appOrUrl;
var _serviceUrl=null;
if(typeof appOrUrl==='string'&&namespace==='database'){
_app=null;
_serviceUrl=appOrUrl;
}


if(_app&&!(_app instanceof _app3.default))
throw new Error(_internals2.default.STRINGS.ERROR_NOT_APP(namespace));else
if(!_app)


_app=_this.app(DEFAULT_APP_NAME);

var module=_app[namespace];
return module(_serviceUrl);
};

return _extends(getModule,statics,{
nativeModuleExists:!!_reactNative.NativeModules[moduleName]});

}};