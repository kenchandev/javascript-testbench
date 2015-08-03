//  Create Express application and define a port.
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

//  Require additional npm packages.
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

//  Require configuration information to establish MongoDB connection.
var configDB = require('./config/database.js');

//  Connect to the MongoDB database.
mongoose.connect(configDB.url);

//  Pass passport to utilize strategies.
require('./config/passport')(passport);

//  Configure Express application.
app.use(morgan('dev'));         //  Log every request to the console.
app.use(cookieParser());        //  Read cookies to identify session.
app.use(bodyParser.json());     //  Get information from HTML forms.
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');  //  Set EJS as templating engine.

//  Configure Passport.
app.use(session({
  secret: ',./<>?:";[]{}|-=_+'
}));
app.use(passport.initialize());
app.use(passport.session());      //  Enable persistent login sessions.
app.use(flash());                 //  Use connect-flash for flash messages stored in session.

//  Load routes.
//  Pass in the application and configuration information.
require('./app/routes.js')(app, passport);

//  Launch the application.
app.listen(port);
console.log('Listening on port ' + port);
