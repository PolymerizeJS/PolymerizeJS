import React from 'react';
import PropTypes from 'prop-types';

function SecondaryText({ children, className }) {
  return (
    <h2 className={`secondary-text ${className}`}>
      {children}
    </h2>
  );
}

SecondaryText.defaultProps = {
  children: '',
  className: '',
};

SecondaryText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SecondaryText;
