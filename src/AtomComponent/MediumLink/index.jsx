import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MediumLink({ children, href, className }) {
  return (
    <a href={href} className={`medium-link ${className}`}>
      {children}
    </a>
  );
}

MediumLink.defaultProps = {
  children: '',
  href: '',
  className: '',
};

MediumLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default MediumLink;
