//------------------------------------------------------------------------------------
module.exports= {
/*
1 . String replace
------------------------------------
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
        console.log("Sorry!. Enter valid Username. should be a String & >3 char");
    }
},    

//------------------------------------------------------------------------------------------------------------------------------
/*
2. Flip Coin
-----------------------------------------------
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
    var head = 0, tail =0;  // i
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
},

//------------------------------------------------------------------------------------------------------------------------------
/*
3. Leap year
----------------------------------------
* @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not

* @description : Declaring a function and passing the four digit number from  user input.
*                
* @function: function checks length of the given number, if length equals to 4, then it prints
given number is Leap year or not.
*/

leapyear(year)
{
    if(year>999 && year<10000)
    {
        if(year%4 == 0 && (year%400 == 0 || year%100!= 0))
        {
            console.log(year+" is a Leap year.")
        }
        else
        {
            console.log(year+" is not a Leap year.")
        }
    }
    else
    {
        console.log("Please enter valid 4 digit year format.");
    
    }
},

//------------------------------------------------------------------------------------------------------------------------------
/*
4. Power of Two
----------------------------------------
* @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
that are less than or equal to 2^N. value of N should be less then 31.

* @description : Prints the value of two's power
*                
* @function: function checks the given number is less then 31, if less then 31, then it prints
the value of two's power i.e., 2^N value.
*/

powertwo(number)
{
    if(number<31)
    {
        for(let i =0; i<=number ; i++)
        {
            var result = Math.pow(2,i);
            console.log(result);
        }
    }
    else
    {
        console.log("Hello! Please enter only numerical value between 0 and 31")
    }
},

//------------------------------------------------------------------------------------------------------------------------------
/*
5. Harmonic Number 
----------------------------------------
* @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
that are less than or equal to 2^N. value of N should be less then 31. to the given user input and print the Nth harmonic number
for the user input.

* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function: function Harmonic function takes user input and sum it number of times that user given.
*/

harmonic(number)         //Function harmonic
{
    if(isNaN(number) || (number<=0 ))     // check number is greater then zero
    {
        return " Sorry!. Input Should be a number and should be greater then zero."
    }
    else
    {
        var sum = 0;     // Intialing variable 
        for( let i = 1; i<=number ; i++)
        {
            sum = sum + (1/i);    // adding values and assigning into the variable 
        }
        return "The "+number+"th Harmonic value is "+sum;
    }
},

//------------------------------------------------------------------------------------------------------------------------------
/*
5. Factors 
----------------------------------------
* @purpose : To compute the prime factorization of N using brute force.

* @description : To compute the prime factorization of N by accepting input from user.
*                
*/

primefactors(number)
{
    if(number>0)
    {
        while(number%2==0)
        {
            console.log("2 ");
            number/=2;
        }
        for(let i =3 ; i<Math.sqrt(number); i+=2)
        {
            while(number/i == 0)
            {
                console.log(i+" ");
                number/=i; 
            }
        }
        if(number>2)
        {
            console.log(number+" ");
        }
    }

},


}

