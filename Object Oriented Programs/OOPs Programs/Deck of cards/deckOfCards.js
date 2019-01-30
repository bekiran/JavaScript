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
var utility = require('../../Utility/utility');
utility.distributeCards();