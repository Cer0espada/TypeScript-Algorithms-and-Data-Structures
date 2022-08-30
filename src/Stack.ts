import { LinkedList } from "./LinkedList";

export class Stack<T>{
    private list:LinkedList<T> = new LinkedList<T>()

    constructor(){}

    public peek():T{
        return this.list.head!.value
    }

    public push(value:T):void{
        return this.list.insertFront(value);
    }

    public pop(value:T):T|null{
        return this.list.deleteEnd()
    }

    public size(){
        return this.list.size;
    }
    public isEmpty():boolean{
        return this.list.isEmpty();
    }
}