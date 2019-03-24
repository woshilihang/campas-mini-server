// [request模块的使用](http://www.cnblogs.com/lovellll/p/10173788.html)

const request = require('request');

/**
 * Promise化request
 * @param {Object} opts
 * @return {Promise<[]>}
 */
exports.promiseReq = function promiseReq(opts = {}) {
  return new Promise((resolve, reject) => {
    request(opts, (err, res, body) => {
      if (err) return reject(err);
      if (res.statusCode !== 200) {
        return reject(`back statusCode ${res.statusCode}`);
      }
      return resolve(body);
    });
  });
}
