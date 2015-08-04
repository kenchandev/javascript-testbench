//  Populate the model with example e-mail addresses.
var emailModel = new EmailModel([
  "foo@gmail.com",
  "bar@gmail.com",
  "baz@gmail.com",
  "qux@gmail.com"
]);

var emailFormView = new EmailFormView();
var emailListView = new EmailListView();
var emailView = new EmailView([emailFormView, emailListView]);
var emailController = new EmailController(emailModel, emailView);
emailController.initialize();