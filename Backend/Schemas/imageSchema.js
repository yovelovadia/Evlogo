const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image_schema = new Schema({
  userID: { type: String, required: true },
  img: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

const imageSchema = mongoose.model("images", image_schema);

module.exports = imageSchema;
