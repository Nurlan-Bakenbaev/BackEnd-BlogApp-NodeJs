import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console("db ok"))
  .catch((err) => console.log(err));

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Nlan");
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
