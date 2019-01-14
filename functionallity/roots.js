var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var a=read.question("Enter the A value : ");
var b=read.question("Enter the B value : ");
var c=read.question("Enter the C value : ");
Access.roots(a,b,c);