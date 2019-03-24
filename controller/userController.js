const util = require('util');

const {
  promiseReq
} = require('../util/request');


class UserController {

  static async login(ctx) {

    try {
      let opts = {
        appId: '',
        secret: '',
      };
      const {
        js_code
      } = ctx.req.body;
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${opts.appId}&secret=${opts.secret}&js_code=${js_code}&grant_type=authorization_code`;

      let result = await Util.promiseReq(url);

      let resultJson = JSON.parse(result);
      console.log(resultJson.openid);

      ctx.body = resultJson.openid;
    } catch (error) {
      console.log(error);
      ctx.response.body = 403;
    }

  }

  // 测试
  static async test(ctx) {
    ctx.body = {
      name: 'test',
      req: util.inspect(ctx.request)
    }
  }

}

module.exports = UserController;