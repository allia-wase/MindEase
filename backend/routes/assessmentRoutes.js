const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createAssessment, getAssessments } = require('../controllers/assessmentController');

router.post('/', authMiddleware('student'), createAssessment); // only students can create
router.get('/', authMiddleware(), getAssessments); // all logged-in users can view

module.exports = router;
