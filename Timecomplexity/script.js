//Time complexity ->  How run time of an algrithm changes when input size grow
// o(log) -> when input is divied 
let n = 5
let count = 0
for(let i = 0; i < n; i++){
    for(let j = 0; j < i ; j++){
        count++
    }
}
console.log(count);

// what is the time complexity 
for(let i = 0; i < n; i++){
    for(let j = i ; j < i; j + i){
        console.log("hello")
    }
}
