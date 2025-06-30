// Import required modules
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Initialize Express application
const app = express();

// Get port from environment variable or use default
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine (if using template engines later)
app.set('views', path.join(__dirname, 'views'));

// Basic routes for FreeCodeCamp exercises

// Root route - serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// API route - basic JSON response
app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hello from FreeCodeCamp Node.js study project!",
    timestamp: new Date().toISOString(),
    author: "FreeCodeCamp Student"
  });
});

// Echo route - demonstrates request parameters
app.get('/api/echo/:word', (req, res) => {
  const word = req.params.word;
  res.json({
    echo: word,
    length: word.length,
    uppercase: word.toUpperCase(),
    lowercase: word.toLowerCase()
  });
});

// Query parameters example
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip || req.connection.remoteAddress,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

// POST route example
app.post('/api/data', (req, res) => {
  const { name, message } = req.body;
  
  if (!name || !message) {
    return res.status(400).json({
      error: "Name and message are required",
      received: req.body
    });
  }
  
  res.json({
    success: true,
    data: {
      name: name,
      message: message,
      timestamp: new Date().toISOString()
    }
  });
});

// Timestamp microservice (FreeCodeCamp exercise)
app.get('/api/timestamp/:date', (req, res) => {
  const dateParam = req.params.date;
  let date;
  
  // Check if it's a number (Unix timestamp)
  if (!isNaN(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    // Try to parse as date string
    date = new Date(dateParam);
  }
  
  // Check if date is valid
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: "Invalid Date" });
  }
  
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Timestamp microservice without parameter (current time)
app.get('/api/timestamp', (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});



// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    message: "The requested endpoint does not exist",
    availableRoutes: [
      "GET /",
      "GET /api/hello",
      "GET /api/echo/:word",
      "GET /api/whoami",
      "POST /api/data",
      "GET /api/timestamp/:date?"
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong on the server"
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 FreeCodeCamp Node.js study server is running!`);
  console.log(`📡 Server listening on port ${PORT}`);
  console.log(`🌐 Open your browser to http://localhost:${PORT}`);
  console.log(`📚 Ready for FreeCodeCamp backend challenges!`);
});

// Export app for testing purposes
module.exports = app;
