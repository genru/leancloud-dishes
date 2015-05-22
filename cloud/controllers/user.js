'use strict';


/**
 * Auth callback
 */
exports.signup = function(req, res) {
    res.render('signup', { "layout":false });
};

exports.signin = function(req,res) {
    res.render('signin', { "layout":false });
};

exports.auth = function(req, res) {
    AV.User.logIn(req.body.username, req.body.password, {
        success: function(user) {
            // Do stuff after successful login.
            res.redirect('/');
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            console.error('login failed '+error);
        }
    });
};

exports.signout = function(req, res) {
    AV.User.logOut();
    res.redirect('/');
};

exports.create = function(req, res) {
    // res.render('signup', { message: 'Congrats, you just set up your app!' });
    var user = new AV.User();
    user.set("username", req.body.username);
    user.set("password", req.body.password);
    user.set("email", req.body.email);

    // other fields can be set just like with AV.Object
    // user.set("phone", "415-392-0202");
    user.signUp(null, {
        success: function(user) {
        // Hooray! Let them use the app now.
            res.redirect('/');
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            console.error("Error: " + error.code + " " + error.message);
        }
    });
    // res.redirect('/');
};

exports.profile = function(req, res) {
    res.render('profile', { message: 'Congrats, you just set up your app!' });
};
