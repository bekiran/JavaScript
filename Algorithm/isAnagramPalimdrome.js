/******************************************************************************
 *  Execution       :   1. default node          : cmd> node isAnagramPalimdrome.js 
 *                      2. if nodemon installed  : cmd> nodemon isAnagramPalimdrome.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To generate the unique coupon numbers
 * 
 *  @description    
 * 
 *  @file           : isAnagramPalimdrome.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var read=require('readline-sync');
var utility=require('../UtilityProgram/utility');
function anagramPalimdrome() 
{
    console.log("program start");
    utility.isAnagramPalimdrome();
}
anagramPalimdrome()