const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image_schema = new Schema({
  userId: { type: String, required: true },
  img: {
    type: String,
    required: true,
  },
});

const imageSchema = mongoose.model("images", image_schema);

module.exports = imageSchema;
