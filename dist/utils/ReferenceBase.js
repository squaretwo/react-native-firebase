Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


ReferenceBase=function(){


function ReferenceBase(path){_classCallCheck(this,ReferenceBase);
if(path){
this.path=
path.length>1&&path.endsWith('/')?
path.substring(0,path.length-1):
path;
}else{
this.path='/';
}
}_createClass(ReferenceBase,[{key:'key',get:function get()







{
return this.path==='/'?
null:
this.path.substring(this.path.lastIndexOf('/')+1);
}}]);return ReferenceBase;}();exports.default=ReferenceBase;