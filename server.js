const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.resolve(__dirname, './rasp-client/build')));

app.listen(4000, () => {
    console.log("You are listening port 4000");
});