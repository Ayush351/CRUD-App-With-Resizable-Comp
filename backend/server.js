const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB database
mongoose.connect('mongodb+srv://payush351:BifEUJLEthxUmpGo@cluster0.zpixqlh.mongodb.net/<database-name>?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

// Listen for MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Define schema for data
const dataSchema = new mongoose.Schema({
  name: String,
  profession: String,
  role: String
});

// Create model based on schema
const Data = mongoose.model('Data', dataSchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define your API endpoints...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
