var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter the number to find prime factor : ");
Access.primeFactors(number);