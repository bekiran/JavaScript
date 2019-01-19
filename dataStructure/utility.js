var dis = require('util');
var fileStream = require('fs');
var que = require('../dataStructure/queueLinkedList');
var dayQue = new que.QueueLinked;
var dateQue = new que.QueueLinked;
var read = require('readline-sync');
var linked = require('../dataStructure/linkedList');
//var stak = require('../DataStructurePrograms/StackUsingLinkedList');
module.exports = 

{
    writeFile(fileName, data) 
    {
        const fs = require('fs');
        fs.writeFile(fileName, data, function (err) 
        {
            if (err) 
            {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    },

    ordered() {
        var string = fileStream.readFileSync('number.txt', 'utf8');//taking file data in form of string.

        var arr = string.split(' ');//split string in the array.
        var ll = new linked.Linkedlist;//creating linked list object.
        for (let index = 0; index < arr.length; index++) {
            ll.add(Number(arr[index]));//add words to linked list.

        }
        ll.addAscending();//arrange linked list in ascending order
        console.log("Linked list elements are ");
        ll.display();//display linked list.
        var num = read.question("Enter the Number you want to search ");
        if (!isNaN(num)) {//check it is number or not.
            if (ll.contains(num)) {
                ll.removeElement(num);

            } else {
                ll.add(num);
                ll.addAscending();

            }
            var str = ll.display();
            this.writeFile('number.txt', str);
            console.log("The linked list elements are ");
            ll.display();

        } else {
            console.log("please enter correct number");
        }


    },
//************************************* Simple Balanced Parentheses ***************************************/
/* 3. Simple Balanced Parentheses
*--------------------------------
* @purpose : Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where
*parentheses are used to order the performance of operations. Ensure parentheses must appear
* in a balanced fashion
*
*
* @description :Measure the elapsed time between start and end.
*                
*/


    balancedExpression() {
        var stk = require('../DataStructurePrograms/Stack');
        var stak = new stk.Stack;
        var string = read.question("Enter the arthmetic expression equation ");//user input
        var ch, popch;
        for (let index = 0; index < string.length; index++) {
            ch = string.charAt(index);
            if (ch == '{' || ch == '[' || ch == '(') {
                stak.push(ch);
            } else {
                switch (ch) {
                    case '}': popch = stak.pop();
                        if (popch != '{') {
                            return false;
                        }
                        break;
                    case ']': popch = stak.pop();
                        if (popch != '[') {
                            return false;
                        }
                        break;
                    case ')': popch = stak.pop();
                        if (popch != '(') {
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }

        }
        if (stak.size != 0) {
            return false;
        }
        return true;



    },
}