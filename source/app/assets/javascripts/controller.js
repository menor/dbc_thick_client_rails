function Controller(quizzesTemplate){
  this.model = new Model;
  this.quizzesTemplate = quizzesTemplate;
  this.view = new View(quizzesTemplate);
}

Controller.prototype = {
  initializePage: function() {
    var quizzes = this.model.getQuizzes();
    $(this.model).on('ajax:success', function(e, data) {
      this.view.renderQuizzes(data.quizzes);
    }.bind(this))
  },
  getQuestions: function(question) {
    debugger;
  }
};