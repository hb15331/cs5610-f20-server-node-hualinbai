
// data model goes to quizzes.json file
// let quizzes = require("./quizzes.json")
// const quizModel = require("../models/quizzes/quizModel")

const quizzesDao = require('../daos/quizzes-dao')


const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes()


const findQuizById = (quizId) =>
    // quizzes.find(quiz => quiz._id === quizId)
    quizzesDao.findQuizById(quizId)


// const createQuiz = (newQuiz) => {
//     const quiz = {title: "New Quiz"}
//     return quizModel.createQuiz(quiz)
// }
//
// const deleteQuiz = (quizId) =>
//     quizModel.deleteQuiz(quizId)
//
//
// const updateQuiz = (quizId, newQuiz) =>
//     quizModel.updateQuiz(quizId, newQuiz)



module.exports = {
    findAllQuizzes,
    findQuizById
}
