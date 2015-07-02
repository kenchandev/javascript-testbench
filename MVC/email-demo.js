//  Populate the model with example e-mail addresses.
var emailModel = new EmailModel([
  "foo@gmail.com",
  "bar@gmail.com",
  "baz@gmail.com",
  "qux@gmail.com"
]);

// Create instances of our form View and list View "classes"
var emailFormView = new EmailFormView();
var emailListView = new EmailListView();
// Combine together the form and list Views as children of a single View object
var emailView = new EmailView([emailFormView, emailListView]);
// Create an instance of our email system Controller, passing it the Model instance and
// the View to use. Note that the Controller does not need to be aware whether the View
// contains a single View or multiple, combined Views, as it does here - this is an example
// of the composite pattern in action
var emailController = new EmailController(emailModel, emailView);
// Finally, initialize the Controller which gets the data from the Model and passes it to the
// render() method of the View, which, in turn, connects up the user interface to the
// system-wide events, bringing the whole application together
emailController.initialize();