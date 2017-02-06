import {
  itemAddedToCart,
  nameEntered,
  emailEntered,
  phoneNumberEntered,
  creditCardNumberEntered,
} from './action-creators';
import {
  ITEM_ADDED_TO_CART,
  NAME_ENTERED,
  EMAIL_ENTERED,
  PHONE_NUMBER_ENTERED,
  CREDIT_CARD_NUMBER_ENTERED,
} from './action-types';

describe('itemAddedToCart(itemId)', () => {
  it('creates the correct redux action', () => {
    const itemId = 'o2fXhV';
    const action = itemAddedToCart(itemId);
    expect(action).toEqual({
      type: ITEM_ADDED_TO_CART,
      payload: itemId,
    });
  });
});

describe('nameEntered(name)', () => {
  it('creates the correct redux action', () => {
    const action = nameEntered('Thom');
    expect(action).toEqual({
      type: NAME_ENTERED,
      payload: 'Thom',
    });
  });
});

describe('emailEntered(email)', () => {
  it('creates the correct redux action', () => {
    const action = emailEntered('thomas@gmai');
    expect(action).toEqual({
      type: EMAIL_ENTERED,
      payload: 'thomas@gmai',
    });
  });
});

describe('phoneNumberEntered(phoneNumber)', () => {
  it('creates the correct redux action', () => {
    const action = phoneNumberEntered('40370882');
    expect(action).toEqual({
      type: PHONE_NUMBER_ENTERED,
      payload: '40370882',
    });
  });
});

describe('creditCardNumberEntered(ccNumber)', () => {
  it('creates the correct redux action', () => {
    const action = creditCardNumberEntered('452088');
    expect(action).toEqual({
      type: CREDIT_CARD_NUMBER_ENTERED,
      payload: '452088',
    });
  });
});
