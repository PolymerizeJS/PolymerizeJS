import React from 'react';
import PropTypes from 'prop-types';
import './LogoStyle.scss';

function Logo({ logoContent }) {
  return (
    <h1 className="logo">
      {logoContent}
    </h1>
  );
}

Logo.propTypes = {
  logoContent: PropTypes.string.isRequired,
};

export default Logo;
