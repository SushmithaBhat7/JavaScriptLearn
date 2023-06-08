const add = function (a,b) { /*Assigning a function to a variable not added function name*/ 
    return a+b;
}

const add2 = (c,d) =>{ /*Assigning a function to a "function" not added*/ 
    return c+d;
}

const add3 = (e,f) => e+f;/* As it is only one line inside function you can use arrow to return */

const add4 = (e,f) =>{ /* just add {} after => for multiple lines function*/
    console.log("Add");
    return e+f;
}

const add5 = (g=100,h=100)=>g+h; /*g & h value has default value 100 when nothing is passed from argument */


//If you dont return anything from the function then o/p is "undefined" => no return statement
// if you dont send any parameter to a function from function call "undefined" no argument


const sum = add(10,20);
console.log("add :",add(10,20));
console.log("add2 :",add2(10,20));
console.log("add3 :",add3(10,20));
console.log("add4 :",add4(10,20));
console.log("add5 :",add5(10,20));/*If we send some value in function call argument it takes argument value */
console.log("add5 :",add5());/*g & h value has default value 100 when nothing is passed from argument */