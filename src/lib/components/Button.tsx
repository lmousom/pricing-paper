import React from 'react';
import { ButtonProps } from '../typeDefinition';

const Button = (props: ButtonProps) => {
  return (
    <button
      style={props.buttonStyle}
      onClick={props?.handleClick}
      disabled={props.disabled ? true : false}
    >
      {props.title}
    </button>
  );
};

export default Button;
