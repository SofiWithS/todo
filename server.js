const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const config = require('./config.json')
const Task = require('./models/task');


mongoose.connect(`mongodb+srv://${config.dbUsername}:${config.dbPassword}@tabor.eismg3p.mongodb.net/?retryWrites=true&w=majority`)

app.use(bodyParser.urlencoded());
app.use(express.json());

// HTML, CSS, JS lekérése
app.use(express.static(__dirname + "/public"));



// Új bejegyzés
app.post("/task", async function (req, res) {
    const task = new Task();
    task.task = req.body.task

    await task.save();

res.redirect('/todo.html')
});

// Bejegyzések lekérése
app.get("/task", async function (req, res) {
    const todos = await Task.find();
    res.contentType('application/json').send(JSON.stringify(todos))
});

app.listen(9000);