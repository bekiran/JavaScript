/******************************************************************************
 *  Execution       :   1. default node          : cmd> node commercial.js
 *                      2. if nodemon installed  : cmd> nodemon commercial.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : commercial.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var utility=require('../../Utility/utility');
var filestream = require('fs');
var con = filestream.readFileSync('company.json','utf8');
var con1 = filestream.readFileSync('customer.json','utf8');
var con2 = filestream.readFileSync('transaction.json','utf8');

var data = JSON.parse(con);
var data1 = JSON.parse(con1);
var data2 = JSON.parse(con2);

utility.commercial(data,data1,data2)
