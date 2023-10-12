import { body } from "express-validator";
const registerValidation = [body("email").isEmail(),
body("password").isL,

];
