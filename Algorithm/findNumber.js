var utility =require('../UtilityProgram/utility');
var read = require('readline-sync');
var low = read.questionInt("Enter starting number : ");
var high=read.questionInt("Enter last number : ");
var n = utility.findNumber(low,high,read);
console.log("Your number is : "+n)