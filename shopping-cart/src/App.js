import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import createLogger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

import { Store } from './components/Store';
import { Cart } from './components/Cart';
import { Payment } from './components/Payment';
import { OrderComplete } from './components/OrderComplete';
import { reducer } from './reducer';
import { middleware as analyticsMiddleware } from './analytics/middleware';
import {
  getItems,
  getNumItemsInCart,
  getTotalPriceInCart,
  getItemsInCart,
  getPaymentFormData,
  isEmailValid,
  isPhoneNumberValid,
  isCreditCardNumberValid,
  isBuyNowDisabled,
} from './selectors';
import {
  itemAddedToCart,
  nameEntered,
  emailEntered,
  phoneNumberEntered,
  creditCardNumberEntered,
  changeRoute,
} from './action-creators';

import './App.css';

const store = createStore(
  reducer,
  applyMiddleware(createLogger(), analyticsMiddleware)
);

// Set up router
const history = createHistory();
// for the initial load, update the state to match the requested route
store.dispatch(changeRoute(history.location.pathname));
// if the user updates the route manually, update the route in state
history.listen(location => {
  if (location.pathname !== store.getState().route) {
    store.dispatch(changeRoute(location.pathname));
  }
});
// update the route whenever the route changes in state
store.subscribe(() => {
  const route = store.getState().route;
  if (route !== history.location.pathname) {
    history.push(route);
  }
});

const ConnectedStore = connect(
  state => ({
    items: getItems(state),
    numItemsInCart: getNumItemsInCart(state),
  }),
  dispatch => ({
    handleItemAddedToCart: itemId => dispatch(itemAddedToCart(itemId)),
    handleViewCart: () => dispatch(changeRoute('/cart')),
  })
)(Store);

const ConnectedCart = connect(
  state => ({
    total: getTotalPriceInCart(state),
    itemsInCart: getItemsInCart(state),
  }),
  dispatch => ({
    handleCheckout: () => dispatch(changeRoute('/payment')),
  })
)(Cart);

const ConnectedPayment = connect(
  state => {
    const validationData = {
      isNameValid: true,
      isEmailValid: isEmailValid(state.email),
      isPhoneNumberValid: isPhoneNumberValid(state.phoneNumber),
      isCCNumberValid: isCreditCardNumberValid(state.ccNumber),
    };
    return {
      validationData,
      formData: getPaymentFormData(state),
      isBuyNowDisabled: isBuyNowDisabled(state, validationData),
    };
  },
  dispatch => ({
    onNameEntered: name => dispatch(nameEntered(name)),
    onEmailEntered: email => dispatch(emailEntered(email)),
    onPhoneNumberEntered: phoneNumber => dispatch(phoneNumberEntered(phoneNumber)),
    onCCNumberEntered: ccNumber => dispatch(creditCardNumberEntered(ccNumber)),
    handleBuyNow: () => dispatch(changeRoute('/order-complete')),
    handleBuyNowDisabled: () => dispatch({ type: 'DISABLED_BUY_NOW_CLICKED' }),
  })
)(Payment);

const Routes = connect(
  state => ({ route: state.route })
)(
  function Router ({ route }) {
    switch(route) {
      case '/':
        return <ConnectedStore />;
      case '/cart':
        return <ConnectedCart />;
      case '/payment':
        return <ConnectedPayment />;
      case '/order-complete':
        return <OrderComplete />;
      default:
        return <h1>Page Not Found</h1>;
    }
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
