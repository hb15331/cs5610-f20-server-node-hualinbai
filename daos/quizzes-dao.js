
const quizModel = require('../models/quizzes/quizModel')


const findAllQuizzes = () =>
    quizModel.find()


const findQuizById = (quizId) =>
    quizModel.findById(quizId)


module.exports = {findAllQuizzes, findQuizById}










