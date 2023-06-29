//create a function takes 2 input
//check if str1.length and str1.length is equal
//if not equal return false
//convert both string to uppercase
//sort both strings 
//if they are euqal then a anagram

let str1 = "listen";
let str2 = "silent";

const anagram =(str1,str2)=>{

    let n1 = str1.length;
    let n2 = str2.length;

    if(n1!=n2){
        return false;
    }
    
    str1 = str1.split('');
    str2 = str2.split('');
    
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if(str1[i]!==str2[j]){
                str2[i]=0;
            }
        }
        
    }
    for(let i=0;i<n1;i++){
        if(str2[i]!=0){
            return false;
        }

    }

    return true;

}

console.log(anagram(str1,str2));
