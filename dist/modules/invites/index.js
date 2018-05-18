Object.defineProperty(exports,"__esModule",{value:true});exports.statics=exports.NAMESPACE=exports.MODULE_NAME=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _reactNative=require('react-native');
var _events=require('../../utils/events');
var _log=require('../../utils/log');
var _ModuleBase2=require('../../utils/ModuleBase');var _ModuleBase3=_interopRequireDefault(_ModuleBase2);
var _native=require('../../utils/native');
var _Invitation=require('./Invitation');var _Invitation2=_interopRequireDefault(_Invitation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}



var MODULE_NAME=exports.MODULE_NAME='RNFirebaseInvites';
var NAMESPACE=exports.NAMESPACE='invites';
var NATIVE_EVENTS=['invites_invitation_received'];var






Invites=function(_ModuleBase){_inherits(Invites,_ModuleBase);
function Invites(app){_classCallCheck(this,Invites);var _this=_possibleConstructorReturn(this,(Invites.__proto__||Object.getPrototypeOf(Invites)).call(this,
app,{
events:NATIVE_EVENTS,
hasShards:false,
moduleName:MODULE_NAME,
multiApp:false,
namespace:NAMESPACE}));


_events.SharedEventEmitter.addListener(


'invites_invitation_received',
function(invitation){
_events.SharedEventEmitter.emit('onInvitation',invitation);
});



if(_reactNative.Platform.OS==='ios'){
(0,_native.getNativeModule)(_this).jsInitialised();
}return _this;
}_createClass(Invites,[{key:'getInitialInvitation',value:function getInitialInvitation()





{
return(0,_native.getNativeModule)(this).getInitialInvitation();
}},{key:'onInvitation',value:function onInvitation(






listener){var _this2=this;
(0,_log.getLogger)(this).info('Creating onInvitation listener');

_events.SharedEventEmitter.addListener('onInvitation',listener);

return function(){
(0,_log.getLogger)(_this2).info('Removing onInvitation listener');
_events.SharedEventEmitter.removeListener('onInvitation',listener);
};
}},{key:'sendInvitation',value:function sendInvitation(

invitation){
if(!(invitation instanceof _Invitation2.default)){
return Promise.reject(
new Error('Invites:sendInvitation expects an \'Invitation\' but got type '+
typeof invitation));


}
try{
return(0,_native.getNativeModule)(this).sendInvitation(invitation.build());
}catch(error){
return Promise.reject(error);
}
}}]);return Invites;}(_ModuleBase3.default);exports.default=Invites;


var statics=exports.statics={
Invitation:_Invitation2.default};