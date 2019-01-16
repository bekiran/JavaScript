var Utility = require("../UtilityProgram/utility");
var readline = require("readline-sync");
function searchBinaryInteger() {
  var arr = [];
  var arr1 = Utility.insertArray(arr);
  var low = 0,
    high = arr1.length - 1;
  console.log("Enter the element you want search : ");
  var ele = readline.question("");
  var arr2=this.A
  var res1 = Utility.searchBinaryInteger(arr1, low, high, ele);
  if(res1==true)
  console.log("The number is found  ");
  else
  console.log("The number is not found  ");

}
searchBinaryInteger();
function A(a,b){return a-b}
