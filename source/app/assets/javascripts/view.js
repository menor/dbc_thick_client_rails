function View(quizzesTemplate, questionTemplate, resultsTemplate) {
  this.quizzesTemplate = quizzesTemplate;
  this.questionTemplate = questionTemplate;
  this.resultsTemplate = resultsTemplate;
}

View.prototype = {
  renderQuizzes: function(quizzes) {
    var template = Handlebars.compile(this.quizzesTemplate);
    var html = template({quizzes: quizzes});
    $('.questions_column').children().remove();
    $('.quizzes_column').append(html);
  },
  renderQuestion: function(question) {
    var template = Handlebars.compile(this.questionTemplate);
    var html = template({question: question.question});
    $('.question_column').children().remove();
    $('.question_column').append(html);
  },
  renderResults: function(data) {
    console.log(data)
    var template = Handlebars.compile(this.resultsTemplate);
    var html = template({ num_correct: data.num_correct, num_incorrect: data.num_incorrect });
    $('.question_column').children().remove();
    $('.question_column').append(html);
  }
};