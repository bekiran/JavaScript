/************************************* Object Oriented Programs ***************************/

//creates a new date object with the current date and time
var dt = new Date();

var read = require("readline-sync");

//module.exports to export code into application
module.exports = {
  /****************** JSON Inventory Data Management of Rice, Pulses and Wheats *********************
   *  1. Inventory Data Management of Rice, Pulses and Wheats
   *----------------------------------------------------------
   * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
   *             with properties such as name, weight, price per kg.
   *
   * @Use Library : Java JSON Library
   *
   * @description: Declaring the function and passing the userinput as argument.
   *
   * @function: diplayname takes the userinput and print it with some sentence.
   *
   * @parameter : object --> objects such as Rice, Wheats and Pulse which are at inventory
   */

  inventory(object) {
    try {
      var rice = object.Rice;
      var wheats = object.Wheats;
      var pulse = object.Pulse;

      for (key in rice) {
        console.log("\n");
        console.log(rice[key]);
        //Price for kg
        console.log("price per kg : Rs", rice[key].price);
        console.log("Total quantity in kg :", rice[key].weight + " kg");
        //Total price for rice
        console.log("Total price for " + rice[key].name + " is : Rs",rice[key].price * rice[key].weight);
      }
      for (key in wheats) {
        console.log("\n");
        console.log(wheats[key]);
        //Price for kg
        console.log("price per kg : Rs", wheats[key].price);
        console.log("Total quantity in kg :", wheats[key].weight + " kg");
        //Total price for rice
        console.log("Total price for " + wheats[key].name + " is : Rs",wheats[key].price * wheats[key].weight);
      }
      for (key in pulse) {
        console.log("\n");
        console.log(pulse[key]);
        //Price for kg
        console.log("price per kg : Rs", pulse[key].price);
        console.log("Total quantity in kg :", pulse[key].weight + " kg");
        //Total price for rice
        console.log("Total price for " + pulse[key].name + " is : Rs",pulse[key].price * pulse[key].weight);
      }
    } catch (err) {
      console.log("Error in Inventory");
    }
  },
  /************************* Regular Expression Demonstration ***************************
   *  1. Regular Expression Demonstration
   *-------------------------------------
   * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
   *             with properties such as name, weight, price per kg.
   *
   * @Use Library : Java JSON Library
   *
   * @description: Declaring the function and passing the userinput as argument.
   *
   * @function: diplayname takes the userinput and print it with some sentence.
   *
   * @parameter : object --> objects such as Rice, Wheats and Pulse which are at inventory
   */

    regex(name, fullname, mobilenumber, date) {
    var file = require("fs");
    try{
        var data = file.readFileSync('regex.txt','utf8');
        data = data.replace(/<<name>>/g,name);  //replace name
        data = data.replace(/<<fullname>>/g,fullname)   //replace full name
        data = data.replace(/<<91-xxxxxxxxxx>>/g,mobilenumber)  //mobile number   
        data = data.replace(/<<xx-xx-xxxx>>/g,date)
        console.log();
        console.log(data)
    }catch(err){
        console.log("Error...")
    }
  },
  
};
