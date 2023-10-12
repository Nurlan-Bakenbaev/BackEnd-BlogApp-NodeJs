import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import bcrypt from "bcrypt";

mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.post("/auth/register", registerValidation, async (req, res) => {
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json(errors.array());
  }
  const doc = new UserModel({
    email: req.body.email,
    fullName: req.body.fullName,
    avatarURL: req.body.avatarURL,
    pa,
  });

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
