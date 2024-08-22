const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Ruta para obtener todos los usuarios
router.get('/', eventController.getAllEvents);

module.exports = router;
