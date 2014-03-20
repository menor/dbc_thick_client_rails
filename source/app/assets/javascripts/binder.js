function Binder(quizzesTemplate, questionTemplate, resultsTemplate) {
  this.controller = new Controller(quizzesTemplate, questionTemplate, resultsTemplate);
  this.controller.initializePage();
}

Binder.prototype = {
  bindQuiz: function(response) {
    var that = this;
    $('.quizzes_column').on('click', 'a', function(){
      event.preventDefault();
      that.controller.newSessionKey();
      that.controller.getQuestions(this.dataset.id);
    });
  },
  bindQuestion: function(response) {
    var that = this;
    $('.question_column').on('submit', 'form', function(){
      event.preventDefault();
      that.controller.sendAnswer(this.dataset.id, $('form').serializeArray()[0].value);
    });
  },
  bindAll: function() {
    this.bindQuestion();
    this.bindQuiz();
  }
}