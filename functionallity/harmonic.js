/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gambler.js
 *                      2. if nodemon installed  : cmd> nodemon gambler.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : Get the nth Harmonic number.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : Get the Harmonic number of all the values till nth number,
 *                    and get the sum of it
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
const Access = require('../UtilityProgram/utility');
const read = require('readline-sync');
const number=read.question("Enter the number greater then zero : ");
console.log(Access.harmonicNumber(number));