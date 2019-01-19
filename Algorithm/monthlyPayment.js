var utility = require('../UtilityProgram/utility')
function monthlyPayment()
 {
var principle=+process.argv[2];
var year=+process.argv[3];
var rate=+process.argv[4];
utility.monthlyPayment(principle,year,rate);
}
monthlyPayment();