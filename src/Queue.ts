import { LinkedList } from "./LinkedList";

export class Queue<T>{
    private list = new LinkedList<T>();

    constructor(){
        
    }

    public peek():T{
        return this.list.head!.value;
    }

    public enqueue(value:T){
        this.list.insertEnd(value)
    }

    public dequeue(){
        return this.list.deleteFront()
    }

    public size():number{
        return this.list.size
    }
    
    public isEmpty():boolean{
        return this.list.isEmpty()
    }

}