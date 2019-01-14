var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var temp=read.question("Enter temperature : ");
var vol=read.question("Enter volume : ");
Access.windChill(temp,vol);
