
let questions = require("./questions.json")
const questionModel = require("../models/questions/questionModel")


const findAllQuestions = () =>
    questionModel.findAllQuestions()


const findQuestionsForQuiz = (quizId) =>
    questionModel.findQuestionForQuiz(quizId)



module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}




