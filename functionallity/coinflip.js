var utility = require('../UtilityProgram/utility')
var read = require('readline-sync');
function coinflip()
{
    var flips = read.question("Enter the number of toss");
    utility.coinflip(flips);

}
coinflip();