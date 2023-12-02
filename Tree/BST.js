class Node
{
    constructor(data)
    {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

class BST
{
    constructor()
    {
        this.root = null;
    }

    add(data)
    {
        let newNode = new Node(data);

        if(!this.root)
        {
            this.root = newNode;
            return;
        }
    }
}
