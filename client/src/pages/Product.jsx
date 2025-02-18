import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopContext } from "../context/Shopcontext";

const Product = () => {

  const {productId} = useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)


  const fetchProductData = async () => {

  }

  useEffect(() => {
    fetchProductData();


  }, [productId])
  
  return (
    <>
      <div></div>
    </>
  );
};

export { Product };
