const { Router } = require('express');
const router = Router();
const { createUser, updateUser } = require('../controllers/user.controllers');
const authToken = require('../middlewares/auth.middlewares');


router.post('/api/v1/user', createUser);
router.put('/api/v1/user/:id', authToken, updateUser)

module.exports = router;