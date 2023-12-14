let obj = {
  fname: "yash",
  lname: "Shukla",
};

let obj2 = {
  fname: "Ram",
  lname: "laal",
};

let getfulame = function (age, number, laptop) {
  return (
    this.fname + " " + this.lname + " " + age + " " + number + " " + laptop
  );
};

// call method
getfulame.call(obj, 52, "16654", "dell");

// apply - the diff btw call and apply is the way we pass the arrguments ( in apply we  pas array )

getfulame.apply(obj2, [25, "8745", "Hp"]);

// bind--  so in bind tghe method it returns the copy o that method

let store = getfulame.bind(obj, 74, "7745", "Acer");

console.log(store);
