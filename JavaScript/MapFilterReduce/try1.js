

function readyToVote (age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

console.log("readyToVote(21)",readyToVote(21));

console.log("readyToVote(16)",readyToVote(16));