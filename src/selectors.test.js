import {
  getTotalPricePerItem,
  getTotalQuantityOfItem,
  getTotalPriceInCart,
  getFormattedPhoneNumber,
  getFormattedCreditCardNumber,
} from './selectors';

describe('getTotalPricePerItem(state, item)', () => {
  it('sums the total price per item', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
      items: {
        'o2fXhV': { price: 14 },
        'ANs1tM': { price: 3.3 },
        'N0CEFy': { price: 2.6 },
      },
    };
    const result = getTotalPricePerItem(state, 'o2fXhV');
    expect(result).toBe(28);
  });
});

describe('getTotalQuantityOfItem(state, item)', () => {
  it('returns the total quantity of a given item in the cart', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
    };
    const result = getTotalQuantityOfItem(state, 'o2fXhV');
    expect(result).toBe(2);
  });
});

describe('getTotalPriceInCart(state)', () => {
  it('returns the total price of items in the cart', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
      items: {
        'o2fXhV': { price: 14 },
        'ANs1tM': { price: 3.3 },
        'N0CEFy': { price: 2.6 },
      },
    };
    const result = getTotalPriceInCart(state);
    expect(result).toBe(30.6);
  });
});

describe('getFormattedPhoneNumber(state)', () => {
  describe('When the number is complete', () => {
    it('returns the formatted phone number', () => {
      const state = {
        phoneNumber: 4037081234,
      };
      const result = getFormattedPhoneNumber(state);
      expect(result).toEqual('(403)-708-1234');
    });
  });
  describe('When only the first two numbers have been entered', () => {
    it('returns the unformatted phone number as a string', () => {
      const state = {
        phoneNumber: 40,
      };
      const result = getFormattedPhoneNumber(state);
      expect(result).toEqual('40');
    });
  });
  describe('When the first three numbers have been entered', () => {
    it('returns the formatted phone number', () => {
      const state = {
        phoneNumber: 403,
      };
      const result = getFormattedPhoneNumber(state);
      expect(result).toEqual('(403)');
    });
  });
  describe('When the fourth number is entered', () => {
    it('returns the formatted phone number', () => {
      const state = {
        phoneNumber: 4037,
      };
      const result = getFormattedPhoneNumber(state);
      expect(result).toEqual('(403)-7');
    });
  });
  describe('When the seventh number is entered', () => {
    it('returns the formatted phone number', () => {
      const state = {
        phoneNumber: 4037088,
      };
      const result = getFormattedPhoneNumber(state);
      expect(result).toEqual('(403)-708-8');
    });
  });
});

describe('getFormattedCreditCardNumber(state)', () => {
  it('separates the number it groups of four', () => {
    const state = {
      ccNumber: 123456789,
    };
    const result = getFormattedCreditCardNumber(state);
    expect(result).toEqual('1234 5678 9');
  });
});
