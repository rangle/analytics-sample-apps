import React from 'react';
import { Button } from './Button';
import './Payment.css';

export function Payment({
  onNameEntered,
  onEmailEntered,
  onPhoneNumberEntered,
  onCCNumberEntered,
  handleBuyNow,
  formData,
}) {
  const {
    name,
    email,
    phoneNumber,
    ccNumber,
  } = formData;

  const handleNameEntered = event => onNameEntered(event.target.value);
  const handleEmailEntered = event => onEmailEntered(event.target.value);
  const handlePhoneNumberEntered = event => onPhoneNumberEntered(event.target.value);
  const handleCCNumberEntered = event => onCCNumberEntered(event.target.value);

  return (
    <div id="Payment">
      <h1>Payment</h1>
      <div className="field">
        <label>Name:</label>
        <input type="text" onInput={handleNameEntered} value={name} />
      </div>
      <div className="field">
        <label>Email:</label>
        <input type="text" onInput={handleEmailEntered} value={email} />
      </div>
      <div className="field">
        <label>Telephone:</label>
        <input type="text" onInput={handlePhoneNumberEntered} value={phoneNumber} />
      </div>
      <div className="field">
        <label>Credit Card:</label>
        <input type="text" onInput={handleCCNumberEntered} value={ccNumber} />
      </div>
      <Button onClick={handleBuyNow}>
        Buy Now
      </Button>
    </div>
  );
}
