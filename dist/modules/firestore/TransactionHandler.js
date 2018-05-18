Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _events=require('../../utils/events');
var _native=require('../../utils/native');
var _Transaction=require('./Transaction');var _Transaction2=_interopRequireDefault(_Transaction);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}


var transactionId=0;






var generateTransactionId=function generateTransactionId(){return transactionId++;};var



















TransactionHandler=function(){








function TransactionHandler(firestore){_classCallCheck(this,TransactionHandler);
this._pending={};
this._firestore=firestore;
_events.SharedEventEmitter.addListener(
(0,_events.getAppEventName)(this._firestore,'firestore_transaction_event'),
this._handleTransactionEvent.bind(this));

}_createClass(TransactionHandler,[{key:'_add',value:function _add(












updateFunction)
{var _this=this;
var id=generateTransactionId();

var meta={
id:id,
updateFunction:updateFunction,
stack:new Error().stack.
split('\n').
slice(2).
join('\n')};


this._pending[id]={
meta:meta,
transaction:new _Transaction2.default(this._firestore,meta)};



return new Promise(function(resolve,reject){
(0,_native.getNativeModule)(_this._firestore).transactionBegin(id);
meta.resolve=function(r){
resolve(r);
_this._remove(id);
};
meta.reject=function(e){
reject(e);
_this._remove(id);
};
});
}},{key:'_remove',value:function _remove(







id){
(0,_native.getNativeModule)(this._firestore).transactionDispose(id);
delete this._pending[id];
}},{key:'_handleTransactionEvent',value:function _handleTransactionEvent(















event){

switch(event.type){
case'update':
this._handleUpdate(event);
break;
case'error':
this._handleError(event);
break;
case'complete':
this._handleComplete(event);
break;}

}},{key:'_handleUpdate',value:function _handleUpdate(







event){var id,_pending$id,meta,transaction,updateFunction,reject,finalError,updateFailed,pendingResult,possiblePromise;return regeneratorRuntime.async(function _handleUpdate$(_context){while(1){switch(_context.prev=_context.next){case 0:
id=event.id;if(

this._pending[id]){_context.next=3;break;}return _context.abrupt('return',this._remove(id));case 3:_pending$id=

this._pending[id],meta=_pending$id.meta,transaction=_pending$id.transaction;
updateFunction=meta.updateFunction,reject=meta.reject;


transaction._prepare();

finalError=void 0;
updateFailed=void 0;
pendingResult=void 0;_context.prev=9;



possiblePromise=updateFunction(transaction);if(!(



!possiblePromise||!possiblePromise.then)){_context.next=15;break;}
finalError=new Error(
'Update function for `firestore.runTransaction(updateFunction)` must return a Promise.');_context.next=18;break;case 15:_context.next=17;return regeneratorRuntime.awrap(


possiblePromise);case 17:pendingResult=_context.sent;case 18:_context.next=24;break;case 20:_context.prev=20;_context.t0=_context['catch'](9);




updateFailed=true;
finalError=_context.t0;case 24:if(!(





updateFailed||finalError)){_context.next=26;break;}return _context.abrupt('return',

reject(finalError));case 26:





transaction._pendingResult=pendingResult;return _context.abrupt('return',


(0,_native.getNativeModule)(this._firestore).transactionApplyBuffer(
id,
transaction._commandBuffer));case 28:case'end':return _context.stop();}}},null,this,[[9,20]]);}},{key:'_handleError',value:function _handleError(









event){var
id=event.id,error=event.error;var
meta=this._pending[id].meta;

if(meta&&error){var
_code=error.code,_message=error.message;



var errorWithStack=new Error(_message);

errorWithStack.code=_code;

errorWithStack.stack='Error: '+_message+'\n'+meta.stack;


meta.reject(errorWithStack);
}
}},{key:'_handleComplete',value:function _handleComplete(







event){var
id=event.id;var _pending$id2=
this._pending[id],meta=_pending$id2.meta,transaction=_pending$id2.transaction;

if(meta){
var pendingResult=transaction._pendingResult;

meta.resolve(pendingResult);
}
}}]);return TransactionHandler;}();exports.default=TransactionHandler;