/******************************************************************************
 *  Execution       :   1. default node          : cmd> node stock.js
 *                      2. if nodemon installed  : cmd> nodemon stock.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : stock.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/

var utility = require('../Stock using class/stockUtility');
var fileread  = require('fs');
var data = fileread.readFileSync('stock.json','utf8')
var object = JSON.parse(data)
var sum = 0;
var stocks = object.Stock

for(let key in stocks)
{
    var name = stocks[key].stock_name;
    var numberofshare = stocks[key].Num_of_shares;
    var shareprice=stocks[key].share_price;
    var total = numberofshare*shareprice
    console.log("The total value of "+ stocks[key].stock_name, "share is : ",stocks[key].Num_of_shares*stocks[key].share_price);
    sum=sum+total;
    key=new utility.Stock(name,numberofshare,shareprice)

}
console.log("\nTotal sum of rupees of all stock value is : "+sum+"\n")