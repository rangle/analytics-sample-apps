import { createEvents } from 'redux-beacon';
import {
  createVirtualPageView,
} from './event-definitions';

describe('createVirtualPageView', () => {
  describe('when the field has just started being filled', () => {
    describe('for string state properties (e.g. state.name)', () => {
      it('creates a virtual page view for GA', () => {
        const virtualPageView = createVirtualPageView('name', '/name-entered');
        const prevState = { name: '' };
        const action = {};
        const events = createEvents(virtualPageView, prevState, action);
        expect(events).toEqual([
          { hitType: 'pageview', page: '/name-entered' }
        ]);
      });
    });
    describe('for array state properties (e.g. state.cart)', () => {
      it('creates a virtual page view for GA', () => {
        const virtualPageView = createVirtualPageView('cart', '/item-added-to-cart');
        const prevState = { cart: [] };
        const action = {};
        const events = createEvents(virtualPageView, prevState, action);
        expect(events).toEqual([
          { hitType: 'pageview', page: '/item-added-to-cart' }
        ]);
      });
    });
  });
  describe('when the field has already been filled up a bit', () => {
    describe('for string state properties (e.g. state.name)', () => {
      it('does not create a virtual page view', () => {
        const virtualPageView = createVirtualPageView('name', '/name-entered');
        const prevState = { name: 'j' };
        const action = {};
        const events = createEvents(virtualPageView, prevState, action);
        expect(events).toEqual([]);
      });
    });
    describe('for array state properties (e.g. state.cart)', () => {
      it('does not create a virtual page view', () => {
        const virtualPageView = createVirtualPageView('cart', '/item-added-to-cart');
        const prevState = { cart: ['kskd898df'] };
        const action = {};
        const events = createEvents(virtualPageView, prevState, action);
        expect(events).toEqual([]);
      });
    });
  });
});
