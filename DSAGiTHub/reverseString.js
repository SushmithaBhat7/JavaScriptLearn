//create a function that take a string IP and return a reversed OP
//create a output variable 
//run a loop from n-1 to 0
//add each array element from reverse order to new array element

const str = "Ankit";

const reverseString=(str)=>{
    let revStr = "";
    let len = str.length;
    for(let i = len-1;i>=0;i--){
        revStr += str[i]; 
    }
    return revStr
}

console.log(reverseString(str));