var utility = require('../UtilityProgram/utility');
var read = require('readline-sync');
var amount = read.questionInt("Enter the required amount : ")
var arr=[2000, 500, 100, 50, 20, 10, 5, 2, 1]
utility.VendingMechine(arr,amount);