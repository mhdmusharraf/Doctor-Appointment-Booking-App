import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    // get token from header
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({ success: false, message: "Unauthorized, Login Again" });
    }
    // verify token
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
    // check if token is for admin
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Unauthorized, Login Again" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
