/******************************************************************************
 *  Execution       :   1. default node          : cmd> node windChill.js
 *                      2. if nodemon installed  : cmd> nodemon windChill.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To find the cooling effect of wind blowing on a surface..
 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : The Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/

var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var temp=read.question("Enter temperature : ");
var vol=read.question("Enter volume : ");
Access.windChill(temp,vol);
