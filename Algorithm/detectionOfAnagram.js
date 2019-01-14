var Access = require('../UtilityProgram/utility');

var read = require('readline-sync');
var str1=read.question("Please enter the first String : ");
var str2=read.question("Please enter the String to be determined : ");
var ans=Access.isAnagram(str1,str2);
console.log(ans);