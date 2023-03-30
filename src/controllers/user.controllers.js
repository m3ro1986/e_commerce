const userServices = require("../services/user.services");

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userServices.create(user)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json(error)   
    }
}

module.exports = { createUser };

