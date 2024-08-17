
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import IconCart from '../../../public/images/icon-cart.svg';
import Avatar from '../../../public/images/image-avatar.png';
import MenuIcon from '../../../public/images/icon-menu.svg';
import CloseIcon from '../../../public/images/icon-close.svg';
import { useCart } from '../CartContext/CartContext';
import CartDropdown from '../CartDropdown/CartDropdown'; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); 
  const { cart } = useCart();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <div className="menu-toggler" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu Icon" />
      </div>
      <div className="logo" >
      <Link to="/" className="logo-link">sneakers</Link>
      </div>
      <div className="linkss">
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="close-icon" onClick={toggleMenu}>
            <img src={CloseIcon} alt="Close Menu" />
          </li>
          <li><Link to="/collections">Collections</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="icons">
        <i className="cart-icon" onClick={toggleCart}>
          <img src={IconCart} alt="Cart" />
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </i>
        {isCartOpen && <CartDropdown isOpen={isCartOpen} toggleDropdown={toggleCart} />} 
        <img src={Avatar} alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
