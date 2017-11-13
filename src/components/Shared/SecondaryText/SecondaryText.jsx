import React from 'react';
import './SecondaryTextStyle.scss';

function SecondaryText() {
  return (
    <h3 className="secondary-text">
      props.SecondaryTextContent
    </h3>
  );
}

export default SecondaryText;
