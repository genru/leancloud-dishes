'use strict';

var navmenu = require('cloud/controllers/navmenu');

/**
 * Auth callback
 */
exports.get = function(req, res) {
    var currentUser = AV.User.current();
    var param = {};
    param.title = 'Settings';
    param.message = 'Congrats, you just set up your app!';
    param.user = null;
    param.navmenu = navmenu.SettingsMenu;

    if(currentUser)
        param.user = currentUser.toJSON();

    res.render('home', param);
};
