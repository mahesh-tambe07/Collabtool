const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Define routes
router.get('/api/example', controller.exampleFunction);
router.post('/api/example', controller.exampleFunction);

// Export the router
module.exports = router;