const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const ProductInOrder = database.define('products_in_order', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = ProductInOrder;