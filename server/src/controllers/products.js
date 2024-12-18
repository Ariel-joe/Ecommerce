import { Product } from "../database/Models/product.js";

// getting all the products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      success: false,
      message: "failed!",
    });
  }
};

// adding a product
export const addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      success: false,
      message: "failed to add a product!",
    });
  }
};

// updating a product
export const updateProduct = async (req, res) => {
  const productId = req.query.id;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true }
    );

    if (!updateProduct) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      success: false,
      message: "Error! please try again",
    });
  }
};

// deleting a product

export const deleteProduct = async (req, res) => {
  const productId = req.query.id;

  try {
    const deletedP = await Product.findOneAndDelete({ _id: productId });

    res.status(200).json({
      success: true,
      data: deletedP,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      success: false,
      message: " please try again!",
    });
  }
};
