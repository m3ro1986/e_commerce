const jwt = require('jsonwebtoken');

class authServices {
    static genToken(payload) {
        try {
            const token = jwt.sign(payload, 'password', { algorithm: 'HS512', expiresIn: "10m"});
            return token;
        } catch (error) {
            throw error
        }
    }
}

module.exports = authServices;