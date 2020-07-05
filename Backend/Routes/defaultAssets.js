const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "Backend/uploads" });
const image = require("../Schemas/imageSchema");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello nigger");
});

router.post("/uploadImage", upload.single("defaultImage"), (req, res, next) => {
  console.log(
    req.file.path +
      "       niggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggr"
  );
  const newImage = new image({
    name: req.body.name,
    img: req.file.path,
  });

  newImage.save().then((result) => {
    console.log(result);
  });
  res.status(201).json({ message: "New image added" });
});

module.exports = router;
