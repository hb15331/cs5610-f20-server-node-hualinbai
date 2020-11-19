
const express = require("express")
const app = express()

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



// share the app with quizService
const quizController = require("./controllers/quizzes-controller")
quizController(app)

// share the app with questionService
require("./controllers/questions-controller")(app)

// listen at port number for incoming HTTP request
app.listen(3000);


// listen to an incoming GET request
// param1: url that is listening,
// param2: callback function to be invoked whenever we receive GET request for that url
// app.get("/", (req, res) => {
//     res.send({message: "Hello from server"})
// })





