const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  "Believe in yourself!",
  "Keep pushing forward.",
  "You are capable of amazing things.",
  "Stay positive, work hard, make it happen.",
  "Don’t watch the clock; do what it does. Keep going."
];

app.get('/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Motivation backend running on http://localhost:${PORT}`);
});
