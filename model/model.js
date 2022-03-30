const mongoose = require("mongoose");

const dataScheema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Data", dataScheema);
