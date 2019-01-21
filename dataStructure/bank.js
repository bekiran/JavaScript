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
