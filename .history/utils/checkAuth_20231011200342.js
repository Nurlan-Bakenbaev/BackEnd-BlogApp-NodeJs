import jwt from "jsonwebtoken";
export default (res, req, next) => {
  const token = req.headers.authorization;
  console.log(token);
  next()
};
