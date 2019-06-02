const Sequelize = require('sequelize');
// add dependencies

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: postgres
});

module.exports = sequelize;