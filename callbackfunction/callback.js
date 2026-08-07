//  function that is passed as an argument to another function is known is 
// callback function 



// Higher Order function that take
//  another function  as an argument or return a function is called higher order function 

// function email(){
//     console.log("email delivered  successfuly");
// }

// function delivered(email){
//     email();
// }

// delivered(email)

// Predict the output

// function order(){
//     function deliver(){
//         console.log("Item is deliver");
//         return 2
//     }

//     return deliver()
// }

// console.log(order());


// function order(){
//     return function deliver(){
//         console.log("hello");
//     }
// }

// console.log(typeof order()); // type function 
// let dl = order()
// console.log(dl); //[Function: deliver]
// console.log(dl()); // Hello undefine


// In a company their are 3 type of employees developers, tester and manager
// terster got 5% incerment and developer got 10% increment , manager got 10% increment 
// create tree function 
// developerIncrement , testerIncrement and managerIncrement
// and create a function totalSalary that will take the function based on employee 
// and base salary and will return total salary 




// function developerIncrement(baseSalary){
//     return baseSalary*0.05;
    
// }

// function testerIncrement(){

// }

// function managerIncrement(){

// }


// function totalSalary(callback,baseSalary){
//     let totalsalary = baseSalary + callback(baseSalary);
//     return totalSalary()
// }


// console.log(totalSalary(developerIncrement,1000));


// closure-->
// closur is function that is bundled togather with its lexical env


//  - Innder function has access fo variable
// function counter(){
//     let a = 0;
//     return function incerment(){
//         a++
//         console.log(a)
//     }
// }

// let count = counter();
// count()
// count()
// count()


// predict the output 
function counter(){
    let a = 0;
    return function incerment(){
        a++
        console.log(a)
    }
}

let count = counter();
count()
count()
count()




