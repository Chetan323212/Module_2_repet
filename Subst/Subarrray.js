//  // find the sub array
//  let arr =  [1,4,5,6,7]
// let subarr = []
// let k = 2
// // use spice for subarray
//  for(let i = 0; i < arr.length-1; i++){
//    for(let j = i; j < i + k; j++){
//     subarr.push(arr[j])
//    }
//  }
//  console.log(subarr)

let arr = [1,2,3,4];
let subarr = []
let ans =[];
for(let i = 0; i < arr.length; i++){
  for(let j = i;j < arr.length; j++){
    subarr.push(arr[j])
    ans.push(subarr);
  }
}
console.log(ans)




 