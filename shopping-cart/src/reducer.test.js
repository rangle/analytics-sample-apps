import { reducer } from './reducer';
import {
  ITEM_ADDED_TO_CART,
  NAME_ENTERED,
  EMAIL_ENTERED,
  PHONE_NUMBER_ENTERED,
  CREDIT_CARD_NUMBER_ENTERED,
  ROUTE_CHANGED,
} from './action-types';

describe('On ROUTE_CHANGED', () => {
  it('changes the route property in state', () => {
    const action = {
      type: ROUTE_CHANGED,
      payload: '/cart',
    };
    const state = { route: '/' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      route: '/cart',
    });
  });
});

describe('On ITEM_ADDED_TO_CART', () => {
  it('adds the item to the cart', () => {
    const action = {
      type: ITEM_ADDED_TO_CART,
      payload: 'o2fXhV',
    };
    const state = {
      cart: [],
      items: {
        'o2fXhV': {},
      },
    };

    const newState = reducer(state, action);

    const expectedState = {
      cart: ['o2fXhV'],
      items: {
        'o2fXhV': {},
      },
    };
    expect(newState).toEqual(expectedState);
  });
});

describe('On NAME_ENTERED', () => {
  it('updates the state with the name entered', () => {
    const action = {
      type: NAME_ENTERED,
      payload: 'Thom',
    };
    const state = {
      name: 'Tho',
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      name: 'Thom',
    });
  });
});

describe('On EMAIL_ENTERED', () => {
  it('udpates the state with the email entered', () => {
    const action = {
      type: EMAIL_ENTERED,
      payload: 'thomas@gma',
    };
    const state = { email: 'thomas@gm' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      email: 'thomas@gma',
    });
  });
  describe('When an email with some capital letters is entered', () => {
    it('lowercases the email before adding it to state', () => {
      const action = {
        type: EMAIL_ENTERED,
        payload: 'thoM',
      };
      const state = { email: 'tho' };

      const newState = reducer(state, action);

      expect(newState).toEqual({
        email: 'thom',
      });
    });
  });
});

describe('On PHONE_NUMBER_ENTERED', () => {
  it('updates the state with the number entered', () => {
    const action = {
      type: PHONE_NUMBER_ENTERED,
      payload: '(403)-708-820'
    };
    const state = { phoneNumber: '40370882' };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      phoneNumber: '403708820',
    });
  });
});

describe('On CREDIT_CARD_NUMBER_ENTERED', () => {
  it('updates the state with the credit card number', () => {
    const action = {
      type: CREDIT_CARD_NUMBER_ENTERED,
      payload: '4898 8888 88',
    };
    const state = { ccNumber: 4400880 };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ccNumber: '4898888888',
    });
  });
});
