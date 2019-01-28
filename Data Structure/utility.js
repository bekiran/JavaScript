/**
 * Execution       :   1. default node          : cmd> node utility.js
 *                      2. if nodemon installed  : cmd> nodemon utility.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       : Write to the file function
 * 
 * 
 *  @file           : utility.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
module.exports={
    writeFile(fileName,data)
    {
    const fs = require('fs');
fs.writeFile(fileName, data, function(err) {
if(err) {
    return console.log(err);
}

//console.log("The file is saved!");
}); 
    }
}