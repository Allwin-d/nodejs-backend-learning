import express from "express";
import userData from "./routes/userList";
import playerList from "./routes/playersList";
import bodyParser from "body-parser";

const app = express();

app.use("/user", userData);
app.use("/player", playerList);

app.listen(3000, () => {
  console.log("Server Running");
});
