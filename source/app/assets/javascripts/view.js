function View(quizzesTemplate) {
  this.quizzesTemplate = quizzesTemplate;
}

View.prototype = {
  renderQuizzes: function(quizzes) {
    var template = Handlebars.compile(this.quizzesTemplate);
    var html = template({quizzes: quizzes});
    $('.quizzes_column').append(html);
  }
};