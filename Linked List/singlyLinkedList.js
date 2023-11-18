class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
    }

    isEmpty()
    {
        return this.head === null;
    }

    size()
    {
        let count = 0, current = this.head;
        while(current)
        {
            count++;
            current = current.next;
        }
        return count;
    }

    insertLast(data)
    {
        const newNode = new Node(data);
        if(!this.head)
        {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }
        current.next = newNode;
    }

    insertFirst(data)
    {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtIndex(index, data)
    {
        if(index < 0 || index > this.size())
        {
            console.error("Invalid index");
            return;
        }

        const newNode = new Node(data);
        
        if(index === 0)
        {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        for(let i = 0; i < index - 1; i++)
        {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;

    }  
    
    removeFirst()
    {
        if(this.size() === 0) return "Linked List is Empty";
        let returnVal = this.head.data;
        this.head = this.head.next;
        return returnVal;
    }

    removeLast()
    {
        if(!this.head) return "Linked List is Empty";

        if(this.size() === 1) return "List has only one element";

        let current = this.head
        while(current.next.next)
        {
            current = current.next
        }
        current.next = null;
    }

    removeAtIndex(index)
    {
        if(this.isEmpty()) 
        {
            console.error("Linked list is empty");
            return;
        }

        if(index < 0 || index >= this.size())
        {
            console.error("Invalid Index");
            return;
        }

        if(index === 0) 
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++)
        {
            current = current.next
        }

        if(current.next.next) current.next = current.next.next;
        else current.next = null;
    }

    display()
    {
        let current = this.head;
        let output = ""
        while(current)
        {
            if(current.next) output += `${current.data} -> `;
            else output += `${current.data}`;

            current = current.next;
        }
        console.log(output);
    }
}