
const arr = [1,2,3,4,5];

const arrV1 =(arr)=>{
    let arrNew = [];
    for(let i=0;i<arr.length;i++){
        arrNew.push(arr[i]+1);
    }
}

console.log(arrV1(arr));

const arrMap1 = arr.map((item) => item+1);
console.log(arrMap1);

