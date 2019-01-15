/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gambler.js
 *                      2. if nodemon installed  : cmd> nodemon gambler.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To play Gambling game till player reaches his goal or losses all his money.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : To play Gambling game till player reaches his goal or losses all his money.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var stake=read.question("Enter stake value : ");
var trails=read.question("Enter number of trails : ");
var target=read.question("Enter target value  : ");
Access.gamblerBrokeOrOwn(stake,trails,target);
