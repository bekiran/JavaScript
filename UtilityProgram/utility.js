//------------------------------------------------------------------------------------
module.exports= {
/********************************* String replace *****************************************/
/* 1. String Replace
*-------------------
* Purpose   : To ensure username with minimum 3 characters and not a number,replacing USERNAME with userinput
*             and print the string.
*
*  @descriptipn: Declaring the function and passing the userinput as argument.
*  @function: diplayname takes the userinput and print it with some sentence.
*/

stringReplace(username) 
{
    var input="Hello <<username>> , how are you?";
    var output="";
    var flag=true;
    while(username.length<3 || !isNaN(username) && flag!=false)
    {
        var read = require('readline-sync');
        var name=read.question("Enter your name : ");
        flag=false;
        if(name.length>3 && isNaN(name) &&  flag!=true)
        {
            output=output+input.substring(0,6)+name+input.substring(19,input.length);
            console.log(output);
            flag=false;
        }
    }
},    

/************************************* Flip Coin *****************************************/ 
/* 2. Flip Coin
*---------------
* @purpose : By using random function flip the coin. accept user input to flip number of times to flip coin
*            and print the percentage of head vs tails
*
* @description : Declaring a function and passing the userinput for fliping the coin
*                no of times
* @function: coinflip takes the no of times to flip coin and print the percentage of
*            head and tail
*/

flipCoin(flip)
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

/**************************************** Leap year ************************************/
/*3. Leap year
*--------------
* @purpose : Accept four digit input of year from the user and check given inputs is Leap year or not
*
* @description : Declaring a function and passing the four digit number from  user input.
*                
* @function: function checks length of the given number, if length equals to 4, then it prints
*given number is Leap year or not.
*/

findLeapYear(year)
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

/*********************************** Power of Two ****************************************/
/* 4. Power of Two
*------------------
* @purpose : To Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. value of N should be less then 31.
*
* @description : Prints the value of two's power
*                
* @function: function checks the given number is less then 31, if less then 31, then it prints
the value of two's power i.e., 2^N value.
*/

powerOfTwo(number)
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

//********************************** Harmonic Number **********************************/
/* 5. Harmonic Number 
*--------------------
* @purpose : To generate Harmonic numbersTo Accept value of "N" from user and prints a table of the powers of 2 
*that are less than or equal to 2^N. value of N should be less then 31. to the given user input and print the Nth harmonic number
*for the user input.
*
* @description : To generate sum of harmonic numbers by accepting input from user.
*                
* @function: function Harmonic function takes user input and sum it number of times that user given.
*/

harmonicNumber(number)         //Function harmonic
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

//********************************** Factor ******************************************/
/*6. Factors 
*-----------
* @purpose : To compute the prime factorization of N using brute force.
*
* @description : To compute the prime factorization of N by accepting input from user.
*                
*/

primeFactors(number)
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

//*************************************** Gambler **************************************/
/*7. Gambler 
*-----------
* @purpose : Simulates a gambler who start with some initial stake amount and place fair 1 bets until 
*he/she goes broke (i.e. has no money) or reach goal(gains expected amount). Keeps track of the number of 
*times he/she wins and the number of bets he/she makes. will run the experiment N times, 
*averages the results, and prints them out.
*
* @description : Play till the gambler is broke or has won
*                
*/

gamblerBrokeOrOwn(stake, trails, target)
{
    var win = 0, loss = 0;

    for( let i =0; i<trails; i++)
    {
        while(stake>0 && stake<target && trails>0)
        {
            if(Math.random()>0.5)
            {
                stake++;
                win++;
                trails--;
            }
            else
            {
                stake--;
                loss++;
                trails--;
            }
        }

    }

    var percentwin = (win*100)/(win+loss);
    var percentloss = (loss*100)/(win+loss);

    console.log("The Great! gamble won : "+ win);
    console.log("The Great! Great! gambler lost : "+loss);
    console.log("Percentage of Win is : "+percentwin+"%");
    console.log("Percentage of Loss is : "+percentloss+"%")
},

//*********************************** Coupon Numbers **************************************/
/*8. Coupon Numbers
*------------------
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/

couponCodeGenerate(n)
{
    var arr = [];
    var count = 0;
    while(arr.length=n)
    {
        var j=Math.round(Math.random()*n);
        count++;

        if(!arr.includes(j))
        {
            arr.push(j);
        }
        console.log(arr);
        return count;
    }
    
},

//*********************************** 2D Array **************************************/
/*9. 2D Array
*------------------
* @purpose : Given N distinct Coupon Numbers, how many random numbers do you 
*need to generate distinct coupon number? This program simulates this random process.
*
*
* @description : total random number needed to have all distinct numbers.
*                
*/
twoDarry(row, col) {
    var arr = [];
    console.log("enter elements ");
    //to generate the multi-dimensional array
    for (let index = 0; index < row; index++) 
    {
        arr.push([]);
    // adding elements by elements in generated array
        for (let index2 = 0; index2 < col; index2++) 
        {
            arr[index][index2] = readline.question('');
        }
    }
    return arr;
},
}