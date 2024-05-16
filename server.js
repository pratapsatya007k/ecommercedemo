// require our packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportLocalMongoose = require("passport-local-mongoose");
const path=require("path");
const cors = require('cors');



const User=require("./src/models/user");
// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();

// Adjust the path as per your project structure
const authRoute = require("./src/routes/auth");
const Addcart=require("./src/routes/addcartroute");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'your-secret-key', // Change this to a secure secret
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(cors());


app.use(express.static(path.join(__dirname, "build")));
const Wish=require("./src/models/wish");

// Serve the index.html file for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.post('/api/items', async (req, res) => {
//   try {
//     const newItem = await Wish.create(req.body);
//     res.status(201).json(newItem);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });
// app.post('/insert', async (req, res) => {
//   try {
//     const { imgsrc, item } = req.body;
//     const newData = new Wish({ imgsrc, item });
//     await newData.save();
//     res.status(200).json({ message: 'Data inserted successfully' });
//     console.log("Data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).json({ error: 'Error inserting data' });
//   }
// });
app.post('/insert', async (req, res) => {
  try {
    // Create a new item instance
    const newItem = new Wish({
      itemid:req.body.itemid,
      item: req.body.item,
      imgsrc: req.body.imgsrc,
      username:req.body.username
    });
    // Save the item to the database
    await newItem.save();
    // Send a success response
    res.status(201).send('Item saved successfully');
  } catch (error) {
    // Send an error response
    res.status(500).send('Error saving item');
  }
});
// Define a route to retrieve data matching a key-value pair
app.get('/insert', async (req, res) => {
  const { key, value } = req.query; // Assuming key-value pair is passed as query parameters
  try {
    const regex = new RegExp(`^${value}$`, 'i'); // Case insensitive match with start and end anchors
    console.log('Regex:', regex); // Log the constructed regex
    const data = await Wish.find({ [key]: regex });
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
// Delete data endpoint
app.delete('/insert', async (req, res) => {
  const { key, value } = req.body;

  try {
    const result = await Wish.deleteMany({ [key]: value });
    res.status(200).json({ message: 'Data deleted successfully', deletedCount: result.deletedCount });
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Error deleting data' });
  }
});
app.use("/auth", authRoute);
// app.use("/",Addcart);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
