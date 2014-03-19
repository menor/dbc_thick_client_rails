function Controller(quizzesTemplate, questionTemplate){
  this.model = new Model;
  this.quizzesTemplate = quizzesTemplate;
  this.questionTemplate = questionTemplate;
  this.view = new View(quizzesTemplate, questionTemplate);
  this.sessionKey = Math.floor(Math.random() *10000000000).toString(36);
}

Controller.prototype = {
  initializePage: function() {
    this.model.getQuizzes();
    $(this.model).on('ajax:success', function(e, data) {
      this.view.renderQuizzes(data.quizzes);
    }.bind(this))
  },
  getQuestions: function(question) {
    this.model.getQuestions(question, this.sessionKey);
    $(this.model).on('ajax:success-q', function(e, data) {
      this.view.renderQuestion(data);
    }.bind(this))
  },
  sendAnswer: function(question_id, answer) {
    // responseInfo = {question_id: question_id, answer_id: answer}
    this.model.sendAnswer(question_id, answer, this.sessionKey);
  }
};