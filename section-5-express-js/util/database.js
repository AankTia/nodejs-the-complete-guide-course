// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node-course',
//   password: 'tw877121'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-course', 'root','tw877121', {
  dialect: 'mysql', 
  host: 'localhost'
});

module.exports = sequelize;