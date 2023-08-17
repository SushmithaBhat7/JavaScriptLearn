const arr = [1,2,3,4,5,6,7];

function filterItem1 (arr){
    let arrNew = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3===0||arr[i]%5===0){
            arrNew.push(arr[i]);
        }
    }
    
    return arrNew;
}
console.log("filterItem1", filterItem1(arr));

const filterItem2 = arr.filter((item)=>{
    if(item%3===0 || item%5===0){
        return true ;
    } else{
        return false;
    }
});
console.log({filterItem2});

const filterItem3 = arr.filter((item)=>item%3===0 || item%5===0);
console.log({filterItem3});