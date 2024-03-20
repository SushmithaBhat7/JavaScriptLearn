const http = require("http");
const URL = require("url");
const PORT = 8000;
const handleCreateServer = (request, response) => {
  const { url } = request;
  const parsedURL = URL.parse(url, true);
  const { pathname, query } = parsedURL;
  console.log({ pathname, query });
  console.log({ parsedURL });

  if (pathname === "/") {
    return response.end("Basic Path");
  } else if (pathname === "/greetings") {
    return response.end(`Hello world ${query.name ? query.name : "there"}`);
  }
};
const server = http.createServer(handleCreateServer);

server.listen(PORT, () => {
  console.log("Server Started");
});
