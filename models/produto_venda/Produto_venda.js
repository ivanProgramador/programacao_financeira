const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Venda = require('../venda/Venda');
const Produto = require('../produto/Produto');


const Produto_venda = connection.define('produto_venda',{
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Produto_venda.belongsTo(Produto);
Produto_venda.belongsTo(Venda);

Produto_venda.sync({force:true});

module.exports = Produto_venda;

