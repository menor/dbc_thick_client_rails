function Model() {}

Model.prototype = {
  getQuizzes: function() {
    $.ajax({
      type: "GET",
      url: "quizzes.json",
      dataType: "JSON",
      context: this
    }).done(function(response){
      $(this).trigger('ajax:success', response)
    })
  },
  getQuestions: function(id, session_key) {
    $.ajax({
      type: "GET",
      url: "/quizzes/" + id + "/questions/next.json",
      data: { session_key: session_key },
      dataType: "JSON",
      context: this
    }).done(function(response){
      $(this).trigger('ajax:success-q', response)
    })
  },
  sendAnswer: function(question_id, choice_id, sessionKey) {
    debugger
    $.ajax({
      url: "/questions/"+question_id+"/answers.json",
      type: "POST",
      data: {choice_id: choice_id, session_key: sessionKey}
    })
  }
};