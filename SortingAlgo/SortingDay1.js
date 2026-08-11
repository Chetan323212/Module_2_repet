let arr = [2,1,8,3,5]
let swap
do{
    swap = false
    for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i+1] = temp
        swap = true
    }
}
}while(swap)
console.log(arr)

// 