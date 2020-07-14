const express = require("express");
const multer = require("multer");
const imageSchema = require("../Schemas/imageSchema");
const checkJWT = require("../Functions/checkJWT");
const imageComprassion = require("../Functions/ImageComprassion");
const getStream = require("get-stream");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  //storing images
  destination: function (req, file, cb) {
    cb(
      null,
      fs.mkdirSync(`Assets/usersImages/${req.decoded.userId}`, {
        recursive: true,
      })
    );
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
    imageSchema.find().then((data) => res.status(200).json(data));
  } catch (err) {
    console.log(err);
  }
});

router.get("/getUserImages", checkJWT, (req, res, next) => {
  try {
    const userId = req.decoded.userId;
    imageSchema.find({ userId }).then((data) => res.status(200).json(data));
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/uploadImage",
  [checkJWT, upload.single("image")],
  async (req, res, next) => {
    try {
      // const stream = getStream(req.file.stream);
      console.log(req.decoded);
      console.log(req.file);
      // for user to upload image
      const newImage = new imageSchema({
        name: req.body.name,
        img: `Assets\\usersImages\\${req.decoded.userId}\\${req.file.originalname}`,
      });
      // imageComprassion(req.file.path);

      newImage.save().then((result) => {
        res.status(200).json({ message: "Image uploaded" });
      });
      res.status(201).json({ message: "New image added" });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
