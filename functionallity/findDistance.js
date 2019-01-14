var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');
var a=readline.question('Enter the X point to find distance from to origin : ');
var b=readline.question('Enter the Y point to find distance from to origin : ');
var distance=Utility.findDistance(a,b);
console.log("Distnace form Origin is : "+distance);