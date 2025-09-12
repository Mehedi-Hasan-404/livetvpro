const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Live TV Pro API',
        version: '1.0.0'
    });
});

app.get('/api/channels', (req, res) => {
    res.json({
        success: true,
        data: ['Channel 1', 'Channel 2', 'Channel 3']
    });
});

module.exports = app;
