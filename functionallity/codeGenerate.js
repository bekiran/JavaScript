var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var n=read.questionInt("Enter number to generate coupon : ");
if(n>1)
{
    var count = Access.couponCodeGenerate(n);
    console.log(count);
}
else
{
    console.log("please enter number greater then 1 : ")

}