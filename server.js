const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.resolve(__dirname, './rasp-client/build')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './rasp-client/build/index.html'));
});

app.listen(4000, () => {
    console.log("You are listening port 4000");
});