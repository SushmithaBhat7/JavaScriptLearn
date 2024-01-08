const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Pass");
  }, 4000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 Fail");
    //resolve("p2 Pass");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Pass");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));
