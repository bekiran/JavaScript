/**
 * Execution       :   1. default node          : cmd> node bank.js
 *                      2. if nodemon installed  : cmd> nodemon bank.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :  To creates Banking Cash Counter where people come in 
 *                    to deposit Cash and withdraw Cash. Take input panel to add people to 
 *                    Queue to either deposit or withdraw money and dequeue the people.
 * 
 * 
 *  @file           : bank.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
var utility = require('../dataStructure/Implementation/QueueImplement')
var readline = require('readline-sync')
function Queue() 
{ 
    var req = new utility.Queue;
    var put =[];
    var totalbankcash = 10000;
    var flag = true
    var ask = readline.question("Enter the total number of people ");
    
       if(ask>0){
        for (var i = 1; i <= ask; i++) {
            var ans = readline.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
            if (ans == 1) {
                var amount = readline.question("Enter total amount do you want to Deposit : ");
                var put = req.enque(Number(amount));
                flag= true;
                //console.log(req.show());
                //var remove=req.deque(i);
            }
            else if (ans == 2) {
                var amount = readline.question("Enter total amount do you want to Withdraw : ");
                var get = req.enque(Number(-amount));
                
                flag= true;
                //console.log(req.show());
            }
            else {
                console.log("Make sure that, you entered the correct key ");
                flag= false;
                return;
            }
        }
        }
        else{
            console.log("Invalid input ");
            return;
        }
    
    
    if (flag) {
        var addition = 0;
        for (let i = 1; i <= ask; i++) {
            addition = (addition + req.deque());
        }
        console.log(addition);
        var totaltransaction = totalbankcash + addition;
        console.log("At the end of the day Total amount left in the bank ", totaltransaction);
        if (totaltransaction < totalbankcash) {
            console.log("Minium bank cash is not Maintained");
        }
        else {
            console.log("Minium bank cash is maintained");
        }
    }
}
Queue();
