/******************************************************************************
 *  Execution       :   1. default node          : cmd> node invManageUtility.js
 *                      2. if nodemon installed  : cmd> nodemon invManageUtility.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : invManageUtility.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var read = require("readline-sync");
var file = require("fs");
class Stock {
  constructor(name, numberofshare, shareprice) {
    (this.name = name),
      (this.numberofshare = numberofshare),
      (this.shareprice = shareprice);
  }
}
class InventoryManager {
  constructor() {}

  add(data) {
    var name = read.question("enter name of stack :");
    var price = read.questionInt("enter price of stock:");
    var quntity = read.questionInt("enter the quntity of stock:");
    data.Stock.push({
      stockname: name,
      shareprice: price,
      numberofshare: quntity
    });
    var d = file.writeFileSync("InvManagment.json", JSON.stringify(data));
  }
  remove(data) {
    var name = read.question("enter name of stack to be remove:");
    for (let i = 0; i < data.Stock.length; i++) {
      if (data.Stock[i].stockname == name) {
        var index = data.Stock.indexOf(data.Stock[i]);

        data.Stock.splice(index, 1);
      }
      var d = file.writeFileSync("InvManagment.json", JSON.stringify(data));
    }
  }
  print(data) {
    var stock = data.Stock;
    for (const key in stock) {
      console.log(stock[key]);
    }
  }
}
module.exports = { InventoryManager, Stock };
