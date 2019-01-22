
const readline = require('readline-sync');
//------------------------------------------------------------------------------------
module.exports= {

arrayCall(arr) {
    var number = readline.question("Enter total number of array elements : ");
    console.log("Enter your Array elements : ");
    //store elements by elements in array.
    for (let index = 0; index < number; index++) {
        arr[index] = readline.question("")

    }
    return arr;
},


insertArray(arr) {
    var number = readline.question("Enter total number of array elements : ");
    console.log("Enter your Array elements : ");
    // stores elements by elements in array 
    for (let index = 0; index < number; index++) {
        arr[index] = Number(readline.question(""));
    }
    return arr;
},
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
    var input ="Hello <<username>> , how are you?";
    var output = input.replace(/<<username>>/g,username); 
    console.log(output+" : Replace string using Regex ")

    var output1="";
    while(username.length<3 || !isNaN(username)) {
        var read = require('readline-sync');
        var name=read.question("Enter your name : ");
    }
    output1=output1+input.substring(0,6)+username+""+input.substring(19,input.length);
    console.log(output1+" : hard-code");
},  

/**
 *  Creating method for accepting User inputs.
 * 
 * 
 * 
 */
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
    console.log("Percentage of Head : "+result+" %");
    var result1 = (tail/flip)*100;
    console.log("Percentage of Tail : 6"+result1+" %")
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

    var percentWin = (win*100)/(win+loss);
    var percentLoss = (loss*100)/(win+loss);

    console.log("The Great! gamble won : "+ win);
    console.log("The Great! Great! gambler lost : "+loss);
    console.log("Percentage of Win is : "+percentWin+"%");
    console.log("Percentage of Loss is : "+percentLoss+"%")
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
twoDArray(m, n) {
    var arr = [];;
    for (let i = 0; i < m; i++) {
        arr.push([]);
        for (let j = 0; j < n; j++)

            arr[i][j] = readline.question("Enter the value");
    }
    return arr;
},
print(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);
},
mark(arr)
{
    for(let i=0;i<2;i++)
    {
        var p = []
        for(let j=0;j<2;j++)
        {
            p[j]=arr[i][j]
        }
        console.log(p)
    }
    return p
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

triplet(res) {
    count = 0;
    for (let index = 0; index < res.length; index++) {
        for (let index1 = index + 1; index1 < res.length; index1++) {
            for (let index2 = index1 + 1; index2 < res.length; index2++) {
                // check sum of three elements are equals to zero
                if (Number(res[index]) + Number(res[index1]) + Number(res[index2]) == 0) {
                    count++;
                    console.log("[" + res[index] + "," + res[index1] + "," + res[index2] + "]");
                }

            }
        }

    }
    console.log("Number of triplets found is ", count);
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
    var t1= rl.questionInt("Press 1 to start timer : " )-1;
    {
        var t2 =0;
        start = this.currentSecond(); //set current seconds.
        var t2=rl.questionInt("Press 2 to stop timer : ")-1;
        {
            stop = this.currentSecond(); //set current seconds.
            console.log("elapsed time is " + (stop - start) + " seconds.");
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
intializeGame() 
{
    var game = [];
    for (let i = 0; i <= 2; i++) 
    {
        game.push([]);
        for (let j = 0; j <= 2; j++)
            game[i][j] = '-';
    }
    return game;
},

random() 
{
    var value = Math.floor(Math.random() * 3);
    console.log(value+1);
    return value;
},

mark(game, x, y, value) 
{
    if (game[x][y] == '-')
        game[x][y] = value;
    for (let i = 0; i <= 2; i++) 
    {
        var print = [];
        for (let j = 0; j <= 2; j++)
            print[j] = game[i][j];
        console.log(print);
    }
    return game;
}
,
computerPlayer(game) 
{
    var arr;
    var flag = false;
    while (flag == false) 
    {
        var x = this.random();
        var y = this.random();
        if (game[x][y] == '-') 
        {
            arr = this.mark(game, x, y, 'O');
            flag = true;
        }
    }
    return game;
}
,
userPlayer(game) 
{
    var flag = false;
    while (flag == false) 
    {
        console.log("Enter the row value:");
        let x = readline.questionInt('Enter the value of x within 1,2,3 : ')-1;
        let y = readline.questionInt('Enter the value of y within 1,2,3 : ')-1;
        if (game[x][y] == '-') 
        {
            this.mark(game, x, y, 'X');
            flag = true;
        }
        else
            console.log("Please enter the correct choice");
    }
    return game;
}
,
check(game) 
{
    for (let i = 0; i <= 2; i++) 
    {
        if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) 
        {
            if (game[i][0] == 'O' || game[i][0] == 'X') 
            {
                return true;
            }
        }
        if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) 
        {
            if (game[0][i] == 'O' || game[0][i] == 'X') 
            {
                return true;
            }
        }
    }
    var k = 0, l = 0;
    if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) 
    {
        if (game[0][0] == 'O' || game[0][0] == 'X') 
        {
            return true;
        }
    }
    if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) 
    {
        if (game[0][0] == 'O' || game[0][0] == 'X')
        {
            return true;
        }
    }
    return false;
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


/************************************ Algorithm Programs **********************************/

/************************************ Anagram Detection **********************************/
/*1.0 Anagram Detection
*-----------------
* @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
* wind speed v (in miles per hour),the National Weather Service defines the 
*effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
* valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/

isAnagram(string1, string2) {
    string1=string1+"";
    string2=string2+"";
    if (string1.length != string2.length) {
        return false;
    }
    var arr = [];
    for (let index = 0; index < 36; index++) {
        arr[index] = 0;

    }
    for (let index = 0; index < string1.length; index++) {
        var ch = string1.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]++;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]++;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]++;
        }
        ch = string2.charAt(index);
        if (ch >= 'a' && ch <= 'z') {
            var code = ch.charCodeAt(0);

            arr[code - 97]--;
        } else if (ch >= 'A' && ch <= 'Z') {
            var code = ch.charCodeAt(0);
            arr[code - 65]--;
        } else {
            var code = ch.charCodeAt(0);
            arr[code - 22]--;
        }


    }
    for (let index = 0; index < 36; index++) {
        if (arr[index] != 0) {
            return false;
        }
    }
    return true;
},
/************************************ Is Prime Number **********************************/
/*1.1 Is Prime Number
*-----------------
* @purpose : To find the windchill. The temperature t (in Fahrenheit) and the
* wind speed v (in miles per hour),the National Weather Service defines the 
*effective temperature (the wind chill) .
*
* @description : The formula is given by the national weather service. Formula is not
* valid if t is larger than 50 in absolute value or if v is larger than 120 or less than 3  
*                
*/

isPrime(number)
{
    if(number==0 || number == 1)
    {
        return false;
    }
    else
    {
        for (let index = 2; index < number; index++)
        {
            if (number % index == 0) 
            {
                return false;
            }
        }
        return true;
    }
},

/************************************ is Palimdrome **********************************/
isPalimdrome(string1) 
{
    var str = "";
    for (let index = 0; index < string1.length; index++) 
    {
        str = string1.charAt(index) + str;
    }
    if (str == string1)
    {
        return true;
    }
    return false;
},

/************************************ isPalimdrome2String **********************************/
isPalimdrome2String(num1,num2)
{
    var str="";
    num1=num1+"";
    num2=num2+"";

    for (let i = 0; i < num1.length; i++) 
    {
        str=num1.charAt(i)+str;
    }
    if(str==num2)
    {
        return true;
    }
    return false;
},

/************************************ is Anagram Palimdrome **********************************/
isAnagramPalimdrome() 
{
    var arr=[];
    for (let index = 0; index < 1000; index++) 
    {
        if (this.isPrime(index)) 
        {
            arr.push(index);
        }

    }
    
    for (let i = 0; i < arr.length; i++) 
    {
        for (let j = i+1; j < arr.length; j++) 
        {
            if(this.isAnagram(arr[i],arr[j]))
            {
                if(this.isPalimdrome2String(arr[i],arr[j]))
                {
                    console.log(arr[i],"  ",arr[j]);
                }
            }
        }
    }
},

/************************************ Binary Search Integer **********************************/
// 4.1 binarySearch method for integer


binarySearch(arr, number) {
    console.log("in binary search " + arr)
    var n = arr.length;
    var l = 1
    var tem
    while (tem != number) {
        if (n < l)
            break;
        var m = l + Math.floor((n - l) / 2)

        if (arr[m] < number)
            l = m + 1
        else if (arr[m] > number)
            n = m - 1
        else if (arr[m] == number) {
            console.log("number is present")
            tem = number
            return true
        }
        else {
            break;
            return false
        }


    }


},
/************************************ call File **********************************/


callFile() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('file.txt', 'utf8');
    console.log(f);
    var arr = f.split(' ');
    return arr;
},

