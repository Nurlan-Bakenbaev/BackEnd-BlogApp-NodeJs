import express from "express";
import mongoose from "mongoose";
import { loginValidation, registerValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserControllers from "./controllers/UserController.js";


mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.post("/auth/login",loginValidation, UserControllers.login);
app.post("/auth/register", registerValidation, UserControllers.register);
app.get("/auth/user", checkAuth, UserControllers.userInfo);
app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
