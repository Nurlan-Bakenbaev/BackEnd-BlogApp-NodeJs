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
  });