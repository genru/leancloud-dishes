'use strict';
/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
  var currentUser = AV.User.current();
  if (!currentUser) {
    res.redirect('/signin');
    return res.status(401).send('User is not authorized');
  }
  next();
};

/**
 * Generic require Admin routing middleware
 * Basic Role checking - future release with full permission system
 */
exports.requiresAdmin = function(req, res, next) {
  if (!req.isAuthenticated() || !req.user.hasRole('admin')) {
    return res.status(401).send('User is not authorized');
  }
  next();
};


