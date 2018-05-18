Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






AnalyticsParameters=function(){







function AnalyticsParameters(link){_classCallCheck(this,AnalyticsParameters);
this._link=link;
}_createClass(AnalyticsParameters,[{key:'setCampaign',value:function setCampaign(






campaign){
this._campaign=campaign;
return this._link;
}},{key:'setContent',value:function setContent(






content){
this._content=content;
return this._link;
}},{key:'setMedium',value:function setMedium(






medium){
this._medium=medium;
return this._link;
}},{key:'setSource',value:function setSource(






source){
this._source=source;
return this._link;
}},{key:'setTerm',value:function setTerm(






term){
this._term=term;
return this._link;
}},{key:'build',value:function build()

{
return{
campaign:this._campaign,
content:this._content,
medium:this._medium,
source:this._source,
term:this._term};

}}]);return AnalyticsParameters;}();exports.default=AnalyticsParameters;