import cartModel from "../model/Cartmodel.js";
import AppConstant from "../../../shared/utils/AppConstant";
export const categoryController = {
  async addToCategoryController(req, res) {
    try {
    } catch (error) {
      res
        .status(AppConstant.STATUS_CODE.SERVER_ERROR)
        .send({ success: false, message: "error in add to cart" });
    }
  },
};
