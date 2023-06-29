//create a function that takes two input one as array and one as number to be found
//create a variable named count to return the no of occurence 
//initialise variable to -1 default value
//run a loop from start to end/array length of an array
//check each index value as it is same as number to be found by creating a condition
//if condition is true increase the count only when count is not -1
//else if count is -1 make count 1
//once the loop ends return the count

const arr = [1,2,3,4,1,2,3,4,5,6,7,8,1,2];

const occurenceNum=(arr,num)=>{
    let count = -1;
    if(Array.isArray(arr)==false||num===null||arr===null||num===undefined||arr===undefined){
        console.log("please enter a valid Ip num");
        return count;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            if(count==-1){
                count=1;
            }else{
                count++;
            }
            
        }
    }
    return count;

}



console.log(occurenceNum(arr,3));


//create a function that takes two input one as array and one as number to be found
//create a hashmap key becomes unique array element and value becomes occorence
//initialise all values of hashmap to -1 default value
//run a loop from start to end/array length of an array
//check each index value as it is same as number to be found by creating a condition
//if condition is true increase the count only when count is not -1
//else if count is -1 make count 1
//once the loop ends return the count


const occurenceEachNum=(arr)=>{
    // let count = -1;
    let map = new Map();
    if(Array.isArray(arr)==false||num===null||arr===null||num===undefined||arr===undefined){
        console.log("please enter a valid Ip num");
        return count;
    }
    for(let i=0;i<arr.length;i++){
        if(map.containsKey(arr[i])){

        }
    }
    return count;

}



console.log(occurenceEachNum(arr,3));