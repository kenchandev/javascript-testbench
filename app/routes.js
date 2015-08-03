var routes = function(app, passport){
  //  Home Page
  app.get('/', function(req, res){
    //  Load the index.ejs file.
    res.render('index.ejs');
  });

  //  Login Form
  app.get('/login', function(req, res){
    //  Render the page and pass in any flash data if it exists.
    res.render('login.ejs', {
      message: req.flash('loginMessage')
    });
  });

  //  Login Form (Process Information Submitted)
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash : true // Enable flash messages.
  }));

  //  Signup Form
  app.get('/signup', function(req, res){
    //  Render the page and pass in any flash data if it exists.
    res.render('signup.ejs', {
      message: req.flash('signupMessage')
    })
  });

  //  Signup Form (Process Information Submitted)
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true  //  Enable flash messages.
  }));

  //  Profile Page
  //  Protext this by using router middleware to verify this.
  app.get('/profile', isLoggedIn, function(req, res){
    //  Render the profile page with user information based on retrieved session.
    res.render('profile.ejs', {
      user: req.user
    });
  });

  //  Logout Page
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

//  Check if the user is logged in.
var isLoggedIn = function(req, res, next){
  //  If the user is authenticated in the session, then move on.
  if(req.isAuthenticated())
    return next();

  //  If not, then redirect the user to the home page.
  res.redirect('/');
};

module.exports = routes;
