import PostModel from "../models/Post.js";

export const getAll = async (req, res) => {
  try {
    const post = await PostModel.find();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
    message:
    })
  }
};

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