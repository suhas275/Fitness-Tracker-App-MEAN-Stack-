const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();

mongoose
  .connect("mongodb://127.0.0.1/data", {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })

  .then(() => {
    console.log("connect");
  })

  .catch((error) => {
    console.log(error);
  });

const newUser = require("./models/user.details");
const app = express();
app.use(cors());
//post
app.post("/registered", jsonparser, (req, res) => {
  const data = new newUser({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    weight: req.body.weight,
    height: req.body.height,
    bmi: req.body.bmi,
    bmiResult: req.body.bmiResult,
    gender: req.body.gender,
    requireTrainer: req.body.requireTrainer,
    package: req.body.package,
    important: req.body.important,
    haveGymBefore: req.body.haveGymBefore,
    enquiryDate: req.body.enquiryDate,
  });
  data
    .save()
    .then((val) => console.log(val))
    .catch((error) => console.log(error));
});

// delete
app.delete("/registered/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const neu = await newUser.findByIdAndDelete(req.params.id);

    if (!req.params.id) {
      return res.status(300).send();
    }

    res.send(neu);
  } catch (e) {
    res.status(500).send(e);
  }
});
//get
app.get("/registered", async (req, res) => {
  var emp = await newUser.find();

  res.send(emp);
});

app.listen(3000);
