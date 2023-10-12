import express from "express";
const app = express();
app.use
app.get("/", (req, res) => {
  res.send("Hello Nlan");
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK");
});
