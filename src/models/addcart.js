const mongoose = require("mongoose");

const addcartSchema = new mongoose.Schema({
  itemid: { type: String, unique: true },
  imgsrc: { type: String, unique: true },
  username: String,
  item: String,
});

// Ensure indexes for uniqueness
addcartSchema.index({ itemid: 1 }, { unique: true });
addcartSchema.index({ imgsrc: 1 }, { unique: true });

module.exports = mongoose.model("Addcart", addcartSchema);
