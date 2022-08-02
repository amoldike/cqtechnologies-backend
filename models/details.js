const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema({
  fullName: { type: String },
  bookName: { type: String },
  author: { type: String },
  borrowd: { type: String },
  borrowdDate: { type: String },
  returnDate: { type: String },
});

module.exports = mongoose.model("details", detailsSchema);
