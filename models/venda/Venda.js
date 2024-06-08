const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Venda = connection.define('venda',{
    valor:{
        type: Sequelize.DOUBLE,
        allowNull:false
    }
});

Venda.sync({force:false});

module.exports = Venda;