/************************************ file CAll **********************************/
fileCall() 
{
    var fileStream = require('fs');
    var f = fileStream.readFileSync('File.txt', 'utf8');
    var arr = f.split(' ');
    return arr;
},

writeFile(filename,Data)
    {
        const fs = require('fs')
        fs.writeFile(filename,Data,function(err)
        {
            if(err)
            {
                return console.log(err);
            }

        });
    }, 

/************************************ Binary Search  String **********************************/
// 4.1 binarySearch method for String

binaryString(res, low, high, ele) 
{
    var mid;

    while (high >= low) 
    {
        mid = Math.floor(low + (high - low) / 2);
        if (res[mid] == ele) 
        {

            return mid;
        }
        else if (res[mid] > ele) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
},

/************************************ Insertion sort **********************************/

insertion(res) 
{
    for (let i = 1; i < res.length; i++) 
    {
        var point = res[i];
        var j = i - 1;
        while (j >= 0 && res[j] > point) 
        {
            res[j + 1] = res[j];
            j = j - 1;
        }
        res[j + 1] = point;
    }
    return res;
},

/************************************ Insertion String String **********************************/
insertionString(str) 
{
    var ch = str;
    for (let i = 0; i < ch.length; i++) 
    {
        var point = ch[i];
        var j = i - 1;
        while (j >= 0 && ch[j] > point) 
        {
            ch[j + 1] = ch[j];
            j = j - 1;
        }
        ch[j + 1] = point;
    }
    return ch;
},

/************************************ Bubble Sort **********************************/
bubbleSort(res) 
{
    // compare first and next elements in array and arrange 
    for (let i = 0; i < res.length; i++) 
    {
           
        for (let j = i + 1; j < res.length; j++) 
        {
            if (res[i] > res[j]) 
            {
                var temp = res[i];   
                res[i] = res[j];
                res[j] = temp;
            }
        }
    }
    return res;
},

/************************************ Bubble String **********************************/
bubbleString(str) 
{
    var ch = str;
    for (let i = 0; i < ch.length; i++) 
    {
        for (let j = 0; j < ch.length; j++) 
        {
            if (ch[j] > ch[j + 1]) 
            {
                var temp = ch[j];
                ch[j] = ch[j + 1];
                ch[j + 1] = temp;
            }
        }
    }
    return ch;
},


/************************************ Find Number **********************************/

findNumber(low,high,read)
{
    var mid = low + Math.floor((high - low)/2)
    console.log(mid)
    if (low<high)
    {
        if(low==high-1)
        {
            var c;
            c = read.question("Is the number "+low +" if yes, press 'Y'. Else Press 'N' : ")
            if(c=='y')
            return low;
            if(c=='n')
            return high;
        }
        c = read.question("Is the number "+mid+-+high+" if yes, press 'Y'. Else Press 'N' : ")
        if(c=='y')
        mid = this.findNumber(mid, high, read)
        if(c=='n')
        mid = this.findNumber(low, mid-1, read)
    }
    return mid;
},

/********************************* Vending Mechine **********************************/
VendingMechine(arr, amount)
{
    var notes=0;
    for(let i = 0; i < arr.length;i++)
    {
        if(amount/arr[i]>=1)
        {
            var c = Math.floor(amount/arr[i])
            notes=notes+c
            console.log(arr[i]+" dispatched notes are : "+c)
            amount=amount%arr[i]
        }
    }
    console.log("Total num of notes dispatched are : "+notes)
},
/************************************ Day of Week **********************************/
dayOfWeek(day, month, year) 
{
    
    var y0 = year - Math.floor((14 - month) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
    var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
    
    return d0;
},

/************************************ Temperature Converstion **********************************/
temperatureConverstion() {
    var temperature;
    var choice = read.question("In Which formate you want to convert \n press 1 for Celsius to Fahrenheit \n "
        + "press 2 for Fahrenheit to celsius");
    if (choice == 1) {
        temperature = read.question("enter temperature in celsius");
        if(temperature>=0){
        var fahrenheit = temperature * (9 / 5) + 32;
        console.log("Fahrenheit form of " + temperature + "C is :" + fahrenheit);
        }else
        console.log("Please input correct temperature");
    } else if (choice == 2) {
        temperature = read.question("enter temperature in Fahrenheit");
        if(temperature>=0){
        var celsius = (temperature - 32) * (5 / 9);
        console.log("celsius form of " + temperature + "F is :" + celsius);
        }else
        console.log("Please enter correct temperature");
    } else {
        console.log("wrong choice");
    }
},

/************************************ Monthly Payment **********************************/
monthlyPayment(principal, year, rate) {
    var n = 12 * year;
    var r = (rate / (12 * 100));
    var payment = ((principal * r) / ((1 - Math.pow((1 + r), -n))));
    console.log("Your EMI for every month is : " + payment);
},

/************************************ Square Root**********************************/
sqrRoot(num) {
    if (num > 0) {
        //formula 
        var t = num;
        var epsilon = 1e-15;
        while (Math.abs(t - num / t) > epsilon * t) {
            t = (num / t + t) / 2;
        }
        console.log("Squre root of non negative number is : ", t)
    }
    else {
        console.log("Number should be positive ");
    }
},
/************************************ To Binary **********************************/
toBinary(number) {
    str = "";
    var ch = "";
    while (number > 0) {
        ch = (number % 2);
        str = ch + str;
        number = Math.floor(number / 2);
    }
    str=this.addZero(str);
    return str;

},

/************************************ swap Nibble **********************************/
swapNibble(mainstr) {
    var tempString = mainstr.substring(0, 4);
    mainstr = mainstr.substring(4, 8);
    mainstr = mainstr + tempString;
    return mainstr;
},

/************************************ Add Zero **********************************/
addZero(str) {
    while (str.length < 8) {
        str = '0' + str;
    }
    return str;
},

/************************************ Power **********************************/
power(base, pow) {
    var sum = 1;
    while (pow > 0) {
        sum = sum * base;
        pow--;
    }
    return sum;

},

/************************************ Binary To Decimal **********************************/
binaryToDecimal(strBinary) {
    sum = 0; var ch;
    var n = 0;
    for (let index = strBinary.length - 1; index >= 0; index--) {
        ch = (strBinary.charAt(index).charCodeAt(0)) - 48;
        sum = sum + this.power(2, n) * ch;
        n++;

    }
    return sum;
},

/************************************ Binary Search **********************************/
binarySearch(arr, ele) {
    var first = 0, last = arr.length - 1;
    while (first <= last) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] == ele) {
            return mid;
        } else if (arr[mid] > ele) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }
    return -1;
},

