
const mongoose = require("mongoose")

// this schema lives in the questions collection in our database
const questionSchema = mongoose.Schema({
    question: String,
    quizId: String,
    points: Number,
    options: [String]
}, {collection: "questions"})


module.exports = questionSchema

