const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Venda = require('../venda/Venda');
const Produto = require('../produto/Produto');


const Produto_venda = connection.define('produto_venda',{});

Produto_venda.belongsTo(Produto);
Produto_venda.belongsTo(Venda);

Produto_venda.sync({force:false});

module.exports = Produto_venda;

