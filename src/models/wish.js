const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({
  itemid: { type: String, unique: true },
  imgsrc: { type: String, unique: true },
  username: String,
  item: String,
});

// Ensure indexes for uniqueness
wishSchema.index({ itemid: 1 }, { unique: true });
wishSchema.index({ imgsrc: 1 }, { unique: true });

module.exports = mongoose.model("Wish", wishSchema);
