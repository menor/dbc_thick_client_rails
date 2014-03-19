function Model() {}

Model.prototype = {
  getQuizzes: function() {
    $.ajax({
      type: 'GET',
      url: "quizzes.json",
      dataType: "JSON",
      context: this
    }).done(function(response){
      $(this).trigger('ajax:success', [response])
    })
  }
};