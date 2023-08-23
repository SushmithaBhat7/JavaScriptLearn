

const arr = [1,2,3,4,5,6];

//old way 

let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}

console.log({sum});

//reduce way

const reduceElem = arr.reduce((accumulator,currentValue,index,arr)=>{
    accumulator += currentValue; 
    return accumulator;
},0);

console.log({reduceElem});

// New way
const result = arr.reduce((previousVal, currentVal, index, arrElem) => {
    previousVal += currentVal; // 0+1 -> 1
    return previousVal;
  }, 0);
  
  const result2 = arr.reduce((previousVal, currentVal, index, arrElem) => {
    previousVal += currentVal; // 0+1 -> 1
    return previousVal;
  });
  
  const result3 = arr.reduce(
    (previousVal, currentVal, index, arrElem) => (previousVal += currentVal)
  );
  
  console.log({ result });