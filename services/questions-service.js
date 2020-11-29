
// let questions = require("./questions.json")
// const questionModel = require("../models/questions/questionModel")

const questionsDao = require('../daos/questions-dao')


const findAllQuestions = () =>
    questionsDao.findAllQuestions()


const findQuestionById = (questionId) =>
    questionsDao.findQuestionById(questionId)


const findQuestionsForQuiz = (quizId) =>
    questionsDao.findQuestionsForQuiz(quizId)



module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}




