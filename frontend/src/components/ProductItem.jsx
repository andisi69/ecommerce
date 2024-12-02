import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const navigate = useNavigate(); 

  const handleIconClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative group">
        <div className="flex justify-center items-center h-48 overflow-hidden"> 
          <img
            src={image[0]}
            className="max-w-xs max-h-36 object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
            alt={name}
          />
        </div>
      </div>

      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <p className="pb-5 text-sm text-center text-gray-700">{name}</p>
        <div className="flex justify-between items-center px-4 py-2">
          <p className="text-sm font-bold">{currency}{price}</p>
          <FontAwesomeIcon
            icon={faEye}
            className="text-gray-700 bg-slate-200 px-3 py-1 rounded hover:bg-slate-600 hover:text-white transition-all"
            onClick={handleIconClick}
          />
        </div>
      </Link>
      <div className="flex justify-between items-center px-4 py-3 gap-2 sm:gap-4">
        <Link 
          to="/favourites" 
          className="text-gray-700 bg-slate-200 px-4 py-1 rounded hover:bg-slate-600 hover:text-white transition-all"
        >
          <FontAwesomeIcon 
            icon={faHeart} 
            className="text-gray" 
            alt="Favorites"
          />
        </Link>
        <Link 
          to="/cart" 
          className="text-gray-700 bg-slate-200 px-3 py-1 rounded hover:bg-slate-600 hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;


