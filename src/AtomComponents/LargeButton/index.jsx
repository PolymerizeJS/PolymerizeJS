import React from 'react';
import PropTypes from 'prop-types';

function LargeButton({ children, className }) {
  return (
    <button className={`large-button ${className}`}>
      {children}
    </button>
  );
}

LargeButton.defaultProps = {
  children: '',
  className: '',
};

LargeButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default LargeButton;
