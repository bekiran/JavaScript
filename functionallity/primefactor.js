var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter only number : ");
Access.primefactors(number);