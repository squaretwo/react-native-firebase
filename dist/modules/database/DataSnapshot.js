Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _utils=require('./../../utils');function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






DataSnapshot=function(){







function DataSnapshot(ref,snapshot){_classCallCheck(this,DataSnapshot);
this.key=snapshot.key;

if(ref.key!==snapshot.key){
this.ref=ref.child(snapshot.key);
}else{
this.ref=ref;
}


this._value=snapshot.value;
this._priority=snapshot.priority===undefined?null:snapshot.priority;
this._childKeys=snapshot.childKeys||[];
}_createClass(DataSnapshot,[{key:'val',value:function val()






{

if((0,_utils.isObject)(this._value)||Array.isArray(this._value))
return JSON.parse(JSON.stringify(this._value));
return this._value;
}},{key:'child',value:function child(







path){

var value=(0,_utils.deepGet)(this._value,path);
if(value===undefined)value=null;
var childRef=this.ref.child(path);
return new DataSnapshot(childRef,{
value:value,
key:childRef.key,
exists:value!==null,






childKeys:(0,_utils.isObject)(value)&&value!==null?Object.keys(value):[]});

}},{key:'exists',value:function exists()






{
return this._value!==null;
}},{key:'forEach',value:function forEach(






action){
if(!this._childKeys.length)return false;
var cancelled=false;

for(var i=0,len=this._childKeys.length;i<len;i++){
var _key=this._childKeys[i];
var childSnapshot=this.child(_key);
var returnValue=action(childSnapshot);

if(returnValue===true){
cancelled=true;
break;
}
}

return cancelled;
}},{key:'getPriority',value:function getPriority()






{
return this._priority;
}},{key:'hasChild',value:function hasChild(







path){
return(0,_utils.deepExists)(this._value,path);
}},{key:'hasChildren',value:function hasChildren()






{
return this.numChildren()>0;
}},{key:'numChildren',value:function numChildren()






{
if(!(0,_utils.isObject)(this._value))return 0;
return Object.keys(this._value).length;
}},{key:'toJSON',value:function toJSON()






{
return this.val();
}}]);return DataSnapshot;}();exports.default=DataSnapshot;