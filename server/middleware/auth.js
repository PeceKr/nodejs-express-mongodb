import jwt from "jsonwebtoken";
export default function(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.JTW_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("Invalid token");
  }
}
