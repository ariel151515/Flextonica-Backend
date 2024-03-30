const { Router } = require("express");
// const { verifyToken } = require('../middlewares/index.js');
const router = Router();

const ctrl = require('../controllers/objetivos.controllers');

router.post('/addobjetivos', ctrl.addObjetivos);
router.post('/datauser', ctrl.dataUser);

module.exports = router;