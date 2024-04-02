const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

router.post('/addPesoInicial', ctrl.addPesoInicial);


module.exports = router;