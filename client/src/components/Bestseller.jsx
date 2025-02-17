import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";

const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export { Bestseller };
