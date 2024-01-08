function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("Middle");
  await delay(1000);
  console.log("End");
}

asyncFunction();
console.log("Async function executed.");

//o/p:
//start
//Async function executed.
//Middle
//End

// why Start is printed before Async function executed.
//explanation : when synchronous code comes in async function it executes it and once anysc is occured it comes out of the node and execute other synchroneous code then go back to event loop
