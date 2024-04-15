import mongoose from "mongoose";
import AppConstant from "../../../shared/utils/AppConstant";
// const orderSchema = new mongoose.Schema({
//   shippingInfo: {
//     address: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     state: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//     pinCode: {
//       type: Number,
//       required: true,
//     },
//     phoneNo: {
//       type: Number,
//       required: true,
//     },
//   },
//   orderItem: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       price: {
//         type: Number,
//         required: true,
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//       image: {
//         type: String,
//         required: true,
//       },
//       product: {
//         type: mongoose.Schema.ObjectId,
//         ref: "Product",
//         required: true,
//       },
//     },
//   ],
//   user: {
//     type: mongoose.Schema.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   paymentInfo: {
//     id: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//   },
//   paidAt: {
//     type: Date,
//     required: true,
//   },
//   totalPrice: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
//   orderStatus: {
//     type: String,
//     required: true,
//     default: "Processing",
//   },
//   deliveredAt: Date,
//   shippingAt: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model(AppConstant.SCHEMA.ORDER_SCHEMA, orderSchema);

export default orderModel;
