// 引入原生API
const path = require('path');

// 框架与第三方模块包
const Koa = require('koa');
const cors = require('koa2-cors');
const Static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

// 相对路径
const router = require('./routes/index'); 


// use
const app = new Koa();
app.use(cors());
app.use(bodyParser());

// 引入静态资源
app.use(Static(
  path.join(__dirname, './assets')
));

// 加载路由
app.use(router.routes(), router.allowedMethods());

app.listen(5000, () => {
  console.log('server at running port 5000');
});