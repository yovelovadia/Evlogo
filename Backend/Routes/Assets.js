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
    fs.mkdirSync(`Assets/usersImages/${req.decoded.userId}`, {
      recursive: true,
    });
    cb(null, `Assets/usersImages/${req.decoded.userId}`);
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
// router.use(
//   `/usersImages/5f0ccd60d6e4cc5444187c4d`,
//   express.static(`Assets/usersImages/5f0ccd60d6e4cc5444187c4d`)
// );
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
    console.log("niggerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    const userId = req.decoded.userId;
    router.use(
      `/usersImages/${userId}`,
      express.static(`Assets/usersImages/${userId}`)
    );
    imageSchema.find({ userId }).then((data) => {
      console.log(data);
      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/uploadImage",
  [checkJWT, upload.single("image")],
  async (req, res, next) => {
    const userId = req.decoded.userId;

    try {
      console.log(
        req.decoded.userId + "okeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
      );

      // const stream = getStream(req.file.stream);
      console.log(req.decoded);
      console.log(req.file);
      const newImage = new imageSchema({
        userId,
        img: `Assets\\usersImages\\${userId}\\${req.file.originalname}`,
      });
      // imageComprassion(req.file.path);

      newImage.save().then((result) => {
        res.status(201).json({ message: "Image uploaded" });
      });
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
