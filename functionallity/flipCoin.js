/******************************************************************************
 *  Execution       :   1. default node          : cmd> node flipCoin.js
 *                      2. if nodemon installed  : cmd> nodemon flipCoin.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To flip coin and get the percentage of head and tails obtained.
 * 
 *  @description    
 * 
 *  @file           : flipCoin.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var utility = require('../UtilityProgram/utility')
var read = require('readline-sync');
function flipCoin()
{
    var flips = read.question("Enter the number of toss : ");
    utility.flipCoin(flips);

}
flipCoin();