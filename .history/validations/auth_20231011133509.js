import { body } from "express-validator";
const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("").isLength({ min: 5 }),

];
