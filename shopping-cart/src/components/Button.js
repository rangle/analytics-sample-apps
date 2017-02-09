import React from 'react';
import './Button.css';

export function Button ({ onClick, disabled, children }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
