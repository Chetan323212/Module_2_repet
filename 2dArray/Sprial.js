// let mat = [
  // [1, 2, 3, 4, 5],
  // [6, 7, 8, 9, 10],
  // [11, 12, 13, 14, 15],
  // [16, 17, 18, 19, 20],
  // [21, 17, 18, 19, 22],
// ];
// 
// let top = 0;
// left = 0;
// right = mat.length - 1;
// bottom = mat.length - 1;
// let ans = [];

// while (left >= right && top >= buttom) {
//   for (let i = left; i <= right; i++) {
//     ans.push(mat[top][i]);
//   }
//   top++;

//   for (let i = top; i <= buttom; i++) {
//     ans.push(mat[i][right]);
//   }
//   right--;

//   for (let i = right; i >= left; i--) {
//     ans.push(mat[bottom][i]);
//   }
//   bottom--;

//   for (let i = buttom; i >= top; i--) {
//     ans.push(mat[i][left]);
//   }
//   left++;
// }

// console.log(ans);


let mat = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
  [17,18,19,20] // 4 x 5 matrix
]

let top = 0;
let bottom = mat.length -1;
let left = 0;
let right = mat[0].length-1;
let result = []



  // go to right to left for top 
while(top <= bottom  && left <= right){

  for(let i = left; i <= right;i++){
   result.push(mat[top][i])
   //console.log(mat[top][i])
  }
  top++

  // go to top to bottom for right

  for(let i = top; i <= bottom; i++){
    result.push(mat[i][right])
    //console.log(mat[i][right])
  }
  right--

  // go to rigth to left for bottom
 if(top <= bottom){
  for(let i = right; i>= left; i--){
    result.push(mat[bottom][i])
    //console.log(mat[bottom][i])
  }
  bottom--
  }

  //go to bottom to top for left
  if(left <= right){
  for(let i = bottom; i>=top; i--){
    result.push(mat[i][left])
    //console.log(mat[i][left])
  }
  left++
  }
}

console.log(result);
