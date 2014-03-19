function Binder() {}

Binder.prototype = {
  bind: function(target, event, response) {
    target.on(event, response);
  }
}