function EmailController(model, view) {
  // Store the provided Model and View objects
  this._model = model;
  this._view = view;
}

EmailController.prototype = {
  initialize: function() {
    var modelData = this._model.getAll();
    this._view.render(modelData);
    this.bindEvents();
  },
  // Define a method for connecting Controller logic to system-wide events
  bindEvents: function() {
    var that = this;
    // When the View indicates that a new email address has been added via the user
    // interface, call the addEmail() method
    observer.subscribe("view.email-view.add", function(email) {
      that.addEmail(email);
    });
    // When the View indicates that an email address has been remove via the user
    // interface, call the removeEmail() method
    observer.subscribe("view.email-view.remove", function(email) {
      that.removeEmail(email);
    });
  },
  // Define a method for adding an email address to the Model, called when an email address
  // has been added via the View's user interface
  addEmail: function(email) {
    this._model.add(email);
  },
  // Define a method for removing an email address from the Model, called when an email
  // address has been removed via the View's user interface
  removeEmail: function(email) {
    this._model.remove(email);
  }
};