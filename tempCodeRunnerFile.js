function transposing (arr) {
    let newX = arr.length,
        newY = arr[0].length,
        rez = [];

    for(let i = 0; i < newY; i++) {
        rez[i] = [];
        for(let j = 0 ; j < newX; j++) {
            rez[i][j] = arr[j][i];
        }
    }
    return rez;

}

console.log(transposing([[1,2,3],["a","b","c"]]));