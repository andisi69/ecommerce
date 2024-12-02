import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser, faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, cartCount, token, setToken, navigate, setCartItems, search, setSearch } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-between py-5 px-10 font-medium bg-black'>
      <Link to="/">
        <h1 className='text-bold text-white'>Shopping</h1>
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p className='text-bold text-white'>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white' hidden />
        </NavLink>
        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p className='text-bold text-white'>All Products</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-white' hidden />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <div className='group relative'>
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => token ? null : navigate('/login')}
            alt="profile-icon"
            className='w-5 h-5 text-white cursor-pointer'
          />
          {token && (
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-black text-white rounded'>
                <p className='cursor-pointer hover:opacity-80'>My Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:opacity-80'>My Orders</p>
                <p onClick={logout} className='cursor-pointer hover:opacity-80'>Logout</p>
              </div>
            </div>
          )}
        </div>
        <Link to='/cart' className='relative'>
          <FontAwesomeIcon icon={faShoppingCart} alt="cart-icon" className='w-5 h-5 text-white min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center loading-4 bg-black text-white aspect-square rounded-full text-[10px]'>{cartCount()}</p>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setVisible(true)}
          alt="menu-icon"
          className='w-5 h-5 text-white cursor-pointer sm:hidden'
        />
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all duration-500 ease-in-out ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-white '>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <FontAwesomeIcon icon={faArrowRight} alt="dropdown-icon" className='h-4 rotate-180' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to="/" className="py-2 pl-6">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6">Collection</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
