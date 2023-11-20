const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  dialectOptions: {
    connectTimeout: 30000, // 30 seconds (adjust as needed)
  },
});

module.exports = sequelize;
