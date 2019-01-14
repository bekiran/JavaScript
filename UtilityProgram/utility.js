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
input()
{
    const readline = require('readline-sync');
    const r1 = readline.createInterface({input: ProcessingInstruction.stdin, output : ProcessingInstruction.stdout})
    return r1;

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

couponCodeGenerate(number)
{
    var arr = [];
    var count = 0;
    while(count!=number)
    {
        var k=Math.round(Math.random()*number);
        if(!arr.includes(k))
        {
            arr.push(k);
            count++;
        }
        //return count;
    }
    console.log(arr);
    
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
twoDArry(row, col) {
    var arr = [];
    console.log();
    console.log("Enter the elements of Array bellow ");
    console.log();
    //to generate the multi-dimensional array
    for (let i = 0; i < row; i++) 
    {
        arr.push([]);
    // adding elements by elements in generated array
        for (let j = 0; j < col; j++)
        { 
        
            var readline=require('readline-sync');
            arr[i][j] = readline.questionInt("Enter the Array Element : ")
        }
    }
    console.log(arr);
},

//***************************** Sum of three Integer adds to ZERO ***********************/
/*10. Sum of three Integer adds to ZERO
*------------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

sumOfThreeInteger(arr)
{
    var arr2=[];
    var count = 0;
    for( let i =0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            var arr1=[];
            for(let k=0;k<arr.length;k++)
            {
                if(arr[i]+arr[j]+arr[k]==0)
                {
                    arr1.push(arr[i]);
                    arr1.push(arr[j]);
                    arr1.push(arr[k]);
                }
            }
            arr1.sort(function(a,b){return a-b});
            var str2="";
            for(let i =0;i<3;i++)
            {
                str2=str2+arr1[i];
            }
            console.log(arr1)

            if(!arr.includes(str2) && str2.length>2)
            {
                arr2.push(str2)
                count++;
            }
        }
    }
    console.log(arr2);
    console.log(count);

},

//************************************* Distance ***************************************/
/*11. Distance
*-------------
* @purpose : A program with cubic running time. Read in N integers and counts the 
*number of triples that sum to exactly 0.
*
*
* @description :Find distinct triples (i, j, k) such that a[i] + a[j] + a[k] = 0.
*                
*/

findDistance(a,b)
{
    var  distance = Math.sqrt(a*a +b*b)
    return distance;
},

//********************************** Permutation of String ***************************************/
/*12. Permutation of string
*--------------------------
* @purpose : A functions to return all permutation of a String 
*
*
* @description : Checks if the arrays returned by two string functions are equal.
*                
*/

permutationOfString(str)
{
    var arr = str.split("");
    console.log(arr);
    var arr1=[];
    const c =str.length;
    for(let i =0 ;i<arr.length;i++)
    {
        var str1="";
        for(let j = i; j<c ; j++)
        {
            str1=str1+arr[j];
            var s = str.length-str1.length;
        }
        if(str1.length<str.length)
        {
            str1 = str1+str.substring(0,s);
        }
        if(!arr1.includes(str1))
        {
            arr1.push(str1);
        }
    }
    console.log(arr1)
},

//************************************* Stop Watch ***************************************/

/*
* @description: return the time in seconds from 1970.
*/

currentSecond() 
{
    var dt = new Date();
    return dt.getSeconds();
},

/*13. Stop Watch
*-------------
* @purpose : A Stopwatch Program for measuring the time that elapses between 
the start and end clicks
*
*
* @description :Measure the elapsed time between start and end.
*                
*/

stopwatch(rl) 
{
    var start = 0, stop = 0;
    var t1= rl.questionInt("Press  1 to start timer :" );
    {
        var t2 =0;
        start = this.currentSecond(); //set current seconds.
        var t2=rl.questionInt("Press 2 to stop timer : ");
        {
            stop = this.currentSecond(); //set current seconds.
            console.log("elapsed time is " + (stop - start) + " seconds");
        }  
    }
},

//************************************* Tic-Tac-Toe ***************************************/
/*14. Tic-Tac-Toe
*-----------------
* @purpose : A Stopwatch Program for measuring the time that elapses between 
the start and end clicks
*
*
* @description :Measure the elapsed time between start and end.
*                
*/

ticTacToe()
{
    var arr = [[], [], []];
    arr = this.addele1(arr);
    this.display2dArray(arr);//for display array.
    var c1 = 0;
    var user = true;
    var com = true;
    var flag1 = true;
    while (c1 < 9 && user && com)  //work upto 9 chances. 
    {

      var flag = true;
      console.log("user chance");
      while (flag) //take user input .
      { 
          console.log("enter index row,coloumn");
          var r = read.question("");
          var c = read.question("");
          if (r < 3 && c < 3) {
          if (this.checkIndex(r, c, arr)) //check for index is empty or not.if empty then set value else
          {
              //again take input of user.
              arr[r][c] = 'x';
              c1++;
              flag = false;
              this.display2dArray(arr);//display array again.
              console.log("User c" + c1);
            } 
            else 
            {
                console.log("Index is filled re input index");
            }
        } 
        else 
        {
            console.log("Please enter correct row or coloumn index");
        }
      flag = true;
      if (this.isMatch(arr)) //for checking if row or coloumn match.
      {
          console.log("User win the match");
          user = false;
          flag = false;
          flag1 = false;
      }
      if (flag1 && c1 < 9) 
      {
          console.log();
          console.log();
          console.log("Computer chance");
      }
      while (flag && c1 < 9) //taking input from computer using random method.
        {
            var r = Math.floor(Math.random() * 3);
            var c = Math.floor(Math.random() * 3);
            if (this.checkIndex(r, c, arr)) //check index is blan}
                {
                    arr[r][c] = '0';
                    this.display2dArray(arr);//display the array.}
                    flag = false;
                    c1++;
                    console.log("comp c " + c1)
                }
            }
            flag = true;
            if (this.isMatch(arr)) {// check if row or coloumn match.
                {
                    if (flag1)
                    console.log("Computer win the match");
                    com = false;
                    flag = false;
                }
                console.log();
                console.log();
            }
            if (user == true && com == true) 
            {
                console.log("Draw match ,No win No Loss");
            }
        }
    }
},

//************************************* Root of a equation ***************************************/
/*15. Root of a equation
*-----------------
* @purpose : To find the roots of the equation a*x*x + b*x + c. 
*Since the equation is x*x, hence there are 2 roots. The 2 roots of the equation can be 
*found using a formula.
*
*
* @description : Take a, b and c as input values to find the roots of x.
*                
*/

roots(a, b, c) 
{
    var delta = (b * b) - (4 * a * c);
    console.log(delta);
    if (delta == 0) 
    {
        var root = -b/(2*a);
        console.log(root);
    } 
    else if (delta > 0) 
    {
        var root1 = (-b + (Math.sqrt(delta))) / 2 * a;
        var root2 = (-b - (Math.sqrt(delta))) / 2 * a;
        console.log("First root " + root1);
        console.log("Second root " + root2);
    } 
    else if (delta < 0) 
    {
        var root1 = -b / 2 * a;
        var root2 = (Math.sqrt(-delta)) / 2 * a;
        console.log("First root : " + root1, "i :", root2);
        console.log("Second root : " + root1, "-i :", root2);
    } 
    else 
    {
        console.log("Invalid number");
    }
  },

//************************************* Wind Chill ***************************************/
/*16. Wind Chill
*-----------------
* @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
* wind speed v (in miles per hour),the National Weather Service defines the 
*effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
* valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/

windChill(temp, vol)
{
    if (temp <= 50 && vol > 3 && vol < 120) 
    {
        var w = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(vol, 0.16);//calculate.
        console.log("Windchill for temperature " + temp + " and wind speed " + vol + " is " + w);
    } 
    else 
    {
        console.log("Wrong temperature or wind speed");
    }
},

/************************************ End Of Functional Programs *************************/
}
