const { error } = require("console");
const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

console.log(1);

fs.readFile("./contacts.js", "utf-8", (error, result) => {
  console.log("Async", result);
});

const result = fs.readFileSync("./contacts.js", "utf-8");
console.log("Sync", result);

console.log(2);
