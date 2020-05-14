const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tourSchema = mongoose.Schema(
  {
    city: {
      type: String,
      maxlength: 50,
    },

    name: {
      type: String,
      maxlength: 50,
    },
    info: {
      type: String,
      maxlength: 1000,
    },

    images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = { Tour };
