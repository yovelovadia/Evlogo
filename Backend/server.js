const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

mongoose.set("useFindAndModify", false);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri || "mongodb://localhost/api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

//Import routes
const Assets = require("./Routes/Assets");
app.use("/Assets", Assets);

////////////////////////////////////////////////////////////////////////

connection
  .once("open", () => {
    console.log("MongoDB connection has been established successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
