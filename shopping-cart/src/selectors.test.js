import {
  getTotalPricePerItem,
  getTotalQuantityOfItem,
  getTotalPriceInCart,
  getFormattedPhoneNumber,
  getFormattedCreditCardNumber,
  getItems,
  getNumItemsInCart,
  getPaymentFormData,
  getItemsInCart,
  isEmailValid,
  isPhoneNumberValid,
  isCreditCardNumberValid,
  isBuyNowDisabled,
} from './selectors';

describe('getItemsInCart(state)', () => {
  it('returns the items in the cart', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
      items: {
        'o2fXhV': {
          name: 'Hubble',
          price: 14,
          img: 'http://solarsystem.nasa.gov/images/missions/galpic_hubble1.png',
          description: "The Hubble Space Telescope is a space telescope...",
        },
        'N0CEFy': {
          name: 'Curiosity',
          price: 2.6,
          img: 'http://solarsystem.nasa.gov/images/missions/galpic_msl1.png',
          description: "Curiosity is a car-sized robotic rover exploring...",
        },
      },
    };

    const result = getItemsInCart(state);

    expect(result).toEqual([
      {
        itemId: 'o2fXhV',
        name: 'Hubble',
        price: 14,
        quantity: 2,
      },
      {
        itemId: 'N0CEFy',
        name: 'Curiosity',
        price: 2.6,
        quantity: 1,
      },
    ]);
  });
});

describe('getPaymentFormData(state)', () => {
  it('returns the payment form data', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      phoneNumber: '1234567890',
      ccNumber: '44008800',
    };
    const result = getPaymentFormData(state);
    expect(result).toEqual({
      name: 'John Smith',
      email: 'john.smith@gmail.com',
      phoneNumber: '(123) 456-7890',
      ccNumber: '4400 8800',
    });
  });
});

describe('getNumItemsInCart(state)', () => {
  it('returns the total number of items in the cart', () => {
    const state = {
      cart: ['o2fXhV', 'N0CEFy', 'o2fXhV'],
    };
    const result = getNumItemsInCart(state);
    expect(result).toBe(3);
  });
});

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
    expect(result).toEqual('30.60');
  });
  it('rounds the total to the nearest 10th decimal', () => {
    const state = {
      cart: ['o2fXhV'],
      items: {
        'o2fXhV': { price: 14.3333 },
      },
    };
    const result = getTotalPriceInCart(state);
    expect(result).toBe('14.33');
  });
});

describe('getFormattedPhoneNumber(state)', () => {
  describe('for a three digit number: 123', () => {
    it('does not do any formatting: 123', () => {
      const state = { phoneNumber: '123' };
      const phoneNumber = getFormattedPhoneNumber(state);
      expect(phoneNumber).toEqual('123');
    });
  });
  describe('for a four digit number: 1234', () => {
    it('adds a space and some parens: (123) 4', () => {
      const state = { phoneNumber: '1234' };
      const phoneNumber = getFormattedPhoneNumber(state);
      expect(phoneNumber).toEqual('(123) 4');
    });
  });
  describe('for a 7 digit number: 1234567', () => {
    it('adds a dash: (123) 456-7', () => {
      const state = { phoneNumber: '1234567' };
      const phoneNumber = getFormattedPhoneNumber(state);
      expect(phoneNumber).toEqual('(123) 456-7');
    });
  });
  describe('for a 10 digit number: 1234567890', () => {
    it('is completely formatted: (123) 456-7890', () => {
      const state = { phoneNumber: '1234567890' };
      const phoneNumber = getFormattedPhoneNumber(state);
      expect(phoneNumber).toEqual('(123) 456-7890');
    });
  });
});

describe('getFormattedCreditCardNumber(state)', () => {
  it('separates the number it groups of four', () => {
    const state = {
      ccNumber: '123456789',
    };
    const result = getFormattedCreditCardNumber(state);
    expect(result).toEqual('1234 5678 9');
  });
});

describe('getItems(state)', () => {
  it('returns the items as an array of item objects', () => {
    const state = {
      items: {
        'o2fXhV': {
          name: 'Hubble',
          price: 14,
          img: 'http://solarsystem.nasa.gov/images/missions/galpic_hubble1.png',
          description: "The Hubble Space Telescope...",
        },
        'N0CEFy': {
          name: 'Curiosity',
          price: 2.6,
          img: 'http://solarsystem.nasa.gov/images/missions/galpic_msl1.png',
          description: "Curiosity is a car-sized robotic rover exploring...",
        },
      },
    };

    const result = getItems(state);

    expect(result).toEqual([
      {
        itemId: 'o2fXhV',
        name: 'Hubble',
        price: 14,
        img: 'http://solarsystem.nasa.gov/images/missions/galpic_hubble1.png',
        description: "The Hubble Space Telescope...",
      },
      {
        itemId: 'N0CEFy',
        name: 'Curiosity',
        price: 2.6,
        img: 'http://solarsystem.nasa.gov/images/missions/galpic_msl1.png',
        description: "Curiosity is a car-sized robotic rover exploring...",
      },
    ]);
  });
});

