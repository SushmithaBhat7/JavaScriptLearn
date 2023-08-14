let arr = [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1];

function zerosOnes(arr) {
   
    for(let i=0, j=0;i<arr.length;i++){
        if(arr[i]==0){
            arr.unshift(arr.splice(i,1)[0]);
        }
    }
    
    return arr;
}

console.log(zerosOnes(arr));