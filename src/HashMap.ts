//implementation to handle collisions 
//a node of chains 
export class HashNode<K,V>{
    public key:K
    public value:V 
    public hashCode: number | null = 0;
    //reference to the next node 
    public next: HashNode<K,V> | null = null;

    //constructor
    constructor(key:K, value:V, hashCode:number){
        this.key = key;
        this.value = value;
        // this.hashCode = hashCode;
    }
}

//class to represent entire hash table
export class HashMap<K,V> {
    private HashArray = new Array<HashNode<K, V> | null>(5)
    private capacity:number = 5
    private size: number = 0

    constructor( capacity:number = 5, size:number = 0){
      
    }

    public getSize():number{
        return this.size;
    }
    public isEmpty(){
        if(this.size ===0){
            return true;
        }
        return false;
    }

    public getHashCode (key:K){
        // return Math.floor(Math.random() * 10000) * 17
        let code:string = key+""
        let hash:string ="";

        for(let i = 0; i< code.length; i++){
            hash+=code.charCodeAt(i);
        }
        return parseInt(hash)*13;
    }

    public getHashArrayIndex(key:K):number{
        let hashCode:number = this.getHashCode(key)
        let index: number = hashCode % this.capacity
        return index;
    }
    //Method to remove a given key
    public remove(key:K):V|null{
        //Apply hash function to find index for given key
        let HashArrayIndex = this.getHashArrayIndex(key);
        let hashCode = this.getHashCode(key);

        let head:HashNode<K,V> | null = this.HashArray[HashArrayIndex];

        let prev:HashNode<K,V> | null = null;

        while(head !==null){
            //if key found
            if(head.key === key && hashCode == head.hashCode){
                break;
            }

            //else keep the chain moving 
            prev = head;
            head = head.next;
        }
        //if key was not there 
        if(head === null){
            return null;
        }
        //reduce size
        this.size--;

        //remove key
        if(prev!=null){
            prev.next = head.next;
        }else{
            this.HashArray[HashArrayIndex] = head.next;
        }
        //head should probably be curr
        return head.value;

    }
    // return value for key
    public get(key:K):V|null{
        //find head of chain for given key
        let HashArrayIndex:number = this.getHashArrayIndex(key);
        let hashCode:number = this.getHashCode(key);

        let head:HashNode<K,V>| null = this.HashArray[HashArrayIndex];

        //search key in chain
        while(head != null){
            if((head.key === key) && (head.hashCode === hashCode)){
                return head.value
            }
            head = head.next;
        }
        //if key not found
        return null;
    }

    public add(key:K, value:V):void{
        //find the head of chain for a given Key
        let HashArrayIndex = this.getHashArrayIndex(key);
        let hashCode:number = this.getHashCode(key);

        let head:HashNode<K,V> | null= this.HashArray[HashArrayIndex];

        //check if empty
        if(!head){
            head = new HashNode<K,V>(key, value, hashCode)
            this.HashArray[HashArrayIndex] = head;
            this.size++;
            return;
        }
        
        //check if the key is already present
        while(head !==null){
            if(head.key === key && head.hashCode === hashCode){
                head.value=value;
                return;
            }
            head = head.next;
        }
        //insert key in chain
        this.size++;

        // head = this.HashArray[HashArrayIndex];
        let newNode = new HashNode<K,V>(key, value, hashCode);
        newNode.next = head;
        this.HashArray[HashArrayIndex] = newNode;

        //if the load factor goes beyond threshold then 
        //double the hash table size
        if((this.size / this.capacity) >= 0.7){
            let temp =this.HashArray;
            this.capacity *= 2
            this.HashArray = new Array<HashNode<K,V> | null>(this.capacity);
            this.size = 0;
            for(let i =0;i < this.capacity;i++){
                this.HashArray.push(null);
            }

            for( let node of temp){
                while(node !== null){
                    this.add(node.key, node.value);
                    node = node.next;
                }
            }
        }
    }

}