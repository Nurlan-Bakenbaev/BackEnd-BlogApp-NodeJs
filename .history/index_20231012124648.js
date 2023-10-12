import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import checkAuth from "./utils/checkAuth.js";

mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
// login
app.post("/auth/login", );

//sign in
app.post("/auth/register", registerValidation,)

// Инфо о User
app.get("/auth/user", checkAuth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const { passwordHash, ...userData } = user._doc;
    res.json({
      ...userData,
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Нет доступа",
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
