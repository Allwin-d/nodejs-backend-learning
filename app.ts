import http, { IncomingMessage, ServerResponse } from "http";
// Here we are importing the built-in http module
// and importing the types for request and response objects

const checkingServer = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method);
  // From req.method we get the HTTP method like GET, POST, PUT, DELETE...

  console.log(req.headers);
  // Here we get the request header details

  console.log(req.socket);
  // Here we get socket/network related information

  res.end("Hello Allwin");
};

const server = http.createServer(checkingServer);
// Using the http module, we create a server with the createServer method

server.listen(3000, () => {
  // The server listens on port 3000.
  // Whenever a request comes to this port,
  // the callback function runs and sends a response.

  console.log("Server running on port 3000");
});
