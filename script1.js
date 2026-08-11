
// function fibo(n){
//     if(n==1) return 1;
//     if(n==2) return 1;

//     return fibo(n-1) + fibo(n-2)
// }

// console.log(fibo(5));


// let n = 2
// let count = 0
// function NthEvenFibonacci(n,i) {
//   if(i == 1) return 1
//   if(i == 2)  
//   if(i %2==0){
//     count++
//   }  
//   if(count == n){
//     return i
//   }
//   return NthEvenFibonacci(i-1) + NthEvenFibonacci(i + 1)
// }

// console.log(NthEvenFibonacci(n,2))

// print the fibonachi number form i to n 

let n = 0;
let count = 0
let target = 1


function Printfibo(n){
  if(n <= 2) return 1
  
  return Printfibo(n-1) + Printfibo(n-2)  // it's like 1 + 1 =2 ; 1 + 2 = 3 ;and so on
}

