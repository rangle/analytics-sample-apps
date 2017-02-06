import React from 'react';
import { Button } from './Button';
import './Cart.css';

export function Cart({ total, itemsInCart, handleCheckout }) {
  const items = itemsInCart.map((item, index) => (
    <div className="shopping-cart-item" key={index}>
      {item.quantity} {item.name}'s at ${item.price} per {item.name}
    </div>
  ));

  return (
    <div id="Cart">
      <h1>Shopping Cart</h1>
      {items}
      <div className="shopping-cart-total">
        Total: ${total}
      </div>
      <Button onClick={handleCheckout}>
        CHECKOUT
      </Button>
    </div>
  );
}
