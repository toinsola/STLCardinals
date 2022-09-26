
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PI = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  average: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
  }
});

module.exports = mongoose.model("PlayerInformation", PI);