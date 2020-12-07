const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./rasp-client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./rasp-client/build/index.html"));
});

app.post("/data", (req, res) => {
  console.log(`temp: ${req.body.temp}, hum: ${req.body.hum}`);
  io.sockets.emit("sensor data", JSON.stringify(req.body));
  res.send("success");
});

io.on("connection", (socket) => {
  console.log("User connected!");
  socket.on("disconnect", () => {
    console.log("User disconnect!");
  });
});

http.listen(4000, () => {
  console.log("You are listening port 4000");
});
