/******************************************************************************
 *  Execution       :   1. default node          : cmd> node deckOfCardsExtend.js
 *                      2. if nodemon installed  : cmd> nodemon deckOfCardsExtend.js
 *                        -nodemon helps in restart the program after every changes.
 *
 *  purpose         : To create inventory object from JSON and to calculate the value for every inventory.
 *
 *  @description    : To create a JSON file having Inventory Details for Rice, Pulses and
 *                    Wheats with properties name, weight, price per kg.
 *
 *  @file           : deckOfCardsExtend.js
 *  @overview       : To calculate the total cost of each object in inventory for given quantity.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 23-jan-2019
 *
 ******************************************************************************/
var utility=require('../../Utility/utility');
utility.deckExtend();