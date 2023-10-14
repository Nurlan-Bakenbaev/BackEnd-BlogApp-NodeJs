import express from "express";
import mongoose from "mongoose";
import multer from "multer";
require('dotenv').config();
import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserControllers from "./controllers/UserController.js";
import * as PostControllers from "./controllers/PostController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";
require('dotenv').config();
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("db ok"))
  .catch((err) => console.log(err));

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
//user
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserControllers.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserControllers.register
);
app.get("/auth/user", checkAuth, UserControllers.userInfo);
//post
app.get("/posts", PostControllers.getAll);
app.get("/posts/:id", PostControllers.getOne);
app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostControllers.create
);
app.patch(
  "/posts/:id",
  checkAuth,
  handleValidationErrors,
  PostControllers.update
);
app.delete("/posts/:id", checkAuth, PostControllers.remove);

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
