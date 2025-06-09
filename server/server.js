const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dataFile = path.join(__dirname, 'data.json');

app.use(bodyParser.json());

function readData() {
  try {
    const data = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { moodEntries: [], journals: [] };
  }
}

function writeData(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

// Record mood
app.post('/api/mood', (req, res) => {
  const entry = {
    timestamp: new Date().toISOString(),
    mood: req.body.mood,
    symptoms: req.body.symptoms || '',
    activities: req.body.activities || ''
  };
  const data = readData();
  data.moodEntries.push(entry);
  writeData(data);
  res.json({ status: 'ok', entry });
});

// Get mood entries
app.get('/api/mood', (req, res) => {
  const data = readData();
  res.json(data.moodEntries);
});

// Guided journaling placeholder
app.post('/api/journal-guided', (req, res) => {
  const prompt = req.body.prompt || '';
  const response = {
    timestamp: new Date().toISOString(),
    prompt,
    message: `Conte mais sobre como você se sentiu hoje em relação a: ${prompt}`
  };
  const data = readData();
  data.journals.push(response);
  writeData(data);
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
