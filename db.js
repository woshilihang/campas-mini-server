const mongoose = require('mongoose');

const {
  database,
  port
} = require('./config');
/**
 * 连接
 */

const DB_URL = `mongodb://localhost:${port}/${database}`;

mongoose.connect(DB_URL);

/**
 * 连接成功
 */

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to  ${DB_URL}`);
});

/**
 * 连接错误
 */

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connect error ${err}`);
});

/**
 * 断开链接
 */

mongoose.connection.on('disconnected', (err) => {
  console.log(`Mongoose connection disconnected`);
});

module.exports = mongoose;