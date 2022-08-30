export function binarySearch(arr:number[], x:number, start:number, end:number):boolean | number{
    //Base condition
    if(start > end)return false;
    //find the middle index 
    let mid = Math.floor((start +end) /2);

    //break out early if you hit the condition
    if(arr[mid]===x) return mid;

    if(arr[mid] > x) return binarySearch(arr, x, start, mid-1);

    else return binarySearch(arr, x,mid+1, end);

}

