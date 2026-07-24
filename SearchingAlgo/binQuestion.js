// let arr = [1,2,3,4,5,6,7]

// q1 . find teh t1 and t2 index

// let l = 0
// let R = arr.length;
// let t1 = 3
// let t2 = 6
// function binarySearch(t){
// while(l <= R){
//     let mid = Math.floor((l + R)/2)

//     if(arr[mid] == t){
//         return mid
//     }else if(arr[mid] > t){
//        R = mid-1
//     }else{
//         l = mid+1
//     }
// }

// }
// console.log(binarySearch(t1));

// q2 . first and last position an item

let arr = [1, 2, 2, 2, 3, 3, 3, 4, 5];
target = 3;
let l = 0;
let R = arr.length;
let result = -1;
function findTargetIndex() {
  let mid = Math.floor((l + R) / 2);
  while (l < R) {
    if (arr[mid] == target) {
      result = mid;
      R = mid - 1;
    } else if (arr[mid] > target) {
      R = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
}
let result2 = -1;
function findlastTargetIndex() {
  let mid = Math.floor((l + R) / 2);
  while (l < R) {
    if (arr[mid] == target) {
      result = mid;
      l = mid + 1;
    } else if (arr[mid] > target) {
      R = mid - 1;
    } else {
      l = mid + 1;
    }
  }
}
console.log(findTargetIndex());
console.log(findlastTargetIndex());
