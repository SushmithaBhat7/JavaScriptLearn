//Check the input is null , undefined, or is it array
//return 0 on error, return sum value on valid array i/p
//create a sum variable to collect the sum
//create a for loop from 0th index to last index
//add each element in sum variable in the loop which statisfy even divisible by 2, odd not divisible by 2
//when the function is called print the returned number


const arr = [5, -3, 10, -8, 2, -7, 15, -1, 6, -4, 12, -9, 3, -6, 11, -2, 8, -5, 14, -10];

// Write a function to calcuate the sum of all element of an array

const arrEvenSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let sum = 0;
        for(let i=0;i<input.length;i++){
            if(input[i]%2==0){
                sum += input[i];
            }
        }
        return sum;
    }
}

const arrOddSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let sum = 0;
        for(let i=0;i<input.length;i++){
            if(input[i]%2!=0){
                sum += input[i];
            }
        }
        return sum;
    }
}

const arrPositiveSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let sum = 0;
        for(let i=0;i<input.length;i++){
            if(input[i]>=0){
                sum += input[i];
            }
        }
        return sum;
    }
}
const arr1 = [1,2,3,-7,4, -7]

const arrNegativeSum = (input)=>{
    if(input==null||input==undefined || Array.isArray(arr)==false){
        console.log("Please enter a valid input Array");
        return 0;
    }else{
        let sum = 0;
        for(let i=0;i<input.length;i++){
            if(input[i]<0){
                if(sum ===0){
                sum =input[i]
                }else{
                sum -= input[i]
                }
                }
        }
        return sum;
        
    }
}

console.log(arrEvenSum(arr));
console.log(arrOddSum(arr));
console.log(arrPositiveSum(arr));
console.log(arrNegativeSum(arr1));