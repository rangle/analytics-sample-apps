import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Store } from '../src/components/Store';

const items = [
  {
    itemId: 'o2fXhV',
    name: 'Hubble',
    price: '14',
    img: 'http://solarsystem.nasa.gov/images/missions/galpic_hubble1.png',
    description: "The Hubble Space Telescope...",
  },
  {
    itemId: 'N0CEFy',
    name: 'Curiosity',
    price: '2.6',
    img: 'http://solarsystem.nasa.gov/images/missions/galpic_msl1.png',
    description: "Curiosity is a car-sized robotic rover exploring...",
  },
];
const numItemsInCart = '3';

storiesOf('Store', module)
  .add('...', () => (
    <Store
      items={items}
      handleItemAddedToCart={action('item added to cart')}
      handleViewCart={action('view cart requested')}
      numItemsInCart={numItemsInCart}
    />
  ));
