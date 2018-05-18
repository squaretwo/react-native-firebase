Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _AndroidAction=require('./AndroidAction');var _AndroidAction2=_interopRequireDefault(_AndroidAction);
var _types=require('./types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var
















AndroidNotification=function(){

















































function AndroidNotification(notification,data){_classCallCheck(this,AndroidNotification);
this._notification=notification;

if(data){
this._actions=data.actions?
data.actions.map(function(action){return(0,_AndroidAction.fromNativeAndroidAction)(action);}):
[];
this._autoCancel=data.autoCancel;
this._badgeIconType=data.badgeIconType;
this._bigPicture=data.bigPicture;
this._bigText=data.bigText;
this._category=data.category;
this._channelId=data.channelId;
this._clickAction=data.clickAction;
this._color=data.color;
this._colorized=data.colorized;
this._contentInfo=data.contentInfo;
this._defaults=data.defaults;
this._group=data.group;
this._groupAlertBehaviour=data.groupAlertBehaviour;
this._groupSummary=data.groupSummary;
this._largeIcon=data.largeIcon;
this._lights=data.lights;
this._localOnly=data.localOnly;
this._number=data.number;
this._ongoing=data.ongoing;
this._onlyAlertOnce=data.onlyAlertOnce;
this._people=data.people;
this._priority=data.priority;
this._progress=data.progress;

this._remoteInputHistory=data.remoteInputHistory;
this._shortcutId=data.shortcutId;
this._showWhen=data.showWhen;
this._smallIcon=data.smallIcon;
this._sortKey=data.sortKey;
this._ticker=data.ticker;
this._timeoutAfter=data.timeoutAfter;
this._usesChronometer=data.usesChronometer;
this._vibrate=data.vibrate;
this._visibility=data.visibility;
this._when=data.when;
}


this._actions=this._actions||[];
this._people=this._people||[];
this._smallIcon=this._smallIcon||{
icon:'ic_launcher'};

}_createClass(AndroidNotification,[{key:'addAction',value:function addAction(


















































































































































action){
if(!(action instanceof _AndroidAction2.default)){
throw new Error('AndroidNotification:addAction expects an \'AndroidAction\' but got type '+
typeof action);

}
this._actions.push(action);
return this._notification;
}},{key:'addPerson',value:function addPerson(






person){
this._people.push(person);
return this._notification;
}},{key:'setAutoCancel',value:function setAutoCancel(






autoCancel){
this._autoCancel=autoCancel;
return this._notification;
}},{key:'setBadgeIconType',value:function setBadgeIconType(






badgeIconType){
if(!Object.values(_types.BadgeIconType).includes(badgeIconType)){
throw new Error('AndroidNotification:setBadgeIconType Invalid BadgeIconType: '+
badgeIconType);

}
this._badgeIconType=badgeIconType;
return this._notification;
}},{key:'setBigPicture',value:function setBigPicture(


picture,
largeIcon,
contentTitle,
summaryText)
{
this._bigPicture={
contentTitle:contentTitle,
largeIcon:largeIcon,
picture:picture,
summaryText:summaryText};

return this._notification;
}},{key:'setBigText',value:function setBigText(


text,
contentTitle,
summaryText)
{
this._bigText={
contentTitle:contentTitle,
summaryText:summaryText,
text:text};

return this._notification;
}},{key:'setCategory',value:function setCategory(






category){
if(!Object.values(_types.Category).includes(category)){
throw new Error('AndroidNotification:setCategory Invalid Category: '+
category);

}
this._category=category;
return this._notification;
}},{key:'setChannelId',value:function setChannelId(






channelId){
this._channelId=channelId;
return this._notification;
}},{key:'setClickAction',value:function setClickAction(






clickAction){
this._clickAction=clickAction;
return this._notification;
}},{key:'setColor',value:function setColor(






color){
this._color=color;
return this._notification;
}},{key:'setColorized',value:function setColorized(






colorized){
this._colorized=colorized;
return this._notification;
}},{key:'setContentInfo',value:function setContentInfo(






contentInfo){
this._contentInfo=contentInfo;
return this._notification;
}},{key:'setDefaults',value:function setDefaults(






defaults){
this._defaults=defaults;
return this._notification;
}},{key:'setGroup',value:function setGroup(






group){
this._group=group;
return this._notification;
}},{key:'setGroupAlertBehaviour',value:function setGroupAlertBehaviour(






groupAlertBehaviour){
if(!Object.values(_types.GroupAlert).includes(groupAlertBehaviour)){
throw new Error('AndroidNotification:setGroupAlertBehaviour Invalid GroupAlert: '+
groupAlertBehaviour);

}
this._groupAlertBehaviour=groupAlertBehaviour;
return this._notification;
}},{key:'setGroupSummary',value:function setGroupSummary(






groupSummary){
this._groupSummary=groupSummary;
return this._notification;
}},{key:'setLargeIcon',value:function setLargeIcon(






largeIcon){
this._largeIcon=largeIcon;
return this._notification;
}},{key:'setLights',value:function setLights(








argb,onMs,offMs){
this._lights={
argb:argb,
onMs:onMs,
offMs:offMs};

return this._notification;
}},{key:'setLocalOnly',value:function setLocalOnly(






localOnly){
this._localOnly=localOnly;
return this._notification;
}},{key:'setNumber',value:function setNumber(






number){
this._number=number;
return this._notification;
}},{key:'setOngoing',value:function setOngoing(






ongoing){
this._ongoing=ongoing;
return this._notification;
}},{key:'setOnlyAlertOnce',value:function setOnlyAlertOnce(






onlyAlertOnce){
this._onlyAlertOnce=onlyAlertOnce;
return this._notification;
}},{key:'setPriority',value:function setPriority(






priority){
if(!Object.values(_types.Priority).includes(priority)){
throw new Error('AndroidNotification:setPriority Invalid Priority: '+
priority);

}
this._priority=priority;
return this._notification;
}},{key:'setProgress',value:function setProgress(









max,
progress,
indeterminate)
{
this._progress={
max:max,
progress:progress,
indeterminate:indeterminate};

return this._notification;
}},{key:'setRemoteInputHistory',value:function setRemoteInputHistory(
















remoteInputHistory){
this._remoteInputHistory=remoteInputHistory;
return this._notification;
}},{key:'setShortcutId',value:function setShortcutId(






shortcutId){
this._shortcutId=shortcutId;
return this._notification;
}},{key:'setShowWhen',value:function setShowWhen(






showWhen){
this._showWhen=showWhen;
return this._notification;
}},{key:'setSmallIcon',value:function setSmallIcon(







icon,level){
this._smallIcon={
icon:icon,
level:level};

return this._notification;
}},{key:'setSortKey',value:function setSortKey(






sortKey){
this._sortKey=sortKey;
return this._notification;
}},{key:'setTicker',value:function setTicker(






ticker){
this._ticker=ticker;
return this._notification;
}},{key:'setTimeoutAfter',value:function setTimeoutAfter(






timeoutAfter){
this._timeoutAfter=timeoutAfter;
return this._notification;
}},{key:'setUsesChronometer',value:function setUsesChronometer(






usesChronometer){
this._usesChronometer=usesChronometer;
return this._notification;
}},{key:'setVibrate',value:function setVibrate(






vibrate){
this._vibrate=vibrate;
return this._notification;
}},{key:'setWhen',value:function setWhen(






when){
this._when=when;
return this._notification;
}},{key:'build',value:function build()

{

if(!this._channelId){
throw new Error(
'AndroidNotification: Missing required `channelId` property');

}else if(!this._smallIcon){
throw new Error(
'AndroidNotification: Missing required `smallIcon` property');

}

return{
actions:this._actions.map(function(action){return action.build();}),
autoCancel:this._autoCancel,
badgeIconType:this._badgeIconType,
bigPicture:this._bigPicture,
bigText:this._bigText,
category:this._category,
channelId:this._channelId,
clickAction:this._clickAction,
color:this._color,
colorized:this._colorized,
contentInfo:this._contentInfo,
defaults:this._defaults,
group:this._group,
groupAlertBehaviour:this._groupAlertBehaviour,
groupSummary:this._groupSummary,
largeIcon:this._largeIcon,
lights:this._lights,
localOnly:this._localOnly,
number:this._number,
ongoing:this._ongoing,
onlyAlertOnce:this._onlyAlertOnce,
people:this._people,
priority:this._priority,
progress:this._progress,

remoteInputHistory:this._remoteInputHistory,
shortcutId:this._shortcutId,
showWhen:this._showWhen,
smallIcon:this._smallIcon,
sortKey:this._sortKey,

ticker:this._ticker,
timeoutAfter:this._timeoutAfter,
usesChronometer:this._usesChronometer,
vibrate:this._vibrate,
visibility:this._visibility,
when:this._when};

}},{key:'actions',get:function get(){return this._actions;}},{key:'autoCancel',get:function get(){return this._autoCancel;}},{key:'badgeIconType',get:function get(){return this._badgeIconType;}},{key:'bigPicture',get:function get(){return this._bigPicture;}},{key:'bigText',get:function get(){return this._bigText;}},{key:'category',get:function get(){return this._category;}},{key:'channelId',get:function get(){return this._channelId;}},{key:'clickAction',get:function get(){return this._clickAction;}},{key:'color',get:function get(){return this._color;}},{key:'colorized',get:function get(){return this._colorized;}},{key:'contentInfo',get:function get(){return this._contentInfo;}},{key:'defaults',get:function get(){return this._defaults;}},{key:'group',get:function get(){return this._group;}},{key:'groupAlertBehaviour',get:function get(){return this._groupAlertBehaviour;}},{key:'groupSummary',get:function get(){return this._groupSummary;}},{key:'largeIcon',get:function get(){return this._largeIcon;}},{key:'lights',get:function get(){return this._lights;}},{key:'localOnly',get:function get(){return this._localOnly;}},{key:'number',get:function get(){return this._number;}},{key:'ongoing',get:function get(){return this._ongoing;}},{key:'onlyAlertOnce',get:function get(){return this._onlyAlertOnce;}},{key:'people',get:function get(){return this._people;}},{key:'priority',get:function get(){return this._priority;}},{key:'progress',get:function get(){return this._progress;}},{key:'remoteInputHistory',get:function get(){return this._remoteInputHistory;}},{key:'shortcutId',get:function get(){return this._shortcutId;}},{key:'showWhen',get:function get(){return this._showWhen;}},{key:'smallIcon',get:function get(){return this._smallIcon;}},{key:'sortKey',get:function get(){return this._sortKey;}},{key:'ticker',get:function get(){return this._ticker;}},{key:'timeoutAfter',get:function get(){return this._timeoutAfter;}},{key:'usesChronometer',get:function get(){return this._usesChronometer;}},{key:'vibrate',get:function get(){return this._vibrate;}},{key:'visibility',get:function get(){return this._visibility;}},{key:'when',get:function get(){return this._when;}}]);return AndroidNotification;}();exports.default=AndroidNotification;