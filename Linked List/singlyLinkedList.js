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
     
}