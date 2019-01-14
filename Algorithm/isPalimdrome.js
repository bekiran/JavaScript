var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var string1=read.question("Please enter the number to be determined: ");
var ans=Access.isPalimdrome(string1);
console.log(ans);
