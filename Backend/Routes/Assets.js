const express = require("express");
const multer = require("multer");
const imageSchema = require("../Schemas/imageSchema");
const checkJWT = require("../Functions/checkJWT");
const imageComprassion = require("../Functions/ImageComprassion");
const getStream = require("get-stream");
const fs = require("fs");

const storage = multer.diskStorage({
  //storing images
  destination: function (req, file, cb) {
    fs.mkdirSync(`Assets/usersImages/${req.decoded.userID}`, {
      recursive: true,
    });
    cb(null, `Assets/usersImages/${req.decoded.userID}`);
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

router.get("/getDefaultImages", (req, res, next) => {
  try {
    imageSchema
      .find({ userID: "default" })
      .then((data) => res.status(200).json(data));
  } catch (err) {
    console.log(err);
  }
});

router.get("/getUserImages", checkJWT, (req, res, next) => {
  try {
    const userID = req.decoded.userID;
    router.use(
      `/usersImages/${userID}`,
      express.static(`Assets/usersImages/${userID}`)
    );
    imageSchema.find({ userID }).then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/uploadImage",
  [checkJWT, upload.single("image")],
  (req, res, next) => {
    const userID = req.decoded.userID;

    try {
      // const stream = getStream(req.file.stream);
      console.log(req.decoded);
      console.log(req.file);
      const newImage = new imageSchema({
        userID,
        img: `Assets\\usersImages\\${userID}\\${req.file.originalname}`,
      });
      // imageComprassion(req.file.path);

      newImage.save().then((result) => {
        res.status(201).json({ message: "Image uploaded" });
      });
    } catch (err) {
      res.status(500).json({ error: "Error occured try again" });
    }
  }
);

router.post("/uploadUrlImage", checkJWT, (req, res, next) => {
  const userID = req.decoded.userID;
  const img = req.body.imageUrl;
  console.log(img);
  console.log("blaaaaaaaaaaaaaaaaaaaaaaaaaa");
  try {
    const newImage = new imageSchema({
      userID,
      img,
    });

    newImage.save().then((result) => {
      res.status(201).json({ message: "Image Added" });
    });
  } catch (err) {
    res.status(500).json({ error: "Error occured try again" });
  }
});

module.exports = router;
