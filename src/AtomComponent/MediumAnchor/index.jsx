import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MediumAnchor({ children, href, className }) {
  return (
    <a href={href} className={`medium-anchor ${className}`}>
      {children}
    </a>
  );
}

MediumAnchor.defaultProps = {
  children: '',
  href: '',
  className: '',
};

MediumAnchor.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default MediumAnchor;
