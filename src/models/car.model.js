const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Cart = database.define('cart', {
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Cart;