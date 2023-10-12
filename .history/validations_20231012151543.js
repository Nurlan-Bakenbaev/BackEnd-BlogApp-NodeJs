import { body } from "express-validator";



export const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
];
export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatar").optional().isURL(),
];

export const postCreateValidation = [
  body("title",'Введите Заголовок статьи').isLength({min:3}).str
  body("password").isLength({ min: 5 }),
  body("fullName").isLength({ min: 3 }),
  body("avatar").optional().isURL(),
];
