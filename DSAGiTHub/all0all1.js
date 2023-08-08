let arr = [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0];

function zerosOnes(arr){
    let i = 0;
    let j = arr.length-1;
    let hold = 0;
    while(i<j){
        if(arr[i]>arr[j]){
            hold = arr[i];
            arr[i] = arr[j];
            arr[j] = hold;
            i++;
            j--;
        }else if(arr[i]<arr[j]){
            i++;
            j--;
        }else if(arr[i]==arr[j]&&arr[i]==0){
            hold = arr[i+1];
            arr[i+1] = arr[j];
            arr[j] = hold;
            i++;
        }else{
            hold = arr[i+1];
            arr[i+1] = arr[j-1];
            arr[j-1] = hold;
            j--;

        }
        console.log({arr,i,j});
    }
return arr;
}

console.log(zerosOnes(arr));