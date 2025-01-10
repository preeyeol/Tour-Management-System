const mongoose = require("mongoose");

const tour = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  is_available: { type: Boolean, required: true },
});

const tourSchema = mongoose.model("tour", tour);

module.exports = tourSchema;
