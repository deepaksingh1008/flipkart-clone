import { userModel } from "../model/userModel.js";
import {
  comparePassword,
  hashPassword,
} from "../../../shared/helper/authHelper.js";
import AppConstant from "../../../shared/utils/AppConstant.js";
import jwt from "jsonwebtoken";
const { STATUS_CODE } = AppConstant;

export const userController = {
  //register user
  async registerUser(req, res) {
    try {
      // console.log(req.body);
      const { name, email, password, phone, address, answer } = req.body;
      if (!name)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Name is required" });
      else if (!email)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Email is required" });
      else if (!password)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Password is Required" });
      else if (!phone)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .json({ success: false, message: "Phone number is required" });
      else if (!address)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: true, message: "Address field is empty" });
      else if (!answer)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "answer is required" });
      else {
        let userData = await userModel.find({ email });
        if (!userData.email) {
          const hashedPassword = await hashPassword(password);
          const newUser = await new userModel({
            name,
            email,
            phone,
            address,
            answer,
            password: hashedPassword,
          });
          //console.log(newUser);
          await newUser.save();
          res
            .status(STATUS_CODE.SUCCESS)
            .send({ success: true, message: "User Register Successfully" });
        } else {
          res
            .status(STATUS_CODE.RESOURCE_NOT_FOUND)
            .send({ success: false, message: "Email is Already Exist" });
        }
      }
    } catch (err) {
      res
        .status(STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: err });
    }
  },
  async userLogin(req, res) {
    //login
    try {
      const { email, password } = req.body;
      // console.log(req);
      if (!email)
        return res
          .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "enter your email" });
      else if (!password)
        return res
          .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "enter your password" });
      else {
        const user = await userModel.find({ email });
        // console.log(user);
        if (user.length > 0) {
          const hashedPassword = await comparePassword(
            password,
            user[0].password
          );
          if (hashedPassword) {
            const userWithoutPassword = await userModel
              .findOne({ email })
              .select("-password");
            const token = await jwt.sign(
              { _id: userWithoutPassword._id },
              process.env.JWT_SECRET,
              { expiresIn: "14d" }
            );
            return res
              .status(AppConstant.STATUS_CODE.SUCCESS)
              .send({ success: true, user: userWithoutPassword, token });
          } else {
            res
              .status(AppConstant.STATUS_CODE.UNAUTHORIZED)
              .send({ success: false, message: "password incorrect" });
          }
        } else {
          res.status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND).send({
            success: false,
            message: "user not exits on this email id",
          });
        }
      }
    } catch (err) {
      // console.log("error in login ", err);
      return res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .json({ success: false, message: "Login Server Error" });
    }
  },
  async testingRoute(req, res) {
    try {
      res.status(200).send("Testing Route is working");
    } catch (err) {
      return res.status(500).send({
        success: false,
        message: "Internal server error in testing route",
      });
    }
  },
  //forgot password
  async forgotPassword(req, res) {
    try {
      const { email, newPassword, answer } = req.body;
      if (!email)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Email field is required" });
      else if (!newPassword)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Please provide new password" });
      else if (!answer)
        res
          .status(STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "answer is required" });
      else {
        const user = await userModel.findOne({ email });
        if (!user) {
          res
            .status(STATUS_CODE.RESOURCE_NOT_FOUND)
            .send({ success: false, message: "user not found" });
        } else {
          if (user.answer === answer) {
            const hashedPassword = await hashPassword(newPassword);
            user.password = hashedPassword;
            await user.save();
            res.status(STATUS_CODE.SUCCESS).send({
              success: true,
              message: "password update successfully",
            });
          } else {
            res
              .status(STATUS_CODE.RESOURCE_NOT_FOUND)
              .send({ success: false, message: "Answer does not match" });
          }
        }
      }
    } catch (err) {
      //console.log(err);
      return res
        .status(STATUS_CODE.SERVER_ERROR)
        .json({ success: false, message: "forget server error", error: err });
    }
  },
  async getAllUser(req, res) {
    try {
      const user = await userModel.find({});
      res
        .status(STATUS_CODE.SUCCESS)
        .send({ success: true, message: "get all user", user });
    } catch (err) {
      res.status(STATUS_CODE.SERVER_ERROR).send({
        success: false,
        message: "server error in getting user",
        error: err,
      });
    }
  },
};
