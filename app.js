const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
