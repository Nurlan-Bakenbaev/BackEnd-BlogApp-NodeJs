import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import { login, register, userInfo } from "/controllers/UserController.js";
mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
// login
app.post("/auth/login", login);

//sign in
app.post("/auth/register", registerValidation, register);

// Инфо о User
app.get("/auth/user", checkAuth, userInfo);

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
