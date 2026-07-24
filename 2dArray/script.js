let arr = [
    [1, 2, 3, 4],
    [4, 5, 6 , 8],
    [8, 9, 10, 11],
    [8, 9, 15, 12]
]

// console.log(arr[1][2]);
// console.log(arr[2][2]);
// console.log(arr.length)
// task 2 -> print 1st row in form of array
// 
// console.log(arr[0].length);

// task 2 -> find on of items in the first , second and third row

// console.log(arr[0].length);
// console.log(arr[1].length);
// console.log(arr[2].length);
// console.log(arr[3].length);

// task 3 -> update

// arr[3][0] = 12
// console.log(arr);
//  print  All arr Element

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j <arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }


// taks 2 -> find the diagonal item of matrix

// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i][i]);
// }

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[0].length; j++){
//         if(i == j){
//             console.log(arr[i][j])
//         }
//     }
// }

//task 2 -> find the diagnal item bottom to top

// for(let i = arr.length-1; i >=0; i--){
//     console.log(arr[i][i]);
// }

// task 3 -> print the items of secondry digoanl 

// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[0].length; j++){
//         if(i + j == arr.length -1 ){
//             console.log(arr[i][j])
//         }
//     }
// }

// task -> print the sum of colums wise

// for(let i = 0; i < arr.length;i++){
//     let sum = 0
//     for(let j  = 0; j < arr[0].length; j++){
//         sum += arr[j][i]
//     }
//     console.log(sum);
// }


// task -> print the sum of row wise

// for(let i = 0; i < arr.length;i++){
//     let sum = 0
//     for(let j  = 0; j < arr[0].length; j++){
//         sum += arr[i][j]
//     }
//     console.log(sum);
// }


// hw. print upper right angle trangel


// task serch a target in matrix


//print column wise

// let mat = [
//     [1,2,3,4,5,9],
//     [4,5,6,7,6,8],
//     [8,9,10,11,7,0]
// ];

// for(let row = 0; row < mat[0].length; row++){
//     for(let col = 0; col < mat.length; col++){
//         console.log(mat[col][row]);
// }
// }


// matrix -> zig zag traversal

// let mat = [
//     [1,2,3,4,5,9],
//     [4,5,6,7,6,8],
//     [8,9,10,11,7,0]
// ];

// for(let row = 0; row < mat.length; row++){
    
//         if(row%2==0){
//             for(let col = 0; col < mat.length; col++){
//                 console.log(mat[row][col]);
//             }
//         }else{
//             for(let col = mat[row].length-1; col >=0; col --){
//                 console.log(mat[row][col]);
//             }
//         }
    
// }


// let mat = [
//     [1, 2, 3 ,4],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11]
// ];

// let max = -Infinity
// let max2 = -Infinity

// for(let row = 0; row < mat.length; row++){
//     for(let col = 0; col < mat[0].length; col++){
//         if(mat[row][col]>max){
//             max = mat[row][col]
//         }
//     }
// }
// console.log(max);



// let mat = [
//     [1, 2, 3 ,4],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11]
// ];


// let target = 5

// for(let row = 0; row < mat.length; row++){
//     for(let col = 0; col < mat.length; col++){
//         if(target == mat[row][col]){
//             console.log(row , col);
//         }
//     }
// }



// sprial order traversal 
let mat = [[1, 2, 3, 4, 5],
[6, 7, 8, 9, 10],
[11, 12, 13, 14],
[16, 17, 18, 19],
[21, 17, 18, 19]
]



// left to rigth 
// top to buttom rigth most row


  let top = 0;
  let bottom = mat.length - 1;
  let left = 0;
  let right = mat[0].length - 1;

  while(top <= bottom && left <= bottom){
     for(let col = left ; col <= right; col++){
        console.log(mat[top][col]);
     }
     top++

     for(let col = top; col >= bottom; col--){
        console.log(mat[right][col]);
     }
     right--

  }