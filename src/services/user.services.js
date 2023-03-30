const User = require("../models/user.model");

class userServices {
    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser);
            return userCreated;   
        } catch (error) {
            throw error;
        }
    }
    static async getUser(email) {
        try {
            const user = await User.findOne({ where: {email} });
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userServices;