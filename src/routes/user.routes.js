const { Router } = require('express');
const router = Router();
const { createUser } = require('../controllers/user.controllers');


router.post('/api/v1/user', createUser);

module.exports = router;