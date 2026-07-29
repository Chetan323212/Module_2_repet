// 1. Create a Map with three key–value pairs (any key types) and log its size using map.size. 

// let mp = new Map()
// mp.set("name","chetan")
// mp.set(true,"yes")
// mp.set("obj",{name:"chetan",age:21})

// console.log(mp); 
// console.log(mp.size); // size 3

//2. Given a Map of student names to marks, use get() to retrieve the marks of a specific student.

// let mp = new  Map()
// mp.set("cehtan",89)
// mp.set("sujal",98)
// mp.set("vinay",90)
// mp.set("Om", 78)

// console.log(mp.get("vinay"));


// //3. Create a Set of colors and use has() to check whether "blue" is present. 

// let set = new Set()

// set.add("Red")
// set.add("Blue")
// set.add("Yellow")

// console.log(set.has("Blue")); // true

// 4. Given an array with duplicate numbers, convert it into a Set to remove the duplicates, then log the result. 

// let arr = [1,2,3,3,4,4,5,6,6,7,7,7,7,]

// let set = new Set()
// for(let i = 0; i < arr.length; i++){
//     set.add(arr[i])
// }
// console.log(set)



//5. Iterate over a Map of fruit → price using forEach() and print each pair as "fruit costs price".

// let mp = new Map()

// mp.set("Apple",200)
// mp.set("Banana",100)
// mp.set("Cikhu",150)
// mp.set("Mango",100)
// mp.set("Kive",200)


// mp.forEach((keys, values)=> {
//     console.log(values , keys)
// })

// 6. Add three elements to a Set, then delete one using delete() and log the Set before and after.

// let set = new Set()

// set.add(1)
// set.add(2)
// set.add(3)
// set.add(4)
// set.add(5)

// console.log(set) //Set(5) { 1, 2, 3, 4, 5 }
// set.delete(3)
// console.log(set); // Set(4) { 1, 2, 4, 5 }

// 7. Given a Map, convert its keys into a plain array using Array.from(map.keys()). 

// let mp = new Map()

// mp.set("Apple",200)
// mp.set("Banana",100)
// mp.set("Cikhu",150)
// mp.set("Mango",100)
// mp.set("Kive",200)

// let arr = Array.from(mp.keys())
// console.log(arr);


//MEDIUM  (Q8 – Q14) 

// 8. Write a function that takes a string and returns a Map of each character to how many times it occurs.


let str = "Hello"
let mp = new Map()
function CharCount(str){
    let arr = Array.from(str)
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if()
    }
    
}
console.log(CharCount(str));




