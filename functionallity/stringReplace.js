/******************************************************************************
 *  Execution       :   1. default node          : cmd> stringReplace.js
 *                      2. if nodemon installed  : cmd> stringReplace.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To replace String Template “Hello <<UserName>>, How are you?”
 *                    with the given user input.
 * 
 *  @description    
 * 
 *  @file           : stringReplace.js
 *  @overview       : To replace String Template with givemn user input.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/

var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var username=read.question("Enter your name : ");
Access.stringReplace(username);