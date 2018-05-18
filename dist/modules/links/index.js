Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _DynamicLink=require('./DynamicLink');var _DynamicLink2=_interopRequireDefault(_DynamicLink);
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var NATIVE_EVENTS=['links_link_received'];

var MODULE_NAME=exports.MODULE_NAME='RNFirebaseLinks';
var NAMESPACE=exports.NAMESPACE='links';var




Links=function(_ModuleBase){_inherits(Links,_ModuleBase);
function Links(app){_classCallCheck(this,Links);var _this=_possibleConstructorReturn(this,(Links.__proto__||Object.getPrototypeOf(Links)).call(this,
app,{
events:NATIVE_EVENTS,
moduleName:MODULE_NAME,
multiApp:false,
hasShards:false,
namespace:NAMESPACE}));


_events.SharedEventEmitter.addListener(


'links_link_received',
function(link){
_events.SharedEventEmitter.emit('onLink',link);
});



if(_reactNative.Platform.OS==='ios'){
(0,_native.getNativeModule)(_this).jsInitialised();
}return _this;
}_createClass(Links,[{key:'createDynamicLink',value:function createDynamicLink(






link){
if(!(link instanceof _DynamicLink2.default)){
return Promise.reject(
new Error('Links:createDynamicLink expects a \'DynamicLink\' but got type '+
typeof link));


}
try{
return(0,_native.getNativeModule)(this).createDynamicLink(link.build());
}catch(error){
return Promise.reject(error);
}
}},{key:'createShortDynamicLink',value:function createShortDynamicLink(







link,
type)
{
if(!(link instanceof _DynamicLink2.default)){
return Promise.reject(
new Error('Links:createShortDynamicLink expects a \'DynamicLink\' but got type '+
typeof link));


}
try{
return(0,_native.getNativeModule)(this).createShortDynamicLink(link.build(),type);
}catch(error){
return Promise.reject(error);
}
}},{key:'getInitialLink',value:function getInitialLink()





{
return(0,_native.getNativeModule)(this).getInitialLink();
}},{key:'onLink',value:function onLink(






listener){var _this2=this;
(0,_log.getLogger)(this).info('Creating onLink listener');

_events.SharedEventEmitter.addListener('onLink',listener);

return function(){
(0,_log.getLogger)(_this2).info('Removing onLink listener');
_events.SharedEventEmitter.removeListener('onLink',listener);
};
}}]);return Links;}(_ModuleBase3.default);exports.default=Links;


var statics=exports.statics={
DynamicLink:_DynamicLink2.default};