import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import './style.scss';

function MainNav({ children }) {
  const MainNavMap = children.map((el, idx) => {
    return <li key={idx.toString()}><a href={el.link}>{el.linkName}</a></li>;
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
