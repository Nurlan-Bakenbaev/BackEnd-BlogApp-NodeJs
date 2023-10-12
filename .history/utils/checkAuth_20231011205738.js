import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  res.send(token);

  if(token){

  }else {
    res.status(403).json({
        message:
    })
  }
};
