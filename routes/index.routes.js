const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

exports.ctrl = require('../controllers/user.controllers');
exports.ctrl = require('../controllers/data.controllers');

module.exports = router;