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
            return
        }

        let current = this.head;
        while(current.next)
        {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
    }
}