const express = require("express");
const checkJWT = require("../Functions/checkJWT");
const fileSchema = require("../Schemas/fileSchema");
const router = express.Router();

router.post("/create", checkJWT, (req, res, next) => {
  try {
    const canvas = req.body.canvas;
    const userID = req.decoded.userID;

    const file = new fileSchema({
      userID,
      canvas,
    });

    file.save().then(() =>
      res.status(200).json({
        message: "Created",
        link: `https://evlogo.herokuapp.com/file/${file._id}`,
      })
    );
  } catch (err) {
    res.status(500).json({ error: "Error accoured try again" });
  }
});

router.get("/serve/:_id", (req, res, next) => {
  try {
    const _id = req.params._id;
    fileSchema.findById(_id).then((data) => res.json(data));
  } catch (err) {}
});

module.exports = router;
