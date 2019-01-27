/************************************* Object Oriented Programs ***************************/

const readline = require('readline-sync');
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
    var Noofshares = read.question("Enter how many shares you have? : ");
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
      if (stockobj[key].stock_name == name) {
        val = key;
      }
    }
    console.log(val, " key");
    if (val == -1) {
      console.log("No record found ");
    }
    console.log(stockobj[val]);
    var ch = read.question("Are You Sure? \n 1. Delete. \n 2. Exit ");
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
  },

  /*************************  Deck Of Cards ***************************
   *  4.  Deck Of Cards
   *---------------------------------
   * @Purpose   : To Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
   *
   * @description : to initialize deck of cards having suit ("Clubs", "Diamonds", "Hearts", "Spades")
   * & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
   * Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards t
   * he received by the 4 Players using 2D Array…
   *
   * @function : Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
   *
   * @parameter : object --> objects such as Rice, Wheats and Pulse which are at inventory
   */

  // method which return all the sute ("Clubs", "Diamonds", "Hearts", "Spades") of cards in mixing form.
  deckOfCards() {
    var suit = ["♣️", "♦️", "♥️", "♠️"]; //suit is one of the categories into which the cards of a deck are divided
    var rank = [
      "King",
      "Queen",
      "Jack",
      "Ace",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];
    var cards = new Array();
    var n = suit.length * rank.length;
    for (let i = 0; i < suit.length; i++) {
      for (
        let j = 0;
        j < rank.length;
        j++ // adding all cards in an array. total 52 cards
      ) {
        cards.push("" + rank[j] + suit[i]);
      }
    }

    var l, temp;
    for (let index = 0; index < n; index++) {
      var l = Math.floor(Math.random() * n); // mixing all cards.
      temp = cards[l];
      cards[l] = cards[index];
      cards[index] = temp;
    }
    return cards;
  },

  distributeCards() {
    var cards = this.deckOfCards(); // To get all cards
    var personCards = [[], [], [], []];
    var x = 0;

    for (let person = 0; person < 4; person++) {
      //distribute the cards in among four person
      for (let index = 0; index < 9; index++) {
        personCards[person][index] = cards[index + x];
      }
      x = x + 9;
    }
    console.log(
      "==================== crads Distributed among 4 Players ========================= " +
        "\n"
    );
    console.log("The First persons cards   : " + personCards[0].join());
    console.log("The Seconds persons cards : " + personCards[1].join());
    console.log("The Third persons cards   : " + personCards[2].join());
    console.log("The Fourth persons cards  : " + personCards[3].join() + "\n");
  },


  /********************************** Deck Of Cards Extended *************************************
   * Deck Of Cards Extended
   * 
   * 
   *************************************************************************************************/

  deckExtend() {
    var queue = require("../../dataStructure/Implementation/QueueUsingLinkedlist");
    var sort = require("../../UtilityProgram/utility");
    var dis = require("util");
    var person1 = new queue.QueueLinked();
    var person2 = new queue.QueueLinked();
    var person3 = new queue.QueueLinked();
    var person4 = new queue.QueueLinked();
    var suit = ["♣️", "♦️", "♥️", "♠️"];
    var rank = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
      "ace"
    ];
    var deck = new Array();
    var n = suit.length * rank.length;
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        var temp = "";
        deck.push(suit[i] + rank[j] + "");
      }
    }

    for (let i = 0; i < n; i++) {
      var random = parseInt(Math.random() * deck.length);

      var temp = deck[i];
      deck[i] = deck[random];
      deck[random] = temp;
    }
    var x = 0,
      y = 9;
    var array = [];
    for (let i = 0; i < deck.length; i++) {
      if (i < 13) {
        person1.enqueue(deck[i]);
      } else if (i < 26) {
        person2.enqueue(deck[i]);
      } else if (i < 39) {
        person3.enqueue(deck[i]);
      } else {
        person4.enqueue(deck[i]);
      }
    }
    array = person1.getData().split(" ");
    array2 = person2.getData().split(" ");
    array3 = person3.getData().split(" ");
    array4 = person4.getData().split(" ");
    sort.insertion(array);
    sort.insertion(array2);
    sort.insertion(array3);
    sort.insertion(array4);
    console.log("\n"+
      "========================= crads Distributed among 4 Players  ============================== " +
        "\n"
    );
    console.log("Player 1 have this cards :  " + array.join());
    console.log("Player 2 have this cards :  " + array2.join());
    console.log("Player 3 have this cards :  " + array3.join());
    console.log("Player 4 have this cards :  " + array4.join());
    console.log("\n")
  },

  clinicManagement(data) {
    var doctor = data.Doctor;
    var patient = data.Patient;
    console.log("\n"+"====================== Welcome to BridgeLabz's Clinic Managment ================")
    var answer = Number(read.question("1. Search Doctor \n2. Search Patient"+"\n"));
    {
        if (answer == 1) {
          console.log("================= Doctors ======================= ")
            let inf = read.question("1. Search Doctors by Name  \n2. Search Doctors by ID \n3. Search Doctors by Specialization \n");
            if (inf == 1) {
                var nam = read.question("Enter Doctor Name ");
                for (var key in doctor) {
                    if (doctor[key].name == nam) {
                        console.log("==== your Doctor information ====");
                        console.log(doctor[key]);
                    }
                }
                this.appointment();
            }
            else if (inf == 2) {
                var idn = read.question("Enter the ID of doctor ");
                for (var key in doctor) {
                    if (doctor[key].Id == idn) {
                        console.log("----your doctor information----");
                        console.log(doctor[key]);
                    }
                }
                this.appointment();
            }
            else if (inf == 3) {
                var spc = read.question("Enter the Specialization of doctor ");
                for (var key in doctor) {
                    if (doctor[key].Specialization == spc) {
                        console.log("----your doctor information----");
                        console.log(doctor[key]);
                    }
                }
                this.appointment();
            }
            else {
                console.log("Enter valid input");
                this.clinicManagement(data);
            }
        }
        else if (answer == 2) {
            let inf = read.question("Press \n 1. to search patient by his name \n 2. by ID ,\n 3.by Mobile number ");
            if (inf == 1) {
                var nam = read.question("Enter the name of Patient ");
                for (var key in patient) {
                    if (patient[key].name == nam) {
                        console.log("----your Patient information----");
                        console.log(patient[key]);
                    }
                }
                // this.appointment();
            }
            else if (inf == 2) {
                var idn = read.question("Enter the Id of Patient ");
                for (var key in patient) {
                    if (patient[key].Id == idn) {
                        console.log("----your Patient information----");
                        console.log(patient[key]);
                    }
                }
                //this.appointment();
            }
            else if (inf == 3) {
                var mob = read.question("Enter the mobile number of Patient "); deck2D
                for (var key in patient) {
                    if (patient[key].Contact_number == mob) {
                        console.log("----your Patient information----");
                        console.log(patient[key]);
                    }
                }
                //this.appointment();
            }
            else if (inf == 4) {
                return;
            }
            else {
                console.log("Enter the valid input")
            }
        }
        else {
            console.log("Enter valid input")
        }
    }

},
appointment(data, doctor) {

},
inventManagement(data) {

    var answer = Number(read.question(" press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "));
    if (answer == 1) {
        this.add(data);
    }
    else if (answer == 2) {
        this.remove(data);
    }
    else if (answer == 3) {
        this.disp(data);
    }
    else if (answer == 4) {
        this.print(data);
    }
    else if (answer == 5) {
        this.exit(data);
    }
    else {
        console.log("Invalid key/input ");
    }
},

  
};
