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