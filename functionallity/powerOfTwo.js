/* 2. Power of Two

 *  Purpose: To Accept value of "N" from user and prints a table of the powers of 2 
that are less than or equal to 2^N. value of N should be less then 31.
 *
 *  @author  Kiran B.E.
 *  @version 1.0
 *  @since   11 Jan 2018
 *  
*/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.questionInt("Please enter the number between 0 and 31 : ");
Access.powerOfTwo(number);