Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _AnalyticsParameters=require('./AnalyticsParameters');var _AnalyticsParameters2=_interopRequireDefault(_AnalyticsParameters);
var _AndroidParameters=require('./AndroidParameters');var _AndroidParameters2=_interopRequireDefault(_AndroidParameters);
var _IOSParameters=require('./IOSParameters');var _IOSParameters2=_interopRequireDefault(_IOSParameters);
var _ITunesParameters=require('./ITunesParameters');var _ITunesParameters2=_interopRequireDefault(_ITunesParameters);
var _NavigationParameters=require('./NavigationParameters');var _NavigationParameters2=_interopRequireDefault(_NavigationParameters);
var _SocialParameters=require('./SocialParameters');var _SocialParameters2=_interopRequireDefault(_SocialParameters);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var



DynamicLink=function(){









function DynamicLink(link,dynamicLinkDomain){_classCallCheck(this,DynamicLink);
this._analytics=new _AnalyticsParameters2.default(this);
this._android=new _AndroidParameters2.default(this);
this._dynamicLinkDomain=dynamicLinkDomain;
this._ios=new _IOSParameters2.default(this);
this._itunes=new _ITunesParameters2.default(this);
this._link=link;
this._navigation=new _NavigationParameters2.default(this);
this._social=new _SocialParameters2.default(this);
}_createClass(DynamicLink,[{key:'build',value:function build()

























{
if(!this._link){
throw new Error('DynamicLink: Missing required `link` property');
}else if(!this._dynamicLinkDomain){
throw new Error(
'DynamicLink: Missing required `dynamicLinkDomain` property');

}

return{
analytics:this._analytics.build(),
android:this._android.build(),
dynamicLinkDomain:this._dynamicLinkDomain,
ios:this._ios.build(),
itunes:this._itunes.build(),
link:this._link,
navigation:this._navigation.build(),
social:this._social.build()};

}},{key:'analytics',get:function get(){return this._analytics;}},{key:'android',get:function get(){return this._android;}},{key:'ios',get:function get(){return this._ios;}},{key:'itunes',get:function get(){return this._itunes;}},{key:'navigation',get:function get(){return this._navigation;}},{key:'social',get:function get(){return this._social;}}]);return DynamicLink;}();exports.default=DynamicLink;