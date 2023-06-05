let a = 10;
let b = 10;
let c = "10";
let d = new Map();
let e = true;
let f = true;



// != -> Data only
let g = 10;
let h = "20";
let i = "10";
console.log("Double Not Equal : ", g != h);
console.log("Double Not Equal : ", g != i);

// !== -> Data + Data Type

console.log("Tripple Not Equal : ", g !== h);
console.log("Tripple Not Equal : ", g !== i);

// == -> Checks for data only
console.log("Double = check", a == b, typeof a, typeof b);
console.log("Double = check v2", a == c, typeof a, typeof c);
console.log("Double bool", e+f);

// === -> Checks for data + Data type
console.log("Tripple = check", a === b, typeof a, typeof b);
console.log("Tripple = check v2", a === c, typeof a, typeof c);

console.log("String of a number * int","2"*2);

console.log(true== (65!="A"));
console.log(true== 65!="A"); //Right to left so != this ans comes and then ==

// console.log(true== 65!= A);

 //This gives error there is no variable called A is not defined

 //Ternary operator
 console.log((1>10)?'true':'false');
 console.log(1>10?'true':'false'); //In single line statement no need paranthesis
 console.log((1>10)?'true':(11>10)?'true':'false');


 const userAge = 17;
const userCity = "Bihar";
const isActive = true;

const resultV3 =
  userAge > 18
    ? userCity === "Bihar"
      ? "You can vote"
      : "You can't vote"
    : "You can't vote";

console.log("V3:", resultV3);

const resultV4 =
  userAge > 18 && userCity === "Bihar" ? "You can Vote" : "You can't vote";


console.log("V4:", resultV4);

//How does this work
if (userAge > 18) {
  if (userCity === "Bihar") {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }
} else {
  console.log("You can't vote");
}
