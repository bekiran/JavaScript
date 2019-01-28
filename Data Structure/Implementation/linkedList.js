/**
 * Execution       :   1. default node          : cmd> node linkedList.js
 *                      2. if nodemon installed  : cmd> nodemon linkedList.js
 *                         -nodemon helps in restart the program after every changes.
 * 
 *  @purpose       :   Implementation of LinkedList
 * 
 * 
 *  @file           : linkedList.js
 *  @overview       : Use random numbers to generate coupon numbers.
 *  @author         : Kiran B.E. <bekiranabbi@gmail.com>
 *  @version        : 1.0
 *  @since          : 16-jan-2019
 */
 

//Implementing LinkedList Data Structure

// Node Class
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {              //  to add an element.
    var n = new Node(element);
    if (this.head == null) {
      this.head = n;
      this.size++;
      return;
    } else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      this.size++;
      current.next = n;
    }
  }
  insertFirst(element) {    // to add the element at the first node.
    var n = new Node(element);
    if (this.head == null) {
      this.head = n;
      this.size++;
      return;
    } else {
      n.next = this.head;
      this.head = n;
      this.size++;
      return;
    }
  }

  insert(index, element) {   //to insert the element at perticular index.
    if (index == 1) {
      this.insertFirst(element);
      return;
    }
    if (this.head == null) {
      return;
    }
    var n = new Node(element);
    var c = 0,
      pre = this.head,
      curr = this.head;
    while (curr) {
      if (c == index - 1) {
        pre.next = n;
        n.next = curr;
        this.size++;
        return;
      }

      c++;
      pre = curr;
      curr = curr.next;
    }
    return false;
  }
  deleteFirst() {              //delete the first node
    if (this.head == null) {
      console.log("Linked List empty");
      return;
    }
    var n = this.head.element;
    this.head = this.head.next;
    this.size--;
    return n;
  }
  pop() {
    if (this.head == null) {
      console.log("No element present in the list");
      return null;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    var curr = this.head;
    var pre = this.head;
    while (curr.next != null) {
      pre = curr;
      curr = curr.next;
    }
    pre.next = null;
    this.size--;
    return curr.element;
  }
  popIndex(index) {
    if (index < 0) {
      console.log("please enter correct index");
      return false;
    } else if (index == 1) {
      this.deleteFirst();
      return;
    }
    var curr = this.head,
      pre = curr,
      c = 0;
    while (curr) {
      if (c == index - 1) {
        pre.next = curr.next;
        this.size--;
        return curr.element;
      }
      c++;
      pre = curr;
      curr = curr.next;
    }
    return null;
  }
  remove(element) {
    var curr = this.head;
    if (curr.element == element) {
      this.deleteFirst();
      return;
    }
    var pre = curr;
    while (curr) {
      if (curr.element == element) {
        pre.next = curr.next;
        this.size--;
        return curr.element;
      }

      pre = curr;
      curr = curr.next;
    }
    return null;
  }
  search(item) {
    if (this.head == null) {
      return false;
    }

    var curr = this.head;
    while (curr) {
      if (curr.element == item) {
        return true;
      }

      curr = curr.next;
    }
    return false;
  }
  isEmpty() {
    if (this.size == 0) {
      return true;
    }
    return false;
  }
  size_of_list() {
    return this.size;
  }

  displayQueue() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str = str + curr.element + " ";
      if (curr.next != null) {
        str = str + " ";
      }
      curr = curr.next;
    }
    return str;
  }
  addAscending() {
    var main = this.head;
    var mainHead = null;
    while (main) {
      var n = new Node(main.element);
      var flag = true;
      if (mainHead == null) {
        mainHead = n;
        this.head = mainHead;
      } else {
        var pre = mainHead,
          curr = mainHead;
        if (curr.next == null) {
          if (n.element < curr.element) {
            n.next = curr;
            mainHead = n;
            flag = false;
          }
        }
        while (curr && flag) {
          if (n.element < curr.element) {
            pre.next = n;
            n.next = curr;
            flag = false;
          }

          pre = curr;
          curr = curr.next;
        }
        if (flag) {
          pre.next = n;
        }
      }

      main = main.next;
    }
    return (this.head = mainHead);
  }
  show() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str = str + curr.element + " ";
      if (curr.next != null) {
        str = str + "  ";
      }
      curr = curr.next;
    }
    console.log(str);
    return str;
  }
  getData() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str = str + curr.element;
      if (curr.next != null) {
        str = str + " ";
      }
      curr = curr.next;
    }
    return str;
  }
}

module.exports = {
  LinkedList
};

