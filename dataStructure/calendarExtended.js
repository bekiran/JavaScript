var take = require('util');
var que=require('../dataStructure/Implementation/QueueImplement');
var Utility = require('../UtilityProgram/utility');
function calender(){

var dayQue=new que.Queue;
var dateQue=new que.Queue;
var month=+process.argv[2];
var year=+process.argv[3];

var day = Utility.dayOfWeek(1, month, year);
console.log(day);
var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var dates = [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

var leap = Utility.leapYear(year);
if (leap = true) {
    dates[2] = 29;
}

for (var i = 0; i < week.length; i++) {
    dayQue.enque(week[i]);
}
for (var i = 1; i <= dates[month]; i++) {
 dateQue.enque(i);
}


for (var i = 0; i < week.length; i++) {
    take.print(dayQue.deque() + "  ");
}
console.log();
for (var i = 0; i < (day * 5); i++) {
    take.print(" ");
}

for (var i = 1; i <= dates[month]; i++) {
    if (i < 10) {
        take.print(" " + dateQue.deque() + "   ");
        
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
