import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

function ExtraSmallLink({ children, to, button, router, className }) {
  let linkButtonClass = '';
  if (button === true) linkButtonClass = 'extra-small-link-button';
  if (router === true) {
    return (
      <Link href={to} className={`extra-small-link ${className} ${linkButtonClass}`}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} className={`extra-small-link ${className} ${linkButtonClass}`}>
      {children}
    </a>
  );
}

ExtraSmallLink.defaultProps = {
  children: '',
  to: '',
  className: '',
};

ExtraSmallLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  button: PropTypes.bool.isRequired,
  router: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default ExtraSmallLink;
