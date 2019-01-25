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
        console.log(
          "Total price for " + rice[key].name + " is : Rs",
          rice[key].price * rice[key].weight
        );
      }
      for (key in wheats) {
        console.log("\n");
        console.log(wheats[key]);
        //Price for kg
        console.log("price per kg : Rs", wheats[key].price);
        console.log("Total quantity in kg :", wheats[key].weight + " kg");
        //Total price for rice
        console.log(
          "Total price for " + wheats[key].name + " is : Rs",
          wheats[key].price * wheats[key].weight
        );
      }
      for (key in pulse) {
        console.log("\n");
        console.log(pulse[key]);
        //Price for kg
        console.log("price per kg : Rs", pulse[key].price);
        console.log("Total quantity in kg :", pulse[key].weight + " kg");
        //Total price for rice
        console.log(
          "Total price for " + pulse[key].name + " is : Rs",
          pulse[key].price * pulse[key].weight
        );
      }
    } catch (err) {
      console.log("Error in Inventory");
    }
  },

  /************************* Regular Expression Demonstration ***************************
   *  2. Regular Expression Demonstration
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
    try {
      var data = file.readFileSync("regex.txt", "utf8");
      data = data.replace(/<<name>>/g, name); //replace name
      data = data.replace(/<<fullname>>/g, fullname); //replace full name
      data = data.replace(/<<91-xxxxxxxxxx>>/g, mobilenumber); //mobile number
      data = data.replace(/<<xx-xx-xxxx>>/g, date);
      console.log();
      console.log(data);
    } catch (err) {
      console.log("Error...");
    }
  },

  /************************* Stock Report ***************************
   *  3. Stock Report
   *-------------------
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

  stockReport(object) {
    try {
      var stock = object.Stock;
      for (key in stock) {
        console.log("\n");
        //console.log(stock[key]);

        console.log("Stock name : " + stock[key].stock_name);
        console.log("price of each share : " + stock[key].share_price);
        console.log("Total number of shares : " + stock[key].Num_of_shares);
        console.log(
          "The total value of " +
            stock[key].Num_of_shares +
            " shares of " +
            stock[key].stock_name +
            " is : Rs " +
            stock[key].Num_of_shares * stock[key].share_price
        );
      }
    } catch (error) {
      console.log("Error!!!");
    }
  },

  /************************* Inventory Management Program ***************************
   *  4. Inventory Management Program
   *---------------------------------
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

   
  stock(obj) {
    var flag = true;
    var stk = obj.stock;
    console.log();
    var n = read.question("how many stock you want to enter : ");
    while (flag) {
      if (!isNaN(n)) {
        flag = false;
      } else {
        n = read.question("wrong input !!! how many stock you want to enter ");
      }
    }
    for (let i = 0; i < n; i++) {
      this.addStock(obj);
    }
    for (var key in stk) {
      //printing the total value for each stock
      console.log(stk[key]);
      console.log(
        "total value for " +
          stk[key].stockname +
          " is " +
          stk[key].No_of_shares * stk[key].share_price
      );
    }
    var total = 0; //var for adding total shares amount
    for (var key in stk) {
      total =
        parseInt(total) +
        parseInt(stk[key].No_of_shares * stk[key].share_price);
    }
    console.log("Total value for total shares is " + total); //print total amount

    //console.log(stk[]);
  },

  
  /**
   * purpose: Taking stock name as input and validate it.
   */
  inStockName() {
    var name = read.question("Enter the name of stock : ");
    var flag = true;
    while (flag) {
      //for validating inputs

      if (isNaN(name)) {
        //for validate the name
        flag = false;
      } else {
        var name = read.question(
          "Wrong input !!!...Please enter correct name of Stack : "
        );
      }
    }
    return name;
  },
  /**
   * purpose: Taking stock No as input and validate it.
   */
  inNoOfShare() {
    var flag = true;
    var Noofshares = read.question("Enter how many shares you have : ");
    while (flag) {
      if (!isNaN(Noofshares)) {
        //for validate full name
        flag = false;
      } else {
        var Noofshares = read.question(
          "Wrong input !!!...Please enter No of shares in integer : "
        );
      }
    }
    return Noofshares;
  },

  inSharePrice() {
    var flag = true;
    var shareprice = read.question("Enter the price of your share : ");
    while (flag) {
      if (!isNaN(shareprice)) {
        flag = false;
      } else {
        var shareprice = read.question(
          "Wrong input !!!...Please enter  correct price of shares : "
        );
      }
    }
    return shareprice;
  },
  /**
   * purpose: To add the stock data to stock object.
   */
  addStock(object) {
    var stockobj = object.stock;
    var stkname = this.inStockName();
    var stkNoofshare = parseInt(this.inNoOfShare());
    var stksharePrice = parseInt(this.inSharePrice());
    stockobj.push({
      stock_name: stkname,
      Num_of_shares: stkNoofshare,
      share_price: stksharePrice
    });
    console.log(object);
  },

  editStock(object, file) {
    var val = -1;
    var stockobj = object.stock;
    var name = this.inStockName();
    for (key in stockobj) {
      if (stockobj[key].stockname == name) {
        val = key;
      }
    }
    if (val == -1) {
      console.log("No record found ");
      return;
    }
    console.log(stockobj[val]);
    var ch = Number(
      read.question(
        " \n 1. Edit StockName.\n 2. Edit No of Share. \n 3. Edit Stock Price \n 4. Exit"
      )
    );
    switch (ch) {
      case 1:
        value = this.inStockName();
        stockobj[val].stockname = value;
        break;
      case 2:
        value = this.inNoOfShare();
        stockobj[val].No_of_shares = value;
        break;
      case 3:
        value = this.inSharePrice();
        stockobj[val].share_price = value;
        break;

      case 4:
        return;
      default:
        console.log("wrong Input");
        return;
    }
  },
  /**
   * purpose: To delete the data from stock object.
   * @param {*} object
   */
  deleteStock(object) {
    var stockobj = object.stock;
    var name = this.inStockName();
    var val = -1;
    //searching the data from object
    for (key in stockobj) {
      if (stockobj[key].stockname == name) {
        val = key;
      }
    }
    if (val == -1) {
      console.log("No record found ");
    }
    console.log(stockobj[val]);
    var ch = read.question("Are You Sure \n1.Delete. \n2.Exit ");
    if (ch == 1) {
      stockobj.splice(val, 1);
      console.log(stockobj);
      //  file.writeFileSync('Address.json',JSON.stringify(object));
    } else {
      console.log("wrong input ");
      return;
    }
  },
  displayStock(object) {
    var stockobj = object.stock;
    for (var key in stockobj) {
      console.log(stockobj[key]);
    }
  },
  /**
   * purpose:To Save the object to file
   * @param {*} object
   * @param {*} file
   */
  saveStock(object, file) {
    try {
      file.writeFileSync("inventoryManage.json", JSON.stringify(object));
    } catch (err) {
      console.log("error in file");
    }
    console.log("file save successfully ");
  },
  /**
   * purpose     :  A program to Create InventoryManager to manage the Inventory. The
   *                Inventory Manager will use InventoryFactory to create Inventory Object
   *                from JSON. The InventoryManager will call each Inventory Object in its list
   *                to calculate the Inventory Price and then call the Inventory Object to return
   *                the JSON String.
   * @returns    : Nothing
   */
  inventoryManage(object, file) {
    var key = Number(
      read.question(
        " 1. Add Stock\n 2. Edit Stock \n 3. Delete Stock \n 4. Display \n 5. Save into file \n 6. Exit \n "
      )
    );
    switch (key) {
      case 1:
        this.addStock(object);
        return this.inventoryManage(object, file);
      case 2:
        this.editStock(object);
        return this.inventoryManage(object, file);
      case 3:
        this.deleteStock(object, file);
        return this.inventoryManage(object, file);
      case 4:
        this.displayStock(object);
        return this.inventoryManage(object, file);
      case 5:
        this.saveStock(object, file);
        return this.inventoryManage(object, file);
      case 6:
        break;
      default:
        console.log("Sorry.. Wrong input");
        return this.inventoryManage(object, file);
    }
  }

  /************************* Inventory Management Program ***************************
   *  4. Inventory Management Program
   *---------------------------------
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
};
