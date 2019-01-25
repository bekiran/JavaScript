
/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stockReport.js
 *                      2. if nodemon installed  : cmd> nodemon stockReport.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To  Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @description    : A program to read in Stock Names, Number of Share, Share Price. 
 *                    Print a Stock Report with total value of each Stock and the total value of Stock.
 *
 *  @file           : stockReport.js
 *  @overview       : To calculate total cost for number of shares.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 24-jan-2019
 *
 ******************************************************************************/

var utility = require("../../Utility/utility");
var file = require("fs");
var flag = true;

try {
  var filedata = file.readFileSync("stockReport.json", "utf8");
  var object = JSON.parse(filedata);
} catch (error) {
  console.log("Sorry!.. file not found");
  flag = false;
}
function stack() {
  if (flag) utility.stockReport(object);
}
stack();
