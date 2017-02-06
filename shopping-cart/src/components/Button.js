import React from 'react';
import './Button.css';

export function Button ({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
