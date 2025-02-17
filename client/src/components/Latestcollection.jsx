import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";

const Latestcollection = () => {

    const {products} = useContext(ShopContext)
  return (
    <>
      <div>this is the latest collection</div>
    </>
  );
};

export { Latestcollection };
