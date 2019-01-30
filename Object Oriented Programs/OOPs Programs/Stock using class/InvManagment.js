/******************************************************************************
 *  Execution       :   1. default node          : cmd> node invManagment.js
 *                      2. if nodemon installed  : cmd> nodemon invManagment.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : invManagment.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var utility = require("../Stock using class/InvManageUtility");
var read = require("readline-sync");
var readfile = require("fs");
var data = readfile.readFileSync("InvManagment.json", "utf8");
var data1 = JSON.parse(data);
//console.log(data1)
var read = require("readline-sync");
var object = new utility.InventoryManager();

console.log("1. add Stock");
console.log("2. Remove Stock");
console.log("3. Display Stock");
console.log("4. Exit");

var num = read.questionInt("Please Enter your choice : \n");
switch (num) {
  case 1:
    object.add(data1);
    break;
  case 2:
    object.remove(data1);
    break;
  case 3:
    object.print(data1);
    break;
  case 4:
    console.log("Thank You...");
    break;
}
s;
