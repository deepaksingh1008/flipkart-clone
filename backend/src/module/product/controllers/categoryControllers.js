import { CategoryModel } from "../model/CategoryModel.js";
import slugify from "slugify";
import AppConstant from "../../../shared/utils/AppConstant.js";

export const categoryControllers = {
  async createCategory(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res
          .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Name is required." });
      }
      let category = await CategoryModel.findOne({ name });
      if (category) {
        return res
          .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: false });
      } else {
        const newCategory = await new CategoryModel({
          name,
          slug: slugify(name),
        });
        await newCategory.save();
        res
          .status(AppConstant.STATUS_CODE.SUCCESS)
          .send({ success: true, message: "Category created successfully" });
      }
    } catch (error) {
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "Error in Creating Category", error });
    }
  },
  async getAllCategory(req, res) {
    // get all category
    try {
      const category = await CategoryModel.find({});
      res
        .status(AppConstant.STATUS_CODE.SUCCESS)
        .send({ success: true, message: "Get All Category", data: category });
    } catch (err) {
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "Server error in getting category" });
    }
  },
  async updateCategory(req, res) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const category = await CategoryModel.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res
        .status(AppConstant.STATUS_CODE.SUCCESS)
        .send({ success: true, message: "Category updated Successfully" });
    } catch (err) {
      res
        .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
        .send({ success: true, message: "Server Error update Category" });
    }
  },
  async deleteCategory(req, res) {
    //delete by id
    try {
      const { id } = req.params;
      await CategoryModel.findByIdAndDelete(id);
      res
        .status(AppConstant.STATUS_CODE.SUCCESS)
        .send({ success: true, message: "Category Delete Successfully" });
    } catch (err) {
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in delete api", err });
    }
  },
  async getSingleCategory(req, res) {
    try {
      const category = await CategoryModel.findOne({ slug: req.params.slug });
      if (!category) {
        res
          .status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND)
          .send({ success: true, message: "No such Category available." });
      }
      return res.status(AppConstant.STATUS_CODE.SUCCESS).send({
        success: false,
        message: "successfully got single data",
        data: category,
      });
    } catch (error) {
      res.status(AppConstant.STATUS_CODE.SERVER_ERROR).send({
        success: false,
        message: "Error in get single category",
        error,
      });
    }
  },
};
