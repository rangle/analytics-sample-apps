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
  it('updates the state with the entered phone number', () => {
    const prevState = { phoneNumber: '' };
    const action = {
      type: 'PHONE_NUMBER_ENTERED',
      payload: '123',
    };
    const newState = reducer(prevState, action);
    expect(newState).toEqual({
      phoneNumber: '123',
    });
  });
  describe('when a letter is entered', () => {
    it('ignores the letter', () => {
      const prevState = { phoneNumber: '123' };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '123a',
      };
      const newState = reducer(prevState, action);
      expect(newState).toEqual(prevState);
    });
  });
  describe('when with formatting is entered', () => {
    it('strips away all the formatting', () => {
      const prevState = { phoneNumber: '1234567' };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '(123) 456-78'
      };
      const newState = reducer(prevState, action);
      expect(newState).toEqual({
        phoneNumber: '12345678',
      });
    });
  });
  describe('when more than 10 digits are entered', () => {
    it('ignores anything past the 10th digit', () => {
      const prevState = { phoneNumber: '1234567890' };
      const action = {
        type: 'PHONE_NUMBER_ENTERED',
        payload: '(123) 456-78909'
      };
      const newState = reducer(prevState, action);
      expect(newState).toEqual(prevState);
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
  describe('when the credit card number length is greater than 16', () => {
    it('does not add the extra digits to state', () => {
      const action = {
        type: CREDIT_CARD_NUMBER_ENTERED,
        payload: '4898 8888 8888 8888 9',
      };
      const state = { ccNumber: '4898888888888888' };

      const newState = reducer(state, action);

      expect(newState).toEqual({
        ccNumber: '4898888888888888',
      });
    });
  });
  describe('when a non-digit is entered', () => {
    it('does not add the non-digit to state', () => {
      const action = {
        type: CREDIT_CARD_NUMBER_ENTERED,
        payload: '4898 8888 8888 88j',
      };
      const state = { ccNumber: '48988888888888' };

      const newState = reducer(state, action);

      expect(newState).toEqual({
        ccNumber: '48988888888888',
      });
    });
  });
});
