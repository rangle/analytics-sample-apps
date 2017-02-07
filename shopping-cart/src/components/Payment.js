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
        <input
          type="text"
          onChange={handleNameEntered}
          value={name}
          placeholder="John Smith"
        />
      </div>
      <div className="field">
        <label>Email:</label>
        <input
          type="email"
          onChange={handleEmailEntered}
          value={email}
          placeholder="john.smith@gmail.com"
        />
      </div>
      <div className="field">
        <label>Telephone:</label>
        <input
          type="text"
          onChange={handlePhoneNumberEntered}
          value={phoneNumber}
          placeholder="(123)-456-7890"
        />
      </div>
      <div className="field">
        <label>Credit Card:</label>
        <input
          type="text"
          onChange={handleCCNumberEntered}
          value={ccNumber}
          placeholder="4012 8888 8888 1881"
        />
      </div>
      <Button onClick={handleBuyNow}>
        Buy Now
      </Button>
    </div>
  );
}
