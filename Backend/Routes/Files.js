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
    console.log(file._id);

    file
      .save()
      .then(() =>
        res
          .status(200)
          .json({
            message: "Created",
            link: `http://localhost:3000/file/${file._id}`,
          })
      );
  } catch (err) {
    console.log(err);
  }
});

router.get("/serve/:_id", (req, res, next) => {
  try {
    const _id = req.params._id;
    fileSchema.findById(_id).then((data) => res.json(data));
  } catch (err) {}
});

module.exports = router;
