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
    i=new utility.Stock(name,numberofshare,shareprice)

}
console.log("\nTotal sum of rupees of all stock value is : "+sum+"\n")