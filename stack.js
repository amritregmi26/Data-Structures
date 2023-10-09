class Stack
{
    constructor()
    {
        this.stack = [];
        this.count = 0;
    }

    // push to the stack
    push(data)
    {
        this.stack[this.count] = data;
        this.count++;
    }

    // pop from the stack
    pop()
    {
        if(this.count === 0) { return "Stack UnderFlow"}
        let deleteItem = this.stack[this.count - 1]
        this.count--;
        return deleteItem;
    }
    // find the top of stack
    top()
    {
        if(this.count == 0)
        {
            return ("Stack UnderFlow");
        }

        return this.stack[this.count - 1]
    }

    // check if stack is empty
    isEmpty()
    {
        return this.count - 1 == -1;
    }
}


let stack = new Stack();
let stack2 = new Stack()

console.log(stack.isEmpty())
stack.push(100)
console.log(stack.top())
stack.push(200)
stack.push(1000)
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.top())


console.log(stack2.isEmpty())
stack2.push(1)
console.log(stack2.top())
stack2.push(2)
stack2.push(10)
console.log(stack2.pop())
console.log(stack2.isEmpty())
console.log(stack2.top())
