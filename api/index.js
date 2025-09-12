const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your frontend
const corsOptions = {
  origin: ['https://mehedi-hasan-404.github.io', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// API endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Live TV Pro API',
    version: '1.0.0',
    description: 'Backend API for Live TV Pro IPTV Player',
    endpoints: [
      'GET /api/status',
      'GET /api/channels',
      'GET /api/categories'
    ]
  });
});

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
      name: 'Sports Channel HD',
      category: 'Sports',
      logo: 'https://via.placeholder.com/150x80/3498db/ffffff?text=Sports+HD',
      url: 'https://example.com/sports.m3u8'
    },
    {
      id: 2,
      name: 'News 24/7',
      category: 'News',
      logo: 'https://via.placeholder.com/150x80/e74c3c/ffffff?text=News+24',
      url: 'https://example.com/news.m3u8'
    },
    {
      id: 3,
      name: 'Movie Palace',
      category: 'Movies',
      logo: 'https://via.placeholder.com/150x80/9b59b6/ffffff?text=Movies',
      url: 'https://example.com/movies.m3u8'
    },
    {
      id: 4,
      name: 'Music Hits',
      category: 'Music',
      logo: 'https://via.placeholder.com/150x80/f1c40f/000000?text=Music',
      url: 'https://example.com/music.m3u8'
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
    { id: 1, name: 'Sports', count: 25, icon: '⚽' },
    { id: 2, name: 'News', count: 18, icon: '📺' },
    { id: 3, name: 'Movies', count: 32, icon: '🎬' },
    { id: 4, name: 'Music', count: 15, icon: '🎵' },
    { id: 5, name: 'Kids', count: 12, icon: '👶' }
  ];
  
  res.json({
    success: true,
    count: categories.length,
    data: categories
  });
});

// Handle 404 for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

module.exports = app;
