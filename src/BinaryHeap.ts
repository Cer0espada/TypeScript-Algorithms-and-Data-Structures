class MinHeap{

    private Heap:number[]; 
    private size:number = 0;
    private maxSize:number = 0;

    constructor(maxSize:number){
        this.Heap = new Array<number>(maxSize);
    }
    // Function to return the position of the parent for the node currently at pos
    parent(pos:number):number{ 
        return 2 *pos;
    }
    //Function to return the psoition of the left child for the node currently at pos 
    leftChild(pos:number):number{
        return 2 * pos
    }
    // function to return the position of the right child currently at pos 
    rightChild(pos:number):number{
        return 2 * pos + 1
    }
    // function to return the true if the passed node is a leaf node 
    isLeaf(pos:number):boolean{
        if(pos >= (this.size/2) && pos <= this.size){
            return true;
        }
        return false;
    }
    //function to swap two nodes of the heap 
    // swap(fpos:number, spos:number):void{
    //     [this.Heap[fpos], this.Heap[spos]] = [this.Heap[spos], [this.Heap[fpos]]]
    // }

    minHeapify(pos:number):void{
        //if the node is a non leaf node and greater than any of its children
        if(!this.isLeaf(pos)){
            if(this.Heap[pos] > this.Heap[this.leftChild(pos)]
            || this.Heap[pos] > this.Heap[this.rightChild(pos)] ){
                //swap with the left child and heapify the left child 
                if(this.Heap[this.leftChild(pos)] < this.Heap[this.rightChild(pos)]){
                    // this.swap(pos, this.leftChild(pos));
                    [this.Heap[pos], this.Heap[this.leftChild(pos)]] = [this.Heap[this.leftChild(pos)], this.Heap[pos]] // swap
                    this.minHeapify(this.leftChild(pos))
                }
                // swap with the right child and heapify the right child 
                else{
                    // this.swap(pos, this.rightChild(pos));
                    [this.Heap[pos], this.Heap[this.rightChild(pos)]] = [this.Heap[this.rightChild(pos)], this.Heap[pos]] // swap
                    this.minHeapify(this.rightChild(pos));
                }
            }
        }
    }

    insert(element:number){
        if(this.size >= this.maxSize){
            return;
        }
        this.Heap[++this.size] = element;
        let current = this.size;
        //re-adjust if the node is larger than the parent 
        while(this.Heap[current] < this.Heap[this.parent(current)]){
            [this.Heap[current], this.Heap[this.parent(current)]] = [this.Heap[this.parent(current)], this.Heap[current]] // swap
            // this.swap(current, this.parent(current));
            current = this.parent(current)
        }
    }

    print():void{
        for(let i =1; i<=this.size /2; i++){
            console.log(`Parent: ${this.Heap[i]} \n Left child: ${this.Heap[2*i]} \n Right Child: ${this.Heap[2*i+1]}`)
        }
    }

    remove():number | undefined{
        let popped = this.Heap.shift();
        this.size--;
        this.minHeapify(this.Heap[0])
        return popped
    }

}