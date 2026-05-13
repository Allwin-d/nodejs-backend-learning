import http, { IncomingMessage, ServerResponse } from "http";

const routingRequest = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html"); 
    // sets response type as HTML so browser renders it properly
    res.write(`<html>`);
    res.write(`<header>`);
    res.write(`<h1>Login</h1>`);
    res.write(`</header>`);
    res.write(`<body>`);
    res.write(`
      <form action="/submit" method="POST">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    `);
    res.end(); 
    // ends response and sends data to browser
  }

  if (url === "/submit") {
    res.setHeader("Content-Type", "text/html"); 
    // sets response type as HTML
    res.write(`Hello User`);
    res.end(); 
    // ends the response (server does NOT stop, only request ends)
  }
};

const server = http.createServer(routingRequest); 
// callback function executed for every incoming request

server.listen(3000, () =>
  console.log("Port 3000 running for the file routing Request"),
);
// starts server and listens on port 3000