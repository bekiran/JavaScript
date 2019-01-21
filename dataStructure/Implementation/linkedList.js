//Implementing LinkedList Data Structure

// User defined Class node
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
    }

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
    removeFrom(index)
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
module.exports={Linkedlist}
/*
// creating an object for the 
// Linkedlist class 
var ll = new LinkedList(); 
// testing isEmpty on an empty list 
// returns true 
console.log(ll.isEmpty()); 
// adding element to the list 
ll.add(10); 
// prints 10 
ll.printList(); 
// returns 1 
console.log(ll.size_of_list()); 
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
// returns 10 20 30 40 50 
ll.printList(); 
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 
// prints 10 20 30 40 
ll.printList(); 
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
// insert 60 at second positon 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
ll.printList(); 
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 
// prints 10 20 60 40 
ll.printList(); 
*/
