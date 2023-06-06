const add = function (a,b) { /*Assigning a function to a variable not added function name*/ 
    return a+b;
}

const add2 = (c,d) =>{ /*Assigning a function to a "function" not added*/ 
    return c+d;
}

const add3 = (e,f) => a+b;/* As it is only one line inside function you can use arrow to return */

const add4 = (e,f) =>{ /* just add {} after => for multiple lines function*/
    console.log("Add");
    return a+b;
}


//If you dont return anything then o/p is "undefined"

const sum = add(10,20);
console.log("add :",add(10,20));
console.log("add2 :",add2(10,20));
console.log("add3 :",add3(10,20));
console.log("add4 :",add4(10,20));