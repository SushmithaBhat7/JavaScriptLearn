//Create a variable to collect output variable
//run a loop from start to end of a string as string is an array
//check the index of each element in the new output array
//indexOf returns true if the element is present in the output array
//if indexOf returns false then add that charector[str[i]] in the new ouput array
//once the loop ends return the output array

const str = "Hello";

const removeDuplicate = (str) =>{
    let strOp = "";
    for(let i=0;i<str.length;i++){
        if(strOp.indexOf(str[i])<0){
            strOp += str[i];
        }
    }
    return strOp;
}
console.log(removeDuplicate(str));