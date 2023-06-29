//create a function that take a string IP and return a reversed OP
//create a output variable 
//convert the input string to UpperCase or lowercase
//run a loop from n-1 to 0
//add each array element from reverse order to new array element
//check a ternary condition input string and reversed string are same 
//if true return true else false


const str = "Madam"
const str2 = "Sush"

const palindromeString=(str)=>{
    let revStr = "";
    str = str.toUpperCase();
    for(let i= str.length-1;i>=0;i--){
        revStr += str[i];
    }
    return (str===revStr)?true : false;
}
// console.log(palindromeString(str));
// console.log(palindromeString(str2));

const palindromeString2=(str)=>{
    let revStr = "";
    str = str.toUpperCase();
    for(let i= str.length-1,j=0;i>j;i--,j++){
        if(str[i]!==str[j]){
            return false;
        }
    }
    return true;
}

// console.log(palindromeString2(str));
// console.log(palindromeString2(str2));


const str3 = "goog"

const palindromeString3=(str)=>{
    let revStr = "";
    str = str.toUpperCase();
    let j = str.length - 1;
    for(let i= 0;i<j/2;i++){
        if(str[i]!==str[j-i]){
            return false;
        }
    }
    return true;
}

console.log(palindromeString3(str));
console.log(palindromeString3(str2));
console.log(palindromeString3(str3));