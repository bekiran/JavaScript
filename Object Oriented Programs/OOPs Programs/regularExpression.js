var utility = require('../../Object Oriented Programs/Utility/utility')
var read = require('readline-sync');
function regEx()
{
    var flag = true;
    var name = read.question("Please enter your name : ");
    while (flag)
    {
        if(isNaN(name))
        {
            flag=false;
        }
        else
        {
            var name = read.question("Oops!! Please eneter your valid name : ")
        }
    }
    var flag = true;
    var fullname = read.question("Please enter your full name : ")
    while(flag)
    {
        if(isNaN(fullname))
        {
            flag=false;
        }
        else
        {
            var fullname = read.question("Please enter your valid full name.")
        }
    }
    var flag = true;
    var mobilenumber = read.questionInt("Please enter your mobile number : ")
    while(flag)
    {
        if(!isNaN(mobilenumber))
        {
            flag=false;
        }
        else
        {
            var fullname = read.question("Please enter your valid mobile number.")
        }
    }
    var ds = new Date();
    dt = ds.getDate() +"/" + (ds.getMonth()+1) + "/" + ds.getFullYear();
    utility.regex(name, fullname, mobilenumber, dt);
}
regEx();