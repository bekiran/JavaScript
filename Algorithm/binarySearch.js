var Utility = require('../UtilityProgram/utility');
var readline = require('readline-sync');
function binarySearch() {
    var arr = [];
   var res= Utility.insertArray(arr);
   var low=0,high=res.length-1;
   console.log("Enter the element you want search");
   var ele=readline.question('');
  var res1= Utility.binarySearch(res,low,high,ele);
  console.log("The number is found on the index",res1);

}
binarySearch();