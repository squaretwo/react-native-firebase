Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var providerId='twitter.com';var

TwitterAuthProvider=function(){
function TwitterAuthProvider(){_classCallCheck(this,TwitterAuthProvider);
throw new Error(
'`new TwitterAuthProvider()` is not supported on the native Firebase SDKs.');

}_createClass(TwitterAuthProvider,null,[{key:'credential',value:function credential(





token,secret){
return{
token:token,
secret:secret,
providerId:providerId};

}},{key:'PROVIDER_ID',get:function get(){return providerId;}}]);return TwitterAuthProvider;}();exports.default=TwitterAuthProvider;