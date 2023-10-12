import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const token = (req.headers.authorization || '').repl;
  console.log(token);
  res.send(token);
};
