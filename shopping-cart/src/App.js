import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Store } from './components/Store';
import { Cart } from './components/Cart';
import { Payment } from './components/Payment';
import { OrderComplete } from './components/OrderComplete';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import { reducer } from './reducer';
import {
  getItems,
  getNumItemsInCart,
  getTotalPriceInCart,
  getItemsInCart,
  getPaymentFormData,
} from './selectors';
import {
  itemAddedToCart,
  nameEntered,
  emailEntered,
  phoneNumberEntered,
  creditCardNumberEntered,
} from './action-creators';

import './App.css';

const middlewareRouter = routerMiddleware(browserHistory);
const middlewareLogger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(middlewareRouter, middlewareLogger)
);

const connectedStore = connect(
  state => ({
    items: getItems(state),
    numItemsInCart: getNumItemsInCart(state),
  }),
  dispatch => ({
    handleItemAddedToCart: itemId => dispatch(itemAddedToCart(itemId)),
    handleViewCart: () => dispatch(push('/cart')),
  })
)(Store);

const connectedCart = connect(
  state => ({
    total: getTotalPriceInCart(state),
    itemsInCart: getItemsInCart(state),
  }),
  dispatch => ({
    handleCheckout: () => dispatch(push('/payment')),
  })
)(Cart);

const connectedPayment = connect(
  state => ({
    formData: getPaymentFormData(state),
  }),
  dispatch => ({
    onNameEntered: name => dispatch(nameEntered(name)),
    onEmailEntered: email => dispatch(emailEntered(email)),
    onPhoneNumberEntered: phoneNumber => dispatch(phoneNumberEntered(phoneNumber)),
    onCCNumberEntered: ccNumber => dispatch(creditCardNumberEntered(ccNumber)),
    handleBuyNow: () => dispatch(push('/order-complete'))
  })
)(Payment);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={browserHistory}>
            <Route path="/" component={connectedStore} />
            <Route path="/cart" component={connectedCart} />
            <Route path="/payment" component={connectedPayment} />
            <Route path="/order-complete" component={OrderComplete} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
