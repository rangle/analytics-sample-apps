import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Cart } from '../src/components/Cart';

const total = 16.6;
const itemsInCart = [
  {
    itemId: 'o2fXhV',
    name: 'Hubble',
    price: 14,
    quantity: 3,
  },
  {
    itemId: 'N0CEFy',
    name: 'Curiosity',
    price: 2.6,
    quantity: 2,
  },
];

storiesOf('Cart', module)
  .add('...', () => (
    <Cart
      total={total}
      itemsInCart={itemsInCart}
      handleCheckout={action('checkout clicked')}
    />
  ));
