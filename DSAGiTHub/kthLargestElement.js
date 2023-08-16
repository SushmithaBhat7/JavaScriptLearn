nums = [-1,-1];
var findKthLargest = function(nums, k) {
    let outArr = [];
    let x = -10;
    let max = x**4, ind=0;
    for(let j=0;j<k;j++){
         max = 0,ind=0;
         for(let i=0;i<nums.length;i++){
             if(nums[i]>max){
                 max = nums[i];
                 ind =i;
             }
        }
        nums.splice(ind,1);
    }
   return max;
    
};
console.log(findKthLargest());