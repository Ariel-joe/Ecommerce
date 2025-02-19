import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "sonner";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Ksh ";
  const delivery_fee = 1000;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  // function for searching a product

  const filterProducts = () => {
    if (!search.trim()) return products; // If search is empty, return all products
  
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  
  // func repsoible for adding items to cart
  const addToCart = async (itemId, size) => {
    if (size.length == 0) {
      return toast.error("please add the size!");
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);
    toast.success("item added to cart")
  };

  const getCartCount = () => {

    let totalCount = 0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item] 
          }
        } catch (error) {
          
        }
      }
    }

    return totalCount;
  }




  const value = {
    filterProducts,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export { ShopContextProvider };
