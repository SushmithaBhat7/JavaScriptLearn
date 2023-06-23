const a = [1,2,3];

a.push(10);
a.push(11);
a.push(12);
console.log(a);

a.pop();
a.pop(2);//it does same as previous remove the last element
console.log(a);

a[2]=a.push(15);
let len = a.push(18);
console.log(a);
console.log(len);

let len2 = a.pop();
console.log(len2);

let arr=[1,2,3,4];

   arr[ arr.pop(2)]=arr.push(50);
    console.log(arr);