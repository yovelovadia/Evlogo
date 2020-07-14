const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkJWT = (req, res, next) => {
  try {
    let token = undefined;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }
    const secret = process.env.JWT_KEY;
    const decoded = jwt.verify(token, secret);
    req.decoded = decoded;
    console.log(decoded);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "unAutorized" });
  }
};

module.exports = checkJWT;
