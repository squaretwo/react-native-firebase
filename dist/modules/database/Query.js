Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('../../utils');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var









Query=function(){



function Query(ref,existingModifiers){_classCallCheck(this,Query);
this.modifiers=existingModifiers?[].concat(_toConsumableArray(existingModifiers)):[];
this._reference=ref;
}_createClass(Query,[{key:'orderBy',value:function orderBy(







name,key){
this.modifiers.push({
id:'orderBy-'+name+':'+(key||''),
type:'orderBy',
name:name,
key:key});


return this._reference;
}},{key:'limit',value:function limit(







name,_limit){
this.modifiers.push({
id:'limit-'+name+':'+_limit,
type:'limit',
name:name,
limit:_limit});


return this._reference;
}},{key:'filter',value:function filter(








name,value,key){
this.modifiers.push({
id:'filter-'+name+':'+(0,_utils.objectToUniqueId)(value)+':'+(key||''),
type:'filter',
name:name,
value:value,
valueType:typeof value,
key:key});


return this._reference;
}},{key:'getModifiers',value:function getModifiers()





{
return[].concat(_toConsumableArray(this.modifiers));
}},{key:'queryIdentifier',value:function queryIdentifier()





{

var sortedModifiers=this.getModifiers().sort(function(a,b){
if(a.id<b.id)return-1;
if(a.id>b.id)return 1;
return 0;
});


var key='{';
for(var i=0;i<sortedModifiers.length;i++){
if(i!==0)key+=',';
key+=sortedModifiers[i].id;
}
key+='}';

return key;
}}]);return Query;}();exports.default=Query;