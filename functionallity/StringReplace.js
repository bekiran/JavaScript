/* 1. String Replace
 *  Purpose: Accept username from user and ensure given
    username has minium 3 character.
 *
 *  @author  Kiran B.E.
 *  @version 1.0
 *  @since   10 Jan 2018
 *  
*/
var Access = require('../UtilityProgram/utility');
var read = require('readline-sync');
var name=read.question("Enter your name");
Access.replace(name);