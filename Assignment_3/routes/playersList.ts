import express from "express";
import { rootDir } from "../utils/pathUtils";
import path from "path"; //here we are importing path , so that it provides a join method , inside that we specify the path for the file that we send as a response

const router = express.Router();  //ithu mini route handler uh create pannuthu ..

router.get("/players-list", (req, res) => {
  res.sendFile(path.join(rootDir, "Frontend", "dist", "index.html")); //this is how we send file as a response
});

router.get("/", (req, res) => {
  res.send("<h1>This is for the /players route</h1>");
});

export default router;
