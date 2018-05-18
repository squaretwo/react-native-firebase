Object.defineProperty(exports,"__esModule",{value:true});


var CHARS=
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';exports.default=

{



btoa:function btoa(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';
var map=void 0;
var i=0;
var block=0;
var output='';


for(
block=0,i=0,map=CHARS;
input.charAt(i|0)||(map='=',i%1);
output+=map.charAt(63&block>>8-i%1*8))
{
var charCode=input.charCodeAt(i+=3/4);

if(charCode>0xff){
throw new Error(
"'RNFirebase.utils.btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");

}

block=block<<8|charCode;
}

return output;
},




atob:function atob(){var input=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';
var i=0;
var bc=0;
var bs=0;
var buffer=void 0;
var output='';

var str=input.replace(/=+$/,'');

if(str.length%4===1){
throw new Error(
"'RNFirebase.utils.atob' failed: The string to be decoded is not correctly encoded.");

}


for(
bc=0,bs=0,i=0;
buffer=str.charAt(i++);
~buffer&&(bs=bc%4?bs*64+buffer:buffer,bc++%4)?
output+=String.fromCharCode(255&bs>>(-2*bc&6)):
0)
{
buffer=CHARS.indexOf(buffer);
}

return output;
}};