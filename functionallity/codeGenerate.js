var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var number=read.questionInt("Enter number to generate coupon : ");
Access.couponCodeGenerate(number);