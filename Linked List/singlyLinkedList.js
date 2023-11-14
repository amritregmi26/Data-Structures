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
        if(index < 0 || index >= this.size())
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
    
}

