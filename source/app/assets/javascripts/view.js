function View(quizzesTemplate, questionTemplate) {
  this.quizzesTemplate = quizzesTemplate;
  this.questionTemplate = questionTemplate;
}

View.prototype = {
  renderQuizzes: function(quizzes) {
    var template = Handlebars.compile(this.quizzesTemplate);
    var html = template({quizzes: quizzes});
    $('.quizzes_column').append(html);
  },
  renderQuestion: function(question) {
    var template = Handlebars.compile(this.questionTemplate);
    var html = template({question: question.question});
    $('.question_column').children().remove();
    $('.question_column').append(html);
  }
};