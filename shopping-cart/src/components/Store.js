import React from 'react';
import './Store.css';

function Item({ item, handleItemClick }) {
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
        <h4>{`$ ${price}`}</h4>
        <p>{description}</p>
        <button onClick={handleItemClick.bind(null, itemId)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export function Store({ items, handleItemClick }) {
  const renderedItems = items.map((item, index) =>
    <Item key={index} item={item} handleItemClick={handleItemClick} />
  );
  return (
    <div id="Store">{ renderedItems }</div>
  );
}
