import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import User from "./models/user.model.js";
import Feedback from "./models/feedback.model.js";
import Book from "./models/books.model.js";
import Request from "./models/request.model.js";
import Checkout from "./models/checkout.model.js";
import Budget from "./models/budget.model.js";
import Fine from "./models/fine.model.js";

dotenv.config();

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }); 
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
    const newUser = new User({ username, password, usertype });
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
});

app.get('/budget', async (req, res) => {
  try {
    // Fetch the existing budget
    const existingBudget = await Budget.findOne();

    if (!existingBudget) {
      // If no existing budget, return 0
      res.status(200).json({ amount: 0 });
    } else {
      res.status(200).json({ amount: existingBudget.amount });
    }
  } catch (error) {
    console.error('Error fetching existing budget:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/donate', async (req, res) => {
  try {
    const { amount } = req.body;
    const existingBudget = await Budget.findOne();

    if (!existingBudget) {
      const newBudget = new Budget({ amount });
      await newBudget.save();
    } else {
      existingBudget.amount += parseFloat(amount);
      
      await existingBudget.save();
    }

    res.status(201).json({ message: 'Budget amount added successfully' });
  } catch (error) {
    console.error('Error adding budget amount:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/removeFine', async (req, res) => {
  try {
    const { username } = req.body;
    await Fine.deleteOne({ studentName: username});

    res.status(201).json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error removing fine:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/users/staff/count', async (req, res) => {
  try {
    const staffCount = await User.countDocuments({ usertype: 'staff' });
    res.status(200).json({ count: staffCount });
  } catch (error) {
    console.error('Error counting staff members:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/users/manager/count', async (req, res) => {
  try {
    const managerCount = await User.countDocuments({ usertype: 'manager' });
    res.status(200).json({ count: managerCount });
  } catch (error) {
    console.error('Error counting managers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/addbook', async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const existingBook = await Book.findOne({ title, author, genre });
    if (existingBook) {
      return res.status(400).json({ error: 'Book already exists' });
    }
    const newBook = new Book({title,author,genre,});
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
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

app.get('/feedbackmanager', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch Feedbacks' });
  }
});


app.post('/addUser', async (req, res) => {
  const { username, password } = req.body;
  // const wins = 0;
  // const totalpoints = 0;
  const usertype = 'student';

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
  const newUser = new User({ username, password, usertype });
  await newUser.save();
  
  res.status(201).json({ message: 'User created successfully' });});

app.get('/getusers', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch Users' });
  }
});
app.post('/manageuser', async (req, res) => {
  try {
    const { username, password, usertype } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      existingUser.password = password;
      existingUser.usertype = usertype;

      await existingUser.save();
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      const newUser = new User({ username, password, usertype });
      await newUser.save();
      res.status(201).json({ message: 'User added successfully' });
    }
  } catch (error) {
    console.error('Error managing user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/feedback', async (req, res) => {
  try {
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
        return;
      }
      const newFeedback = new Feedback({
          studentId,
          staffId,
          staffRating,
          bookQuality,
          bookVariety,
          checkoutExperience
      });
      await newFeedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
      console.error('Error saving feedback:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});
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
app.post('/borrow', async (req, res) => {
  try {
    const { studentName, title, author, genre } = req.body;
    const existingRequest = await Request.findOne({ studentName, title,author,genre });
    await Book.deleteOne({ title, author, genre });

    if (existingRequest) {
      return res.status(400).json({ error: 'Request already exists' });
    }
    const newRequest = new Request({ studentName, title, author, genre });
    await newRequest.save();

    res.status(201).json({ message: 'Book borrowed successfully' });
  } catch (error) {
    console.error('Error borrowing book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getrequests', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
});
app.post('/processrequest', async (req, res) => {
  try {
    const { requestId, action } = req.body;
    const request = await Request.findById(requestId);
    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }
    if (action === 'accept') {
      const issueDate = new Date();
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 14);

      const newCheckout = new Checkout({
        studentName: request.studentName,
        title: request.title,
        author: request.author,
        genre: request.genre,
        issueDate,
        returnDate,
      });
      await Request.findByIdAndDelete(requestId);
      await newCheckout.save();
    } else if (action === 'reject') {
      await Request.findByIdAndDelete(requestId);
      const newBook = new Book({
        title: request.title,
        author: request.author,
        genre: request.genre,
      });
      await newBook.save();
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }
    res.status(200).json({ message: 'Request processed successfully' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/viewcheckout', async (req, res) => {
  try {
    const requests = await Checkout.find();
    res.json(requests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
});
app.post('/feedbackStaff', async (req, res) => {
  try {
    const { staffName } = req.body;
    const feedbackData = await Feedback.find({ staffId: staffName });
    if (feedbackData.length === 0) {
      return res.status(404).json({ error: 'No feedback found for the specified staff' });
    }
    res.status(200).json(feedbackData);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/viewcheckout/:username', async (req, res) => {
  try {
    const checkouts = await Checkout.find({ studentName: req.params.username });
    res.json(checkouts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch checkouts' });
  }
});
app.get('/fine/:username', async (req, res) => {
  try {
    const fine = await Fine.find({ studentName: req.params.username });
    res.json(fine);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch fine details' });
  }
});

app.post('/returnbook', async (req, res) => {
  try {
    const { checkoutId } = req.body;
    const checkout = await Checkout.findById(checkoutId);
    if (!checkout) {
      return res.status(404).json({ error: 'Checkout not found' });
    }
    const newBook = new Book({
      title: checkout.title,
      author: checkout.author,
      genre: checkout.genre,
    });
    const newreturnDate = new Date();
    var fine=0;
    if (checkout.returnDate<newreturnDate){
      const days=(newreturnDate-checkout.returnDate)/(1000*60*60*24);
      if(days>0){
        fine=Math.floor(days*50);     
        console.log(fine);
        const userdetail = await Fine.findOne({studentName:checkout.studentName});
        console.log(userdetail);
        if(!userdetail){
          console.log('inside');
          const newfine=new Fine({
            studentName:checkout.studentName,
            Fine:fine,
          });
          await newfine.save();
        }
        else{
          userdetail.Fine+=fine;
          await userdetail.save();
        }
      }

    }    
   
    await Checkout.findByIdAndDelete(checkoutId);
    await newBook.save();

    res.status(200).json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});