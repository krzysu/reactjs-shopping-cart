import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency }) => {
    return (
        <div className="cart-item">
          <span className="cart-item__name">{name}</span>
          <span className="cart-item__price">{price} {currency}</span>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default CartItem;
