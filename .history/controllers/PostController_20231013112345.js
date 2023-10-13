import PostModel from "../models/Post.js";
// запрос на все стаьи
export const getAll = async (req, res) => {
  try {
    const post = await PostModel.find().populate("user").exec();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};

// запрос на одну статью
export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { viewsCounts: 1 } },
      {
        new: true,
      }
    );
    if (!doc) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }
    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить статью",
    });
  }
};
// удалить статью
export const remove = async (req, res) => {
  try {
    const postId = req.params.id;
    const doc = await PostModel.findByIdAndDelete(postId);

    if (!doc) {
      return res.status(404).json({ message: "Статья не найдена" });
    }

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось удалить статью",
    });
  }
};

//Создать стаью
export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      user: req.userId,
    });
    const post = await doc.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};
//обновления статьи
export const update = async (req, res) => {
  try {
    const postId = req.params.id;
    const doc = await PostModel.findByIdAndUpdate(postId);
    if (!doc) {
      return res.status(404).json({ message: "Статья не найдена" });
    }
  } catch (error) {}
};
