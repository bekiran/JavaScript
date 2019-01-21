var access = require('../dataStructure/Implementation/linkedList');
var filestream = require('fs');
var readline = require('readline-sync');
var utility = require('../dataStructure/utility');

function ordered() {

    var string = filestream.readFileSync('number.txt', 'utf8');
    var arr = string.split(' ');
    console.log(arr);

    var ord = new access.LinkedList;
    for (let i = 0; i < arr.length; i++) {
        ord.add(Number(arr[i]));
    }

    ord.addAscending();
    ord.show();

    var answer = readline.question("Enter the number do you want to search ");
    if (!isNaN(answer)) {

        if (ord.search(answer)) {
            ord.remove(answer);
        }
        else {
            ord.add(answer);
            ord.addAscending();
        }
    }

    ord.show();
    var num = ord.getData();
    utility.writeFile('number.txt', num);
    console.log("The linked list elements are ");
    ord.show();
}

ordered();