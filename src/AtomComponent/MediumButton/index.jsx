import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MediumButton({ children, className }) {
  return (
    <button className={`medium-button ${className}`}>
      {children}
    </button>
  );
}

MediumButton.defaultProps = {
  children: '',
  className: '',
};

MediumButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default MediumButton;
