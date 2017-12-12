import React from 'react';
import PropTypes from 'prop-types';

function SmallButton({ children, className }) {
  return (
    <button className={`small-button ${className}`}>
      {children}
    </button>
  );
}

SmallButton.defaultProps = {
  children: '',
  className: '',
};

SmallButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SmallButton;
