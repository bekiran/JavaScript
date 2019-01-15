/******************************************************************************
 *  Execution       :   1. default node          : cmd> powerOfTwo.js
 *                      2. if nodemon installed  : cmd> powerOfTwo.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To Accept value of "N" from user and prints a table of the powers of 2 
 *                    that are less than or equal to 2^N.
 * 
 *  @description    
 * 
 *  @file           : powerOfTwo.js
 *  @overview       : N should be less the 31.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter the number between 0 and 31 : ");
Access.powerOfTwo(number);