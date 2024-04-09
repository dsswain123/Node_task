const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const questionController = require('../controllers/questionController');



router.get('/category/:categoryId', questionController.getQuestionsByCategory);
router.post('/bulk', upload.single('file'), questionController.addBulkQuestions);

module.exports = router;
