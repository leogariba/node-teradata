
const Teradata = require("../index");
require('dotenv').config()
var config = {
    url: `jdbc:teradata://${process.env.DB_HOST}/CHARSET=UTF8`,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    driver: './jars/',
    minPoolSize: 5,
    maxPoolSize: 30,
    keepalive: {
      interval: 60000,
      query: 'SELECT 1',
      enabled: true
    }
  };

const teradata = new Teradata(config);
const parser = (array) => {array.forEach(el => {
  let keys = Object.keys(el);
  keys.forEach(key => {
    if (typeof el[key] == "object" && el[key]) {

      el[key] = Number(el[key].toPlainStringSync());

    }
  });

})
return array};

module.exports = {teradata, parser};