Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var






SocialParameters=function(){





function SocialParameters(link){_classCallCheck(this,SocialParameters);
this._link=link;
}_createClass(SocialParameters,[{key:'setDescriptionText',value:function setDescriptionText(






descriptionText){
this._descriptionText=descriptionText;
return this._link;
}},{key:'setImageUrl',value:function setImageUrl(






imageUrl){
this._imageUrl=imageUrl;
return this._link;
}},{key:'setTitle',value:function setTitle(






title){
this._title=title;
return this._link;
}},{key:'build',value:function build()

{
return{
descriptionText:this._descriptionText,
imageUrl:this._imageUrl,
title:this._title};

}}]);return SocialParameters;}();exports.default=SocialParameters;