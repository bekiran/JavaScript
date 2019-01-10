//------------------------------------------------------------------------------------
module.exports= {
/*
* Purpose   : To ensure username with minimum 3 characters and not a number,replacing USERNAME with userinput
*             and print the string.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function: diplayname takes the userinput and print it with some sentence.
*/
replace(username) 
{
   if(username.length>=3 && isNaN(username)) // Checks if given user input length is > 3 and not a number
    {
        var str = "Hello <<Username>>, how are you?"; // Given String
        var temp = "";                     //Empty String
        temp = temp+str.substring(0,6);    //Substring extracts the char between 0 & 6. concatenate it with empyt string  and stores in temp.
        temp = temp+username;              //concatenate with given user name
        temp = temp+str.substring(18,32);  //Substring extracts the char between 18 & 32. concatenate it with temp
        console.log(temp);                 //print temp
    }
    else
    {
        console.log("Enter valid Username - Username should be in String & >3 char");
    }
},    

//------------------------------------------------------------------------------------------------------------------------------
/*
* @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
*            and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function: coinflip takes the no of times to flip coin and print the percentage of
*            head and tail
*/

coinflip(flip)
{
    var head = 0, tail =0;
    for (let i = 0; i<flip; i++)
    {
        var rand = Math.random();
        if(rand > 0.5)
        {
            head++;
        }
        else
        {
            tail++;
        }
    }
    var result = (head / flip)*100;
    console.log("Percentage of Head"+result+" %");
    var result1 = (tail/flip)*100;
    console.log("Percentage of Tail"+result1+" %")
}

}

