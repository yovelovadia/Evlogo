const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  name: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  admin: { type: Boolean, required: true },
});

module.exports = mongoose.model("user", userSchema);
