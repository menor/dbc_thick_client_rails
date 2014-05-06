function Controller(quizzesTemplate, questionTemplate, resultsTemplate){
  this.model = new Model;
  this.view = new View(quizzesTemplate, questionTemplate, resultsTemplate);
  this.sessionKey;
}

Controller.prototype = {
  initializePage: function() {
    this.model.getQuizzes();
    $(this.model).on('ajax:success', function(e, data) {
      this.view.renderQuizzes(data.quizzes);
    }.bind(this))
  },
  getQuestions: function(quiz_id) {
    this.model.getQuestions(quiz_id, this.sessionKey);
    $(this.model).on('ajax:success-q', function(e, data) {
      this.view.renderQuestion(data);
    }.bind(this))
  },
  sendAnswer: function(question_id, answer) {
    var that = this;
    this.model.sendAnswer(question_id, answer, this.sessionKey);
    $(this.model).on('ajax:success-r', function(e, data) {
      if ( data.status.more_questions ) {
        that.getQuestions(data.status.quiz_id);
      }
      else {
        that.view.renderResults(data.status);
      }
    })
  },
  newSessionKey: function(){
    this.sessionKey = Math.floor(Math.random() *10000000000).toString(36);
  }
};