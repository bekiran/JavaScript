class Dequeue
{
    constructor()
    {
        this.front=-1;
        this.back=0;
        this.size=30
        this.arr=new Array(30);
    }

    isFull()
    {
        if((this.front==0 &&this.rear==this.size-1 )||(this.rear+1==this.front))
        {
            return true;
        }
        return false;
    }
    isEmpty()
    {
      return this.front==-1;
    }

    addFront(item)
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
    addRear(item)
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
    removeRear()
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
    removeFront()
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
    getFront()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear()
    {
        if(this.isEmpty())
        {
            return -1;
        }
        return this.arr[this.rear];
    }
     
    PalindromeChecker(str)
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


    
