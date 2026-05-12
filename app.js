const http = require("http"); //here we are importing the http file module

const checkingServer = (req, res) => { //the callback function 
  console.log("Method : ", req.method);
  console.log("Headers:", req.headers);
  res.end("hello Allwin");
};

const server = http.createServer(checkingServer); //here the http module provide method for creating server

server.listen(3000, () => {
  console.log("Server running on Port 3000");
});//here the server is listening for the 3000 port , so whenever someone is requesting something in port 3000 , it runs this server 
