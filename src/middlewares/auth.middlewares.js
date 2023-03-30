const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const {token} = req.headers;

    if(!token){
        return res.status(500).json(error);
    }

    try {
        const decoded = jwt.verify(token, 'password', {algorithms: "HS512"});
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('unathorised');
    }

};

module.exports = authToken;