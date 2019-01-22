/**
 * Execution       :   1. default node          : cmd> node calendar.js
 *                      2. if nodemon installed  : cmd> nodemon calendar.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :  To implement a Calender that takes the month and year as command-line 
 *                    arguments and prints the Calendar of the month.
 * 
 * 
 *  @file           : calendar.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
var take = require('util');
var Utility = require('../UtilityProgram/utility');
var readline = require('readline-sync');
function calender() {
    var month = +process.argv[2];
    var year = +process.argv[3];
    
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
   
    var day = Utility.dayOfWeek(1, month, year);
    console.log(day);
    var leap = Utility.leapYear(year);
    if (leap = true) {
        
        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) {
        take.print(week[i] + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            take.print(" " + i + "   ");
        }

        if (i > 9) {
            take.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }

    }

    console.log("\n\n");

}
calender();
