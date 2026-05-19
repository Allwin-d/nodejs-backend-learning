import express from "express";
import userData from "./routes/userList";
import bodyParser from "body-parser";

const app = express();



app.use("/user", userData);

app.listen(3000, () => {
  console.log("Server Running");
});
