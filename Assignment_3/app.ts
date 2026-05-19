import express from "express";
import userData from "./routes/userList";
import playerList from "./routes/playersList";
import bodyParser from "body-parser";

const app = express(); //this is how we create the express application

app.use("/users", userData); // for the users endpoint
app.use("/players", playerList);  //for the players endpoint

app.listen(3000, () => {
  console.log("Server Running for Assignment 3 ");
});
