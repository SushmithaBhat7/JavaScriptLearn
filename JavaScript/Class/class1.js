class car {
  constructor(name, color, place) {
    this.uname = name;
    this.color = color;
    this.place = place;
  }
  get name() {
    return this.uname;
  }
  set name(name) {
    this.uname = name;
  }
}

const car1 = new car("BMW", "Dark Blue", "Germany");
console.log("name :", car1.name);
