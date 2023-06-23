
function loop(num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=1;i<num;i++){
            console.log(i);

        }
    }

}
function loopRev(num){

    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=num;i>0;i--){
            console.log(i);

        }
    }

}

function loopOdd(num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=1;i<num;i=i+2){
            console.log(i);

        }
    }

}

function loopEven(num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=1;i<num;i++){
            if(i%2==0){
                console.log(i);
            }    
        }
    }
}

function starTreeDown (num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=num;i>0;i--){
            var s = "";

            for(let j=1;j<=i;j++){
                s += "*"+ " "
            }
            console.log(s + "\n");

        }  
    }
}

// for (let i = 1; i <= rows; i++) {
//     stars += '*';
//     console.log(stars);
// }

function starTreeUP (num){
    if(num<=0 || num===null || num === undefined ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=1;i<=num;i++){
            var s = "";

            for(let j=1;j<=i;j++){
                s += "*"+ " "
            }
            console.log(s + "\n");

        }  
    }
}


function startSquare(num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=1;i<=num;i++){
            var s = "";

            for(let j=1;j<=num;j++){
                s += "*"+ " "
            }
            console.log(s + "\n");

        }  
    }
}


function numberTreeDown (num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        var k =0;
        for(let i=num;i>0;i--){
            var s = "";
            k++;
            for(let j=1;j<=i;j++){
                s += k + " "
            }
            console.log(s + "\n");

        }  
    }
}

function numberSeriesTreeDown (num){
    if(num<=0 || num===null ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        for(let i=num;i>0;i--){
            var s = "";

            for(let j=num-i+1;j<=num;j++){
                s += j + " "
            }
            console.log(s + "\n");

        }  
    }
}

function forwardBackward2(num){
    if(num<=0 || num===null || num===undefined ||isNaN(Number(num))){
        console.log("Please enter a valid number");
    }else{
        let prevM = 0;
        let j = 0;
        if(num%2==0){
            j=(num/2);
        }else{
            j=(num/2)+1;
        }
        for(let m=1;m<j;m++){
            var s ="";
            
            for(let i= prevM+m ;i<= num ;i++){
              s += i+" ";
            }
            console.log(s+"\n");
            var s ="";
            num--;
            
            for(let i=num ;i>=m*2 ;i--){
                s += i+" ";
            }
            console.log(s+"\n");

            prevM = m;
            num--;
            
        }
    }
}



// loop("Sush");
// loop("10");

// loop(10);
//loopRev(5);
//loopEven(10);
// loopOdd(10);

//starTreeDown(10);
// starTreeUP(10);
//startSquare(10);

//numberTreeDown(10);

//numberSeriesTreeDown(10);

// forwardBackward2(9);

starTreeUP(5);



