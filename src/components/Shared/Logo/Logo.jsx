import React from 'react';
import './LogoStyle.scss';

function Logo() {
  return (
    <h1 className="logo">
      props.LogoContent
    </h1>
  );
}

export default Logo;
