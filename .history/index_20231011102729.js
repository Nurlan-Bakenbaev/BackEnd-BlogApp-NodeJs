import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Nlan");
});

app.listen(3000, (err) => {
  const token = jwt.sign({
    email: req.body.email,
    fullName: "Nurlan",
  },);
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
