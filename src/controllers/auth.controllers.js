const userServices = require("../services/user.services");
const bcrypt = require('bcrypt');

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userServices.getUser(email);
        if(!user){
            return res.status(500).json(error)
        };

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
           return res.status(500).json(error) 
        }

        res.json({ 
            id: user.id, 
            username: user.username, 
            email: user.email 
        });

    } catch (error) {
        res.status(400).json(error)   
    }
}

module.exports = { userLogin };