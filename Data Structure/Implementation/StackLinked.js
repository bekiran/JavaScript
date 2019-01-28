/**
 * Execution       :   1. default node          : cmd> node StackLined.js
 *                      2. if nodemon installed  : cmd> nodemon StackLined.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   Implementation of Stack using LinkedList
 * 
 * 
 *  @file           : StackLined.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 17-jan-2019
 */


class Node{
    
    constructor(element){
        this.element=element;
        this.next=null;
    }
}
class StackLinkedList{
  constructor(){
      this.size=0;
      this.head=null;
  }
  push(element){
        var n=new Node(element);
        if(this.head==null){
            this.head=n;
            this.size++;
             return;
        }else{
            var current=this.head;
            while(current.next){
                current=current.next;
            }
            this.size++;
            current.next=n;
        }
        
  }
  pop(){
    if(this.head==null){
        console.log("Stack underflow");
        return null;
    }
    var curr=this.head;
    var pre=this.head;
    if(curr.next==null){
        this.head=null;
        return curr.element;
    }
    while(curr.next != null){
        pre=curr;
        curr=curr.next;

    }
    pre.next=null;
    this.size--;
    return curr.element;
}
peek(){
    if(this.head==null){
        console.log("Stack underflow");
        return null;
    }
    var curr=this.head;
    while(curr.next != null){
        curr=curr.next;

    }
    return curr.element;
}
isEmpty(){
    if(this.size==0){
        return true;
    }
    return false;
}
give_size(){
    return this.size;
}
display(){
    var curr=this.head;
    var str="";
    while(curr){
        str=str+curr.element;
        if(curr.next!=null){
            str=str+",";
        }
        curr=curr.next;
    }
    console.log(str);
}

reveseStack(stk){
    var newstack=new StackLinkedList;
    var n=this.give_size();
    for (let index = 0; index < n;index++) {
        newstack.push(this.pop());
    }
    return newstack;

}

displayAnagram(){
    var curr=this.head;
    var dis=require('util');
    while(curr){
        dis.print(curr.element);
        if(curr.next!=null){
            dis.print("  ");
        }
        curr=curr.next;
    }
    
}


}
module.exports={
    StackLinkedList
}
