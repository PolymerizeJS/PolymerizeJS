import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function FullWidthImg({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={`full-width-img ${className}`} />
  );
}

FullWidthImg.defaultProps = {
  src: '',
  alt: '',
  className: '',
};

FullWidthImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default FullWidthImg;
