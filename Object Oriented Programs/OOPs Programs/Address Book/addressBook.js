/******************************************************************************
 *  Execution       :   1. default node          : cmd> node addressBook.js
 *                      2. if nodemon installed  : cmd> nodemon addressBook.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : addressBook.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
try {
    var utility = require('../../Utility/utility');
    var read = require('readline-sync');
    var filestream = require('fs');
    var content = filestream.readFileSync('AddressBook.json','utf8');
    var obj  = JSON.parse(content);

    function addressBook()
    {
        utility.personAddressBook(obj,filestream);
    }
    addressBook()
} catch (error) {
    console.log("Error!! in code")
    
}

