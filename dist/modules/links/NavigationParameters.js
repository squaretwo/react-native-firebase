Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






NavigationParameters=function(){



function NavigationParameters(link){_classCallCheck(this,NavigationParameters);
this._link=link;
}_createClass(NavigationParameters,[{key:'setForcedRedirectEnabled',value:function setForcedRedirectEnabled(






forcedRedirectEnabled){
this._forcedRedirectEnabled=forcedRedirectEnabled;
return this._link;
}},{key:'build',value:function build()

{
return{
forcedRedirectEnabled:this._forcedRedirectEnabled};

}}]);return NavigationParameters;}();exports.default=NavigationParameters;