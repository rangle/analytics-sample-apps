import {
  ITEM_ADDED_TO_CART,
  NAME_ENTERED,
  EMAIL_ENTERED,
  PHONE_NUMBER_ENTERED,
  CREDIT_CARD_NUMBER_ENTERED,
  ROUTE_CHANGED,
} from './action-types';

const createActionCreator = type => payload => ({ type, payload });

export const itemAddedToCart = createActionCreator(ITEM_ADDED_TO_CART);
export const nameEntered = createActionCreator(NAME_ENTERED);
export const emailEntered = createActionCreator(EMAIL_ENTERED);
export const phoneNumberEntered = createActionCreator(PHONE_NUMBER_ENTERED);
export const creditCardNumberEntered = createActionCreator(CREDIT_CARD_NUMBER_ENTERED);
export const changeRoute = createActionCreator(ROUTE_CHANGED);
