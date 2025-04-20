import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image = [], name = 'No Name', price = 0 }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img 
                    src={image?.[0] || '/placeholder.png'} 
                    alt={name || 'Product'} 
                    className="hover:scale-105 transition-transform duration-300 ease-in-out w-full h-auto"
                />
            </div>
            <p className="pt-3 pb-1 text-sm truncate">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;
