import productModel from "../model/productModel.js";
import AppConstant from "../../../shared/utils/AppConstant.js";
import { CategoryModel } from "../model/CategoryModel.js";
import orderModel from "../model/OrderModel.js";
import slugify from "slugify";
import fs from "fs";
import braintree from "braintree";
import dotenv from "dotenv";
dotenv.config();
import { STATUS_CODES } from "http";

const ST = AppConstant.STATUS_CODE;
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHENT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});
export const productControllers = {
  //payment gateway token
  async brainTreeTokenController(req, res) {
    try {
      gateway.clientToken.generate({}, function (err, response) {
        if (err) {
          res
            .status(AppConstant.STATUS_CODE.SERVER_ERROR)
            .send({ success: false, message: err });
        } else {
          res.send(response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  //payment
  async brainTreePaymentController(req, res) {
    try {
      const { cart, nonce } = req.body;
      let total = 0;
      cart.map((i) => {
        total += i.price;
      });
      // console.log(total, cart);
      let newTransaction = gateway.transaction.sale(
        {
          amount: total,
          paymentMethodNonce: nonce,
          options: {
            submitForSettlement: true,
          },
        },
        async function (err, result) {
          if (result) {
            const order = await new orderModel({
              products: cart,
              payment: result,
              buyer: req.user._id,
            }).save();
            res.json({ ok: true });
          } else {
            console.log("error->", err);
            res
              .status(AppConstant.STATUS_CODE.SERVER_ERROR)
              .send({ success: false, message: err });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
  async getOrder(req, res) {
    try {
      const order = await orderModel
        .find({ buyer: req.user._id })
        .populate("products", "-imageUrl")
        .populate("buyer", "name");
      if (!order) {
        return res.status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND).send({
          success: false,
          message: "No orders found for this user",
        });
      }

      res.status(AppConstant.STATUS_CODE.SUCCESS).send({
        success: true,
        message: "Fetching orders successfully",
        orders: order,
      });
    } catch (error) {
      // console.log(error);
      res.status(500).send({
        success: false,
        message: "error in order route",
        error: error,
      });
    }
  },
  //get all order
  async getAllOrders(req, res) {
    try {
      const order = await orderModel
        .find({})
        .populate("products", "-imageUrl")
        .populate("buyer", "name")
        .sort({ createAt: -1 });
      // if (!order) {
      //   return res.status(AppConstant.STATUS_CODE.RESOURCE_NOT_FOUND).send({
      //     success: false,
      //     message: "No orders found for this user",
      //   });
      // }

      res.status(AppConstant.STATUS_CODE.SUCCESS).send({
        success: true,
        message: "Fetching orders successfully",
        orders: order,
      });
    } catch (error) {
      console.log(error);
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "Error in getting all Order", error });
    }
  },
  //order status update
  async updateOrderStatus(req, res) {
    try {
      const { orderId } = req.params;
      const { status } = req.body;
      const orders = await orderModel.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
      res
        .status(AppConstant.STATUS_CODE.SUCCESS)
        .send({ success: true, message: "status update successfully", orders });
    } catch (error) {
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "Server Error", error });
    }
  },
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

// payment gateway
