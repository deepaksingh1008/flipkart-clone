import jwt from "jsonwebtoken";
import { userModel } from "../../module/user/model/userModel.js";

//protected route for token base

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // console.log(decode);
    req.user = decode;
    next();
  } catch (err) {
    return res
      .status(401)
      .send({ success: false, message: "Auth failed in json token", err: err });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    // console.log(req);
    const user = await userModel.findById(req.user._id);
    // console.log("user role=>", user.role);
    if (user.role != "admin") {
      res.status(400).send({ success: false, message: "Unauthorized access" });
    } else {
      next();
    }
  } catch (error) {
    // console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
