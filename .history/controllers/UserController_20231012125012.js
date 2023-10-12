import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import Use
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Register
export const register = async (req, res) => {
  try {
    // Проверка ошибок валидации
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }

    // Хэширование пароля
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Создание и сохранение пользователя
    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash,
    });
    const user = await doc.save();

    // Отправка успешного ответа с данными пользователя
    res.json({
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      avatarUrl: user.avatarUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Не удалось" });
  }
};
//Login
export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isValidPass = await bcrypt.compare(
      req.body.password,
      user.passwordHash
    );
    if (!isValidPass) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }
    //Jwtoken
    const secretKey = "10";

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ message: "Вход выполнен", token });
  } catch (err) {
    res.status(500).json({ message: "Could not connect" });
  }
};
// UserInfo
export const UserInfo = async (req, res) => {
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
};
