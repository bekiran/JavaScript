var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.question("Please enter the number to be determined: ");
var ans=Access.isPrime(number);
console.log(ans);