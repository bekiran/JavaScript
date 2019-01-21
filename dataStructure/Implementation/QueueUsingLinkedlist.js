class Node
{
    constructor()
    {
        this.element=element;
        this.next=next;
    }
}

class QueueLinked
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }

    //Adding an element
    enqueue(element)
    {
        var n =new node(element)
        if(this.head==null)
        {
            this.head=n;
            this.size++;
            return
        }
        else
        {
            var current=this.head;
            while(current.next)
            {
                current=current.next
            }
            this.size++;
            current.next=n;
        }
    }

    //Deleting an element
    dequeue()
    {
        if(this.size==0)
        {
            console.log("Queue is empty");
            return;
        }
        var n = this.head.element;
        this.head=this.head.next;
        this.size--;
        return n;
    }
    getelement()
    {
        var curr = this.head;
        var str="";
        while (curr)
        {
            str=str+curr.element;
            if(curr.next!=null)
            {
                str=str+"";

            }
            curr=curr.next;
        }
        return str;
    }

    size()
    {
        return this.size;
    }
    isEmpty()
    {
        if(this.size=0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    displayAnagram(){
        if(this.head==null){
            console.log("No element present ");
            return;
        }
        console.log(" The numbers which are Prime and anagram ");
        var pre=this.head;
        var curr=pre.next;
        var dis=require('util');
    
        while(curr){
               dis.print(pre.element);
            if(pre.next!=null){
                dis.print(" ==> ")
            }
            dis.print(curr.element);
            dis.print(',');
            pre=curr;
            curr=curr.next;
        }
    
    }
    addAscending(){
        var main=this.head;
          var mainHead=null;
        while(main){
         var n=new Node(main.element);
         var flag=true;
         if(mainHead==null){
           
             mainHead=n;
          this.head=mainHead;
    
         }else{
             var pre=mainHead,curr=mainHead;
             if(curr.next==null){
                 if(n.element<curr.element){
                     n.next=curr;
                     mainHead=n;
                     flag=false;
                 }
             }
             while(curr&&flag){
               if(n.element<curr.element){
                   pre.next=n;
                   n.next=curr;
                   flag=false;
               }
    
                 pre=curr;
                 curr=curr.next;
             }
             if(flag){
                 pre.next=n;
             }
         }
         
            main=main.next;
    
        }
        return this.head=mainHead;
    }
    getData(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element;
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }
    makeBlank(){
        this.head=null;
    }
    
}
module.exports={QueueLinked}