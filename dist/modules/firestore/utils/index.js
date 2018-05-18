Object.defineProperty(exports,"__esModule",{value:true});exports.parseUpdateArgs=exports.mergeFieldPathData=undefined;var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};


var _FieldPath=require('../FieldPath');var _FieldPath2=_interopRequireDefault(_FieldPath);
var _utils=require('../../../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var buildFieldPathData=function buildFieldPathData(segments,value){
if(segments.length===1){
return _defineProperty({},
segments[0],value);

}
return _defineProperty({},
segments[0],buildFieldPathData(segments.slice(1),value));

};


var mergeFieldPathData=exports.mergeFieldPathData=function mergeFieldPathData(
data,
segments,
value)
{
if(segments.length===1){
return _extends({},
data,_defineProperty({},
segments[0],value));

}else if(data[segments[0]]){
return _extends({},
data,_defineProperty({},
segments[0],mergeFieldPathData(
data[segments[0]],
segments.slice(1),
value)));


}
return _extends({},
data,_defineProperty({},
segments[0],buildFieldPathData(segments.slice(1),value)));

};

var parseUpdateArgs=exports.parseUpdateArgs=function parseUpdateArgs(args,methodName){
var data={};
if(args.length===1){
if(!(0,_utils.isObject)(args[0])){
throw new Error(
methodName+' failed: If using a single update argument, it must be an object.');

}var _args=_slicedToArray(
args,1);data=_args[0];
}else if(args.length%2===1){
throw new Error(
methodName+' failed: The update arguments must be either a single object argument, or equal numbers of key/value pairs.');

}else{
for(var i=0;i<args.length;i+=2){
var key=args[i];
var value=args[i+1];
if((0,_utils.isString)(key)){
data[key]=value;
}else if(key instanceof _FieldPath2.default){
data=mergeFieldPathData(data,key._segments,value);
}else{
throw new Error(
methodName+' failed: Argument at index '+i+' must be a string or FieldPath');

}
}
}
return data;
};