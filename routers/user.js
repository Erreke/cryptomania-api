const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// GET /user/1
router.get('/:id', userController.getUser);

module.exports = router;