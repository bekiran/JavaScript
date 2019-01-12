/* 2. Flip Coin and print percentage of Heads and Tails

 *  Purpose: Accept number of toss from user and  using Math.random print the percentage of 
 Heads and Tails.
 *
 *  @author  Kiran B.E.
 *  @version 1.0
 *  @since   10 Jan 2018
 *  
*/
var utility = require('../UtilityProgram/utility')
var read = require('readline-sync');
function flipCoin()
{
    var flips = read.question("Enter the number of toss : ");
    utility.flipCoin(flips);

}
flipCoin();