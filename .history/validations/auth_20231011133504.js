import { body } from "express-validator";
const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  b("password").isLength({ min: 5 }),

];
