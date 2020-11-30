
const quizzesDao = require('../daos/quizzes-dao')


const findAllQuizzes = () =>
    quizzesDao.findAllQuizzes()


const findQuizById = (quizId) =>
    // quizzes.find(quiz => quiz._id === quizId)
    quizzesDao.findQuizById(quizId)


module.exports = {
    findAllQuizzes,
    findQuizById
}
