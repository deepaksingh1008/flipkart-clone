const AppConstant = {
  SCHEMA: {
    USER_SCHEMA: "users",
    PRODUCT_SCHEMA: "products",
    ORDER_SCHEMA: "orders",
    CATEGORY_SCHEMA: "categories",
    CART_SCHEMA: "carts",
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
      GET_PRODUCT: "/get-product/:slug",
    },
    CATEGORY: {
      ADD_CATEGORY: "/addCategory",
      GET_ALL_CATEGORIES: "/getAllCategories",
      GET_SINGLE_CATEGORY: "/get-single-category/:slug",
      DELETE_CATEGORY: "/deleteCategory/:id",
      UPDATE_CATEGORY: "/updateCategory/:id",
    },
    CART: {
      ADD_TO_CART: "/addToCart",
      GET_ALL_ITEM: "/getAllItemsInCart",
      REMOVE_FROM_CART: "/removeFromCart",
    },
    ORDER: {},
  },
};

export default AppConstant;