/*// User defined Class node
class Node 
{
  constructor(element) //constructor 
  {
    this.element = element;
    this.next = null;
  }
}

// To add element at the end of the list
class Linkedlist 
{
    costructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(element) 
    {
        var node = new Node(element);   //creat new node.
        var current; //to store current node.
      
        //if the list is empty, add element and make it head.
        if (this.head == null) this.head = node;
        else 
        {
            current = this.head; // ittrate till end of loop.
            while (current.next) 
            {
                current = current.next;
            }
            current.next = node;  //add node.
        }
        this.size++;
    }

    contains(item){
        if(this.head==null){
            return false;
        }

        var curr=this.head;
        while(curr){
            if(curr.element==item){
                return true;
            }
              
            curr=curr.next;
        }
        return false;
    }

    display(){
        var curr=this.head;
        var str="";
        while(curr){
            str=str+curr.element+" ";
            if(curr.next!=null){
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
       }

    insertAt(element,index)
    {
        if(index<0 && index>this.size) // *changed
        return false;

        else
        {
            var node = new node(element);
            var curr, prev;

            curr = this.head;

            if(index ==0 )
            {
                node.next = head;
                this.head = node;
            }
            else
            {
                curr = this.head;
                var it = 0;

                while(it<index)
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }

    }
    search(item){
        if(this.head==null){
            return false;
        }

        var curr=this.head;
        while(curr){
            if(curr.element==item){
                return true;
            }
              
            curr=curr.next;
        }
        return false;
    }

    addAscending()
    {
        var main=this.head;
        var mainHead=null;
        while(main)
        {
            var node=new Node(main.element);
            var flag=true;

            if(mainHead==null)
            {
                mainHead=node;
                this.head=mainHead;
            }else{
                var prev=mainHead,curr=mainHead;
                if(curr.next==null){
                    if(node.element<curr.element){
                    node.next=curr;
                    mainHead=node;
                    flag=false;
                }
            }
            while(curr&&flag){
               if(node.element<curr.element){
                   prev.next=node;
                   node.next=curr;
                   flag=false;
               }
 
                prev=curr;
                curr=curr.next;
            }
            if(flag){
                prev.next=node;
            }
        }
         
            main=main.next;
 
        }
        return this.head=mainHead;
    }
    
    /*addAscending()
    {
    console.log("!check1")

        var main=this.head;
        var mainHead=null;
        while(main)
        {
        console.log("!check2")

            var n=new Node(main.element);
            var flag=true;
            if(mainHead==null)
            {
                console.log("!check3")
                mainHead=n;
                this.head=mainHead;
   

            }
            else
            {
                console.log("!check4")
                var prev=mainHead,curr=mainHead;
                if(curr.next==null)
                {
                    if(n.element<curr.element){
                    n.next=curr;
                    mainHead=n;
                    flag=false;
                }
            }
            while(curr&&flag)
            {
                if(n.element<curr.element)
                {
                    console.log("!check5")
                    prev.next=n;
                    n.next=curr;
                    flag=false;
                }
                prev=curr;
                curr=curr.next;
            }
            if(flag)
            {
                prev.next=n;
            }
        }
        main=main.next;
    }
    console.log("!check6")
    return this.head=mainHead;
    }*/

/*addAscending(){
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
    }*/

// remove an element from perticular location (index)
/*removeFrom(index)
    {
        if(index > 0 && index > this.size)
        return -1;

        else
        {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if(index===0)
            {
                this.head=curr.next;
            }
            else
            {
                while(it<index)
                {
                    it++;
                    prev=curr;
                    curr=curr.next;
                }

                //remove the element
                prev.next =curr.next;
            }
            this.size++;

            return curr.element;
        }

    }
    // removes a given element from the 
    // list 
    removeElement(element) 
    { 
        var current = this.head; 
        var prev = null; 
        
        // iterate over the list 
        while (current != null) { 
            // comparing element with current 
		    // element if found then remove the 
		    // and return true 
		    if (current.element === element) { 
			    if (prev == null) { 
				    this.head = current.next; 
			    } else { 
				    prev.next = current.next; 
			    } 
			    this.size--; 
			    return current.element; 
		    }    
		    prev = current; 
		    current = current.next; 
	    } 
	return -1; 
    } 

    indexOf(element) 
    { 
        var count = 0; 
        var current = this.head; 
  
        // iterae over the list 
        while (current != null) { 
            // compare each element of the list 
            // with given element 
            if (current.element === element) 
            return count; 
            count++; 
            current = current.next; 
        } 
  
        // not found 
        return -1; 
    } 

    getData()
    {
        var curr=this.head;
        var str="";
        while(curr)
        {
            str=str+curr.element;
            if(curr.next!=null)
            {
                str=str+" ";
            }
            curr=curr.next;
        }
        return str;
    }


    isEmpty() 
    { 
        return this.size == 0; 
    } 

    size_of_list() 
    { 
    console.log(this.size); 
    } 

    printList() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    } 
}
module.exports={Linkedlist}*/
