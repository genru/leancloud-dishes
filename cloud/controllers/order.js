'use strict';

var navmenu = require('cloud/controllers/navmenu');

/**
 * Auth callback
 */
exports.get = function(req, res, next) {
    var currentUser = AV.User.current();
    var param = {};
    param.title = 'Order';
    param.message = 'Congrats, you just set up your app!';
    param.user = null;
    param.navmenu = navmenu.OrderMenu;

    if(currentUser)
        param.user = currentUser.toJSON();

    res.render('home', param);
};
