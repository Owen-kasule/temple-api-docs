const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
    url: process.env.DB_URL || 'mongodb://localhost:27017/temple-api',
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};