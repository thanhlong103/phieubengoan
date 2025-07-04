const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ngoan: { type: Number, default: 0 },
  hu: { type: Number, default: 0 },
  image: { type: String, default: "" }, // Add image field
});

module.exports = mongoose.model("Person", personSchema);