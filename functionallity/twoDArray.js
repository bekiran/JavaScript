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
var Utility=require('../UtilityProgram/utility');
var readline=require('readline-sync');
var col=readline.question('Enter the required column number : ');
var row=readline.question('Enter the required row number : ');
var res=Utility.twoDArry(row,col);

