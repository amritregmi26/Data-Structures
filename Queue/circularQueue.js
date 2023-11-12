class CircularQueue
{
    constructor(size)
    {
        this.queue = new Array(size)
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    isEmpty()
    {
        return this.front === -1;
    }

    peek()
    {
        return this.front === -1 ? "Queue is Empty" : this.queue[this.front];
    }

    enqueue(value)
    {
        if((this.front === 0 && this.rear === this.size - 1) ||
            (this.rear === (this.front - 1) % (this.size - 1)))
        {
            console.log("Queue is full");
            return;
        }
        else
        {
            if(this.front === -1) this.front = 0;

            if(this.rear === this.size-1 && this.front !== 0) this.rear = 0;
            else this.rear++;

            this.queue[this.rear] = value;
        }
    }

    dequeue()
    {
        if(this.front === -1)
        {
            console.log("Queue is Empty");
            return;
        }
        else
        {
            let returnValue = this.queue[this.front];
            if(this.front === this.size-1 && this.rear !== 0) this.front = 0;
            else this.front++;
            if(this.front === this.rear)
            {
                this.front = -1;
                this.rear = -1;
            }
            console.log(returnValue);
            return;
        }
    }
    
    print()
    {
        if(this.rear > this.front)
        {
            for(let i = this.front; i <= this.rear; i++)
            {
                console.log(this.queue[i])
            }
        }

        else
        {
            for(let i = this.front; i < this.size; i++)
            {
                console.log(this.queue[i])
            }
            for(let i = 0; i <= this.rear; i++)
            {
                console.log(this.queue[i])
            }
        }
    }
}