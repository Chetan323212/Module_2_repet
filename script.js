n = 8
m = 8

// for(let i = 0; i < n ; i++){
//     let row = ""
//     if(i%2==0){
//         for(let j = 0 ; j < m; j++){
//             row+="*"
//         }
//     }
//     else{
//         for(let j = 0 ; j < m; j++){
//             row+="#"
//         }
//     }
//     console.log(row)
// }

// *#*#*#*#
// *#*#*#*#
// *#*#*#*#
// *#*#*#*#

for(let row = 0; row < n; row++){
    let str =""
    for(let col = 0; col < m; col++){
        if(col%2==0){
            str+="*"
        }
        else{
            str+="#"
        }
    }
console.log(str);
}

