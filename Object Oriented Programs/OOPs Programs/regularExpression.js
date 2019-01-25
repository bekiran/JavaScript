/******************************************************************************
 *  Execution       :   1. default node          : cmd> node regularExpression.js
 *                      2. if nodemon installed  : cmd> nodemon regularExpression.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To replace Name, Username, Mobile number with given input from user  .
 *
 *  @description    : To Hello <<name>>, We have your full name as <<full name>> in our system.
 *                    your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification
 *                    Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full name, Mobile#,
 *                    and Date with proper value.
 *
 *  @file           : regularExpression.js
 *  @overview       : To reaplce name, fullname, mobile number using regex and to update current date.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var utility = require("../../Object Oriented Programs/Utility/utility");
var read = require("readline-sync");
function regEx() {
  var flag = true;
  var name = read.question("Please enter your name : ");
  while (flag) {
    if (isNaN(name)) {
      flag = false;
    } else {
      var name = read.question("Oops!! Please eneter your valid name : ");
    }
  }
  var flag = true;
  var fullname = read.question("Please enter your full name : ");
  while (flag) {
    if (isNaN(fullname)) {
      flag = false;
    } else {
      var fullname = read.question("Please enter your valid full name.");
    }
  }
  var flag = true;
  var mobilenumber = read.questionInt("Please enter your mobile number : ");
  while (flag) {
    if (!isNaN(mobilenumber)) {
      flag = false;
    } else {
      var fullname = read.question("Please enter your valid mobile number.");
    }
  }
  var ds = new Date();
  dt = ds.getDate() + "/" + (ds.getMonth() + 1) + "/" + ds.getFullYear();
  utility.regex(name, fullname, mobilenumber, dt);
}
regEx();
