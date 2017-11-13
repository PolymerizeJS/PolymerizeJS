import React from 'react';
import './SmallButtonStyle.scss';

function SmallButton() {
  return (
    <button className="small-button">
      props.SmallButtonContent
    </button>
  );
}

export default SmallButton;
