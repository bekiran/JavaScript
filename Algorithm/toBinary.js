var read = require('readline-sync')
var utility = require('../UtilityProgram/utility')
function toBinary()
{
    var number=read.questionInt("Enter the Decimal Value : ")
    var k=utility.toBinary(number);
    console.log("result is "+k)

}
toBinary()