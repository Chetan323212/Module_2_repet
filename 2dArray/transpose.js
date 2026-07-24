let mat = [
    [1,2,3,4],
    [4,8,,9,10],
    [11,12,13,14]
]
// given a square matrix. find it's transpose

for(let row = 0; row < mat.length - 1; row++){
    let newarr = []
    for(let col = 0; col < mat[row].length; col++){
        newarr[row][col] = mat[col][row]
    }
    console.log(newarr)
}

// rotate matrix by 90 degree clockwise and anticlockwise

// substring and subarray
//-> substring