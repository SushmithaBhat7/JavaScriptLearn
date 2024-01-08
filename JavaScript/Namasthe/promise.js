const promiseCall = () => {
  let pr = new Promise((resolve, reject) => {
    let id = 1234;
    if (!id) {
      resolve("Promise Success");
    } else {
      reject("Promise Failed");
    }
  });
  return pr;
};

// const data = promiseCall();
promiseCall()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
