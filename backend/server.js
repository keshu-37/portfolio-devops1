const express = require('express');
const app = express();
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Fake backend response!' });
});

app.listen(PORT, () => {
  console.log(Backend running at http://localhost:${PORT});
});