const express = require("express");
const app = express();
const PORT = 7001;

app.get("/", (request, response) => {
  response.send({ msg: "Hello world" });
});

app.get("/greetings", (request, response) => {
  const { name } = request.query;
  const message = `Hello and welcome ${name || "there"}`;
  response.send({ msg: message });
});
app.get("/status", (request, response) => {
  response.send("This is plain text");
});
app.get("/html", (request, response) => {
  //   response.setHeader("content-type", "text/plain");
  response.send("<h1>This is HTML Page..!!</h1>");
});

app.listen(PORT, () => {
  `The Server is running in localhost:${PORT}`;
});
