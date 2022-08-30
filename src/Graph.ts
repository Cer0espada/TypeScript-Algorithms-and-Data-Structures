class Graph<T>{
    //basic bidrectional graph 
    private V:number = 0; // number of vertices 
    private adj:Map<T , T[]>  = new Map<T, T[]>();// adjaceny list representation
    

    constructor(){
    }
    private AddNode(key:T){
        this.adj.set(key, [])
    }

    private AddEdge(v:T, w:T){
       this.adj.get(v)?.push(w);
       this.adj.get(w)?.push(v);
    }

    protected BFS(start:any, target:any){
        const visited = new Set();

        const queue = [start];

        while(queue.length > 0){

            const node = queue.shift();

            const children = this.adj.get(node);

            if(!children) return;

            for(const child of children){

                if(node === target){
                    console.log(`found ${target}`)
                }

                if(!visited.has(child)){
                    visited.add(child);
                    queue.push(child);
                }
            }
        }
    }

    private DFS(start:any, visited = new Set(), steps:number, target:any){
        console.log(start);
        visited.add(start);

        const children = this.adj.get(start);

        if(!children) return;

        for( const child of children){
            if(child === target){
                steps++;
                console.log(`DFS found ${child} at ${steps} steps`)
            }

            if(!visited.has(child)){
                steps++;
                this.DFS(start, visited, steps, target);
            }
        }
    }

}