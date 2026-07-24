
// task 1 :-> create a set and store 5 to 9 

// let sat = new Set([5,6,7,8,9])
// console.log(sat);

// let st = new Set([5,6,7,8,9,9])
// console.log(st); // only save unique item Set(5) { 5, 6, 7, 8, 9 }
// T.C 


// let st = new Set()
// // add 
// st.add(1) // only add one item at a time 
// st.add(2) 
// console.log(st);

// delete

// console.log(st.delete(1)); // return true and delete
// console.log(st); // print 

// let autoset = new Set()
// for(let i = 1 ;i <= 5; i++){
//     autoset.add(i)
// }
// console.log(autoset);


// has => check if can item exist in the set or not
// it will retuen true if present atherwise false

// console.log(st.has(1)); // true
// console.log(st.has(3)); // false becouse 3 is bot present in set

// clear

// st.clear() // it's remove all item in the set 
// console.log(st);


// size is a property
// console.log(st.size);


// st.add(1)
// st.add(2)
// st.add(3)
// st.add(4)

// iterate
// for(let value of st){
//     console.log(value);
// }

// convert set in to arr
// let arr = [...st]
// console.log(arr);


// convert the arr to set
// let arr1 = [1,2,3,4,5,6,7,8,9]
// let sat = new Set(arr1)
// console.log(sat);

// given an array print it's unique values 
let arr = [1,1,2,3,0,5];

let ans = new Set(arr)
console.log(...ans);


// given an array find if its contan dublicat item or not
let arr3 = [1,2,3,4,5]
let result = new Set(arr3) // time complexity of set => O(n)
if(arr3.length == result.size){
    console.log(false);
}
else{
    console.log(true);
}

// Different Operation on array

let arr = [1,2,3,4,5,6]
console.log(arr[1]); //  T.C => O(1)
console.log(arr.length); // T.C => O(1)
console.log();

//push -> O(1)
//Pop -> O(1)
//shift -> O(n)
//unshift -> O(n)

//search item 
// array sorted => binary search O(log2(n))
// array unsorted => liner search O(n)

//slice -> bast case ->o(2) wist case-> O(n)
//splice -> bast case ->o(2) wist case-> O(n)
// reverse -> O(n)
// Sort -> O(nlogn)








