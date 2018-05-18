Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('./utils');
var _serialize=require('./utils/serialize');




var _DocumentSnapshot=require('./DocumentSnapshot');var _DocumentSnapshot2=_interopRequireDefault(_DocumentSnapshot);
var _native=require('../../utils/native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var


















Transaction=function(){





function Transaction(firestore,meta){_classCallCheck(this,Transaction);
this._meta=meta;
this._commandBuffer=[];
this._firestore=firestore;
this._pendingResult=undefined;
}_createClass(Transaction,[{key:'_prepare',value:function _prepare()













{
this._commandBuffer=[];
this._pendingResult=undefined;
}},{key:'get',value:function get(














documentRef){var _this=this;

return(0,_native.getNativeModule)(this._firestore).
transactionGetDocument(this._meta.id,documentRef.path).
then(function(result){return new _DocumentSnapshot2.default(_this._firestore,result);});
}},{key:'set',value:function set(















documentRef,
data,
options)
{


this._commandBuffer.push({
type:'set',
path:documentRef.path,
data:(0,_serialize.buildNativeMap)(data),
options:options||{}});


return this;
}},{key:'update',value:function update(













documentRef){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}

var data=(0,_utils.parseUpdateArgs)(args,'Transaction.update');
this._commandBuffer.push({
type:'update',
path:documentRef.path,
data:(0,_serialize.buildNativeMap)(data)});


return this;
}},{key:'delete',value:function _delete(








documentRef){

this._commandBuffer.push({
type:'delete',
path:documentRef.path});


return this;
}}]);return Transaction;}();exports.default=Transaction;