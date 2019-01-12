//Breadth First Search 


class Node
{
    constructor(value)
    {
        this.value = value;
        this.left =  null;
        this.right = null;

    }
}

class binarySearchTrees
{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        let newNode = new Node(value);
        if(this.root === null)
        {
            this.root = newNode;
            return this;
        }
        let now= this.root;

        while(true)
        {
            if(now === now.value)return undefined
            if( value < now.value)
            {
                if (now.left === null)
                {
                    now.left = newNode;
                    return this;
                }
                now = now.left;
            }
            else
            {
                if(now.right === null)
                {
                    now.right = newNode;
                    return this;
                }
                now = now.right;
            }
        }
    }
    finding(value)
    {
        if(this.root === null)
        {
            return undefined;
        }
        let store = this.root;
        let look;

        while(value  && !look)
        {
            if(value < store.value)
            {
                store = store.left;
            }
            if(value > store.value)
            {
                store = store.right
            }
            else
            {
                look = true;
            }

          if(!store) return undefined;
            return store;
        }
    }

    Breadth()
    {
        let save = this.root;
        let data = [],
            queue = [];
            queue.push(this.root);
            while(queue.length)
            {
                save = queue.shift();
                data.push(save.value);
                if(save.left) queue.push(save.left);
                if(save.right) queue.push(save.right);
            }
        return data;
    }
}
let value = new binarySearchTrees();

value.insert(10);
value.insert(6);
value.insert(15);
value.insert(3);
value.insert(8);
value.insert(20);


console.log(value);