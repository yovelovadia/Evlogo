const express = require("express");
const multer = require("multer");
const imageSchema = require("../Schemas/imageSchema");
const checkJWT = require("../Functions/checkJWT");
const imageComprassion = require("../Functions/ImageComprassion");
const fs = require("fs");
const router = express.Router();

// turn the image to buffer for comprassing after
const upload = multer({
  storage: multer.memoryStorage(),
});

router.use("/", express.static("Assets/")); // serve default images

//getting all the default images
router.get("/getDefaultImages", (req, res, next) => {
  try {
    imageSchema
      .find({ userID: "default" })
      .then((data) => res.status(200).json(data));
  } catch (err) {
    console.log(err);
  }
});

// get user images based on the id of the decoded jwt
router.get("/getUserImages", checkJWT, (req, res, next) => {
  try {
    const userID = req.decoded.userID;
    imageSchema.find({ userID }).then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

//uploading url saving it to database only
router.post("/uploadUrlImage", checkJWT, (req, res, next) => {
  const userID = req.decoded.userID;
  const img = req.body.imageUrl;
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

router.post(
  "/uploadImage",
  [checkJWT, upload.single("image")],
  async (req, res, next) => {
    const userID = req.decoded.userID;
    const fileName = req.file.originalname;

    try {
      await imageComprassion(req.file.buffer) // comprassing the buffer and making it jpg
        .then((compressedImage) => (req.file.buffer = compressedImage)) //switching
        .then(
          () =>
            fs.mkdirSync(`Assets/usersImages/${userID}`, { recursive: true }) //creates a dir if not exists
        )
        .then(() => {
          fs.writeFile(
            `Assets/usersImages/${userID}/${fileName.slice(0, -3) + "webp"}`, //write the buffer to there
            req.file.buffer,
            "base64",
            () => console.log("new image added")
          );
        });

      const img = `Assets/usersImages/${userID}/${req.file.originalname.slice(
        0,
        -3
      )}webp
      `;

      const newImage = new imageSchema({
        userID,
        img,
      });

      newImage
        .save()
        .then(() =>
          res
            .status(200)
            .json({ message: "Image uploaded", link: newImage.img })
        ) // saving path in database
        .catch((err) => {
          if (err.name === "MongoError") {
            res.status(409).json({
              error: "Image name already exists, check again",
              link: newImage.img,
            });
          }
          res.status(500).json({ error: "Error occured try again" });
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error occured try again" });
    }
  }
);

module.exports = router;
