const mongoose = require("mongoose");

const dataScheema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Data", dataScheema);
