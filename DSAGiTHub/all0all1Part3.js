let arr = [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1];

function zerosOnes(arr) {
   let arr1 = [];
    for(let i=0, j=0;i<arr.length;){
        if(arr[i]==0){
            arr1[j++] = arr.splice(i,1)[0];
        }else{
            i++;
        }
    }
    console.log({arr1,arr});
    
    return arr1.concat(arr);
}



console.log(zerosOnes(arr));