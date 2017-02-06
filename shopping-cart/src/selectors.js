export function getTotalPricePerItem(state, item) {
  return state.cart.reduce((total, itemId) =>
    itemId === item ? total + state.items[itemId].price : total, 0);
}

export function getTotalQuantityOfItem(state, item) {
  return state.cart.reduce((total, itemId) =>
    itemId === item ? total + 1 : total, 0);
}

export function getTotalPriceInCart(state) {
  return state.cart.reduce((total, itemId) => total + state.items[itemId].price, 0);
}

export function getFormattedPhoneNumber(state) {
  const phoneNumber = state.phoneNumber.toString();
  if (phoneNumber.length < 3) {
    return phoneNumber;
  }
  const areaCode = phoneNumber.slice(0, 3);
  const secondPart = phoneNumber.slice(3, 6);
  const thirdPart = phoneNumber.slice(6, 10);
  return [`(${areaCode})`, secondPart, thirdPart].filter(part => part.length > 0).join('-');
}

export function getFormattedCreditCardNumber(state) {
  const ccNumber = state.ccNumber.toString();
  return ccNumber.split('').reduce((formattedNumber, n, index) =>
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
    phoneNumber,
    ccNumber,
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
