import React from 'react';
import { Button } from './Button';
import './Store.css';

function Item({ item, handleItemAddedToCart }) {
  const {
    description,
    img,
    name,
    price,
    itemId,
  } = item;
  return (
    <div className="Item">
      <div>
        <img src={img} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h4>$ {price}</h4>
        <p>{description}</p>
        <div style={{ width: '150px' }}>
          <Button onClick={handleItemAddedToCart.bind(null, itemId)}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Store({
  items,
  handleItemAddedToCart,
  handleViewCart,
  numItemsInCart,
}) {
  const renderedItems = items.map((item, index) =>
    <Item
      key={index}
      item={item}
      handleItemAddedToCart={handleItemAddedToCart}
    />
  );
  return (
    <div id="Store">
      <div className="items-in-cart-display">
        Items in Cart: {numItemsInCart}
      </div>
      { renderedItems }
      <Button onClick={handleViewCart}>
        View Cart
      </Button>
    </div>
  );
}
