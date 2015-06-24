'use strict';


/**
 * Auth callback
 */
exports.OrderMenu = {header:'Order', menuItem:[
    {title:'Browse', url:'/order/list'},
    {title:'Create', url:'/order/new'},
]};

exports.DishMenu = {header:'Dish', menuItem:[
    {title:'Browse', url:'/dish/list'},
    {title:'Create', url:'/dish/new'},
]};

exports.VipMenu = {header:'VIP', menuItem:[
    {title:'Browse', url:'/vip/list'},
    {title:'Create', url:'/vip/new'},
]};

exports.SettingsMenu = {header:'Settings', menuItem:[
    {title:'User', url:'/settings/list'},
    {title:'Switchs', url:'/settings/new'},
]};
