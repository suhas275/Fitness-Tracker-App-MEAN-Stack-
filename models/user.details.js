var mongoose = require("mongoose");

var newUserSchema = mongoose.Schema({
  firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      weight: [''],
      height: [''],
      bmi: [''],
      bmiResult: [''],
      gender: [''],
      requireTrainer: [''],
      package: [''],
      important: [''],
      haveGymBefore: [''],
      enquiryDate: ['']
});

var newUserModel = mongoose.model("details", newUserSchema, "details");
module.exports = newUserModel;
