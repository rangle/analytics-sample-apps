import { createEvents } from 'redux-beacon';
import {
  itemAddedToCart,

} from './event-definitions';

describe('itemAddedToCart', () => {
  describe('when the cart is empty', () => {
    it('creates a virtual page view: /item-added-to-cart', () => {
      const prevState = { cart: [] };
      const action = { type: 'ITEM_ADDED_TO_CART', payload: 'dk89fkj' };
      const events = createEvents(itemAddedToCart, prevState, action);
      expect(events).toEqual([
        { hitType: 'pageview', page: '/item-added-to-cart' },
      ]);
    });
  });
  describe('when the cart has an item in it', () => {
    it('does not create an event', () => {
      const prevState = { cart: ['dk89fkj'] };
      const action = { type: 'ITEM_ADDED_TO_CART', payload: 'dk89fkj' };
      const events = createEvents(itemAddedToCart, prevState, action);
      expect(events).toEqual([]);
    });
  });
});
