import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Payment } from '../src/components/Payment';

const formData = {
  name: 'John Smith',
  email: 'john.smith@gmail.com',
  phoneNumber: '(123)-456-7890',
  ccNumber: '4400 8800',
};

storiesOf('Payment', module)
  .add('...', () => (
    <Payment
      onNameEntered={action('name entered')}
      onEmailEntered={action('email entered')}
      onPhoneNumberEntered={action('phone number entered')}
      onCCNumberEntered={action('credit card number entered')}
      handleBuyNow={action('buy now button clicked')}
      formData={formData}
    />
  ));
