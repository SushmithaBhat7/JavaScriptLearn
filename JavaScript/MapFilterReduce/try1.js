

function readyToVote (age){
    // if(age>18){
    //     return true;
    // }else{
    //     return false;
    // }

    return age>18;
}

const validateAgeToVote = (age)=>age>18;

console.log("readyToVote(21)",readyToVote(21));

console.log("readyToVote(16)",readyToVote(16));

console.log("validateAgeToVote(21)",validateAgeToVote(21));

console.log("validateAgeToVote(16)",validateAgeToVote(16));