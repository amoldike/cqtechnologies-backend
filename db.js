const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user_details");

module.exports = mongoose.connection;
