import React from 'react';
import PropTypes from 'prop-types';

import MediumLink from '../../AtomComponent/MediumLink';

import './style.scss';

function MainNav({ children }) {
  const MainNavMap = children.map((el, idx) => {
    return (
      <li key={idx.toString()}>
        <MediumLink to={el.link} button={el.button} router={el.router}>
          {el.linkName}
        </MediumLink>
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
    link: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired,
    router: PropTypes.bool.isRequired,
  })).isRequired,
};

export default MainNav;
