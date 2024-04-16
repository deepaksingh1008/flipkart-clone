import productModel from "../model/productModel.js";
import AppConstant from "../../../shared/utils/AppConstant.js";
import { CategoryModel } from "../model/CategoryModel.js";
import slugify from "slugify";
import fs from "fs";
const ST = AppConstant.STATUS_CODE;
export const productControllers = {
  //create product
  async createProduct(req, res) {
    try {
      const { title, description, price, category, offer } = req.fields;
      const { imageUrl } = req.files;
      if (!title)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "title is required" });
      else if (!imageUrl && imageUrl.size > 1000000)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "image is required" });
      else if (!price)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "price is required" });
      else if (!category)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "category is required" });
      else if (!offer)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "offer is required" });
      else if (!description)
        res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "description is required" });
      else {
        const product = new productModel({
          ...req.fields,
          slug: slugify(title),
        });
        if (imageUrl) {
          product.imageUrl.data = fs.readFileSync(imageUrl.path);
          product.imageUrl.contentType = imageUrl.type;
        }
        await product.save();
        res
          .status(AppConstant.STATUS_CODE.SUCCESS)
          .send({ success: true, message: "product added successfully" });
      }
    } catch (error) {
      //   console.log(error);
      return res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in creating product" });
    }
  },
  //get all product
  async getAllProduct(req, res) {
    try {
      const product = await productModel
        .find({})
        .populate("category")
        .select("-imageUrl")
        .limit(12)
        .sort({ createdAt: -1 });
      return res.status(ST.SUCCESS).send({
        success: true,
        message: "fetch all product successfully",
        items: product,
      });
    } catch (error) {
      return res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in creating product" });
    }
  },
  //get single product
  async getSingleProduct(req, res) {
    try {
      const product = await productModel
        .findOne({ _id: req.params.id })
        .select("-imageUrl")
        .populate("category");
      return res.status(ST.SUCCESS).send({
        success: true,
        message: "fetch single product successfully",
        item: product,
      });
    } catch (error) {
      return res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in getting single Product" });
    }
  },
  //get photo
  async getPhoto(req, res) {
    try {
      const photo = await productModel
        .findById(req.params.pid)
        .select("imageUrl");
      if (!photo || !photo.imageUrl || !photo.imageUrl.data) {
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Photo not found" });
      }

      res.set("Content-type", photo.imageUrl.contentType);
      res.status(ST.SUCCESS).send(photo.imageUrl.data);
    } catch (error) {
      return res
        .status(ST.RESOURCE_NOT_FOUND)
        .send({ success: false, message: "error in getting photo" });
    }
  },
  //update product
  async updateProductController(req, res) {
    try {
      const { title, description, price, category, offer } = req.fields;
      const { imageUrl } = req.files;
      if (!title)
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Title is required" });
      else if (!description)
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "description is required" });
      else if (!category)
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "Category is required" });
      else if (!offer)
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "offer is required" });
      else if (!price)
        return res
          .status(ST.RESOURCE_NOT_FOUND)
          .send({ success: false, message: "price is required" });
      else {
        const product = await productModel.findByIdAndUpdate(
          req.params.pid,
          { ...req.fields, slug: slugify(title) },
          { new: true }
        );
        if (imageUrl) {
          product.imageUrl.data = fs.readFileSync(imageUrl.path);
          product.imageUrl.contentType = imageUrl.type;
        }
        await product.save();
      }
    } catch (error) {
      return res
        .status(ST.RESOURCE_NOT_FOUND)
        .send({ success: false, message: "error in update product" });
    }
  },
  //delete product
  async deleteProductController(req, res) {
    try {
      await productModel.findByIdAndDelete(req.params.pid).select("-imageUrl");
      res
        .status(ST.SUCCESS)
        .send({ success: true, message: "product delete successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(ST.RESOURCE_NOT_FOUND)
        .send({ success: false, message: "error in delete product" });
    }
  },
  async getSingleProductBySlug(req, res) {
    try {
      const cat = await CategoryModel.findOne({ slug: req.params.slug });
      const product = await productModel
        .find({ category: cat._id })
        .select("-imageUrl")
        .populate("category");
      return res.status(ST.SUCCESS).send({
        success: true,
        message: "fetch single product successfully",
        item: product,
      });
    } catch (error) {
      return res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in getting single Product" });
    }
  },
};
