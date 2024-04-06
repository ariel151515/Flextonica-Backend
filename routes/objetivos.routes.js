const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

// Crea un documento de onjetivos
router.post('/creaObjetivo/:uid', ctrl.creaObjetivo);


module.exports = router;