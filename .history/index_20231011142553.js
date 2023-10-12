import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import User from "./models/User.js";

mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json(errors.array());
  }
const doc = new UserModel({
    email:req.body.email,
    fullName:req.body.fullName,
    avatarURL:req.body.avatarURL,
    


})

  res.json({
    success: true,
  });
});

app.listen(4000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
