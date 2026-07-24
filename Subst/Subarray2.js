// greedy method

let arr = [-2,1,-3,4,-1,2,1,-5,4];

let maxSumSubarray = arr[0];
function subarraySum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currrentsum = 0;
    for (let j = i; j < arr.length; j++) {
      currrentsum = currrentsum + arr[j];
      if (currrentsum > maxSumSubarray) {
        maxSumSubarray = currrentsum;
      }
    }
  }
  return maxSumSubarray
}

console.log(subarraySum(arr));
