export const pageview = {
  eventFields: action => ({
    hitType: 'pageview',
    page: action.payload,
  }),
};

export function createVirtualPageView(fieldName, page) {
  return {
    eventFields: (_, prevState) => ({
      hitType: 'pageview',
      page: prevState[fieldName].length === 0 ? page : '',
    }),
    eventSchema: {
      page: value => value === page,
    },
  };
}

export const itemAddedToCart = createVirtualPageView('cart', '/item-added-to-cart');

// Payment Form
export const nameEntered = createVirtualPageView('name', '/name-entered');
export const emailEntered = createVirtualPageView('email', '/email-entered');
export const phoneNumberEntered = createVirtualPageView('phoneNumber', '/phone-number-entered');
export const ccNumberEntered = createVirtualPageView('ccNumber', '/cc-number-entered');
export const buyNowAttempted = {
  eventFields: () => ({ hitType: 'pageview', page: '/buy-now-attempt' })
};
