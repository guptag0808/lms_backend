const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/users/:id/progress', authenticate, progressController.getProgress);
router.post('/users/:id/progress', authenticate, progressController.updateProgress);

module.exports = router;
