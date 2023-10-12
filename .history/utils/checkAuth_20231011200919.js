import jwt from "jsonwebtoken";
export default (req, req, next) => {
  const token = req.headers.authorization;
  console.log(token);
  next()
};
