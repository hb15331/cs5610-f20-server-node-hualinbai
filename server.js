const express = require("express")
const app = express()

// connect to mongoDB databases
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/whiteboard-A9', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const bodyParser = require('body-parser')
// turn on the JSON parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

// share the app with controllers
const quizController = require("./controllers/quizzes-controller")
quizController(app)
require("./controllers/questions-controller")(app)
require("./controllers/quiz-attempts-controller")(app)

app.listen(process.env.PORT || 5000);
