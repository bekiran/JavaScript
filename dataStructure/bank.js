var utility = require('../dataStructure/Implementation/QueueImplement')
var readline = require('readline-sync')
function Queue() {
var q = new utility.Queue;
var bankamount = 100;
var flag = true
    var l = readline.questionInt("Enter the total number of people : ")
    for (let i = 1; i <= l; i++) {
        if (l > 0) {
            var s = readline.questionInt("Enter 0 for deposition or 1 for withdraw ")
            if (s == 0) {
                var amount = readline.questionFloat("enter the amont to deposit : ")
                q.enque(amount)
            }
            else if (s == 1) {
                var amount = readline.questionFloat("enter the amont to withdraw : ")
                q.enque(-amount)
            }
            else
                flag = false
        }

    }
    if (flag) {

        for (let i = 1; i <= l; i++) {
            bankamount = bankamount + q.deque()
        }
        console.log(bankamount)
        if (bankamount => 0) {
            console.log("maintain the cash balance")
        }
        else
            console.log("not maintain the cash balance")
    }
    else
    Queue()
}
Queue()
