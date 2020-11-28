
const mongoose = require("mongoose")

const quizSchema = require("./quizSchema")

// mongoose model interacts with database via crud operations
// 1st argument is unique identifier, which identifies what database is storing
const quizModel = mongoose.model("QuizModel", quizSchema)

// a high-level api wraps quizModel.find()
const findAllQuizzes = () =>
    // find() connects to database at localhost or a remote database
    // find() is an asynchronous call that returns a promise
    quizModel.find()
        //.then(quizzes => console.log(quizzes))


const findQuizById = (qid) =>
    // mongoose converts the string qid to ObjectId used in database
    quizModel.findById(qid)


const createQuiz = (newQuiz) =>
    quizModel.create(newQuiz)


const deleteQuiz = (quizId) =>
    quizModel.remove({_id: quizId})


const updateQuiz = (quizId, newQuiz) =>
    quizModel.update({_id: quizId},
                     //{$set: {title: newQuiz.title, score: newQuiz.score}}
                     {$set: newQuiz})



module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}




