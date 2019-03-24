const Router = require('koa-router');

const userController = require('../controller/userController');

const router = new Router({
  prefix: '/api',
});


router.get('/test', async ctx => {
  ctx.body = 'hello world this is a test';
});

// 获取用户session_key, openid
router.post('/openId', userController.login);

// 测试路由
router.get('/aa', userController.test);



module.exports = router;