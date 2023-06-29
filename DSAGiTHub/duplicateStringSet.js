//create a funtion and output variable to return the answer
//create a new set
//run a loop from start to end of string
//set adds only once, if it adds the variable in set that means it is not repeated
//add the set condition to check true or false
//if set condition is true add the variable to the output variable
//once the loop ends return the output variable


const str = "Hello";

const removeDuplicateSet=(str)=>{
    let strOut = "";
    let s = new Set ();
    for(let i=0;i<str.length;i++){
        if(s.add(str[i])){
            strOut += str[i];
        }
    }
    return strOut;
}

console.log(removeDuplicateSet(str));