const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const Product = database.define('products', {
    name: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    description: DataTypes.TEXT,
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    image: DataTypes.STRING, 
});

module.exports = Product;
