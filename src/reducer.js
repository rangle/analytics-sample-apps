import {
  ITEM_ADDED_TO_CART,
  NAME_ENTERED,
  EMAIL_ENTERED,
  PHONE_NUMBER_ENTERED,
  CREDIT_CARD_NUMBER_ENTERED,
} from './action-types';

const initialState = {
  cart: [],
  items: {
    'o2fXhV': {
      name: 'Hubble',
      price: 14,
      img: 'http://solarsystem.nasa.gov/images/missions/galpic_hubble1.png',
      description: `The Hubble Space Telescope is a space telescope
      that was launched into low Earth orbit in 1990, and remains in
      operation.`,
    },
    'ANs1tM': {
      name: 'Cassini',
      price: 3.3,
      img: 'http://solarsystem.nasa.gov/missions/cassini',
      description: `Cassini-Huygens is one of the most ambitious
      missions ever launched into space. Loaded with an array of
      powerful instruments and cameras, the spacecraft is capable of
      taking accurate measurements and detailed images in a variety of
      atmospheric conditions and light spectra.`,
    },
    'N0CEFy': {
      name: 'Curiosity',
      price: 2.6,
      img: 'http://solarsystem.nasa.gov/images/missions/galpic_msl1.png',
      description: `Curiosity is a car-sized robotic rover exploring
      Gale Crater on Mars as part of NASA's Mars Science Laboratory
      mission (MSL).`,
    },
  },
  name: '',
  email: '',
  phoneNumber: '',
  ccNumber: '',
};

export function reducer(state = initialState, action) {
  const update = sliceOfState => Object.assign({}, state, sliceOfState);
  switch (action.type) {
    case ITEM_ADDED_TO_CART:
      return update({ cart: state.cart.concat(action.payload) });
    case NAME_ENTERED:
      return update({ name: action.payload });
    case EMAIL_ENTERED:
      return update({ email: action.payload.toLowerCase() });
    case PHONE_NUMBER_ENTERED: {
      const phoneNumber = parseInt(action.payload.split('').reduce((result, value) =>
        !isNaN(value) ? result + value : result, ''));
      return update({ phoneNumber });
    }
    case CREDIT_CARD_NUMBER_ENTERED:
      return update({ ccNumber: parseInt(action.payload.replace(' ', '')) });
    default:
      return state;
  }
}
