import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Payment } from '../src/components/Payment';

const formData = {
  name: 'John Smith',
  email: 'john.smith@gmail.com',
  phoneNumber: '(123)-456-7890',
  ccNumber: '4400 8800',
};

const validationData = {
  isNameValid: false,
  isEmailValid: false,
  isPhoneNumberValid: false,
  isCCNumberValid: false,
};

storiesOf('Payment', module)
  .add('default', () => (
    <Payment
      onNameEntered={action('name entered')}
      onEmailEntered={action('email entered')}
      onPhoneNumberEntered={action('phone number entered')}
      onCCNumberEntered={action('credit card number entered')}
      handleBuyNow={action('handleBuyNow called')}
      formData={formData}
      isBuyNowDisabled={false}
    />
  ))
  .add('with validation errors', () => (
    <Payment
      onNameEntered={action('name entered')}
      onEmailEntered={action('email entered')}
      onPhoneNumberEntered={action('phone number entered')}
      onCCNumberEntered={action('credit card number entered')}
      handleBuyNow={action('handleBuyNow called')}
      handleBuyNowDisabled={action('handleBuyNowDisabled called')}
      formData={formData}
      validationData={validationData}
      isBuyNowDisabled={true}
    />
  ))
  .add('with buy now disabled', () => (
    <Payment
      onNameEntered={action('name entered')}
      onEmailEntered={action('email entered')}
      onPhoneNumberEntered={action('phone number entered')}
      onCCNumberEntered={action('credit card number entered')}
      handleBuyNow={action('handleBuyNow called')}
      handleBuyNowDisabled={action('handleBuyNowDisabled called')}
      formData={formData}
      isBuyNowDisabled={true}
    />
  ));
