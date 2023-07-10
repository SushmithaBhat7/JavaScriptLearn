//create a function that takes array as input
//Create an empty object named occurence
//run a loop from 0 to array length => i 0 to arr.length
//check occurence.hasOwnProperty(arr[i])
//if not found add the key value to one => occurence.key = 1
//if found update the value of the key =>occurence.key = value ++;
//once the loop is completed return the object occurence

const arr = [1,2,3,4,1,3,4,6,1,5];

function occuranceObject(arr){
    const occurence = {}
    for(let i = 0;i<arr.length;i++){
        if(occurence.hasOwnProperty(arr[i])){
            occurence[arr[i]]++;      
        }else{
            occurence[arr[i]] = 1;
        }
    }
    return occurence;
}

console.log(occuranceObject(arr));