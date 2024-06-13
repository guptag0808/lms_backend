const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

router.get('/', authenticate, courseController.getCourses);
router.get('/:id', authenticate, courseController.getCourse);
router.post('/', [authenticate, authorize(['teacher'])], courseController.createCourse);
router.put('/:id', [authenticate, authorize(['teacher'])], courseController.updateCourse);
router.delete('/:id', [authenticate, authorize(['teacher'])], courseController.deleteCourse);

module.exports = router;
