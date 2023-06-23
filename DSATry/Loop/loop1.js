



function reversePyramid(num){
    let len = num/2;
for(let i=1;i<=len;i++){
    let head = "";
    for(var j=1;j<i;j++){
        head += " " + " ";
    }
    let middle ="";
    for(let k=i;k<(num-i+1);k++){
        middle += 1 + " ";
    }
    console.log(head+middle);
}
}

// function pyramid(num){
//     let len = num/2;
//     for(let i=1;i<len;i++){
//         let head = "";
//         for(let j=i)

//     }
// }


/*  12345
    1234
    123
    12
    1
 */

    // for (let i = 1; i <= rows; i++) {
//     stars += '*';
//     console.log(stars);
// }


function reverseCount(num){
    
    for(let i=0;i<=num;i++){
        let display = "";
        for(let j=1;j<=num-i;j++){
            display += j; 
        }
        console.log(display);
    }
    

}




//reversePyramid(10);
reverseCount(5);