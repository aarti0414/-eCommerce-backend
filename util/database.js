const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','testroot',{
    dialect:'mysql',
    host:'localhost'
});

module.exports= sequelize;