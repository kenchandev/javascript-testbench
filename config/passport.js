var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

/*
 *  The key of the User object is saved in session and used to retrieve the whole object via the deserialization function.
 *    1.  The serialization function determines what data from the user object should be stored in the session.
 *    2.  The deserialization function retrieves the whole object based on the key provided.
 */

module.exports = function(passport){
  //  Serialize the user for the session.
  passport.serializeUser(function(user, done){
    done(null, user.id);
    //  Saved to req.session.passport.user = {id:'...'}
  });

  //  Deserialize the user out of the session.
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
      //  User object is attached to the request as req.user
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true   //  Enables entire request to be passed back to callback.
  },
  function(req, email, password, done){
    //  Fire User.findOne() only when data is sent back.
    process.nextTick(function(){
      //  Find a user in the MongoDB database with the same e-mail entered in the signup form.
      User.findOne({ 'local.email' : email }, function(err, user){
        //  Return any errors.
        if(err) return done(err);

        //  If there's a user within the database with that e-mail...
        if(user){
          return done(null, false, req.flash('signupMessage', 'That e-mail is already taken.'))
        }
        else{
          //  If there's no user within the database with that e-mail...
          var newUser = new User();

          //  Set the user's local credentials and save the user.
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          newUser.save(function(err){
            if(err) throw err;

            return done(null, newUser);
          });
        }
      });
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true   //  Enables entire request to be passed back to callback.
  },
  function(req, email, password, done){
    process.nextTick(function(){
      //  Find a user in the MongoDB database with the same e-mail entered in the login form.
      User.findOne({ 'local.email' : email }, function(err, user){
        //  Return any errors.
        if(err) return done(err);

        //  If there's no user found, then inform the user via a flash message.
        if(!user){
          return done(null, false, req.flash('loginMessage', 'No user found.'));
        }

        //  If the user is found, but the password is incorrect...
        if(!user.validPassword(password)){
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password entered.'));
        }

        //  Return a successful user if everything goes well.
        return done(null, user);
      });
    });
  }));
};
