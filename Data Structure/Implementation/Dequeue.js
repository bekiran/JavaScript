/**
 * Execution       :   1. default node          : cmd> node Dequeue.js
 *                      2. if nodemon installed  : cmd> nodemon Dequeue.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   Implementation of DeQueue
 * 
 * 
 *  @file           : Dequeue.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-jan-2019
 */
 
class Dequeue 
{
    constructor()
    {
        this.front=-1;                          //Intally intilaze front = -1
        this.back=0;                            //Inatally initalize rear = 0
        this.size=30
        this.arr=new Array(30);
    }

    isFull()   // Checks whether the Dequeue is full.
    {
        if((this.front==0 &&this.rear==this.size-1 )||(this.rear+1==this.front))
        {
            return true;
        }
        return false;
    }
    isEmpty()     // Checks whether the Dequeue is empty.
    {
      return this.front==-1;
    }

    addFront(item)   // To add elements from front.
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
        }
     if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==0)
        {
            this.front=this.arr.length-1;
        }
        else{
            this.front--;
        }
        this.arr[this.front]=item;
    }
    addRear(item)   // to add element from rear
    {
        if(this.isFull())
        {
            console.log("Queue overflow");
            return;
        }
        if(this.front==-1)
        {
            this.front=0;
            this.rear=0;
        }
        else if(this.front==this.arr.length-1)
        {
            this.rear=0;
        }
        else
        {
            this.rear++;
        }
        this.arr[this.rear]=item;
    }
    removeRear()  // to remove the element from rare
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
        }
        var item;
         if(this.rear==this.front)
        {
        item=this.arr[this.rear];
          this.rear=-1;
          this.front=-1;
        }
        else if(this.rear==0)
        {
            item=this.arr[this.rear];
            this.rear=this.arr.length-1;
        }
        else{
            item=this.arr[this.rear]
            this.rear=this.rear--;
        }
        return item;
    }
    removeFront() // remove the element from front
    {
        if(this.isEmpty())
        {
            console.log("Queue underflow");
            return;
        }
        var item;
        if(this.front==this.rear)
        {
            item=this.arr[this.front];
            this.front=-1;
            this.rear=-1;
        }
        else if(this.front==this.arr.length-1)
        {
          item=this.arr[this.front];
          this.front--;
        }
        else
        {
            item=this.arr[this.front];
            this.front++;
        }
        return item;
    }
    getFront()   //To Peek the content of top most element from front
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear()   //To peek th content of top most element from rare.
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.rear];
    }
     
    PalindromeChecker(str)    //To check the given string is Palindrome or not
    {
        for(let i=0;i<str.length;i++)
        {
            this.addRear(str.charAt(i));
        }
        console.log(this.front);
        console.log(this.rear);
        while(this.front!=this.rear && this.front<this.rear)
        {
            
            if(this.getFront()!=this.getRear())
            {
                return false;
            }
            this.front++;
            this.rear--;
        }
       return true;
    }
}

module.exports={
    Dequeue
}


    
