import http, { IncomingMessage, ServerResponse } from "http";

const user = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url?.split("?")[0]; // trailing "?" remove pannurom, eg: /users? → /users
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.write(`<html><body>`);
    res.write(`<header><h1>Welcome User</h1></header>`);
    res.write(`<p>Good to see you guys</p>`);
    res.write(`
      <form action="/users" method="GET">
        <button type="submit">Next</button>
      </form>
    `);
    res.write(`</body></html>`);
    return res.end();
  } else if (url === "/users" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.write(`<html><body>`);
    res.write(`<header><h1>User's List</h1></header>`);
    res.write(`
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    `);
    res.write(`
      <form action="/create-user" method="POST">
        <input type="text" name="username" />  <!-- name attribute illama browser form data anuppaathu -->
        <button type="submit">Create User</button>
      </form>
    `);
    res.write(`</body></html>`);
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const body: Buffer[] = []; // network la varum binary chunks-ai store panna Buffer array

    req.on("data", (chunk: Buffer) => {
      body.push(chunk); // vantha ovvoru chunk-aiyum body array la push pannurom
    });

    req.on("end", () => {
      // ellaa chunks-um vanduchu — ippo process pannalam
      const parsedBody = Buffer.concat(body).toString(); // ellaa chunks-aiyum join panni, binary Buffer-ai readable string-aa convert pannurom
      console.log("Parsed Data : ", parsedBody); // eg: username=john
      res.statusCode = 200;
      res.write(`<html><h1>Created ${parsedBody}</h1></html>`);
      res.end();
    });
  } else {
    // mel ulla eந்த route-um match aagalanna 404 return pannurom
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>404 - Page Not Found</h1></body></html>`);
  }
};

const server = http.createServer(user); // ovvoru incoming request-kuم user callback-ai trigger panna server create pannurom

server.listen(3000, () => { // port 3000-la incoming requests-ai listen pannurom
  console.log("Server running for the User");
});