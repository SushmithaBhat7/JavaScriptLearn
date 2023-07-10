//create an empty object
//run a loop from 0 to arr.length
//check for object.getownproperty(arr[i])
//if true update value
//else add value 1
//return the object



const names = [
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket",
  ];
  
  const countNames = (input) => {
    // Write your code here
    
    const objcCount = {};
    for(let i = 0;i<input.length;i++){
        input[i] = input[i].toLowerCase();
        if(objcCount.hasOwnProperty(input[i])){
            objcCount[input[i]]++;
        }else{
            objcCount[input[i]] = 1;
        }
    }
    return objcCount;
  };
  
  console.log(countNames(names));