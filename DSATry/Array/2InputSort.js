// Take input1 and input2 as number array in function call

function merge2Array(arr1,arr2){
    if((arr1&&arr2===null) || (arr1&&arr2===undefined) || (isArray(arr1)&&isArray(arr2)== false)){
        console.log("Please enter valid array Input");
    }else{
        
           let len1 = arr1.length;
           let len2 = arr2.length;
        
        for(let i=0;i<len1+len2;i++){
            
        }
    }

}




const inputArr1 = [1,2,3,4,5,1];
const inputArr2 = [1,2,3,4,5,1,7,6,4,3,8];

merge2Array(inputArr1,inputArr2)