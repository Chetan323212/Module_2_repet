// map 
//=> Store  a data in form of key nad value pair
//=> maintains inserction
//=> key can'nt duplicate
//=> key can'nt anything


// create map 
// let map = new Map();
// console.log(map)

//create a map with intial value

// let mp = new Map([
//     ["chetan",20],
//     ["pranjal",40],
//     ["Samay",80]
// ]);

//console.log();
// set get delete has clear

// =>set
// let mp = new Map()
// mp.set("Chetan",20)
// mp.set("vinay",40)

// console.log(mp);

// // => get 

// console.log(mp.get("Chetan"));
// console.log(mp.get("vinay"));


// //==> has 

// console.log(mp.has("Chetan")); // true
// console.log(mp.has("vinay")); // true


// //==> clear

// mp.clear() // clear a map 


// Task => add 5 person and their age

// let mp = new Map([
//     ["Cehtan",20],
//     ["Vinay",30],
//     ["Om",34],
//     ["Sujal",49],
//     ["Suraj",50]
// ])


// console.log(mp);

// // Task => convert map to array
// console.log(...mp);

// convert array in tap 

// let arr2 = [[1,2],[3,4],[5,6],[7,8]]
// let mpp = new Map(arr2)
// console.log(mpp); // T.c O(n) // S .c O(n)


//iteraction
// let map = new Map([[1,2],[3,4],[5,6],[7,8]])
// for(let prop of map){
//     console.log(prop , "approch 1");
// }

// for(let prop of map){
//    let key = prop[0]
//    let value = prop[1]
//    console.log(key , value ,"approch 2");
// }

// for(let prop of map){
//     let [key , value] = prop;
//     console.log(key, value, "approch 3");
// }

// // find all keys 

// console.log(map.keys()); //O(n)

// // find all valuse

// console.log(map.values()); //O(n)


// console.log(map.entries()); //O(n)

// //==> delete


// map.delete(1) // pass key for delete
// console.log(map);


// // update
// map.set()


// given a array find the frequency each item 

// let arr = [1,1,2,3,4,4]

// let mp = new Map()
// for(let key of arr){
//     if(mp.has(key)){
//         let count = mp.get(key);
//         mp.set(key,count+1)
//     }
//     else{
//         mp.set(key,1)
//     }
// }
// // T.c => O(n) S.c => O(n) 
// console.log(mp);

// H.w => what is the differnet between object and map and 


// task => group by city

let data = [
    {name: "Brijesh",city:"Pune"},
    {name: "Brijesh",city:"Delhi"},
    {name: "Abhishek",city:"Chandigarh"},
    {name: "Mahesh",city:"Mumbai"},
]

let result = new Map()

for(let keys of data){
    if(result.has(keys.name)){
        result.get(keys.name).push(keys.city)
    }
    else{
        result.set(keys.name,[keys.city])
    }
}

console.log(result);