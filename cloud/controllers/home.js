'use strict';


/**
 * Auth callback
 */
exports.get = function(req, res) {
	var currentUser = AV.User.current();
	// console.info(currentUser.toJSON());
	if(currentUser)
	    res.render('home', { title:'Order', message: 'Congrats, you just set up your app!', user: currentUser.toJSON() });
	else
	    res.render('home', { title:'Order', message: 'Congrats, you just set up your app!', user:null });
};
