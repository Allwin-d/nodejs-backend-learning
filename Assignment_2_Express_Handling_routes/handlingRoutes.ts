import express from "express";
import type { Response, Request } from "express";

//express JS executes from top to bottom
const PORT = 3000; //this is the port we are running

const app = express(); //here we are creating a express object , which provides multiple helpful methods

app.use("/users", (req: Request, res: Response, next) => {
  //express js use pannumbothu (content type explicit uh kudukanum nu avasiyam ella) like (res.setHeader("Content-Type","text/html"))
  res.send("<h1><ul><li>User 1 </li><li>User 2</li><li>User 3</li></ul></h1>");
});

app.use("/", (req: Request, res: Response, next) => {
  res.send("<h1>Hello</h1>");
  //and also express js la res.end() kudukanum nu avasiyam ella , because res.send() kudukumbodhe res.end() internally run aagidum
});

app.listen(PORT, () => {
  console.log("Server running succesfully for Handling Routes Assignment");
});
