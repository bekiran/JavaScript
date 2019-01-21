/**
 * purpose     :A program to implement hashing function to search a number in a slot.
 * @description
 * @file       :  HashingFunction.js
 * @author     :  Kiran B.E.
 * @version    :  1.0
 * @since      :  21-01-2019
 * 
 */


var access = require('./Implementation/linkedList');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('./utility');
function hashing() {
    var f = filestream.readFileSync('hashnumber.txt', 'utf8');
    var num = f.split(' ');
    var arr = new Array(10); 77
    var remainder, n;

    for (let i = 0; i < num.length; i++) {
        n = Number(num[i]);
        remainder = n % 10;

        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);

        }
    }
    var str = "";
    for (let index = 0; index < 10; index++) {
        take.print(index + " elements    ");
        try {
            arr[index].show();

        } catch (err) {
            console.log("empty index");
        }

    }
    var number = readline.question(' Enter the number you want to search \n');
    if (!isNaN(number)) {
        remainder = Number(number % 10);
        console.log(remainder);
        console.log(arr[1]);
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
        }
        if (arr[remainder].search(Number(number))) {
            console.log("The number is found in file");
            arr[remainder].remove(number);

        } else {
            console.log("Number is not found in file");
            arr[remainder].add(number);
        }
        var flag;
        for (let index = 0; index < 10; index++) {
            flag = true;
            take.print(index + " result elements ,   ");
            try {
                arr[index].show();
                str = str + arr[index].getData();
                if (arr[index] !== 'undefined' && index < arr.length - 2) {
                    str = str + " ";
                }
            } catch (err) {
                console.log("Empty index");

            }

        } console.log(str);
        utility.writeFile('hashingNumber.txt', str);

        console.log("\n\n");
    } else {
        console.log("Wrong input ");
    }

}
hashing();
