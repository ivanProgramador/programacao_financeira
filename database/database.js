const Sequelize = require("sequelize");


const connection = new Sequelize('programacao_financeira','root','1234',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;