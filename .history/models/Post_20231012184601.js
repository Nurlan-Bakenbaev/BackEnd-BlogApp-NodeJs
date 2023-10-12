import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: String,
      default: [],
    },
    viewsCounts: {
      type: Number,
      default: 0,
    },
    user

    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Post", PostSchema);
