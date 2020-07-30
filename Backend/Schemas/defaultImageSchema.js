const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const default_image_schema = new Schema({
  img: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

const defaultImageSchema = mongoose.model(
  "defaultImages",
  default_image_schema
);

module.exports = defaultImageSchema;
