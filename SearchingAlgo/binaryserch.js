
let arr = [1,2,3,4,5]
target = 2
function binarySearch(){
    let l = 0;
    let R = arr.length-1
    while(l <= R){
        let mid = Math.floor((l+R)/2)
        if(arr[mid] == target){
            return mid
        }else if( arr[mid] > target){
            R = mid-1
        }else{
            l = mid+1
        }
    }

}

console.log(binarySearch());