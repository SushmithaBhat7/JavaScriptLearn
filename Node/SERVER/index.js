const express = require("express");
const app = express();

app.get("/", (request, response) => {
  return response.send("Home Page");
});
app.get("/About", (request, response) => {
  return response.send(
    `Hello ${request.query.name} and your age is ${request.query.age}`
  );
});

app.listen(8000, () => {
  console.log("Server Started");
});
