import React from 'react';
import PropTypes from 'prop-types';

// style
import './style.scss';

function SmallText({ children, className }) {
  return (
    <p className={`small-text ${className}`}>
      {children}
    </p>
  );
}

SmallText.defaultProps = {
  children: '',
  className: '',
};

SmallText.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default SmallText;
