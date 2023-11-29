import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import User from "./models/user.model.js";
import Feedback from "./models/feedback.model.js";
import Book from "./models/books.model.js";
// import Stats from "./models/stats.model.js";

dotenv.config();

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }); //, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.post('/', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    if (password !== user.password) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    res.json({ message: 'Login successful', usertype: user.usertype });
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    // const wins = 0;
    // const totalpoints = 0;
    const usertype = 'student';
  
    // Check if username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username is already taken' });
    }
  
    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one uppercase letter and one number' });
    }
  
    // Create new user
    // const newUser = new User({ username, password, wins, totalpoints });
    const newUser = new User({ username, password, usertype });
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
});

app.get('/getbooks', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch Books' });
  }
});

app.post('/feedback', async (req, res) => {
  try {
      // Extract feedback data from the request body
      console.log(req.body);
      const { studentId, staffId, staffRating, bookQuality, bookVariety, checkoutExperience } = req.body;
      const user = await User.findOne({ username: studentId, usertype: 'student' });
      if (!user) {
        console.log('invalid username');
        res.status(401).json({ error: 'Invalid StudentName' });
        return;
      }
      const user1 = await User.findOne({ username: staffId, usertype: 'staff'  });
      if (!user1) {
        console.log('invalid staff name');
        res.status(401).json({ error: 'Invalid StaffName' });
        return;
      }
      const feedbackexist = await Feedback.findOne({ studentId, staffId });
      if (feedbackexist) {
        res.status(401).json({ error: 'Can not submit same feedback more than once' });
        // return res.status(400).json({ error: 'Feedback already submitted' });
        return;
      }
      // Create a new Feedback instance
      const newFeedback = new Feedback({
          studentId,
          staffId,
          staffRating,
          bookQuality,
          bookVariety,
          checkoutExperience
      });

      // Save the feedback to the database
      await newFeedback.save();

      res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});




// app.get('/search',cors(),(req,res) => {

// })


app.get('/search/:username', async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const { wins, totalpoints } = user;
    res.json({ wins, totalpoints });
});




app.get('/leaderboard', async (req, res) => {
    try {
      const users = await User.find().sort({ totalpoints: -1, wins: -1 }).limit(5);
      const leaderboardData = users.map((user) => ({
        username: user.username,
        wins: user.wins,
        totalpoints: user.totalpoints,
      }));
      res.json(leaderboardData);
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});