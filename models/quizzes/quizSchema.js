
const mongoose = require("mongoose")

// Mongoose describes the schema or structure of data used to interact with the database
// specify that a quiz is stored in the collection called quizzes
const quizSchema = mongoose.Schema({
    title: String
}, {collection: "quizzes"})

module.exports = quizSchema
