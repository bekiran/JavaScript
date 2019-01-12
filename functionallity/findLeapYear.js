/* 3. Leap Year

 *  Purpose: Accept year from user and ensure given year is four digit. Print the given year 
 is a Leap year or not.
 *
 *  @author  Kiran B.E.
 *  @version 1.0
 *  @since   11 Jan 2018
 *  
*/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var year=read.question("Enter four digit year : ");
Access.findLeapYear(year);
