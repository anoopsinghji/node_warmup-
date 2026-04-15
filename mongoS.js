const express = require('express');
const connectDB = require('./MongoBD');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
    res.send('MongoDB connection with Mongoose is working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
