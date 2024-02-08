const http = require("http");
const fs = require("fs");

const myServer = http.createServer((reqest, result) => {
  //   console.log(reqest); => Gives an Object
  //   result.end("Welcome to NODE JS Friends");
  const log = `${Date.now()} ${reqest.url} New request \n`;
  fs.appendFile("log.txt", log, (error, data) => {
    switch (reqest.url) {
      case "/":
        result.end("Welcome to Home Page");
        break;
      case "/About":
        result.end("I'm sushmitha Bhat");
        break;
      default:
        result.end("404 Page not found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
