import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://Nurlan:04121991polk@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console("db ok"))

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Nlan");
});

app.listen(3000, (err) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Nurlan",
    },
    "secret123"
  );
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
