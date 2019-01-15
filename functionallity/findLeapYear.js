/******************************************************************************
 *  Execution       :   1. default node          : cmd> node findLeapYear.js
 *                      2. if nodemon installed  : cmd> nodemon findLeapYear.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To determine if it is a Leap Year..
 * 
 *  @description    
 * 
 *  @file           : findLeapYear.js
 *  @overview       : By ensuring the user input is a 4 digit number, check Leap Year
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var year=read.questionInt("Enter four digit year : ");
Access.findLeapYear(year);
