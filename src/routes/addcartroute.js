const router = require("express").Router();
const Addcart = require("../models/addcart"); // Import your DataModel
router.post('/addcart', async (req, res) => {
    try {
      // Create a new item instance
      const newItem = new Addcart({
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
  router.get('/addcart', async (req, res) => {
    const { key, value } = req.query; // Assuming key-value pair is passed as query parameters
    try {
      const regex = new RegExp(`^${value}$`, 'i'); // Case insensitive match with start and end anchors
      console.log('Regex:', regex); // Log the constructed regex
      const data = await Addcart.find({ [key]: regex });
      res.json(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.delete('/insert', async (req, res) => {
    const { key, value } = req.body;
  
    try {
      const result = await Wish.deleteMany({ [key]: value });
      res.status(200).json({ message: 'Data deleted successfully', deletedCount: result.deletedCount });
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'Error deleting data' });
    }
  });
  module.exports = router;