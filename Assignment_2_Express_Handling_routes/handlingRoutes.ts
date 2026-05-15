import express from "express";
import type { Response, Request } from "express";

const PORT = 3000;

const app = express();

app.use("/users", (req: Request, res: Response, next) => {
  //express js use pannumbothu (content type explicit uh kudukanum nu avasiyam ella)
  res.send("<h1><ul><li>User 1 </li><li>User 2</li><li>User 3</li></ul></h1>");
});

app.use("/", (req: Request, res: Response, next) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log("Server running succesfully for Handling Routes Assignment");
});
