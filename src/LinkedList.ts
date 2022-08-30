export class ListNode<T>{
        public next:ListNode<T> | null
        public prev:ListNode<T> |null
        public value:T

        constructor(value:T){
            this.value = value;
            this.next = null;
            this.prev = null;
        }
        
    }

export class LinkedList<T>{
    public head: ListNode<T> | null
    public tail: ListNode<T> | null
    public size:number 

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public isEmpty():boolean{
        if(this.size === 0 || this.head ===null && this.tail ===null){
            return true
        }
        return false
    }
    
    public insertFront(value:T): void {

        let temp = new ListNode(value);
        if(this.isEmpty()){
            this.head = temp;
            this.tail = temp;
            this.size++;
            return;
        }

        if(this.head === this.tail){
            this.head!.prev = temp;
            temp.next = this.head;
            this.head = temp;
            this.size++;
            return;
        }
            this.head!.prev = temp;
            temp.next = this.head;

            this.head = temp;
            this.size++;
            return;
    }

    public insertEnd(value:T){

        let temp = new ListNode(value);
        if(this.isEmpty()){
            this.head = temp;
            this.tail = temp;
            this.size++;
            return;
        }

        if(this.head === this.tail){
            this.tail!.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
            this.size++;
            return;
        }

        this.tail!.next = temp;
        temp.prev = this.tail;
        this.tail = temp;
        this.size++;
        return;
    }

    public deleteEnd():T|null {
        let temp = this.tail;

        if(this.isEmpty()){
            return null;
        }

        if(this.head === this.tail){
         
            this.head === null;
            this.tail === null;
            this.size--;
            return temp!.value;
        }

        this.tail!.prev!.next = null;
        this.tail = this.tail!.prev;
        this.size--;
        return temp!.value;
    }

    public deleteFront():T|null{

        let temp = this.head;
        if(this.isEmpty()){
            return null;
        }

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            this.size--;
            return temp!.value;
        }

        this.head = this.head!.next;
        this.head!.prev = null;
        this.size--;
        return temp!.value;
    }

    public insertAtValue(valueToAdd:T, valuetoReplace:T){
        let node = new ListNode(valueToAdd);

        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        if(this.head!.value === valuetoReplace) this.insertFront(valueToAdd);

        if(this.tail!.value === valuetoReplace) this.insertEnd(valueToAdd);

        let curr = this.head;

        while(curr!.next !== null || curr!==null || curr !== this.tail){
            if(curr!.value === valuetoReplace){
                node.next = curr!.next;
                node.prev = curr; 

                curr!.next!.prev = node;
                curr!.next = node;
                this.size++;
                break;
            }
            curr = curr!.next;
        }
    }

    public deleteAtValue(valuetoReplace:T): void{
        if(this.isEmpty()){
            return;
        }

        if(this.head!.value === this.tail!.value){
            this.head === null;
            this.tail === null;
            this.size--;
            return;
        }

        if(this.head!.value === valuetoReplace) this.deleteFront();

        if(this.tail!.value === valuetoReplace) this.deleteFront();

        let curr = new ListNode(valuetoReplace);

        while(curr!.next !== null || curr !== null || curr!== this.tail){
            if(curr!.value === valuetoReplace){
                curr!.prev!.next = curr!.next;
                curr!.next!.prev = curr!.prev ;

                this.size--;
            }
        }
    }

    public contains(value:T):boolean{
        if(this.isEmpty()){
            return false;
        }

        if(this.head!.value === value || this.tail!.value == value){
            return true;
        }

        let curr = new ListNode(value);

        while(curr!.next !==null || curr !== this.tail){
            if(curr.value === value){
                return true;
            }
        }
        return false;
    }

    public printEachNode():void{
        if(this.isEmpty()){
            console.log('no values')
            return;
        }

        let curr = this.head;

        while(curr !==null || curr !== this.tail|| curr!.next ===null){
            console.log(`List Node ${curr} with value ${curr?.value}`)
            
            if(curr!.next == null) break;
            curr = curr!.next;
        }

        console.log(`LinkedList has size of ${this.size}`)
        return;
    }

    public find(value:T):T|null {
        if(this.isEmpty() || this.size ===0){
            return null;
        }
        if(this.head === this.tail){
            return this.head!.value
        }

        if(this.head!.value === value){
            return this.head!.value
        }

        let curr = this.head;

        while(curr !==null){
            if(curr.value === value){
                return value;
            }
            curr = curr!.next;
        }

        return null;
    }
}