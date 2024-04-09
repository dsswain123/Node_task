const Question = require('../models/question');

const fs = require('fs');
const csv = require('csv-parser');


exports.getQuestionsByCategory = async (categoryId) => {
  return Question.find({ categories: categoryId });
};

exports.addBulkQuestions = async (filePath) => {
  return new Promise((resolve, reject) => {
    const questions = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const categories = row.categories.split(',');
        const newQuestion = {
          title: row.title,
          content: row.content,
          categories: categories
        };
        questions.push(newQuestion);
      })
      .on('end', async () => {
        await Question.insertMany(questions);
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
