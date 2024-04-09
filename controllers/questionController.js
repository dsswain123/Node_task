const questionService = require('../services/questionService');

exports.getQuestionsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const questions = await questionService.getQuestionsByCategory(categoryId);
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



exports.addBulkQuestions = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'CSV file is required' });
    }
    await questionService.addBulkQuestions(file.path);
    res.json({ message: 'Bulk questions added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