describe('isEmailValid(state)', () => {
  describe('when the email is an empty string', () => {
    it('returns true', () => {
      const email = '';
      const result = isEmailValid(email);
      expect(result).toBe(true);
    });
  });
  describe('when the email is "john"', () => {
    it('returns false', () => {
      const email = 'john';
      const result = isEmailValid(email);
      expect(result).toBe(false);
    });
  });
  describe('when the email is "john@whatever.', () => {
    it('returns false', () => {
      const email = 'john@whatever';
      const result = isEmailValid(email);
      expect(result).toBe(false);
    });
  });
  describe('when the email is "john@whatever.com"', () => {
    it('returns true', () => {
      const email = 'john@whatever.com';
      const result = isEmailValid(email);
      expect(result).toBe(true);
    });
  });
});

describe('isPhoneNumberValid(phoneNumber)', () => {
  describe('when the phone number is an empty string', () => {
    it('returns true', () => {
      const phoneNumber = '';
      const result = isPhoneNumberValid(phoneNumber);
      expect(result).toBe(true);
    });
  });
  describe('when the phone number is \"123\"', () => {
    it('returns false', () => {
      const phoneNumber = '123';
      const result = isPhoneNumberValid(phoneNumber);
      expect(result).toBe(false);
    });
  });
  describe('when the phone number is \"1234567890\"', () => {
    it('returns true', () => {
      const phoneNumber = '1234567890';
      const result = isPhoneNumberValid(phoneNumber);
      expect(result).toBe(true);
    });
  });
});

describe('isCreditCardNumberValid(ccNumber)', () => {
  describe('when the cc number is an empty string', () => {
    it('returns true', () => {
      const ccNumber = '';
      const result = isCreditCardNumberValid(ccNumber);
      expect(result).toBe(true);
    });
  });
  describe('when the cc number is less than 16 digits', () => {
    it('returns false', () => {
      const ccNumber = '440088000';
      const result = isCreditCardNumberValid(ccNumber);
      expect(result).toBe(false);
    });
  });
  describe('when the cc number is 16 digits', () => {
    it('returns true', () => {
      const ccNumber = '4716093059454647';
      const result = isCreditCardNumberValid(ccNumber);
      expect(result).toBe(true);
    });
  });
});

describe('isBuyNowDisabled(state, validationData)', () => {
  describe('when the name, email, telephone, cc number are blank', () => {
    it('returns true', () => {
      const state = { name: '', email: '', phoneNumber: '', ccNumber: '' };
      const result = isBuyNowDisabled(state);
      expect(result).toBe(true);
    });
  });
  describe('when the form is filled with non empty strings', () => {
    describe('when there is a validation error with the email', () => {
      it('returns true', () => {
        const state = { name: 'a', email: 'b', phoneNumber: 'c', ccNumber: 'd' };
        const validationData = {
          isEmailValid: false,
          isPhoneNumberValid: true,
          isCCNumberValid: true,
        };
        const result = isBuyNowDisabled(state, validationData);
        expect(result).toBe(true);
      });
    });
    describe('when there is a validation error with the phone number', () => {
      it('returns true', () => {
        const state = { name: 'a', email: 'b', phoneNumber: 'c', ccNumber: 'd' };
        const validationData = {
          isEmailValid: true,
          isPhoneNumberValid: false,
          isCCNumberValid: true,
        };
        const result = isBuyNowDisabled(state, validationData);
        expect(result).toBe(true);
      });
    });
    describe('when there is a validation error with the cc number', () => {
      it('returns true', () => {
        const state = { name: 'a', email: 'b', phoneNumber: 'c', ccNumber: 'd' };
        const validationData = {
          isEmailValid: true,
          isPhoneNumberValid: true,
          isCCNumberValid: false,
        };
        const result = isBuyNowDisabled(state, validationData);
        expect(result).toBe(true);
      });
    });
    describe('when there are no validation errors', () => {
      it('returns false', () => {
        const state = { name: 'a', email: 'b', phoneNumber: 'c', ccNumber: 'd' };
        const validationData = {
          isEmailValid: true,
          isPhoneNumberValid: true,
          isCCNumberValid: true,
        };
        const result = isBuyNowDisabled(state, validationData);
        expect(result).toBe(false);
      });
    });
  });
});
