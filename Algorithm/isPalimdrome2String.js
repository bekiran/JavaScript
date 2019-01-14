var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var num1=read.question("Please enter the number to be determined: ");
var num2=read.question("Please enter the number to be determined: ");
var ans=Access.isPalimdrome2String(num1,num2);
console.log(ans);
