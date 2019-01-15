/******************************************************************************
 *  Execution       :   1. default node          : cmd> node findDistance.js
 *                      2. if nodemon installed  : cmd> nodemon findDistance.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To find the distance of two points 'x' & 'Y' from origin.
 * 
 *  @description    
 * 
 *  @file           : findDistance.js
 *  @overview       : The formulae to calculate distance = sqrt(x*x + y*y).
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');
var a=readline.questionInt('Enter the X point to find distance from to origin : ');
var b=readline.questionInt('Enter the Y point to find distance from to origin : ');
var distance=Utility.findDistance(a,b);
console.log("Distnace form Origin is : "+distance);