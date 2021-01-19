const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log("Hello my little consagrated");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    const params = req.body;
    const result = Number(params.num1) + Number(params.num2);

    res.send("The result is: " + result);
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {
    const params = req.body;
    const height = parseFloat(params.height);
    const weight = parseFloat(params.weight);

    const result = weight / (Math.pow(height, 2));

    res.send("Your BMI is: " + result);
})

app.listen(3000, () => {
    console.log("Roll the thing!");
})

