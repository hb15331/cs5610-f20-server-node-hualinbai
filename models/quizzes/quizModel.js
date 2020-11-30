
const mongoose = require("mongoose")
const quizSchema = require("./quizSchema")

// mongoose model interacts with database via crud operations
const quizModel = mongoose.model("QuizModel", quizSchema)

module.exports = quizModel




