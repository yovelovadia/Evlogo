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
    const img = `Assets/usersImages/${userID}/${
      fileName.split(".")[0] + ".webp"
    }`;

    if (fs.existsSync(img)) {
      console.log("exists");
      return res
        .status(200)
        .json({ message: "Image already exists", link: img });
    }

    // a prmoise
    const compressionPromise = new Promise(async (resolve, reject) => {
      const compressedImage = await imageComprassion(req.file.buffer); // comprassing the buffer and making it webp
      req.file.buffer = compressedImage; //switching
      fs.mkdirSync(`Assets/usersImages/${userID}`, { recursive: true }); //creates a dir if not exists
      fs.writeFile(img, req.file.buffer, "base64", () => resolve("resolved"));
    });

    try {
      const newImage = new imageSchema({
        userID,
        img,
      });

      compressionPromise
        .then(() => newImage.save()) //saves path in mongo
        .then(() =>
          res.status(200).json({ message: "Image uploaded", link: img })
        );
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Error occured uploading image" });
    }
  }
);

module.exports = router;
