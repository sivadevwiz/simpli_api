const { response } = require("express");
const express = require("express");
const router = express.Router();
const signupModel = require("../models/userModel");
const users = require("../models/userModel")

router.get("/check", (req,res) => {
  res.send("server working");
});

router.post("/signup", (req, res) => {
  console.log("body", req.body);
  users.findOne({userName: req.body.userName}, (err, doc) => {
    if (err) throw err;
    if(doc) res.send("User Already exists");
    if(!doc) {
      const userData = new signupModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
      });
      userData
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));

    }
  });

  // const userData = new signupModel({
  //   userName: req.body.userName,
  //   password: req.body.password,
  // });
  // userData
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => res.json(err));
});

module.exports = router;
