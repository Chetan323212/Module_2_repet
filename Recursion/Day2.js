// Return from the function call 
// find the sum of numbers (1 to n)
// let n = 5
// function check(n){
//     if(n<= 0){
//         return 0
//     }

//     return n + check(n-1)
// }

// console.log(check(n))


// write facotrial code using recursion 

// let n = 5
// function facotrial(n){
//     if(n ==2 ){
//         return 2
//     }

//     return n * facotrial(n-1)
// }
// console.log(facotrial(n));


// sum of digit of a number using recursion 
// let n = 123

// let lastnumber = Math.floor(n/10)
// console.log(lastnumber);
// console.log(n);

// function Digsum(n){
//     if(n <= 10){
//         return n
//     }
//     lastnumber = Math.floor(n%10)
//     return lastnumber + Digsum(Math.floor(n/10))
    
// }
// console.log(Digsum(n));
// h .w fibonacci number



// print the array element using recursion 
// let arr = [1,2,3,4,5,6]
// function printArr(arr,i){

//     if(i >= arr.length){
//         return
//     }
//     console.log(arr[i])
//     printArr(arr, i+1)
   
// }

// printArr(arr,0)


// // T.C = O(n)
// // P.C = O(n)

// let n = 1
// function print1(n){
//     console.log(`function ${1}`);
//     print2()
// }

// function print2(n){
//     console.log(`function ${2}`)
//     print3()
// }

// function print3(n){
//     console.log(`function ${3}`)
//     return 0 
// }

// console.log(print1(n));



// let arr = [1,2,3,4,5,6]

// let sum  = 0
// function sumOfarr(arr , i){
//     if(i >= arr.length){
//         return sum
//     }
   
//     return arr[i] + sumOfarr(arr,i+1)
//     //sum + arr[i]
// }

// console.log(sumOfarr(arr,0));


// H.w check maximum number of array 
// let arr = [1,2,3,4,55,6,7,8,9]
// let n = arr.length;
// let max = arr[0]
// function maxElement(arr , i ){
//     if(i >= arr.length){
//         return max
//     }
//     if(max < arr[i]) max = arr[i];
//     return arr[i] =  maxElement(arr,i+1)
// }
// console.log(maxElement(arr,0,n));
// console.log(arr);


// Optimiz code
// let arr = [1,2,3,4,55,6,7,8,9]
// function arrMax(arr, i ){
//     if(i >= arr.length-1) return arr[i];
//     let restArr = arrMax(arr, i+1)
//     return arr[i] > restArr? arr[i] : restArr
// }
// console.log(arrMax(arr,0));


// find the length of the string usign recursion 

// let str = "Checking"
// let arr = str.split("")
// let count = 0


// function checkstr(arr ,i){
//   if(i >= arr.length){
//     return 0
//   }

//   checkstr(arr,i+1)
//   count++
//   return count
// }

// console.log(checkstr(arr, 0));




// reverse a string using recursion

// let str = "ABCD"
// let n = str.length
// let reverse = []
// function reverseStr(str,i){
//     if(i >= n){
//         return 0
//     }
//      return reverse.push(reverseStr(str[i]))

// }

// console.log(reverseStr(str,0));



//First Occurence Index

// let arr = [5, 6, 4 ,6 ,1 ,2]

// let target = 2

// function findfirstIndex(arr,i,target){
//     if(i >= arr.length){
//         return
//     }
//     return target == arr[i] ? arr.indexOf(arr[i]) : findfirstIndex(arr, i+1,target)
// }

// console.log(findfirstIndex(arr,0,target));


