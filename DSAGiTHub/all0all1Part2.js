let arr = [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1];

function zerosOnes(arr) {
    let i = 0;
    let j = arr.length - 1;
    let hold = 0;

    while (i < j) {
        if (arr[i] === 0) {
            i++;
        } else if (arr[j] === 1) {
            j--;
        } else {
            // Swap arr[i] and arr[j]
           [arr[i], arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    
    return arr;
}



console.log(zerosOnes(arr));