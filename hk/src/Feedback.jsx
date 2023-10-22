// // Import required modules
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// // Handle MongoDB connection events
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define Mongoose Schema and Models for your data
// const Schema = mongoose.Schema;
// const YourModelSchema = new Schema({
//   // Define your schema fields here
//   name: String,
//   age: Number,
// });

// const YourModel = mongoose.model('YourModel', YourModelSchema);

// // Define API routes
// app.get('/api/data', (req, res) => {
//   // Example: Retrieve data from MongoDB using Mongoose
//   YourModel.find({}, (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error fetching data' });
//     }
//     return res.status(200).json(data);
//   });
// });

// app.post('/api/data', (req, res) => {
//   // Example: Create a new document in MongoDB using Mongoose
//   const newData = new YourModel(req.body);
//   newData.save((err) => {
//     if (err) {
//       return res.status(500).json({ error: 'Error creating data' });
//     }
//     return res.status(201).json(newData);
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