/************************************ Insertion Sort **********************************/
insertionSort(arr) {
    n = arr.length;
    var ele;
    for (let i = 1; i < n; i++) {
        ele = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > ele) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = ele;

    }
    return arr;
},

/************************************ Bubble Sort **********************************/
bubbleSort(arr) {
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }
    return arr;

},

/************************************ Nano Time Second **********************************/
getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
},

/************************************ elapsed time **********************************/
elapsedTimeForMethod() {

    var start = 0, stop = 0;

    var arr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.insertionSort(arr);
    stop = this.getNanoSecTime();
    var insertionSortTime = stop - start;


    var brr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.bubbleSort(brr);
    stop = this.getNanoSecTime();
    var bubbleTime = stop - start;

    var crr = [11, 66, 1, 55, 9, 78, 65, 87, 43, 56];
    start = this.getNanoSecTime();
    this.binarySearch(crr, 55);
    stop = this.getNanoSecTime();
    var BinaryTime = stop - start;

    var arrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.insertionSort(arrString);
    stop = this.getNanoSecTime();
    var insertionSortTimeString = stop - start;


    var brrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.bubbleSort(brrString);
    stop = this.getNanoSecTime();
    var bubbleTimeString = stop - start;

    var crrString = ["a", "gh", "b", "z", "mn"];
    start = this.getNanoSecTime();
    this.binarySearch(crrString, "gh");
    stop = this.getNanoSecTime();
    var binaryTimeString = stop - start;

    var masterList = [{ type: "insertion sort ", time: insertionSortTime }, { type: "bubble Sort", time: bubbleTime },
    { type: "binary search", time: BinaryTime }, { type: "insertion Sort String ", time: insertionSortTimeString },
    { type: "bubble sort String ", time: bubbleTimeString }, { type: "binary search String", time: binaryTimeString }];
    masterList.sort(function (a, b) { return b.time - a.time });

    console.log("The time in descending order is ");
    console.log("Time for " + masterList[0].type + " is " + masterList[0].time);
    console.log("Time for " + masterList[1].type + " is " + masterList[1].time);
    console.log("Time for " + masterList[2].type + " is " + masterList[2].time);
    console.log("Time for " + masterList[3].type + " is " + masterList[3].time);
    console.log("Time for " + masterList[4].type + " is " + masterList[4].time);
    console.log("Time for " + masterList[5].type + " is " + masterList[5].time);


},



/************************************ merge **********************************/
merge(arr, brr,crr) {
    var i = 0, j = 0;
    var k = 0;
    
    while (i < arr.length && j < brr.length) {
        if (arr[i] < brr[j]) {
            crr[k++] = arr[i++];
        } else {
            crr[k++] = brr[j++];
        }
    }
    while (i < arr.length) {
        crr[k++] = arr[i++];
    }
    while (j < brr.length) {
        crr[k++] = brr[j++];
    }
    return crr;
},


/************************************ Merg Sort **********************************/
mergeSort(arr) {
    var n = arr.length;
    if (n < 2) {
        return;
    }
    var mid = Math.floor(n / 2);
    var left = [mid];
    var right = [n - mid];
    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];

    }
    for (let j = mid; j < n; j++) {
        right[j-mid] = arr[j];
    }
    this.mergeSort(left);
    this.mergeSort(right);
    this.merge(left,right,arr);
    
    
},

leapYear(year)
{
    if (year%4 ==0 && year%100!=0 || year%400==0)
    {
        return true;
    }
    else
    {
        return false
    }
    
},

/********************************** The End of first Week **************************************/

}



