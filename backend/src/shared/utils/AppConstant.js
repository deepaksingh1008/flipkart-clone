const AppConstant = {
  SCHEMA: {
    USER_SCHEMA: "users",
    PRODUCT_SCHEMA: "products",
    ORDER_SCHEMA: "orders",
    CATEGORY_SCHEMA: "categories",
  },
  STATUS_CODE: {
    SUCCESS: 200,
    SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    RESOURCE_NOT_FOUND: 404,
  },
  ROUTES: {
    USERS: {
      REGISTER: "/register",
      LOGIN: "/login",
      GET_ALL_USER: "/getAllUser",
      UPDATE_PROFILE: "/updateProfile",
      FORGET_PASSWORD: "/forgetPassword",
      GET_SINGLE_USER: "/get-single-user",
      TESTING_ROUTE: "/testingRoute",
    },
    PRODUCT: {
      ADD_PRODUCT: "/addProduct",
      UPDATE_PRODUCT: "/updateProduct/:pid",
      DELETE_PRODUCT: "/deleteProduct/:pid",
      GET_ALL_PRODUCT: "/getAllProducts",
      SEARCH_PRODUCT: "/searchProduct",
      GET_SINGLE_PRODUCT: "/productDetails/:id",
      GET_PHOTO: "/get-photo/:pid",
    },
    CATEGORY: {
      ADD_CATEGORY: "/addCategory",
      GET_ALL_CATEGORIES: "/getAllCategories",
      GET_SINGLE_CATEGORY: "/get-single-category/:slug",
      DELETE_CATEGORY: "/deleteCategory/:id",
      UPDATE_CATEGORY: "/updateCategory/:id",
    },
    ORDER: {},
  },
};

export default AppConstant;
