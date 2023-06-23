//Check the input is null , undefined, or is it array
//return 0 on error, return sum value on valid array i/p
//create a diff variable to collect the sum
//create a for loop from 0th index to last index
//substract each element in diff variable in the loop
//when the function is called print the returned number


const arr = [1, 3, -4];

// Write a function to calcuate the sum of all element of an array

const arrSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let diff = 0;
        for(let i=0;i<input.length;i++){
            diff -= input[i];
        }
        return diff;

    }
}

console.log(arrSum(arr));