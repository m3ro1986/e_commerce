const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const database = require('../utils/connection');

const User = database.define('users', {
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: '/'
    }
}, {
    hooks: {
        beforeCreate: async (newUser) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const passhash = await bcrypt.hash(newUser.password, salt);
                newUser.password = passhash;   
            } catch (error) {
                throw error;
            }
        }
    }
});

module.exports = User