// Quick sort 



function findPVT(arr, first, last){
    let pvt = arr[first];
    let i = first+1;
    let j = last;

    while (i <= j) {
        while(i<=last && arr[i] <= pvt) i++;
        while(j >=  first && arr[j] > pvt) j--;
        
        if(i<j){
           swap(arr, i , j)
        }

    }

    swap(arr, j , first)
    return j 
}


function Quicksort(arr, first , last){
    if(first >= last) return
    let pIndx = findPVT(arr, first, last)
    Quicksort(arr, first , pIndx-1)
    Quicksort(arr, pIndx+1,last)
}

function swap(arr , i , j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [2,4,1,7,5,]
Quicksort(arr,0,arr.length-1)
console.log(arr);