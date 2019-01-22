const read = require('readline-sync');
/**
 * import the Utility class to use the functionalities of LinkedList.
 */
var ll = require('../dataStructure/Implementation/linkedList');
/**
 * import the Utility class to use the functionaly of reading/writing a file.
 */
var util = require('../UtilityProgram/utility');
try {
    var linklist=new ll.LinkedList();
    var fileName=read.question("enter filename : ")
    let datas = util.fileCalls(fileName);
    var data=util.bubbleSort(datas);
    console.log(datas)
    for(let index=0;index<data.length;index++)
        linklist.add(data[index]);
    var display = linklist.show();
    console.log(display);
    let name = read.question("Enter the name you want to search : ");
    var check = linklist.search(name);
    console.log(check);
    if(check){
        linklist.remove(name);
    }    
    else{
        linklist.insert(name);
    }
    var display = linklist.show();
    console.log(display);
    util.writefile(fileName,display)
} catch (err) { 
  console.error(err);
}


/*
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

ordered();*/