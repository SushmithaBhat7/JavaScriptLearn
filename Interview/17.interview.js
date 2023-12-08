let uname = "sushmitha";

const objc = {
  uname: "palak",
  funName: function () {
    console.log(this.uname);
  },
};

console.log(objc.funName());

var unameee = "sushmitha";

const objccc = {
  uname: "palak",
  funName: () => {
    console.log(this.unameee);
    // return this.uname;
  },
};

let user = objccc.funName;

console.log(user());
