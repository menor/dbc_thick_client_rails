function Binder() {}

Binder.prototype = {
  bind: function(){
    //To implement later :)
  },
  bindQuiz: function(response) {
    $('.quizzes_column').on('click', 'a',  response);
  },
  bindQuestion: function(response) {
    $('.question_column').on('submit', 'form', response);
  }
}