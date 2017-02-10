export function getTotalPricePerItem(state, item) {
  return state.cart.reduce((total, itemId) =>
    itemId === item ? total + state.items[itemId].price : total, 0);
}

export function getTotalQuantityOfItem(state, item) {
  return state.cart.reduce((total, itemId) =>
    itemId === item ? total + 1 : total, 0);
}


export function getTotalPriceInCart(state) {
  return state.cart
    .reduce((total, itemId) => total + state.items[itemId].price, 0)
    .toFixed(2)
    .toString();
}

export function getFormattedPhoneNumber(state) {
  const phoneNumber = state.phoneNumber;
  if (phoneNumber.length < 4) {
    return phoneNumber;
  }
  const part1 = phoneNumber.slice(0, 3);
  const part2 = phoneNumber.slice(3, 6);
  const part3 = phoneNumber.slice(6, 10);
  return part3.length > 0 ? `(${part1}) ${part2}-${part3}` : `(${part1}) ${part2}`;
}

export function getFormattedCreditCardNumber(state) {
  return state.ccNumber.split('').reduce((formattedNumber, n, index) =>
    index % 4 === 0 && index > 0 ? `${formattedNumber} ${n}` : `${formattedNumber}${n}`
  , '');
}

export function getItems(state) {
  return Object.keys(state.items).map(itemId =>
    Object.assign({}, state.items[itemId], { itemId })
  );
}

export function getNumItemsInCart(state) {
  return state.cart.length;
}

export function getPaymentFormData(state) {
  const {
    name,
    email,
  } = state;
  return {
    name,
    email,
    phoneNumber: getFormattedPhoneNumber(state),
    ccNumber: getFormattedCreditCardNumber(state),
  };
}

export function getItemsInCart(state) {
  return Object.keys(state.items)
    .filter(itemId => state.cart.includes(itemId))
    .map(itemId => ({
      itemId,
      name: state.items[itemId].name,
      price: state.items[itemId].price,
      quantity: getTotalQuantityOfItem(state, itemId),
    }));
}

const isNonEmptyString = value => typeof value === 'string' && value.length > 0;

export function isEmailValid(email) {
  return isNonEmptyString(email) ? /[^\s]+@[^\s]+\.[^\s]+/g.test(email) : true;
}

export function isPhoneNumberValid(phoneNumber) {
  return isNonEmptyString(phoneNumber) ? phoneNumber.length === 10 : true;
}

export function isCreditCardNumberValid(ccNumber) {
  return isNonEmptyString(ccNumber) ? ccNumber.length === 16 : true;
}

export function isBuyNowDisabled(state, validationData) {
  const hasEmptyFields = ['name', 'email', 'phoneNumber', 'ccNumber']
    .some(field => !isNonEmptyString(state[field]));

  if (hasEmptyFields) {
    return true;
  }
  return !Object.keys(validationData).every(key => validationData[key]);
}
