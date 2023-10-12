import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer);
  console.log(token);
  res.send(token);
};
