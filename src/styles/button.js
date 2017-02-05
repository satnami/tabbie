import {
  red,
  blue,
  white,
} from './colors';

export const buttonStyle = {
  background: white,
  borderRadius: '3px',
  border: 'none',
  color: blue,
  padding: '0.5em',
};

export const warningButtonStyle = {
  ...buttonStyle,
  color: red,
};

export const primaryButtonStyle = {
  ...buttonStyle,
  background: blue,
  color: white,
};