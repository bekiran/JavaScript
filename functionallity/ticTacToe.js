/******************************************************************************
 *  Execution       :   1. default node          : cmd> node ticTacToe.js
 *                      2. if nodemon installed  : cmd> nodemon ticTacToe.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  Purpose         : To play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the
 *                    Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
 * 
 *  @description    
 * 
 *  @file           : ticTacToe.js
 *  @overview       : Sum the number of times the count of heads and tails,calculate the percentage.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-jan-2019
 *
 ******************************************************************************/
const readline = require('readline-sync');
/**
 * import the Utility class to use the functionalities.
 */
var utility=require('../UtilityProgram/utility');
function ticTacToe(){
    var flag = false;
    var arr = utility.intializeGame();
    console.log("Player 1 : Computer, Symbole : O");
    console.log("Player 2 : You, Symbole : x");
    console.log("Winning isn't everything, but wanting to win is...");
    var count = 1;
    while(count<=9) 
    {
	    arr = utility.computerPlayer(arr);
		count++;
		while(count>4)
		{
		flag = utility.check(arr);
		break;
		}
	    if(flag)
	    {
    	    console.log("Computer is the winner. Better luck next time");
	        break;
	    }
	    else if(count==8)
	    {
		    console.log("Draw match.. Try next!");	
		    break;
    	}
	    arr = utility.userPlayer(arr);
	    while(count>4)
		{
		flag = utility.check(arr);
		break;
		
		}
	    if(flag)
	    {
	        console.log("Gosh!.. I knew it. You are the winner");
		    break;
    	}
	    count++;
		}
        console.log("Game end");
}
ticTacToe();
