import React from 'react';
import PropTypes from 'prop-types';

import ExtraSmallLink from '../../AtomComponent/ExtraSmallLink';
import SmallLink from '../../AtomComponent/SmallLink';

import './style.scss';

function MainNav({ children }) {
  const MainNavMap = children.map((el, idx) => {
    if (el.button === true) {
      return (
        <li key={idx.toString()}>
          <ExtraSmallLink to={el.to} button={el.button} router={el.router}>
            {el.linkName}
          </ExtraSmallLink>
        </li>
      );
    }
    return (
      <li key={idx.toString()}>
        <SmallLink to={el.to} button={el.button} router={el.router}>
          {el.linkName}
        </SmallLink>
      </li>
    );
  });
  return (
    <nav className="main-nav">
      <ul>
        {MainNavMap}
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    linkName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired,
    router: PropTypes.bool.isRequired,
  })).isRequired,
};

export default MainNav;
