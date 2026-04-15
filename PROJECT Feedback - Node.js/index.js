const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 5000;

const basePath = path.join(__dirname, 'templates');
const feedbacks = path.join(__dirname, 'feedbacks');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.get('/feedbackpage/add', (req, res) => {
  res.sendFile(path.join(basePath, 'feedbackpage.html'));
});

app.post('/feedbackpage/save', async (req, res) => {
  const fullname = req.body.name;
  const feedback = req.body.message;
  if (!fullname || !feedback) {
    return res.status(400).send('Name and feedback are required!');
  }
  try {

    const feedbackData = {
      name: fullname,
      feedback: feedback,
      date: new Date().toISOString()
    };
    
    const file = `feedback_${Date.now()}.json`;
    
    await fs.writeFile(
      path.join(feedbacks, file), 
      JSON.stringify(feedbackData, null, 2)
    );

  res.send(`Thank you, ${fullname}! Your feedback "${feedback}" has been received.`);
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).send('An error occurred while saving your feedback. Please try again later.');
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});