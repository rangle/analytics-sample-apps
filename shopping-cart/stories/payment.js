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
      handleBuyNow={action('buy now button clicked')}
      formData={formData}
    />
  ))
  .add('with validation errors', () => (
    <Payment
      onNameEntered={action('name entered')}
      onEmailEntered={action('email entered')}
      onPhoneNumberEntered={action('phone number entered')}
      onCCNumberEntered={action('credit card number entered')}
      handleBuyNow={action('buy now button clicked')}
      formData={formData}
      validationData={validationData}
    />
  ));
