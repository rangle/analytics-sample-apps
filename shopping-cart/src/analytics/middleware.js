import { createMiddleware } from 'redux-beacon';
import { GoogleAnalytics } from 'redux-beacon/targets/google-analytics';
import { logger } from 'redux-beacon/extensions/logger';
import {
  pageview,
  itemAddedToCart,
  nameEntered,
  emailEntered,
  phoneNumberEntered,
  ccNumberEntered,
} from './event-definitions';
import {
  ROUTE_CHANGED,
  ITEM_ADDED_TO_CART,
  NAME_ENTERED,
  EMAIL_ENTERED,
  PHONE_NUMBER_ENTERED,
  CREDIT_CARD_NUMBER_ENTERED,
} from '../action-types';

const eventsMap = {
  [ROUTE_CHANGED]: pageview,
  [ITEM_ADDED_TO_CART]: itemAddedToCart,
  [NAME_ENTERED]: nameEntered,
  [EMAIL_ENTERED]: emailEntered,
  [PHONE_NUMBER_ENTERED]: phoneNumberEntered,
  [CREDIT_CARD_NUMBER_ENTERED]: ccNumberEntered,
};

export const middleware = createMiddleware(eventsMap, GoogleAnalytics, { logger });
