/******************************************************************************
 *  Execution       :   1. default node          : cmd> roots.js
 *                      2. if nodemon installed  : cmd> roots.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : to find the roots of the equation a*x*x + b*x + c.
 * 
 *  @description    
 * 
 *  @file           : roots.js
 *  @overview       : to find the roots of the equation.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var a=read.question("Enter the A value : ");
var b=read.question("Enter the B value : ");
var c=read.question("Enter the C value : ");
Access.roots(a,b,c);