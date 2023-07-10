
 
//create a function that takes array as input
//Create an empty object named occurence
//run a loop from 0 to array length => i 0 to arr.length
//check occurence.hasOwnProperty(arr[i])
//if not found add the key value to one => occurence.key = 1
//if found update the value of the key =>occurence.key = value ++;
//As sum is k, check if nums[i] - k = diff is present 
//if diff is present check if the frequence /value of that diff key is not one 





const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];

/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */
const findTwoElementPair = (arr, k) => {
  // Write code here
  const occurence = {}
  let count = 0;
  for(let i = 0;i<arr.length;i++){
      if(occurence.hasOwnProperty(arr[i])){
          occurence[arr[i]]++;   

      }else{
          occurence[arr[i]] = 1;
          count++;
      }
  }

  for(let i=0;i<arr.length;i++){
    let diff = k - arr[i];
    if(occurence.hasOwnProperty(diff)){
      if(diff==arr[i]&&occurence[arr[i]]>1){
          
      }else if(diff!=arr[i]){

      }

    }

  }
  return occurence;

};

console.log(findTwoElementPair(nums, 7));
