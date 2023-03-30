const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Order = database.define('orders', {
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pendiente'
    }
    
})

module.exports = Order;