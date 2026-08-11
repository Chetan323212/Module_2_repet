

// check if array is palindrome or not 
// let arr = [1,2,1]

// function checkArray(arr,i,j){
//     if(arr[i]!= arr[j]){
//         return false
//     }

//     if(i>=j){
//         return true
//     }
    
//     return checkArray(arr, i+1,j-1)
// }

// console.log(checkArray(arr,0,arr.length-1));


// let org = {
//     id: 1,
//     name: "John Smith",
//     role: "CEO",
//     children: [
//       {
//         id: 2,
//         name: "Sarah Johnson",
//         role: "CTO",
//         children: [
//           {
//             id: 3,
//             name: "Michael Brown",
//             role: "Engineering Director"
//           },
//           {
//             id: 21,
//             name: "Ava Carter",
//             role: "QA Director",
//             children: [
//               {
//                 id: 22,
//                 name: "Logan Evans",
//                 role: "QA Manager",
//                 children: [
//                   { id: 23, name: "Ella Foster", role: "QA Engineer", children: [] },
//                   { id: 24, name: "Mason Reed", role: "Automation Tester", children: [] },
//                   { id: 25, name: "Harper Cook", role: "Performance Tester", children: [] }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//     ]
// }

// let 
// function findEmployander(org , i ,j){
//     if()

// }


// tree recursion 
// find nth term of fibonachi number 

// let number = 5
// let result = []
// function fibonachi(number, i){
//     if(i== number){
//         return 
//     }
//     fibonachi(i + 1)
//     let sum = (i-1)+(i+1)
//     result.push(sum)

// }

// console.log(fibonachi(number,0));


// function fibo(n){
//     if(n <= 2) return 1;
    

//     return fibo(n-1) + fibo(n-2)
// }

// console.log(fibo(5));

// function fibonacci(i) {
//     if (i <= 2) return 1;
    
//     return fibonacci(i - 1) + fibonacci(i - 2);
// }

// console.log(fibonacci(6)); // 8


// let a = 1234
// console.log(Math.floor(a%10));
// console.log(Math.floor(a/10));

// let sum = 0
// function digSum(a){
//     if(a <= 10){
//         return a
//     }

//     lastnum = Math.floor(a%10)
//     return sum = lastnum + digSum(Math.floor(a/10))
// }  
// console.log(digSum(a))

// let n = 8

// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i ==0){
//             return false
//         }
//     }
//     return true
// }

//  function primeNum(n){
//     if(n<=0){
//       return ;
//     }

//     primeNum(n-1)
//     console.log(n);
// }
// primeNum(n);


// function isPrime(n){
//     if(n<=1){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i ==0){
//             return false
//         }
//     }
//     return true
// }

// let n = 8
// function isprime(n,i){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n==i) return true;
//     if(n %i == 0) return false;

//     return isprime(n,i+1)
// }
//  function primeNum(n){
//     if(n<=0){
//       return ;
//     }

//     primeNum(n-1)
//     if(isprime(2,n)== true){
//     console.log(n);
//     }  
// }
// primeNum(n);


