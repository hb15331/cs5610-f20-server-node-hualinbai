
const mongoose = require("mongoose")

// Mongoose describes the schema or structure of data used to interact with the database
// specify that a quiz is stored in the collection called quizzes
const quizSchema = mongoose.Schema({
    title: String,
    //questions: [String]
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }]
}, {collection: "quizzes"})


module.exports = quizSchema
