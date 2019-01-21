class Stack {
    constructor() {
        this.items = [];
        this.size = 0
        this.capacity
        this.top = -1
    }
    stack(capacity) {
        this.capacity = capacity
        var t = new items[capacity]
    }
    push(data) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++
        this.items[++this.top] = data
    }
    pop() 
    {
        /*return top most element in the stack and removes it
        *from the stack Underflow if stack is empty*/ 
        if (this.top == -1)
            console.log("stack is empty")
        this.size--
        return this.items[this.top--]
    }
    peak() {
        if (this.top == -1)
            console.log("stack is empty")
        else
            console.log(this.items[top])

    }
    getSize() {
        return this.size;

    }
    isempty() {
        if (size == 0)
            return true
        else
            return false

    }
    display() {
        var st = "";
        for (let i = 0; i < this.size; i++) {
            st = st + " " + items[i]
        }
    }
    reversStack(items) {
        var newstack = new Stack;
        var n = this.getsize();
        for (let index = 0; index < n; index++) {
            newstack.push(this.pop());
        }
        return newstack;

    }
}
module.exports={Stack}
