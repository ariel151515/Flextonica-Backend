const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

router.post('/addObjetivo', ctrl.addObjetivo);


module.exports = router;