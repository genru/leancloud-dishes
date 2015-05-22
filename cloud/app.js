'use resrict';

// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');
var avosExpressCookieSession = require('avos-express-cookie-session');
var home = require('cloud/controllers/home');
var user = require('cloud/controllers/user');

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件
app.use(expressLayouts);

app.use(express.cookieParser('dishEsSec'));
// 使用 avos-express-cookie-session 记录登录信息到 cookie
app.use(avosExpressCookieSession({ cookie: { maxAge: 3600000 }, fetchUser: true}));

// 使用 Express 路由 API 服务 / 的 HTTP GET 请求
app.get('/',home.get);

app.get('/contact', function(req, res) {
  res.render('home', { message: 'contact here, you just set up your app!' });
});

app.get('/signin', user.signin)
   .post('/signin', user.auth);

app.get('/signout', user.signout);

app.get('/signup', user.signup)
   .post('/signup', user.create)
   .get('user/profile', user.profile);

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();