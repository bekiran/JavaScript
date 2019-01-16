var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');

var res=Utility.fileCall();
var res1=Utility.bubbleSort(res);
console.log("Words in sorted form ",res1);