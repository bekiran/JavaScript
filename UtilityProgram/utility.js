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


}

