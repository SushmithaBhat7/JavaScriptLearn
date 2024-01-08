console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Inside Promise.then() callback");
});

console.log("End");

//o/p :
//Start
//End
//Inside Promise.then() callback
//Inside setTimeout callback
