import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle Category Selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle Subcategory Selection
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Filter Products
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Filter by Search
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by Category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // Filter by Subcategory
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilteredProducts(productsCopy);
  };

  // Sort Products
  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // Initialize Products on Load
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Apply Filters on Change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // Sort Products on Change
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* Filter Options */}
      <div className="w-60">
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img 
            className={`h-3 sm:hidden transform ${showFilter ? 'rotate-90' : ''}`} 
            src={assets.dropdown_icon} 
            alt="Dropdown"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" value="Men" className="w-3" onChange={toggleCategory}/>Men
            </label>
            <label className="flex gap-2">
              <input type="checkbox" value="Women" className="w-3" onChange={toggleCategory}/>Women
            </label>
            <label className="flex gap-2">
              <input type="checkbox" value="Kids" className="w-3" onChange={toggleCategory}/>Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" value="Topwear" className="w-3" onChange={toggleSubCategory}/>Topwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" value="Bottomwear" className="w-3" onChange={toggleSubCategory}/>Bottomwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" value="Winterwear" className="w-3" onChange={toggleSubCategory}/>Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTION" />
          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
