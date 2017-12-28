import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function MainNav({ children }) {
  const MainNavMap = children.map((el, idx) => {
    return <li key={idx.toString()}><a href={el.route}>{el.routeName}</a></li>;
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
    routeName: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
};

export default MainNav;
