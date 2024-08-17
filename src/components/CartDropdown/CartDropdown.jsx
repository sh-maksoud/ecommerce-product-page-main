
// import React from 'react';
// import PropTypes from 'prop-types';
// import { useCart } from '../CartContext/CartContext'; 
// import './CartDropdown.css';

// const CartDropdown = ({ isOpen, toggleDropdown }) => {
//   const { cart } = useCart(); 

//   const getTotalPrice = (price, quantity) => price * quantity;

//   return (
//     <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
//       <button onClick={toggleDropdown} className="close-dropdown">×</button>
//       <div className="dropdown-header">
//         <h5 className="empty-cart-title">Cart</h5>
//         <hr className="empty-cart-line" />
//       </div>

//       {cart.length === 0 ? (
//         <div className="empty-cart">
//           <p className="empty-cart-message">Your cart is empty</p>
//         </div>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.images[0]} alt={item.name} />
//             <div className="item-details">
//               <p className='item'>{item.name}</p>
//               <p className='price-quantity'>
//                 <span className='price'>{`$${item.price.toFixed(2)}`}</span>
//                 <span className='quantity'>{` x${item.quantity}`} <span className='total-price'>{`$${getTotalPrice(item.price, item.quantity).toFixed(2)}`}</span></span>
//               </p>
//             </div>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && (
//         <div className="cart-total">
//           <button className="checkout-button">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// CartDropdown.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggleDropdown: PropTypes.func.isRequired,
// };

// export default CartDropdown;






// import React from 'react';
// import PropTypes from 'prop-types';
// import { useCart } from '../CartContext/CartContext'; 
// import './CartDropdown.css';

// const CartDropdown = ({ isOpen, toggleDropdown }) => {
//   const { cart, removeFromCart } = useCart();

//   const getTotalPrice = (price, quantity) => price * quantity;

//   return (
//     <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
//       <button onClick={toggleDropdown} className="close-dropdown">×</button>
//       <div className="dropdown-header">
//         <h5 className="empty-cart-title">Cart</h5>
//         <hr className="empty-cart-line" />
//       </div>

//       {cart.length === 0 ? (
//         <div className="empty-cart">
//           <p className="empty-cart-message">Your cart is empty</p>
//         </div>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.images[0]} alt={item.name} />
//             <div className="item-details">
//               <p className='item'>{item.name}</p>
//               <p className='price-quantity'>
//                 <span className='price'>{`$${item.price.toFixed(2)}`}</span>
//                 <span className='quantity'>{` x${item.quantity}`} <span className='total-price'>{`$${getTotalPrice(item.price, item.quantity).toFixed(2)}`}</span></span>
//               </p>
//             </div>
//             <button 
//               className="delete-button" 
//               onClick={() => removeFromCart(item.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && (
//         <div className="cart-total">
//           <button className="checkout-button">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// CartDropdown.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggleDropdown: PropTypes.func.isRequired,
// };

// export default CartDropdown;





import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../CartContext/CartContext'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartDropdown.css';

const CartDropdown = ({ isOpen, toggleDropdown }) => {
  const { cart, removeFromCart } = useCart(); 

  const getTotalPrice = (price, quantity) => price * quantity;

  return (
    <div className={`cart-dropdown ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleDropdown} className="close-dropdown">×</button>
      <div className="dropdown-header">
        <h5 className="empty-cart-title">Cart</h5>
        <hr className="empty-cart-line" />
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-cart-message">Your cart is empty</p>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.name} />
            <div className="item-details">
              <p className='item'>{item.name}</p>
              <p className='price-quantity'>
                <span className='price'>{`$${item.price.toFixed(2)}`}</span>
                <span className='quantity'>{` x${item.quantity}`} 
                  <span className='total-price'>{`$${getTotalPrice(item.price, item.quantity).toFixed(2)}`}</span>
                </span>
              </p>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

CartDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
};

export default CartDropdown;
