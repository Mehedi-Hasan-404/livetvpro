const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS
const corsOptions = {
  origin: ['https://mehedi-hasan-404.github.io', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.get('/api/status', (req, res) => {
  res.json({
    status: 'API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/channels', (req, res) => {
  const channels = [
    {
      id: 1,
      name: 'Sports Channel',
      category: 'Sports',
      logo: 'https://via.placeholder.com/150x80/3498db/ffffff?text=Sports',
      url: 'https://example.com/sports.m3u8'
    },
    {
      id: 2,
      name: 'News Channel',
      category: 'News',
      logo: 'https://via.placeholder.com/150x80/e74c3c/ffffff?text=News',
      url: 'https://example.com/news.m3u8'
    }
  ];
  
  res.json({
    success: true,
    count: channels.length,
    data: channels
  });
});

app.get('/api/categories', (req, res) => {
  const categories = [
    { id: 1, name: 'Sports', count: 25 },
    { id: 2, name: 'News', count: 18 },
    { id: 3, name: 'Movies', count: 32 }
  ];
  
  res.json({
    success: true,
    count: categories.length,
    data: categories
  });
});

// Serve HTML for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
