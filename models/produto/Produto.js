const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Produto = connection.define('produto',{
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    preco:{    
        type: Sequelize.DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    tipo:{
        type: Sequelize.STRING,
        allowNull:false
    }
    
});

Produto.sync({force:false});

module.exports = Produto;