// an sample stack working using array : Data structure 
/*
var letters = [];
var word = "akashya";
var rword = ""; 

for(var i = 0; i<word.length;i++)
{
    letters.push(word[i])
}

for(var i=0;i<word.length;i++)
{
    rword+= letters.pop()
}

if(word==rword)
{
    console.log(word+" is a palindrome")
}
else
{
    console.log(word+" is not a palindrome")
}

/************************************************************************************************ */
// creat a Stack in data structure.

var stack = function()
{
    this.count = 0; 
    this.storage = 0;
}
// add a values at the end of the stack
this.push = function(value)
{
    this.storage[this.count] = value;
    this.count++;
}

// removes and returns the value at the end of the stack

this.pop = function()
{
    if(this.count==0)
    {
        return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;

    this.size=function()
    {
        return this.count;
    }

    // returns the value at the end of the stack
    this.peak =function(value)
    {
        return this.storage[this.count-1]
    }
}


var myStack = new stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peak())
console.log(myStack.pop())
console.log(myStack.peak())