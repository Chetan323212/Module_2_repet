
// let n = 6
// let m = 5
// for(let i = 0;i < n; i++){
//    let row = ""
//     for(let j = 0; j <=m ;j++){
//         if(i == 0 || i == n - 1 || j == 0 || m - 1){
//             row+= '*'
//         }else{
//             row+=" "
//         }
//     }
//     console.log(row)
// }


// let n = 6;
// let m = 5
// for(let i = 0; i < n ; i++){
//     let row = ""
//     for(let j = 0; j < m; j++){
//         if(j == 0 || i==j || j == n-1){
//             row +="*"
//         }else{
//             row +=" "
//         }
//     }
//     console.log(row)
// }



// let mat1 = [
//     [1,2],
//     [4,5],
// ]

// let mat2 = [
//     [9,10,3],
//     [4,11,6],
// ]


// let result = []
// for(let i = 0; i < mat1.length; i++){
//     let sum = []; 
//  for(let j = 0; j < mat2[i].length; j++){
//     sum.push(mat1[i][j] * mat2[j][i])
//  }
//  result.push(sum)
// }
// console.log(result);



// prefix sum and suffix sum 

let arr = [1,2,3,4,5]
let sum = 0
let result = []
for(let i = 0; i < arr.length; i++){
    sum+= arr[i]
    result.push(sum)
}
console.log(result)

sum = 0
let suff = []
for(let j = arr.length-1; j >=0; j--){
    sum += arr[j]
    suff.push(sum)
}
console.log(suff);
// 303 problem 