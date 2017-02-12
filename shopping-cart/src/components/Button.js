import React from 'react';
import './Button.css';

export function Button ({ onClick, onDisabledClick, disabled, children }) {
  const classes = disabled ? 'button disabled' : 'button';
  return (
    <button
      className={classes}
      onClick={disabled ? onDisabledClick : onClick}
    >
      {children}
    </button>
  );
}
