/******************************************************************************
 *  Execution       :   1. default node          : cmd> sumOfThree.js
 *                      2. if nodemon installed  : cmd> sumOfThree.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To find the triplets whose sum is equal to Zero.
 * 
 *  @description    
 * 
 *  @file           : sumOfThree.js
 *  @overview       : For all permutation of the string find the distinct 
 *                    triplets whose sum equals Zero.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');

function triplet()
{
    var arr=[];
    var res=[];
    res=Utility.arrayCall(arr);
    Utility.triplet(res);
}
triplet();
/*    
 var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');
var arr=readline.question('Enter the number : ');
var arr1=readline.question('Enter the number : ');
var arr2=readline.question('Enter the number : ');
var res=Utility.sumOfThreeInteger(arr,arr1,arr2);
*/