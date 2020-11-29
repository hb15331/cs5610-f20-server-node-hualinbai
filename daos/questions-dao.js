
const questionModel = require('../models/questions/questionModel')
const quizModel = require('../models/quizzes/quizModel')

const findAllQuestions = () =>
    questionModel.find()


const findQuestionById = (questionId) =>
    questionModel.findById(questionId)


const findQuestionsForQuiz = (quizId) =>
    quizModel.findById(quizId)
        .populate('questions').then(quiz => quiz.questions)


module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz}












