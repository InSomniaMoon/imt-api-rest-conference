const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')


router.post('/', auth.checkToken)


module.exports = router