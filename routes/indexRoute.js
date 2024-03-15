const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const empresaController = require('../controllers/empresaController');



router.get('/api/usuarios', userController.getAllUsers);
router.post('/api/usuarios', userController.createUser);


router.get('/api/empresas', empresaController.getAllEmpresas);
router.post('/api/empresas', empresaController.createEmpresa);

module.exports = router;