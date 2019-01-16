var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');
function bubbleString()
{
    var arr=[];
   var res= Utility.arrayCall(arr);
  var ans = Utility.bubbleString(res);
   console.log(ans);
}
bubbleString();