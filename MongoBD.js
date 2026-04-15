const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// MongoDB connection function
async function connectDB() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
        process.exit(1); // Exit process if connection fails
    }
}

module.exports = connectDB;
