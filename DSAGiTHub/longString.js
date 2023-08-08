//create a function that takes string as input
//split the string for " "/space and take as array of strings
//create a variable called len = 0, outStr="" to update length, and its string
//run a loop from 0 to array length
//if arr[i].length > length, update len variable and update outStr to arr[i] 
//once you come out of loop return outStr

const input = "My name is ankit jain & i'm from morena morema";

function longStr(strIn){
    const arr = strIn.split(" ");
    let len = 0;
    let outStr = "";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>len){
            len = arr[i].length;
            outStr = arr[i];
        }
    }
    return outStr;

}

console.log(longStr(input));