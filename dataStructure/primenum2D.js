var req = require('util');
var utility = require('../UtilityProgram/utility');
var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
var i = 0; var j = 1; var range = 100;
for (let prime = 2; prime <= 1000; prime++) {
    if (utility.isPrime(prime)) {
        if (prime <= range) {
            array[i][j] = prime;
            j++;
            
        }
        else {
            j = 1;
            range = range + 100;
            i++;
            array[i][j] = prime;
        }
    }
}
console.log("The prime numbers are presents in the given range ");
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        req.print(array[i][j] + " ");
    }
    //utility.mark1(array)
    console.log();
}
console.log();

console.log(utility.isPrime(10))
