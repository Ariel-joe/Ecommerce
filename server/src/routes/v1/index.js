import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../controllers/products.js";
import {
  createUser,
  deleteUser,
  editUser,
  getusers,
} from "../../controllers/users.js";

const v1Router = Router();

v1Router
  .route("/products")
  .get(getProducts)
  .post(addProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

v1Router
  .route("/account")
  .post(createUser)
  .get(getusers)
  .patch(editUser)
  .delete(deleteUser);

export { v1Router };
