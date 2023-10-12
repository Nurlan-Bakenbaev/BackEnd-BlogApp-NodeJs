import jwt from "jsonwebtoken";
export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  res.send(token);

  if (token) {
    try {
        const decoded
    } catch (err) {
        
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
