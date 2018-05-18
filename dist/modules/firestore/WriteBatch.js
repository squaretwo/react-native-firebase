Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('./utils');
var _serialize=require('./utils/serialize');
var _native=require('../../utils/native');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var















WriteBatch=function(){



function WriteBatch(firestore){_classCallCheck(this,WriteBatch);
this._firestore=firestore;
this._writes=[];
}_createClass(WriteBatch,[{key:'commit',value:function commit()

{
return(0,_native.getNativeModule)(this._firestore).documentBatch(this._writes);
}},{key:'delete',value:function _delete(

docRef){



this._writes.push({
path:docRef.path,
type:'DELETE'});


return this;
}},{key:'set',value:function set(

docRef,data,options){




var nativeData=(0,_serialize.buildNativeMap)(data);
this._writes.push({
data:nativeData,
options:options,
path:docRef.path,
type:'SET'});


return this;
}},{key:'update',value:function update(

docRef){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}


var data=(0,_utils.parseUpdateArgs)(args,'WriteBatch.update');
this._writes.push({
data:(0,_serialize.buildNativeMap)(data),
path:docRef.path,
type:'UPDATE'});


return this;
}}]);return WriteBatch;}();exports.default=WriteBatch;