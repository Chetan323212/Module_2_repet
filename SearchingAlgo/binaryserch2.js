
let arr = [2,3,7,10,11,11,25]


let l = 0
let R = arr.length;
let target = 9
let ans = -1
function binarySearch(){
while(l <= R){
    let mid = Math.floor((l+R)/2)
    for(let i = 0; i< arr.length; i++){

        if(arr[mid] >= target){
            ans = mid
            R = mid-1
        }else{
            l = mid+1
        }
    }
}
return ans
}
console.log(binarySearch());

