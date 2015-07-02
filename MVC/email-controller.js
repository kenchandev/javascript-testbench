function EmailController(model, view) {
  // Store the provided Model and View objects
  this._model = model;
  this._view = view;
}

EmailController.prototype = {
  // Define a method to use to initialize the system, which gets the data from the Model using
  // its getAll() method and passes it to the associated View by executing that View's
  // render() method
  initialize: function() {
    // Get the list of email addresses from the associated Model
    var modelData = this._model.getAll();
    // Pass that data to the render() method of the associated View
    this._view.render(modelData);
    // Connect Controller logic to system-wide events
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
    // Call the add() method on the Model directly, passing the email address added via
    // the View. The Model will then broadcast an event indicating a new email address has
    // been added, and the View will respond to this event directly, updating the UI
    this._model.add(email);
  },
  // Define a method for removing an email address from the Model, called when an email
  // address has been removed via the View's user interface
  removeEmail: function(email) {
    // Call the remove() method on the Model directly, passing the email address added via
    // the View. The Model will then broadcast an event indicating an email address has
    // been removed, and the View will respond to this event directly, updating the UI
    this._model.remove(email);
  }
};