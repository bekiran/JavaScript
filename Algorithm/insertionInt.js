var Utility = require('../UtilityProgram/utility');
var readline = require('readline-sync');
function insertion() {
  var arr = [];
  var res = Utility.insertArray(arr);
  var res1 = Utility.insertion(res);
  console.log(res1);

}
insertion();