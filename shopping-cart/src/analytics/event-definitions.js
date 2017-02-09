export const pageview = {
  eventFields: action => ({
    hitType: 'pageview',
    page: action.payload,
  }),
};

export const itemAddedToCart = {
  eventFields: (action, prevState) => (
    prevState.cart.length > 0 ? {} : { hitType: 'pageview', page: '/item-added-to-cart'}
  ),
  eventSchema: {
    hitType: value => value === 'pageview',
    page: value => value !== undefined,
  }
};
