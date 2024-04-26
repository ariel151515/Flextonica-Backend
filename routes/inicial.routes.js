const { Router } = require("express");

// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

// Muestra lso datos del proyecto
const ctrl = require('../controllers/inicial.controllers');

router.get('/', ctrl.inicial);

module.exports = router;