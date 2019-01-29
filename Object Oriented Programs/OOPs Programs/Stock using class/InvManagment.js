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
s