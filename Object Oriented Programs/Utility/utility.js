/************************************* Object Oriented Programs ***************************/

const readline = require("readline-sync");
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

  // purpose: Taking stock name as input and validate it

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
  
  // purpose: Taking stock No as input and validate it.
  
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

  //// purpose: Taking share price as input and validate it.
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
  
  // purpose: To add the stock data to stock object.
   
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

  // purpose: To edit the stock data.

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
  
  // purpose: To delete the data from stock object.

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
      //  file.writeFileSync('AddressBook.json',JSON.stringify(object));
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
  
  //purpose:To Save the object to file
  //@parameter: object and file
  
   
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
    console.log("\n ================ We want to turn our inventory faster than our people ============ \n")
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
      console.log("\n ===== Too much of a good thing can be wonderful. Thank you.... ===== \n");
        break;
      default:
        console.log("Sorry.. Wrong input");
        return this.inventoryManage(object, file);
    }
  },

  /*************************  Deck Of Cards ***************************
   *  5.  Deck Of Cards
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

  /**************************************  Deck Of Cards Extended ******************************
   *  6.  Deck Of Cards Etended
   *----------------------------
   * @Purpose   : To Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
   *
   * @description : to create a Player Object having Deck of Cards, and having ability to Sort by Rank
   * and maintain the cards in a Queue implemented using Linked List.. To initialize deck of cards having
   * suit ("Clubs", "Diamonds", "Hearts", "Spades").
   * & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace").
   * Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards t
   * he received by the 4 Players using 2D Array…
   *
   * @function : Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
   *
   *
   */
  deckExtend() {
    var queue = require("../../Data Structure/Implementation/QueueUsingLinkedlist");
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
    console.log(
      "\n" +
        "========================= crads Distributed among 4 Players  ============================== " +
        "\n"
    );
    console.log("Player 1 have this cards :  " + array.join());
    console.log("Player 2 have this cards :  " + array2.join());
    console.log("Player 3 have this cards :  " + array3.join());
    console.log("Player 4 have this cards :  " + array4.join());
    console.log("\n");
  },

  /**************************************  Clinique Management Programme. ******************************
   *  7.  Clinique Management Programme.
   *------------------------------------
   * @Purpose   : To manage doctors and patients record.
   *
   * @description : This programme is used to manage a list of Doctors associated with the Clinique.
   *  This also manages the list of patients who use the clinique. It manages Doctors by Name, Id,
   * Specialization and Availability (AM,  PM or both). It manages Patients by Name, ID, Mobile Number
   * and Age. The Program allows users to search Doctor by name, id, Specialization or Availability.
   * Also the programs allows users to search patient by name, mobile number or id.
   *
   *
   * @function : display the details of doctor, specialization, doctor id and aviailability of doctor
   * and patients details.
   *
   *
   */

  clinicManagement(data) {
    var doctor = data.Doctor;
    var patient = data.Patient;
    console.log(
      "\n" +
        "====================* Welcome to Nirmal Multi Speciality Hospital Clinic Managment *================" +
        "\n"
    );
    var answer = Number(
      read.question("1. Search Doctor \n2. Search Patient" + "\n")
    );
    {
      if (answer == 1) {
        console.log("================= Search Doctors ==================== ");
        let inf = read.question(
          "1. Search Doctors by Name  \n2. Search Doctors by ID \n3. Search Doctors by Specialization \n"
        );
        if (inf == 1) {
          var nam = read.question("Enter Name of Doctor ");
          for (var key in doctor) {
            if (doctor[key].name == nam) {
              console.log("==== your Doctor information ====");
              console.log(doctor[key]);
            }
          }
          this.appointment();
        } else if (inf == 2) {
          var idn = read.question("Enter Doctor ID \n");
          for (var key in doctor) {
            if (doctor[key].Id == idn) {
              console.log("==== your doctor information ====");
              console.log(doctor[key]);
            }
          }
          this.appointment();
        } else if (inf == 3) {
          var spc = read.question("Enter the Specialization of Doctor \n");
          for (var key in doctor) {
            if (doctor[key].Specialization == spc) {
              console.log("==== your doctor information ====");
              console.log(doctor[key]);
            }
          }
          this.appointment();
        } else {
          console.log("Please enter valid input \n");
          this.clinicManagement(data);
        }
      } else if (answer == 2) {
        let inf = read.question(
          "\nPlease select \n1. Search Patient by Name \n2. Search Patient by ID ,\n3. Search Patient Mobile number "
        );
        if (inf == 1) {
          var nam = read.question("Enter the name of Patient \n");
          for (var key in patient) {
            if (patient[key].name == nam) {
              console.log("----your Patient information----");
              console.log(patient[key]);
            }
          }
          // this.appointment();
        } else if (inf == 2) {
          var idn = read.question("Enter the Id of Patient \n");
          for (var key in patient) {
            if (patient[key].Id == idn) {
              console.log("----your Patient information----");
              console.log(patient[key]);
            }
          }
          //this.appointment();
        } else if (inf == 3) {
          var mob = read.question("Enter the mobile number of Patient \n");
          deck2D;
          for (var key in patient) {
            if (patient[key].Contact_number == mob) {
              console.log("----your Patient information----");
              console.log(patient[key]);
            }
          }
          //this.appointment();
        } else if (inf == 4) {
          return;
        } else {
          console.log("Enter the valid input \n");
        }
      } else {
        console.log("Enter valid input \n");
      }
    }
  },

  appointment(data, doctor) {},
  inventManagement(data) {
    var answer = Number(
      read.question(
        " press \n 1. To add \n 2. To delete \n 3. To display \n 4. To print \n 5.To exit "
      )
    );
    if (answer == 1) {
      this.add(data);
    } else if (answer == 2) {
      this.remove(data);
    } else if (answer == 3) {
      this.disp(data);
    } else if (answer == 4) {
      this.print(data);
    } else if (answer == 5) {
      this.exit(data);
    } else {
      console.log("Invalid key/input ");
    }
  },
  add(data) {
    var name = readline.question("Enter the name of the share    ");
    var share = readline.question("Enter the number of shares     ");
    var price = readline.question("Enter the price of your share ");
    data.stock.push({
      stockname: name,
      no_of_share: share,
      share_price: price
    });
    filestream.writeFileSync("inventManage.json", JSON.stringify(data));
    this.inventManagement(data);
  },

  remove(data) {
    access = data.stock;
    // var content = filestream.readFileSync('inventManage.json');

    var answer = readline.question("Enter the stack name do you want delete");

    for (let i = 0; i < data.stock.length; i++) {
      if (data.stock[i].stockname == answer) {
        var index = data.stock.indexOf(data.stock[i]);

        data.stock.splice(index, 1);
      }
    }

    filestream.writeFileSync("inventManage.json", JSON.stringify(data));
    this.inventManagement(data);
    // else{
    //     console.log("Stock not found ");
    //     this.remove(data);
    // }
  },

  disp(data) {
    console.log(data);
    this.inventManagement(data);
  },
  print(data) {
    var res = data.stock;
    console.log("The total price of your each share is ");
    for (var key in res) {
      console.log(
        res[key].stockname +
          " -->  " +
          res[key].no_of_share * res[key].share_price
      );
    }
    this.inventManagement(data);
  },
  exit() {
    console.log(" Thank you ");
    return;
  },

  /******************************************* Address Book ***************************
   *  8.  Address Book
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

  //insert First name
  personFirstName() {
    var flag = true;
    var name = read.question("Please enter your First name: \n");
    while (flag) {
      if (isNaN(name)) {
        flag = false;
      } else {
        name = read.question("Please enter your Correct First name: \n");
      }
    }
    return name;
  },

  //Insert last name
  personLastName() {
    var flag = true;
    var Lname = read.question("Please enter your Last name: \n");
    while (flag) {
      if (isNaN(Lname)) {
        flag = false;
      } else {
        Lname = read.question("Please enter your Correct Last name: \n");
      }
    }
    return Lname;
  },

  //Insert address
  personAddress() {
    var flag = true;
    var Address = read.question("Please enter your Address: \n");
    while (flag) {
      if (isNaN(Address)) {
        flag = false;
      } else {
        Address = read.question("Please enter your Correct Address: \n");
      }
    }
    return Address;
  },

  //insert state
  personState() {
    var flag = true;
    var State = read.question("Please enter your State name: \n");
    while (flag) {
      if (isNaN(State)) {
        flag = false;
      } else {
        State = read.question("Please enter your Correct State name: \n");
      }
    }
    return State;
  },

  //insert mobile number
  personMobile() {
    var flag = true;
    var mob = read.question("Please enter your Mobile number: \n");
    while (flag) {
      if (!isNaN(mob) && mob.length == 10) {
        flag = false;
      } else {
        mob = read.question("Please enter your Correct Mobile. Number: \n");
      }
    }
    return mob;
  },

  // insert Zip code
  personZipcode() {
    var flag = true;
    var Code = read.question("Please enter your Pin Code: \n");
    while (flag) {
      if (!isNaN(Code) && Code.length == 6) {
        flag = false;
      } else {
        Code = read.question("Please enter your Correct PinCode: \n");
      }
    }
    return Code;
  },
  /**
   * purpose: To Add the person to object.
   * @parameter : object
   */
  addperson(object) {
    var id = 0;
    //creating object
    try {
      var personobj = object.Person;
      //taking inputs by user using  methods
      var fname = this.personFirstName();
      var lname = this.personLastName();
      var address = this.personAddress();
      var state = this.personState();
      var PinCode = this.personZipcode();
      var mob = this.personMobile();
      for (var key in personobj) {
        id++;
      }
      //generating id for new user
      var id1 = personobj[id - 1].ID;
      personobj.push({
        Firstname: fname,
        LastName: lname,
        Address: address,
        State: state,
        Zip: PinCode,
        ID: id1,
        Mobile: mob
      });
    } catch (err) {
      console.log("error in add person");
    }
  },
  /**
   * purpose:To edit the person data from address book
   * @parameter: object
   */
  editPerson(object) {
    var permanent = -1;
    var personobj = object.Person;
    var name = this.personFirstName();
    var mob = this.personMobile();
    //for taking the object key value
    for (var key in personobj) {
      if (personobj[key].Firstname == name && personobj[key].Mobile == mob) {
        permanent = key;
      }
    }
    // console.log(permanent);
    if (permanent == -1) {
      console.log("No user  Detail is Found");
      return;
    }
    console.log("The Person Detail is ");
    var value;
    console.log(personobj[permanent]);
    //asking from user which he want to edit
    var ch = Number(
      read.question(
        "\n 1. Edit FirstName.  \n 2. Edit LastName.  \n 3. Edit Address.  \n 4. Edit State. \n 5. Edit Zip.  \n 6. Edit Phone.  "
      )
    );
    //taking input accordingly
    switch (ch) {
      case 1:
        //replace the old first name with new first name
        value = this.personFirstName();
        personobj[permanent].Firstname = value;
        break;
      case 2:
        //replace the old last name with new last name
        value = this.personFirstName();
        personobj[permanent].LastName = value;
        break;
      case 3:
        value = this.personAddress();
        personobj[permanent].Address = value;
        break;

      case 4:
        value = this.personState();
        personobj[permanent].State = value;
        break;
      case 5:
        value = this.personZipcode();
        personobj[permanent].Zip = value;
        break;
      case 6:
        value = this.personMobile();
        personobj[permanent].Mobile = value;
        break;
      default:
        console.log("Wrong input ");

        break;
    }
  },
  /**
   * purpose : For delete the person from address book.
   * @parameter: object
   * @parameter: file
   */
  deletePerson(object, file) {
    var permanent = -1;
    var personobj = object.Person;
    var name = this.personFirstName();
    var mob = this.personMobile();
    //taking key of object
    for (var key in personobj) {
      if (personobj[key].Firstname == name && personobj[key].Mobile == mob) {
        permanent = key;
      }
    }
    if (permanent == -1) {
      console.log("No user  Detail is Found");
      return;
    }
    console.log("The Person Detail is ");
    //Print the person detail
    console.log(personobj[permanent]);
    var ch = read.question("Are You Sure \n1.Delete. \n2.Exit ");
    if (ch == 1) {
      personobj.splice(permanent, 1);
      //delete personobj[permanent];
    } else {
      return;
    }
  },
  /**
   * purpose:To save the file
   * @parameter: object
   * @parameter: file
   */ saveFile(object, file) {
    file.writeFileSync("AddressBook.json", JSON.stringify(object));
  },
  /**
   * purpose:To display the all person data
   * @parameter: object
   */
  displayPerson(object) {
    var personobj = object.Person;
    for (var key in personobj) {
      if (personobj[key] != null) {
        console.log(personobj[key]);
      }
    }
  },
  /**
   * purpose: to sort the object by its name.
   * @parameter: object
   */ sortbyname(object) {
    var personobj = object.Person;
    personobj.sort(function(a, b) {
      //comparing the name
      if (a.Firstname == b.Firstname) return 0;
      if (a.Firstname < b.Firstname) return -1;
      if (a.Firstname > b.Firstname) return 1;
    });
    console.log(personobj);
  },
  /**
   * purpose:To sort the object by its pincode.
   * @parameter: object
   */
  sortbyzip(object) {
    var personobj = object.Person;
    personobj.sort(function(a, b) {
      return a.Zip - b.Zip;
    });
    console.log(personobj);
  },
  /**
   * purpose: In this method we ask from user what he want add person or edit or display call
   *          method accordingly.
   * @parameter: object
   * @parameter: file
   *
   */
  personAddressBook(object, file) {
    console.log("========== Welcome to personal Address Book ==========");
    var key = Number(
      read.question(
        "1. Add Person\n2. Edit Person\n3. Delete Person\n4. Sort By Name\n5. Sort by Zip\n6. Display\n7. Save into file\n8. Exit\n"
      )
    );
    //calling the method as user user input
    switch (key) {
      case 1:
        this.addperson(object);
        return this.personAddressBook(object, file);
      case 2:
        this.editPerson(object);
        return this.personAddressBook(object, file);
      case 3:
        this.deletePerson(object, file);
        return this.personAddressBook(object, file);
      case 4:
        this.sortbyname(object);
        return this.personAddressBook(object, file);
      case 5:
        this.sortbyzip(object);
        return this.personAddressBook(object, file);
      case 6:
        this.displayPerson(object);
        return this.personAddressBook(object, file);
      case 7:
        this.saveFile(object, file);
        return this.personAddressBook(object, file);
      case 8:
        console.log(
          "I believe we all have one address and that is Earth. Thank you ..."
        );
        return;
      default:
        console.log("Wrong Input  ");
        return this.personAddressBook(object, file);
    }
  },

  /*********************************** Commercial data processing ****************************************/

  commercial(data, data1, data2) {
    console.log("\n    ========== Welcome to BSE Stock Account ==========\n");
    var answer = readline.question(
      "Please select the bellow \n1. Create Stock Account \n2. Customer Information. \n3. Edit Customer Information \n4. Exit \n"
    );
    if (answer == 1) {
      this.create(data, data1, data2);
    } else if (answer == 2) {
      this.open(data, data1, data2);
    } else if (answer == 3) {
      this.editCustomer(data);
    } else if (answer == 4) {
      console.log("=== Thanks for your transaction ===");
      return;
    } else {
      console.log(" Invalid input ");
    }
  },

  create(data, data1, data2) {
    var ask = readline.question(
      " Are you a exsting user \n if yes press 1. \n if No press 2.  "
    );
    if (ask == 1) {
      if (data1.user.length == 0) {
        console.log(" No users available  ");
        return;
      } else {
        var que = readline.question(" Enter your existing id ");

        for (let i = 0; i < data1.user.length; i++) {
          if (data1.user[i].id == que) {
            console.log(data1.user[i]);
            this.purchase(data, data1, data2);
          }
        }
      }
    } else if (ask == 2) {
      let nam = readline.question(" Enter your name ");
      let idn = readline.question(" Enter the user id ");
      let amo = readline.question(" Enter your amount ");
      let shar = readline.question(" Enter your shares ");
      data1.user.push({
        name: nam,
        id: idn,
        symbol: "",
        amount: amo,
        shares: shar
      });
      var read = readline.question(" To save information Enter 1.");
      if (read == 1) {
        filestream.writeFileSync("customer.json", JSON.stringify(data1));
        console.log(" Your information added ");
      } else {
        console.log(" Invalid input ");
      }
    }
  },
  open(data, data1, data2) {
    let read = readline.question(" Enter your customer ID ");
    var flag = true;
    if (flag)
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == read) {
          console.log(data1.user[i]);
          flag = true;
          this.purchase(data, data1, data2);
        } else {
          flag = false;
          //     } for (let i = 0; i < data1.user.length; i++) {
          //         if (data1.user[i].id == read) {

          // }
          if (flag == false) {
            console.log(" No users found ");
          }
        }
      }
  },
  purchase(data, data1, data2) {
    let ask = readline.question(
      " press \n 1. buy shares \n 2. sell shares \n 3. add money \n 4. display  \n 5. exit "
    );
    if (ask == 1) {
      for (var key in data.company) {
        console.log(" Company details ");
        console.log(data.company[key]);
      }
      let que = readline.question(" Please, Enter your id ");
      var flag = false;
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == que) {
          var useramt = data1.user[i].amount;
          var cmpshare = data.company[i].shares;
          var found = data1.user[i];
          flag = true;
          //console.log(data1.user[i]);
        } else {
          flag = false;
          //console.log("No such id found ");
        }
      }
      if (flag == false) {
        console.log(found);
      } else {
        console.log("No such id found ");
      }
      let read = readline.question(" Enter the company symbol ");
      for (let i = 0; i < data.company.length; i++) {
        if (data.company[i].symbol == read) {
          var compamt = data.company[i].share_per_price;
          var cmpshare = data.company[i].shares;
          var get = data.company[i];
        }
      }

      let buy = readline.question(
        " Enter how many shares do you want to buy from this company "
      );
      for (let i = 0; i < buy; i++) {
        let que = readline.question(" Please, Enter your id ");
        var flag = false;
        for (let i = 0; i < data1.user.length; i++) {
          if (data1.user[i].id == que) {
            var useramt = data1.user[i].amount;
            var cmpshare = data.company[i].shares;
            var found = data1.user[i];
          }
        }
      }
    } else if (ask == 3) {
      let que = readline.question(" Please, Enter your id ");
      var flag;
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == que) {
          var found = data1.user[i];
          flag = true;
        } else {
          flag = false;
        }
      }
      if (flag == true) {
        var amoun = readline.question(
          " Enter your amount do you want to add in account "
        );
        for (let i = 0; i < data1.user.length; i++) {
          if (data1.user[i].id == que) {
            data1.user.amount = amoun;
          }
        }
        filestream.writeFileSync("customer.json", JSON.stringify(data1));
        console.log(" Your amount is  added ");
      } else {
        console.log(" No user found");
      }
    }
  },
  editCustomer(data, data1, data2) {
    let ask = readline.question(
      " Please press \n 1. Edit Customer Name \n 2. Edit Customer ID \n 3. Edit Customer Symbol \n 4. Edit Customer share  \n 5. Exit \n"
    );
    if (ask == 1) {
      for (var key in data.user) {
        console.log(" Customer account details ");
        console.log(data.user[key].name);
      }
      let que = readline.question(" Please, Enter your id ");
      var flag = false;
      for (let i = 0; i < data.user.length; i++) {
        if (data1.user[i].id == que) {
          var useramt = data1.user[i].amount;
          var cmpshare = data.company[i].shares;
          var found = data1.user[i];
          flag = true;
          //console.log(data1.user[i]);
        } else {
          flag = false;
          //console.log("No such id found ");
        }
      }
      if (flag == false) {
        console.log(found);
      } else {
        console.log("No such ID found. Please Enter your valid ID ");
      }
    } else if (ask == 2) {
      for (var key in data.user) {
        console.log(" Customer account details ");
        console.log(data.user[key].id);
      }
      let que = readline.question(" Please, Enter your id ");
      var flag = false;
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == que) {
          var useramt = data1.user[i].amount;
          var cmpshare = data.company[i].shares;
          var found = data1.user[i];
          flag = true;
          //console.log(data1.user[i]);
        } else {
          flag = false;
          //console.log("No such id found ");
        }
      }
      if (flag == false) {
        console.log(found);
      } else {
        console.log("No such ID found. Please Enter your valid ID ");
      }
    } else if (ask == 3) {
      for (var key in data.user) {
        console.log(" Customer account details ");
        console.log(data.user[key].symbol);
      }
      let que = readline.question(" Please, Enter your id ");
      var flag = false;
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == que) {
          var useramt = data1.user[i].amount;
          var cmpshare = data.company[i].shares;
          var found = data1.user[i];
          flag = true;
          //console.log(data1.user[i]);
        } else {
          flag = false;
          //console.log("No such id found ");
        }
      }
      if (flag == false) {
        console.log(found);
      } else {
        console.log("No such ID found. Please Enter your valid ID ");
      }
    } else if (ask == 4) {
      for (var key in data.user) {
        console.log(" Customer account details ");
        console.log(data.user[key].shares);
      }
      let que = readline.question(" Please, Enter your id ");
      var flag = false;
      for (let i = 0; i < data1.user.length; i++) {
        if (data1.user[i].id == que) {
          var useramt = data1.user[i].amount;
          var cmpshare = data.company[i].shares;
          var found = data1.user[i];
          flag = true;
          //console.log(data1.user[i]);
        } else {
          flag = false;
          //console.log("No such id found ");
        }
      }
      if (flag == false) {
        console.log(found);
      } else {
        console.log("No such ID found. Please Enter your valid ID ");
      }
    } else if (ask == 5) {
      console.log("=== Thanks for your transaction ===");
      return;
    }
  },

  callFile() {
    var fileStream = require("fs");
    var f = fileStream.readFileSync("file.txt", "utf8");
    console.log(f);
    var arr = f.split(" ");
    return arr;
  },

  /************************************ file CAll **********************************/
  fileCall() {
    var fileStream = require("fs");
    var f = fileStream.readFileSync("File.txt", "utf8");
    var arr = f.split(" ");
    return arr;
  }
};
