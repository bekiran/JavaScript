var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var stake=read.question("Enter stake value : ");
var trails=read.question("Enter number of trails : ");
var target=read.question("Enter target value  : ");
Access.gamblerBrokeOrOwn(stake,trails,target);
