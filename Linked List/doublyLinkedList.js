class Node
{
    constructor(data)
    {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
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
            current = current.next;
            count++;
        }

        return count;
    }

    insertFirst(data)
    {
        const newNode = new Node(data)
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertLast(data)
    {
        const newNode = new Node(data);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
            return
        }

        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
        this.tail = newNode;
    }

    insertAtIndex(index, data)
    {
        if(index < 0 || index > this.size())
        {
            console.error("Invalid Index");
            return;
        }

        const newNode = new Node(data);
        if(index === 0)
        {
            if(!this.head)
            {
                this.head = newNode;
                this.tail = newNode;
                return;
            }
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }
        else if(index === this.size())
        {
            let current = this.tail;
            current.next = newNode;
            newNode.prev = current;
            this.tail = newNode;
            return;
        }
        
        let current = this.head;
        for(let i = 0; i < index - 1; i++)
        {
            current = current.next;
        }

        newNode.next = current.next;
        current.next.prev = newNode;
        current.next = newNode;
        newNode.prev = current;
    }

    removeFirst()
    {
        if(!this.head) return "List is Empty";
        let returnVal = this.head.data;
        this.head = this.head.next;
        this.head.prev = null;
        return returnVal;
    }

    removeLast()
    {
        if(!this.head) return "List is Empty";
        let returnVal = this.tail.data;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return returnVal
    }

    removeFromIndex(index)
    {
        if(this.isEmpty())
        {
            console.error("List is Empty");
            return;
        }

        if(index < 0 || index >= this.size())
        {
            console.error("Invalid Index");
            return;
        }

        if(index === 0)
        {
            let returnVal = this.head.data;
            if(this.size() === 1) 
            {
                this.head = null;
                this.tail = null;
                return returnVal;
            }
            this.head = this.head.next;
            this.head.prev = null;
            return returnVal;
        }

        if(index === this.size() - 1)
        {
            let returnVal = this.tail.data;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return returnVal;
        }

        let current = this.head;
        for(let i = 0; i < index - 1; i++)
        {
            current = current.next;
        }

        if(current.next)
        {
            current.next = current.next.next;
            current.next.prev = current;
        }

        else
        {
            current.next = null;
        }
        
    }

    display()
    {
        let current = this.head;
        let output = ""
        while(current)
        {
            if(current.next) output += `${current.data} <-> `;
            else output += `${current.data}`;

            current = current.next;
        }
        console.log(output);
    }
}
