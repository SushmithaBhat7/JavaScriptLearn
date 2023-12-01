//Find factorial of user input number

//iterate through all numbers from the given to 1
//multiply all numbers and retrun

let input = 5;

const factorialResult = (num) => {
  let out = 1;
  for (let i = num; i > 0; i--) {
    out *= i;
  }
  return out;
};

console.log("factorialResult : ", factorialResult(input));
