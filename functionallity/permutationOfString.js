/******************************************************************************
 *  Execution       :   1. default node          : cmd> permutationOfString.js
 *                      2. if nodemon installed  : cmd> permutationOfString.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To return all permutation of a String.
 * 
 *  @description    
 * 
 *  @file           : permutationOfString.js
 *  @overview       : To return all permutation of a String.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var str=read.question("Enter the String : ");
Access.permutationOfString(str);
