Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Base=require('./../../utils/Base64');var _Base2=_interopRequireDefault(_Base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Blob=function(){


function Blob(binaryString){_classCallCheck(this,Blob);
this._binaryString=binaryString;
}_createClass(Blob,[{key:'isEqual',value:function isEqual(











































blob){
if(!(blob instanceof Blob)){
throw new Error('firestore.Blob.isEqual expects an instance of Blob');
}

return this._binaryString===blob._binaryString;
}},{key:'toBase64',value:function toBase64()







{
return _Base2.default.btoa(this._binaryString);
}},{key:'toUint8Array',value:function toUint8Array()







{
return new Uint8Array(
this._binaryString.split('').map(function(c){return c.charCodeAt(0);}));

}},{key:'toString',value:function toString()







{
return'firestore.Blob(base64: '+this.toBase64()+')';
}}],[{key:'fromBase64String',value:function fromBase64String(base64){if(typeof base64!=='string'||base64.length<1){throw new Error('firestore.Blob.fromBase64String expects a string of at least 1 character in length');}return new Blob(_Base2.default.atob(base64));}},{key:'fromUint8Array',value:function fromUint8Array(array){if(!(array instanceof Uint8Array)){throw new Error('firestore.Blob.fromUint8Array expects an instance of Uint8Array');}return new Blob(Array.prototype.map.call(array,function(char){return String.fromCharCode(char);}).join(''));}}]);return Blob;}();exports.default=Blob;