const express = require("express");
const userSchema = require("../Schemas/userSchema");
const joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Router = express.Router();

const signUpSchema = joi.object({
  // checks given data and returns answer based on missing/wrong parts
  name: joi.string().required().min(2),
  email: joi.string().email().required(),
  password: joi.string().min(8).required().alphanum(),
  admin: joi.boolean().required(),
});

// sign up user using hapi joi for error response and hashing password for extra security
Router.post("/signup", async (req, res, next) => {
  try {
    const email = req.body.email.toLowerCase();
    const name = req.body.name.toLowerCase();
    const emailExists = await userSchema.findOne({
      email,
    });
    if (emailExists) {
      return res.status(422).json({ error: "User already exists" }); // check for existing email
    }

    const validation = signUpSchema.validate(req.body); // check for joi error validation and res based on that if needed
    if (validation.error) {
      return res
        .status(400)
        .json({ error: validation.error.details[0].message });
    }

    bcrypt.hash(req.body.password, 10, (error, hash) => {
      // hashing password
      if (error) {
        return res.status(500).json({ error });
      } else {
        const user = new userSchema({
          name,
          email,
          password: hash,
          admin: req.body.admin, // updates later on
        });
        user
          .save()
          .then(() => res.status(200).json({ message: "New user created" }));
      }
    });
  } catch (error) {
    () => {
      res.status(500).json({ error });
    };
  }
});

// login post comparing hash password
Router.post("/login", (req, res, next) => {
  try {
    const email = req.body.email.toLowerCase();
    userSchema.findOne({ email }).then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Wrong email or password" });
      } else {
        bcrypt.compare(req.body.password, user.password, (error, hash) => {
          if (error) {
            return res.status(500).json({ error: "Error occured try again" });
          }
          if (hash) {
            const secret = process.env.JWT_KEY;
            const token = jwt.sign(
              {
                email: user.email,
                userID: user._id,
                admin: user.admin,
              },
              secret,
              { expiresIn: "3000hr" }
            );

            return res.status(200).json({
              message: "Logged in",
              token,
            });
          }
          res.status(401).json({ error: "Wrong email or password" });
        });
      }
    });
  } catch (error) {
    () => {
      res.status(500).json({ error: "Error occured try again" });
    };
  }
});

module.exports = Router;
