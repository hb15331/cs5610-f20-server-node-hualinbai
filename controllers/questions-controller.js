
const questionService = require("../services/questions-service")

module.exports = (app) => {

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params["qid"]
        const questionsForQuiz = questionService.findQuestionsForQuiz(quizId)
        res.send(questionsForQuiz)
    }


    // encode one-to-many relationship into restful url
    // find questions by quiz id
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)

}



