'use strict';


/**
 * Auth callback
 */
exports.get = function(req, res) {
	var currentUser = AV.User.current();
    var param = {};
    param.title = 'Dashboard';
    param.message = 'Congrats, you just set up your app!';
    param.user = null;
    param.navmenu = require('cloud/controllers/navmenu').DishMenu;

	if(currentUser)
	    param.user = currentUser.toJSON();

    res.render('home', param);
};
