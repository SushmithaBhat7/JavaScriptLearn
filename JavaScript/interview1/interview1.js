let uname = "XYZ";

let objc2 = {
  age: 10,
};

let handleBind = function () {
  const objc = {
    uname: "sushmitha",
    lName: "A",
  };
};

handleBind.bind(objc2);
console.log(handleBind);
