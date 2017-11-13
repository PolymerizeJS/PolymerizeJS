import React from 'react';
import './PrimaryTextStyle.scss';

function PrimaryText() {
  return (
    <h2 className="primary-text">
      props.PrimaryTextContent
    </h2>
  );
}

export default PrimaryText;
