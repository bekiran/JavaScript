
/*var utility = require('../dataStructure/utility');
function order() {
    
    utility.ordered(); //Calling of ordered method. 
}
order();*/


var access = require('../dataStructure/Implementation/linkedList');
var filestream = require('fs');
var readline = require('readline-sync');
//var utility = require('../DataStructure/utility');

function ordered() {

    var string = filestream.readFileSync('number.txt', 'utf8');
    var arr = string.split(' ');
    console.log(arr);

    var ord = new access.Linkedlist;
    for (let i = 0; i < arr.length; i++) {
        ord.add(Number(arr[i]));
    }

    console.log("check1")
    ord.addAscending();
    ord.display();

    console.log("check1")
    var answer = readline.question("Enter the number do you want to search ");
    if (!isNaN(answer)) {

        console.log("check2")
        if (ord.search(answer)) {
            ord.removeElement(answer);
        }
        else {
            ord.add(answer);
            ord.addAscending();
        }
    }

    ord.display();
    var num = ord.getData();
    utility.writeFile('number.txt', num);
    console.log("The linked list elements are ");
    ord.display();
}

ordered();