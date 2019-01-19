var utility = require('../UtilityProgram/utility');
var read = require('readline-sync');
function sqrRoot()
{
    var number = read.questionInt("Enter non -ve value : ")
    utility.sqrRoot(number);
}
sqrRoot()