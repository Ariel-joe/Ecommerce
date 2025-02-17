import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import { Title } from "../components/Title";
import { ProductCard } from "../components/ProductCard";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value ))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    setfilterProducts(products);
  }, []);


  useEffect(() => {
    console.log(category);
    

  }, [category])

  return (
    <>
      {/* filter option */}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl  flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>

          {/* filter by category */}

          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} /> Men
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} /> Women
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} /> Kids
              </p>
            </div>
          </div>

          {/* subcategory filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Topwear"} />{" "}
                Topwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Bottomwear"} />{" "}
                Bottomwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value={"Winterwear"} />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* collections */}

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* sorting */}
            <select className="border border-gray-300 text-sm px-2">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* collection of products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductCard
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Collection };
