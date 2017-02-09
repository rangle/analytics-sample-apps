import { createMiddleware } from 'redux-beacon';
import { GoogleAnalytics } from 'redux-beacon/targets/google-analytics';
import { logger } from 'redux-beacon/extensions/logger';
import {
  pageview,
  itemAddedToCart,
} from './event-definitions';
import {
  ROUTE_CHANGED,
  ITEM_ADDED_TO_CART,
} from '../action-types';

const eventsMap = {
  [ROUTE_CHANGED]: pageview,
  [ITEM_ADDED_TO_CART]: itemAddedToCart,
};

export const middleware = createMiddleware(eventsMap, GoogleAnalytics, { logger });
