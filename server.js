const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 3001;

// Use cors middleware to enable cross-origin requests
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Freelanceyou', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose model for the Freelancer schema
const Freelancer = mongoose.model('Freelancer', {
  fullName: String,
  email: String,
  occupation: String,
  skills: String,
  profileImage: String,
  description: String,
  languagesKnown: String,
  languageLevel: String,
});

// Configure Multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure the 'uploads' directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Express middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// API endpoint to handle freelancer submissions
app.post('/api/freelancers', upload.single('profileImage'), async (req, res) => {
  try {
    const {
      fullName,
      email,
      occupation,
      skills,
      description,
      languagesKnown,
      languageLevel,
    } = req.body;

    const freelancer = new Freelancer({
      fullName,
      email,
      occupation,
      skills,
      profileImage: req.file ? req.file.path : '', // Path to the uploaded profile image
      description,
      languagesKnown,
      languageLevel,
    });

    await freelancer.save();

    res.status(201).json({ message: 'Freelancer application submitted successfully!' });
  } catch (error) {
    console.error('Error submitting freelancer application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/freelancers', async (req, res) => {
    try {
      const freelancers = await Freelancer.find();
      res.status(200).json(freelancers);
    } catch (error) {
      console.error('Error fetching freelancers:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
