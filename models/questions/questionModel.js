
const mongoose = require("mongoose")
const questionSchema = require("./questionSchema")
// use the schema to build the model
const questionModel = mongoose.model("QuestionModel", questionSchema)


module.exports = questionModel
