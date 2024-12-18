import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../controllers/products.js";

const v1Router = Router();

v1Router
  .route("/products")
  .get(getProducts)
  .post(addProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export { v1Router };
