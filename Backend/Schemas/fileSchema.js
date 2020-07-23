const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const file_schema = new Schema({
  userID: { type: String, required: true },
  canvas: {
    images: {
      type: Object,
      required: true,
    },
    peragraph: { type: Object, required: true },
    song: { type: String },
    background: { type: Object, required: true },
  },
});

const fileSchema = mongoose.model("file", file_schema);

module.exports = fileSchema;
