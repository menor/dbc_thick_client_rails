function Binder() {}

Binder.prototype = {
  bind: function(target, event, selector, response) {
    target.on(event, selector, response);
  }
}