/**
 * purpose     :  Take input in 2dimensional array and print them.
 *                
 * @description
 * @file:       TwoDArray.js
 * @author:     Kiran B.E.
 * @version:    1.0
 * @since:      24-12-18
 * 
 */
 /**
 * 'readline'helps to have conversation with the user via a console,
 * '-sync' helps readline to sync even when the input/output stream is redirected.
 */
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
const util = require('../UtilityProgram/utility');
console.log("Enter the array length of m rows n columns :");
var m = readline.questionInt("Enter the value of m : ");
var n = readline.questionInt("Enter the value of n : ");
var arr = util.twoDArray(m,n);
util.print(arr);