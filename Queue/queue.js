class Queue
{
    constructor()
    {
        this.queue = [];
        this.index = 0;
    }

    //enqueue
    enqueue(data)
    {
        this.queue[this.index] = data;
        this.index++;
    }

    //dequeue
    dequeue()
    {
        if(this.index == 0) return "Queue is Empty";

        let dequeued = this.queue[0];
        this.queue[0] = this.queue[1];
        this.index--;
        return dequeued;
    }

    //First element of queue
    firstItem()
    {
        if(this.index == 0) return undefined;

        return this.queue[0];
    }

    //check for empty queue
    isEmpty()
    {  
        return this.index == 0;
    }

    //clear the queue
    clear()
    {
        this.index = 0;
    }

    //check the size of the queue
    size()
    {
        return this.index;
    }

}

const queue = new Queue();
const queue2 = new Queue();

console.log(queue.isEmpty());
queue.enqueue(100);
queue.enqueue(200);
console.log(queue2.isEmpty());
console.log(queue.dequeue());
console.log(queue.size());
queue2.enqueue(2);
queue2.enqueue(5);
queue2.enqueue(7);
console.log(queue.firstItem());
queue.enqueue(300);
console.log(queue2.dequeue());
console.log(queue.size());
console.log(queue2.firstItem());
console.log(queue.firstItem());
queue.clear();
queue2.clear();
console.log(queue.dequeue());