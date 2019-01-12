/* 5. Harmonic Number

 *  Purpose: To generate Harmonic numbers to the given user input and print the 'N'th harmonic number
for the user input.
 *
 *  @author  Kiran B.E.
 *  @version 1.0
 *  @since   11 Jan 2018
 *  
*/
var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var number=read.question("Enter the number greater then zero : ");
console.log(Access.harmonicNumber(number));