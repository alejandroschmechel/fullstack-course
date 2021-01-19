const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("Contact me at alejandro.schmechel@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("I'm a nice guy that knows some things about coding, cooking and music.");
});

app.listen(3000, () => console.log("Server started on port 3000"));
