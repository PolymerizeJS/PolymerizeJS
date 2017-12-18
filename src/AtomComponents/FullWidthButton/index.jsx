import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function FullWidthButton({ children, className }) {
  return (
    <button className={`full-width-button ${className}`}>
      {children}
    </button>
  );
}

FullWidthButton.defaultProps = {
  children: '',
  className: '',
};

FullWidthButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default FullWidthButton;
