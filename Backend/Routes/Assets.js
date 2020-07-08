const express = require("express");
const multer = require("multer");
const image = require("../Schemas/imageSchema");
const imageComprassion = require("../Functions/ImageComprassion");
const getStream = require("get-stream");
const fs = require("fs");

const storage = multer.diskStorage({
  //storing images
  destination: function (req, file, cb) {
    cb(null, "Assets/defaultImages");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

const router = express.Router();

router.use("/defaultImages", express.static("Assets/defaultImages")); // serve default images

// get all default images
router.get("/getDefaultImages", (req, res, next) => {
  try {
    image.find().then((data) => res.status(200).json(data));
  } catch (err) {
    console.log(err);
  }
});

router.post("/uploadImage", upload.single("image"), async (req, res, next) => {
  try {
    // const stream = getStream(req.file.stream);
    console.log(req.file);
    // for user to upload image
    const newImage = new image({
      name: req.body.name,
      img: `Assets\\defaultImages\\${req.file.originalname}`,
    });
    // imageComprassion(req.file.path);

    newImage.save().then((result) => {
      console.log(req.file);
    });
    res.status(201).json({ message: "New image added" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
