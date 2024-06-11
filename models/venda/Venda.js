const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Venda = connection.define('venda',{
    valor:{
        type: Sequelize.DOUBLE,
        allowNull:true
    },
    cliente:{
        type: Sequelize.STRING,
        allowNull:true
    },
    situacao:{
        type: Sequelize.INTEGER
    }
    
});

Venda.sync({force:false});

module.exports = Venda;