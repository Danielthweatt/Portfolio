// Dependencies
const router = require('express').Router();
const emailController = require('../../controllers/emailController');

// Email Route
router.post('/email', emailController.sendEmail);

// Export API Router
module.exports = router;