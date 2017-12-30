import React from 'react';
import PropTypes from 'prop-types';

import ExtraSmallLink from '../../AtomComponent/ExtraSmallLink';
import SmallLink from '../../AtomComponent/SmallLink';
import PrimaryText from '../../AtomComponent/PrimaryText';

import './style.scss';

function HeaderBlockView({ appName, navItem }) {
  const MainNavMap = navItem.map((el, idx) => {
    if (el.button === true) {
      return (
        <li key={idx.toString()}>
          <ExtraSmallLink to={el.to} button={el.button} router={el.router}>
            {el.name}
          </ExtraSmallLink>
        </li>
      );
    }
    return (
      <li key={idx.toString()}>
        <SmallLink to={el.to} button={el.button} router={el.router}>
          {el.name}
        </SmallLink>
      </li>
    );
  });
  return (
    <header className="header-block">
      <PrimaryText className="logo">
        {appName}
      </PrimaryText>
      <nav className="main-nav">
        <ul>
          {MainNavMap}
        </ul>
      </nav>
    </header>
  );
}

HeaderBlockView.defaultProps = {
  appName: '',
  navItem: '',
  button: false,
  router: false,
};

HeaderBlockView.propTypes = {
  appName: PropTypes.string,
  navItem: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    button: PropTypes.bool,
    router: PropTypes.bool,
  })),
};

export default HeaderBlockView;
