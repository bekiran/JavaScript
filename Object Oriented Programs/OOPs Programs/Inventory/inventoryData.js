/******************************************************************************
 *  Execution       :   1. default node          : cmd> node inventoryData.js
 *                      2. if nodemon installed  : cmd> nodemon inventoryData.js
 *                        -nodemon helps in restart the program after every changes.
 * 
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory. 
 * 
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and 
 *                    Wheats with properties name, weight, price per kg.
 * 
 *  @file           : inventoryData.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var utility = require('../../Utility/utility');
var fs = require('fs');
var flag = true;

try{
    var data = fs.readFileSync('inventoryData.json');

    /*When receiving data from a web server, the data is always a string.
      Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    */

    var object = JSON.parse(data); //JSON.parse() to convert text into a JavaScript object
}
catch(err)
{
    console.log("File not found!. Please check for valid file which exists...")
    flag = false;
}
function InventoryData()
{
    if(flag)
    utility.inventory(object);
}
InventoryData();