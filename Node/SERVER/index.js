const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((reqest, result) => {
  //   console.log(reqest); => Gives an Object
  //   result.end("Welcome to NODE JS Friends");
  if (reqest.url === "/favicon.ico") return result.end();
  const myUrl = url.parse(reqest.url, true);
  console.log(myUrl);
  const log = `${Date.now()} ${reqest.url} New request \n`;
  fs.appendFile("log.txt", log, (error, data) => {
    switch (myUrl.pathname) {
      case "/":
        result.end("Welcome to Home Page");
        break;
      case "/About":
        result.end("I'm sushmitha Bhat");
        break;
      case "/Search":
        const search = myUrl.query.search_query;
        result.end("here is your results " + search);
        break;
      default:
        result.end("404 Page not found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
