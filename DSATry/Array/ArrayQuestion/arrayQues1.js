//Check the input is null , undefined, or is it array
//return 0 on error, return sum value on valid array i/p
//create a sum variable to collect the sum
//create a for loop from 0th index to last index
//add each element in sum variable in the loop
//when the function is called print the returned number


const arr = [1,3,4,5,6,7,8,9,9];

// Write a function to calcuate the sum of all element of an array

const arrSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let sum = 0;
        for(let i=0;i<input.length;i++){
            sum += input[i];
        }
        return sum;

    }
}

console.log(arrSum(arr));