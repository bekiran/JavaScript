var utility = require('../UtilityProgram/utility');
var read = require('readline-sync');
var day=+process.argv[2];
var month=+process.argv[3];
var year=+process.argv[4];
var num=utility.dayOfWeek(day,month,year);
var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
if (num <= res.length) {
   console.log("The day falls on :" + res[num])
}
else {
   console.log("Invalid day ")

}