const arr = [1,2,3,4,5,6];

const mulByTwo = arr.map((currentItem,index,arr) =>{
    console.log({currentItem,index,arr})
});

console.log({mulByTwo});