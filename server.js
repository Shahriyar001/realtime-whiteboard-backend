const express = require("express");
const { Server } = require("socket.io");
const app = express();

const server = require("http").createServer(app);
// const { Server } = require("socket.io")(server);

const io = new Server(server);

// route
app.get("/", (req, res) => {
  res.send("THis is realtime whiteboard shearing app");
});

io.on("connection", (socket) => {
  console.log("User connected");
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log("server is running on 5000"));
