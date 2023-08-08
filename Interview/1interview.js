var reverse = function(x) {
    let outVar = 0;
    let rem = 0;
 
    while(x){
        rem = x%10;
        x = parseInt(x/10);
        console.log("x : ",x);
        outVar = outVar*(10)+rem;
        console.log(outVar);
        
    }
return outVar; 
};
console.log(reverse(5678));




