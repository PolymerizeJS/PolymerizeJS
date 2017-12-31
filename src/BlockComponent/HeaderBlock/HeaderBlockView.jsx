import React from 'react';
import PropTypes from 'prop-types';

import ExtraSmallLink from '../../AtomComponent/ExtraSmallLink';
import ExtraSmallButton from '../../AtomComponent/ExtraSmallButton';
import SmallLink from '../../AtomComponent/SmallLink';
import PrimaryText from '../../AtomComponent/PrimaryText';

import './style.scss';

function HeaderBlockView({ appName, navItem }) {
  const MainNavMap = navItem.map((el, idx) => {
    if (el.link instanceof Object) {
      if (el.link.buttonStyle === true) {
        return (
          <li key={idx.toString()}>
            <ExtraSmallLink to={el.link.to} button={el.link.buttonStyle} router={el.link.router}>
              {el.name}
            </ExtraSmallLink>
          </li>
        );
      }
      return (
        <li key={idx.toString()}>
          <SmallLink to={el.link.to} button={el.link.buttonStyle} router={el.link.router}>
            {el.name}
          </SmallLink>
        </li>
      );
    }
    return (
      <li key={idx.toString()}>
        <ExtraSmallButton onClick={el.button.onClick}>
          {el.name}
        </ExtraSmallButton>
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
  link: false,
  button: false,
  router: false,
};

HeaderBlockView.propTypes = {
  appName: PropTypes.string,
  navItem: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        to: PropTypes.string,
        router: PropTypes.bool,
        buttonStyle: PropTypes.bool,
      }),
    ]),
    button: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        onClick: PropTypes.string,
      }),
    ]),
  })),
};

export default HeaderBlockView;
